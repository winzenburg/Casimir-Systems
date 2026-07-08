"""
SBIR.gov solicitations: documented JSON API, with an HTML fallback.
https://www.sbir.gov/api

STATUS (confirmed July 8, 2026): the JSON API is DOWN, and has been for
weeks, not intermittently throttled. Every request to api.www.sbir.gov
returns HTTP 429 {"Code":"TooManyRequestsError","Message":"The SBIR Public
API is not available at this time."} regardless of source IP (verified from
three independent networks) or request headers, and SBIR.gov's own /api
documentation page has said "APIs are undergoing maintenance" since at
least June 18, 2026 (independently corroborated by third-party sources
checking the same page). This reads as the API Gateway usage plan being
throttled to zero while the backend is offline for an extended maintenance
window, not per-client rate limiting.

FALLBACK (added July 8, 2026): https://www.sbir.gov/topics is a separate
Drupal-served, server-side-rendered search page on a different backend
(www.sbir.gov, not api.www.sbir.gov), unaffected by the JSON API outage.
Its exposed search form works via GET query params even though the HTML
form itself is method="post": `status=Open`, `agency[DOD]=DOD`, and
`page=N` (0-indexed, 10 results/page) return real, current open DoD
solicitations with title, dates, agency, description, and program tags,
scraped with BeautifulSoup like the other HTML-based sources in this repo.
Verified: `agency[DOD]=DOD` alone already returns the full DoD-wide open-topic
set (36 results when checked); adding every individual military-branch
checkbox (ARMY, NAVY, USAF, DARPA, SOCOM, MDA, SDA, ...) returned the exact
same total, meaning branch-specific topics are already tagged under the
shared DOD umbrella here. No need to enumerate every branch separately.

fetch() tries the JSON API first (cheap single request; the moment SBIR.gov
fixes the outage this resumes working with no code change) and falls back
to the topics-page scrape automatically on failure, making the fallback
transparent to scan_opportunities.py and to annotate_source_health()'s
outage tracking.
"""
from __future__ import annotations
import re
import time
from typing import Any

import requests
from bs4 import BeautifulSoup

API_URL = "https://api.www.sbir.gov/public/api/solicitations"
TOPICS_URL = "https://www.sbir.gov/topics"
SOURCE_ID = "sbir_gov_dod"
SOURCE_NAME = "SBIR.gov (DoD-wide)"

HEADERS = {"User-Agent": "Mozilla/5.0"}
MAX_TOPICS_PAGES = 10  # safety cap: 10 pages x 10/page = 100 topics max per run


def _fetch_api(keywords: list[str] | None, timeout: int) -> tuple[list[dict[str, Any]], list[str]]:
    """Original documented JSON API path. Returns (results, errors)."""
    params_base = {"agency": "DOD", "open": 1, "rows": 50}
    seen: dict[str, dict] = {}
    errors: list[str] = []

    queries = keywords if keywords else [None]
    for kw in queries:
        params = dict(params_base)
        if kw:
            params["keyword"] = kw
        try:
            resp = requests.get(API_URL, params=params, timeout=timeout)
            resp.raise_for_status()
            data = resp.json()
        except requests.RequestException:
            # one retry after a backoff, in case it's a transient blip
            time.sleep(5)
            try:
                resp = requests.get(API_URL, params=params, timeout=timeout)
                resp.raise_for_status()
                data = resp.json()
            except requests.RequestException as e2:
                status_code = getattr(getattr(e2, "response", None), "status_code", None)
                if status_code == 429:
                    errors.append(
                        f"{kw or 'ALL'}: SBIR.gov JSON API unavailable (HTTP 429, \"not available at this time\"), a known extended outage per sbir.gov/api, not a transient blip"
                    )
                else:
                    errors.append(f"{kw or 'ALL'}: {e2}")
                continue

        for sol in data if isinstance(data, list) else data.get("results", []):
            sol_num = sol.get("solicitation_number") or sol.get("sbir_solicitation_link")
            if not sol_num or sol_num in seen:
                continue
            for topic in sol.get("solicitation_topics", []) or [{}]:
                key = f"{sol_num}:{topic.get('topic_number', '')}"
                if key in seen:
                    continue
                seen[key] = {
                    "title": topic.get("topic_title") or sol.get("solicitation_title", "Untitled"),
                    "description": topic.get("topic_description", ""),
                    "agency": f"DoD / {topic.get('branch') or sol.get('branch', 'unspecified branch')}",
                    "close_date": sol.get("close_date"),
                    "url": topic.get("sbir_topic_link") or sol.get("sbir_solicitation_link"),
                    "source_id": SOURCE_ID,
                    "source_name": SOURCE_NAME,
                }

    return list(seen.values()), errors


