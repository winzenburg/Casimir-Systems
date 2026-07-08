"""
SOFWERX (events.sofwerx.org) — SOCOM's SBIR/STTR partnership intermediary.

STATUS: verified against the live site (July 2026).

Two pages are scraped:

1. Current events (homepage) — rendered as `a.link` cards. Most current
   SOFWERX opportunities are NOT labeled "SBIR"/"STTR"; they're Assessment
   Events / Collaboration Events run under Other Transaction authority
   (10 U.S.C. 4021/4022) via the Partnership Intermediary Agreement, so we
   collect every current event and let the capability scorer decide
   relevance. Each card's text is "{Title} {date}" — the trailing date is
   parsed into close_date. We also fetch each event page's meta description
   so the scorer has real text to work with instead of just a title.

2. /ussocom-sponsored-events-exercises ("external events") — RFIs and
   Technical Experimentation notices that link directly to their SAM.gov
   posting. Higher signal, fewer false positives.
"""
from __future__ import annotations
import re
from typing import Any
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

LISTING_URL = "https://events.sofwerx.org"
EXTERNAL_EVENTS_URL = "https://events.sofwerx.org/ussocom-sponsored-events-exercises"
SOURCE_ID = "sofwerx"
SOURCE_NAME = "SOFWERX (events.sofwerx.org)"
MAX_DETAIL_FETCHES = 12  # keep the scan fast; listing rarely exceeds this

HEADERS = {"User-Agent": "Mozilla/5.0"}

# Card text ends in a date/window like "15 July 2026", "21-23 July 2026", or
# "Submissions Open 22 July 2026" — isolate it so title and date separate.
_DATE_SUFFIX_RE = re.compile(
    r"((?:Submissions Open\s+)?\d{1,2}(?:-\d{1,2})?\s+[A-Za-z]+\s+\d{4})\s*$"
)


def _event_description(url: str, timeout: int) -> str:
    try:
        resp = requests.get(url, timeout=timeout, headers=HEADERS)
        resp.raise_for_status()
    except requests.RequestException:
        return ""
    soup = BeautifulSoup(resp.text, "html.parser")
    meta = soup.find("meta", attrs={"name": "description"}) or soup.find(
        "meta", attrs={"property": "og:description"}
    )
    return (meta.get("content") or "").strip() if meta else ""


def _fetch_current_events(timeout: int) -> tuple[list[dict[str, Any]], str | None]:
    try:
        resp = requests.get(LISTING_URL, timeout=timeout, headers=HEADERS)
        resp.raise_for_status()
    except requests.RequestException as e:
        return [], f"current-events FAILED: {e}"

    soup = BeautifulSoup(resp.text, "html.parser")
    results: list[dict[str, Any]] = []
    seen_urls: set[str] = set()

    # Current-event cards are anchors with class "link" pointing at event slugs.
    for card in soup.select("a.link"):
        text = (card.get_text(" ", strip=True) or "").strip()
        href = card.get("href") or ""
        if not text or not href:
            continue
        url = urljoin(LISTING_URL + "/", href)
        # only event pages on this host; skip nav links out to sofwerx.org
        if "events.sofwerx.org" not in url or url.rstrip("/") == LISTING_URL:
            continue
        if url in seen_urls:
            continue
        seen_urls.add(url)

        # split "{Title} {date}" card text into title + close date
        title, close_date = text, None
        m = _DATE_SUFFIX_RE.search(text)
        if m:
            close_date = m.group(1).strip()
            title = text[: m.start()].strip() or text

        description = ""
        if len(seen_urls) <= MAX_DETAIL_FETCHES:
            description = _event_description(url, timeout)
        if not description:
            description = f"SOFWERX current event: verify details at the link. Card text: '{text}'"

        results.append(
            {
                "title": title,
                "description": description,
                "agency": "SOCOM (via SOFWERX)",
                "close_date": close_date,
                "url": url,
                "source_id": SOURCE_ID,
                "source_name": SOURCE_NAME,
            }
        )

    return results, None


def _fetch_external_events(timeout: int) -> tuple[list[dict[str, Any]], str | None]:
    """RFI / Technical Experimentation notices that link straight to SAM.gov."""
    try:
        resp = requests.get(EXTERNAL_EVENTS_URL, timeout=timeout, headers=HEADERS)
        resp.raise_for_status()
    except requests.RequestException as e:
        return [], f"external-events FAILED: {e}"

    soup = BeautifulSoup(resp.text, "html.parser")
    results: list[dict[str, Any]] = []
    seen_urls: set[str] = set()

    for a in soup.select("a[href]"):
        href = a.get("href") or ""
        if "sam.gov" not in href:
            continue
        text = (a.get_text(" ", strip=True) or "").strip()
        if not text or len(text) < 10 or href in seen_urls:
            continue
        seen_urls.add(href)

        # text is typically "{Title}Focus: {theme}. Closing date: ... {date}"
        title = re.split(r"Focus:", text)[0].strip()
        results.append(
            {
                "title": title or text[:120],
                "description": text,
                "agency": "SOCOM (via SOFWERX: external/RFI, direct SAM.gov posting)",
                "close_date": None,  # embedded in description; SAM.gov link has authoritative date
                "url": href,
                "source_id": SOURCE_ID,
                "source_name": SOURCE_NAME,
            }
        )

    return results, None


def fetch(timeout: int = 20) -> tuple[list[dict[str, Any]], str]:
    current, err1 = _fetch_current_events(timeout)
    external, err2 = _fetch_external_events(timeout)

    all_results = current + external
    errors = [e for e in (err1, err2) if e]

    if errors and not all_results:
        return [], f"FAILED: {'; '.join(errors)}"
    if not all_results:
        return [], "ok but 0 events found: site structure may have changed, verify a.link selector"
    status = f"ok: {len(current)} current events, {len(external)} external/RFI items"
    if errors:
        status += f" (partial failure: {'; '.join(errors)})"
    return all_results, status
