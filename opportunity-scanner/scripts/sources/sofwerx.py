"""
SOFWERX (events.sofwerx.org) — SOCOM's SBIR/STTR partnership intermediary.

STATUS: verified against the live site (July 2026).

The events.sofwerx.org homepage lists current events as `a.link` cards inside
the "Current Events" section. Each card's text is the event title plus its
date (e.g. "SBIR 26.BZ Release 4 Submissions Open 22 July 2026"). We collect
every current event — not just those with SBIR in the title — because SOFWERX
assessment events and industry days (e.g. autonomous-systems proving grounds)
are exactly the early-warning SOCOM signals this scanner exists to catch, and
the capability scorer downstream decides relevance.

For each event we also fetch the event page's meta description so the scorer
has real text to work with instead of just a title.
"""
from __future__ import annotations
from typing import Any
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

LISTING_URL = "https://events.sofwerx.org"
SOURCE_ID = "sofwerx"
SOURCE_NAME = "SOFWERX (events.sofwerx.org)"
MAX_DETAIL_FETCHES = 12  # keep the scan fast; listing rarely exceeds this

HEADERS = {"User-Agent": "Mozilla/5.0"}


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


def fetch(timeout: int = 20) -> tuple[list[dict[str, Any]], str]:
    try:
        resp = requests.get(LISTING_URL, timeout=timeout, headers=HEADERS)
        resp.raise_for_status()
    except requests.RequestException as e:
        return [], f"FAILED — {e}"

    soup = BeautifulSoup(resp.text, "html.parser")
    results: list[dict[str, Any]] = []
    seen_urls: set[str] = set()

    # Current-event cards are anchors with class "link" pointing at event slugs.
    for card in soup.select("a.link"):
        title = (card.get_text(" ", strip=True) or "").strip()
        href = card.get("href") or ""
        if not title or not href:
            continue
        url = urljoin(LISTING_URL + "/", href)
        # only event pages on this host; skip nav links out to sofwerx.org
        if "events.sofwerx.org" not in url or url.rstrip("/") == LISTING_URL:
            continue
        if url in seen_urls:
            continue
        seen_urls.add(url)

        description = ""
        if len(seen_urls) <= MAX_DETAIL_FETCHES:
            description = _event_description(url, timeout)
        if not description:
            description = f"SOFWERX current event — verify details at the link. Card text: '{title}'"

        results.append(
            {
                "title": title,
                "description": description,
                "agency": "SOCOM (via SOFWERX)",
                "close_date": None,  # dates are embedded in the title text
                "url": url,
                "source_id": SOURCE_ID,
                "source_name": SOURCE_NAME,
            }
        )

    if not results:
        return [], "ok but 0 events found — site structure may have changed, verify a.link selector"
    return results, f"ok — {len(results)} current events"