# One topic card is a flat run of three siblings inside #search-results-hits:
# <h3><a href="/topics/{id}">{title}</a></h3>, <p class="margin-bottom-205"> with
# the status badge + Release/Open/Close dates, and a <div class="grid-row..."> with
# the agency seal image, description, and program tags.
_DATE_LABEL_RE = re.compile(r"(Release|Open|Close) Date:\s*([A-Za-z]+ \d{1,2}, \d{4})")
_AGENCY_ALT_RE = re.compile(r"Seal of the Agency:\s*(.+)", re.IGNORECASE)


def _parse_topics_page(html: str) -> list[dict[str, Any]]:
    soup = BeautifulSoup(html, "html.parser")
    container = soup.find(id="search-results-hits")
    if not container:
        return []

    results: list[dict[str, Any]] = []
    current_title: str | None = None
    current_url: str | None = None
    current_status: str | None = None
    current_close_date: str | None = None

    def reset_current() -> None:
        nonlocal current_title, current_url, current_status, current_close_date
        current_title = current_url = current_status = current_close_date = None

    for el in container.find_all(["h3", "p", "div"], recursive=False):
        if el.name == "h3":
            link = el.find("a", href=re.compile(r"^/topics/\d+"))
            reset_current()
            if link:
                current_title = link.get_text(strip=True)
                current_url = f"https://www.sbir.gov{link['href']}"
            continue

        if el.name == "p" and "margin-bottom-205" in (el.get("class") or []):
            if not current_title:
                continue
            text = el.get_text(" ", strip=True)
            status_span = el.find("span")
            current_status = status_span.get_text(strip=True) if status_span else None
            dates = dict(_DATE_LABEL_RE.findall(text))
            current_close_date = dates.get("Close")
            continue

        if el.name == "div" and current_title and "grid-row" in (el.get("class") or []):
            # Query already filters status=Open server-side; skip defensively
            # in case a non-Open card slips through (e.g. selector drift).
            if current_status and current_status.lower() != "open":
                reset_current()
                continue

            img = el.find("img", alt=_AGENCY_ALT_RE)
            agency_match = _AGENCY_ALT_RE.search(img["alt"]) if img and img.get("alt") else None
            agency = f"DoD / {agency_match.group(1).strip()}" if agency_match else "DoD (unspecified branch)"

            desc_el = el.find("p", class_="measure-6")
            description = desc_el.get_text(" ", strip=True) if desc_el else ""

            tags = [t.get_text(strip=True) for t in el.find_all("p", class_=re.compile("bg-base-dark"))]
            if tags:
                description = f"{description} Tags: {', '.join(tags)}." if description else f"Tags: {', '.join(tags)}."

            results.append(
                {
                    "title": current_title,
                    "description": description,
                    "agency": agency,
                    "close_date": current_close_date,
                    "url": current_url,
                    "source_id": SOURCE_ID,
                    "source_name": SOURCE_NAME,
                }
            )
            reset_current()
            continue

    return results


def _fetch_topics_scrape(timeout: int) -> tuple[list[dict[str, Any]], str]:
    """
    Fallback path: scrapes https://www.sbir.gov/topics (server-rendered Drupal
    page, separate backend from the broken JSON API). See module docstring.
    """
    seen: dict[str, dict] = {}
    for page in range(MAX_TOPICS_PAGES):
        try:
            resp = requests.get(
                TOPICS_URL,
                params={"status": "Open", "agency[DOD]": "DOD", "page": page},
                headers=HEADERS,
                timeout=timeout,
            )
            resp.raise_for_status()
        except requests.RequestException as e:
            if page == 0:
                return [], f"FAILED: topics-page fallback also unreachable: {e}"
            break  # got some pages already; stop paginating on error rather than losing results

        page_results = _parse_topics_page(resp.text)
        if not page_results:
            break
        for r in page_results:
            key = r["url"] or r["title"]
            seen[key] = r

    if not seen:
        return [], "FAILED: topics-page fallback returned 0 results, selectors may have drifted"
    return list(seen.values()), f"ok (via topics-page fallback, JSON API down): {len(seen)} results"


def fetch(keywords: list[str] | None = None, timeout: int = 20) -> tuple[list[dict[str, Any]], str]:
    """
    Returns (opportunities, status_message). Tries the documented JSON API
    first; if it fails (e.g. the ongoing 429 outage), automatically falls
    back to scraping https://www.sbir.gov/topics, a separate backend
    unaffected by the API outage. See module docstring for both paths.
    """
    api_results, api_errors = _fetch_api(keywords, timeout)
    if api_results:
        status = f"ok: {len(api_results)} results"
        if api_errors:
            status = f"partial: {len(api_results)} results, some queries failed: {'; '.join(api_errors)}"
        return api_results, status

    # JSON API returned nothing; fall back to the topics-page scrape.
    fallback_results, fallback_status = _fetch_topics_scrape(timeout)
    if fallback_results:
        return fallback_results, fallback_status
    # both paths failed; report the original API error since it's more specific
    api_error_text = "; ".join(api_errors) if api_errors else "no results, no error detail"
    return [], f"FAILED: JSON API ({api_error_text}); fallback also failed ({fallback_status})"
