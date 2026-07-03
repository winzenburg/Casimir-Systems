"""
Army xTech prize competitions (xtech.army.mil).

STATUS: verified against the live site (July 2026).

NOTE: the program moved from xtechsearch.army.mil to xtech.army.mil (the old
domain no longer resolves reliably). The /competitions/ page groups
competition cards under "OPEN COMPETITIONS" / "ACTIVE COMPETITIONS" /
"CLOSED COMPETITIONS" h1 headings, so we walk the document in order and keep
only cards that appear before the CLOSED heading. Each competition's detail
page provides a meta description for the scorer.

xTech is a prize-competition model (cash prizes for early rounds,
SBIR-eligible follow-on for finalists) — a legitimate small-business entry
point distinct from standard Army SBIR/STTR topics, which are already covered
by scripts/sources/sbir_gov.py.
"""
from __future__ import annotations
from typing import Any

import requests
from bs4 import BeautifulSoup

LISTING_URL = "https://xtech.army.mil/competitions/"
SOURCE_ID = "army_futures_xtech"
SOURCE_NAME = "Army xTech (xtech.army.mil)"
MAX_DETAIL_FETCHES = 10

HEADERS = {"User-Agent": "Mozilla/5.0"}


def _competition_description(url: str, timeout: int) -> str:
    try:
        resp = requests.get(url, timeout=timeout, headers=HEADERS)
        resp.raise_for_status()
    except requests.RequestException:
        return ""
    soup = BeautifulSoup(resp.text, "html.parser")
    meta = soup.find("meta", attrs={"name": "description"}) or soup.find(
        "meta", attrs={"property": "og:description"}
    )
    if meta and (meta.get("content") or "").strip():
        return meta["content"].strip()
    # xTech pages carry no meta description; use the first substantial paragraph
    for p in soup.find_all("p"):
        text = p.get_text(" ", strip=True).replace("\u200b", "").strip()
        if len(text) > 80:
            return text[:800]
    return ""


def fetch(timeout: int = 20) -> tuple[list[dict[str, Any]], str]:
    try:
        resp = requests.get(LISTING_URL, timeout=timeout, headers=HEADERS)
        resp.raise_for_status()
    except requests.RequestException as e:
        return [], f"FAILED — {e}"

    soup = BeautifulSoup(resp.text, "html.parser")

    # Walk headings and competition links in document order; stop collecting
    # once we pass the CLOSED COMPETITIONS heading.
    open_or_active: dict[str, str] = {}  # url -> title
    in_closed = False
    for el in soup.find_all(["h1", "h2", "a"]):
        if el.name in ("h1", "h2"):
            heading = el.get_text(" ", strip=True).upper()
            if "CLOSED" in heading and "COMPETITION" in heading:
                in_closed = True
            elif "COMPETITION" in heading and ("OPEN" in heading or "ACTIVE" in heading):
                in_closed = False
            continue
        if in_closed:
            continue
        href = el.get("href") or ""
        if "/competition/" not in href:
            continue
        title = el.get_text(" ", strip=True).replace("\u200b", "").replace("\xa0", " ").strip()
        if not title or title.upper() in ("LEARN MORE", "READ MORE"):
            continue
        open_or_active.setdefault(href, title)

    results: list[dict[str, Any]] = []
    for i, (url, title) in enumerate(open_or_active.items()):
        description = _competition_description(url, timeout) if i < MAX_DETAIL_FETCHES else ""
        if not description:
            description = "Army xTech open/active prize competition — verify details at the link."
        results.append(
            {
                "title": title,
                "description": description,
                "agency": "Army (xTech prize competitions)",
                "close_date": None,
                "url": url,
                "source_id": SOURCE_ID,
                "source_name": SOURCE_NAME,
            }
        )

    if not results:
        return [], "ok but 0 open/active competitions found — heading-walk selectors may have drifted"
    return results, f"ok — {len(results)} open/active competitions"
