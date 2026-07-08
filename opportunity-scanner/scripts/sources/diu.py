"""
Defense Innovation Unit (diu.mil) — Commercial Solutions Openings (CSOs).

STATUS: verified against the live site (July 2026).

Open solicitations live at /work-with-us/open-solicitations. Each open CSO
"area of interest" renders as `div.aoi` containing a `div.title` (h4 title
plus a "Responses Due By <timestamp>" line), the problem-statement body text,
and a submit link like /work-with-us/submit-solution/PROJ00665.

DIU runs CSOs under Other Transaction authority, not SBIR/STTR — faster
timeline, no set-aside advantage. SAM.gov (scripts/sources/sam_gov.py) still
acts as a cross-check for DIU-related notices.
"""
from __future__ import annotations
import re
from typing import Any
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

LISTING_URL = "https://www.diu.mil/work-with-us/open-solicitations"
SOURCE_ID = "diu"
SOURCE_NAME = "Defense Innovation Unit (diu.mil)"

DUE_RE = re.compile(r"Responses?\s+Due\s+By\s+(.+?)(?:\s*$)", re.IGNORECASE)


def fetch(timeout: int = 30) -> tuple[list[dict[str, Any]], str]:
    try:
        resp = requests.get(LISTING_URL, timeout=timeout, headers={"User-Agent": "Mozilla/5.0"})
        resp.raise_for_status()
    except requests.RequestException as e:
        return [], f"FAILED — {e}"

    soup = BeautifulSoup(resp.text, "html.parser")
    results: list[dict[str, Any]] = []

    for card in soup.select("div.aoi"):
        title_el = card.select_one("div.title h4") or card.find("h4")
        if not title_el:
            continue
        title = title_el.get_text(" ", strip=True)
        if not title:
            continue

        close_date = None
        title_block = card.select_one("div.title")
        if title_block:
            m = DUE_RE.search(title_block.get_text(" ", strip=True))
            if m:
                close_date = m.group(1).strip()

        link = card.find("a", href=re.compile(r"/submit-solution/", re.IGNORECASE))
        url = urljoin("https://www.diu.mil/", link.get("href")) if link else LISTING_URL

        # body text: everything after the title/due-date header block
        body = card.get_text(" ", strip=True)
        if title_block:
            header_text = title_block.get_text(" ", strip=True)
            if header_text and header_text in body:
                body = body.split(header_text, 1)[-1]
        body = body.strip()
        if len(body) > 1200:
            body = body[:1200].rsplit(" ", 1)[0] + "…"

        results.append(
            {
                "title": title,
                "description": body or "DIU CSO area of interest — verify details at the link.",
                "agency": "DIU",
                "close_date": close_date,
                "url": url,
                "source_id": SOURCE_ID,
                "source_name": SOURCE_NAME,
            }
        )

    if not results:
        return [], "ok but 0 open CSOs found — either none are open right now or div.aoi selector drifted"
    return results, f"ok — {len(results)} open CSO areas of interest"
