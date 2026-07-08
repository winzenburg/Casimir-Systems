"""
SAM.gov Contract Opportunities API (official, documented, requires a free
api_key from https://sam.gov/data-services).
https://open.gsa.gov/api/get-opportunities-public-api/

Used three ways by this scanner:
  1. Broad sweep — keyword search across all agencies (catches DIU, Army
     Futures Command, DARPA BAAs, and anything else that doesn't run through
     a dedicated SBIR portal).
  2. NRO filter — same endpoint, filtered to
     department = "NATIONAL RECONNAISSANCE OFFICE", since NRO is not one of
     the 11 SBIR/STTR participating agencies and posts solicitations here
     instead.
  3. HUBZone filter — same endpoint, filtered to typeOfSetAside=HZC/HZS
     (structural SAM.gov fields, not keyword matching) plus Casimir-relevant
     NAICS codes. Casimir's principal office sits in a HUBZone-designated
     area, so these are opportunities where the field of competitors is
     legally restricted to HUBZone-eligible small businesses — a real
     structural advantage, independent of any capability-keyword match.

STATUS: stable, but requires SAM_GOV_API_KEY in your .env file.
"""
from __future__ import annotations
import os
import re
from datetime import datetime, timedelta
from typing import Any

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://api.sam.gov/opportunities/v2/search"
NOTICE_DESC_URL = "https://api.sam.gov/prod/opportunities/v1/noticedesc"
SOURCE_ID = "sam_gov"
SOURCE_NAME = "SAM.gov Contract Opportunities"
HUBZONE_SOURCE_ID = "sam_gov_hubzone"
HUBZONE_SOURCE_NAME = "SAM.gov — HUBZone Set-Asides"

# FAR 19.13 set-aside codes: HZC = HUBZone set-aside competition,
# HZS = HUBZone sole-source award (agency picked a HUBZone firm directly —
# still worth seeing who's winning these and under what NAICS).
HUBZONE_SET_ASIDE_CODES = ("HZC", "HZS")

# For longer notices, the v2 search API returns "description" as a link to a
# separate v1 endpoint rather than inline text — resolve it so the capability
# scorer (and the report) sees real content instead of a bare URL. Capped
# per-search to keep scan time reasonable on large result sets.
MAX_DESCRIPTION_FETCHES = 20


def _resolve_description(raw: str, api_key: str, timeout: int) -> str:
    if not raw.startswith("https://api.sam.gov"):
        return raw
    try:
        resp = requests.get(raw, params={"api_key": api_key}, timeout=timeout)
        resp.raise_for_status()
        html = resp.json().get("description", "") or ""
    except (requests.RequestException, ValueError):
        return raw
    text = BeautifulSoup(html, "html.parser").get_text(" ", strip=True)
    text = re.sub(r"\s+", " ", text).strip()
    return text or raw


def _date_range(days_back: int = 30) -> tuple[str, str]:
    today = datetime.now()
    start = today - timedelta(days=days_back)
    # SAM.gov expects MM/dd/yyyy
    return start.strftime("%m/%d/%Y"), today.strftime("%m/%d/%Y")


def _search(
    params_list: list[dict[str, Any]],
    api_key: str,
    timeout: int,
    item_overrides: dict[str, Any],
) -> tuple[dict[str, dict], list[str]]:
    """Runs one GET per params dict in params_list, merges + dedupes by
    noticeId, and stamps each result with item_overrides (source_id, etc.)."""
    seen: dict[str, dict] = {}
    errors: list[str] = []
    resolved_count = 0

    for params in params_list:
        full_params = {"api_key": api_key, "limit": 25, **params}
        label = params.get("q") or params.get("typeOfSetAside") or params.get("ncode") or "query"
        try:
            resp = requests.get(BASE_URL, params=full_params, timeout=timeout)
            resp.raise_for_status()
            data = resp.json()
        except requests.RequestException as e:
            errors.append(f"{label}: {e}")
            continue

        for item in data.get("opportunitiesData", []):
            notice_id = item.get("noticeId")
            if not notice_id or notice_id in seen:
                continue
            description = item.get("description", "") or ""
            if description.startswith("https://api.sam.gov") and resolved_count < MAX_DESCRIPTION_FETCHES:
                description = _resolve_description(description, api_key, timeout)
                resolved_count += 1
            seen[notice_id] = {
                "title": item.get("title", "Untitled"),
                "description": description,
                "agency": item.get("fullParentPathName") or "unspecified",
                "close_date": item.get("responseDeadLine"),
                "url": item.get("uiLink"),
                "set_aside": item.get("typeOfSetAsideDescription") or item.get("typeOfSetAside"),
                # raw code (HZC/HZS), kept separate from the human-readable
                # description above so report.py can reliably branch on it
                "set_aside_code": item.get("typeOfSetAside"),
                "naics": item.get("naicsCode"),
                # human-facing solicitation number, stable across amendments —
                # unlike noticeId/uiLink, which SAM.gov reissues with each
                # amendment on "continuously open" vehicles (e.g. OASIS+).
                # Used as the seen-state identity key when present so those
                # vehicles don't look "new" every week forever.
                "solicitation_number": item.get("solicitationNumber"),
                **item_overrides,
            }

    return seen, errors


def fetch(
    keywords: list[str],
    department: str | None = None,
    days_back: int = 30,
    timeout: int = 20,
) -> tuple[list[dict[str, Any]], str]:
    api_key = os.environ.get("SAM_GOV_API_KEY")
    if not api_key:
        return [], "SKIPPED — no SAM_GOV_API_KEY set in .env (get one free at sam.gov/data-services)"

    posted_from, posted_to = _date_range(days_back)
    params_list = []
    for kw in keywords:
        params = {"q": kw, "postedFrom": posted_from, "postedTo": posted_to}
        if department:
            params["deptname"] = department
        params_list.append(params)

    seen, errors = _search(
        params_list, api_key, timeout,
        item_overrides={"source_id": SOURCE_ID, "source_name": SOURCE_NAME},
    )
    # department filter has no dedicated field above; fall back label for display
    if department:
        for v in seen.values():
            if v["agency"] == "unspecified":
                v["agency"] = department

    if errors and not seen:
        return [], f"FAILED — {'; '.join(errors)}"
    elif errors:
        return list(seen.values()), f"partial — {len(seen)} results, some queries failed: {'; '.join(errors)}"
    return list(seen.values()), f"ok — {len(seen)} results"


def fetch_nro(keywords: list[str], days_back: int = 30) -> tuple[list[dict[str, Any]], str]:
    return fetch(keywords, department="NATIONAL RECONNAISSANCE OFFICE", days_back=days_back)


def fetch_hubzone(
    naics_codes: list[str],
    days_back: int = 60,
    timeout: int = 20,
) -> tuple[list[dict[str, Any]], str]:
    """
    HUBZone set-aside/sole-source solicitations (FAR 19.13) restricted to the
    given NAICS codes. No keyword filter — being a HUBZone set-aside in a
    Casimir-relevant NAICS is itself the signal; the capability scorer still
    ranks these afterward, but every result here is flagged
    `hubzone_set_aside: True` so report.py can surface all of them regardless
    of score (a longer look-back window is used since these post less
    frequently than general solicitations).
    """
    api_key = os.environ.get("SAM_GOV_API_KEY")
    if not api_key:
        return [], "SKIPPED — no SAM_GOV_API_KEY set in .env (get one free at sam.gov/data-services)"

    posted_from, posted_to = _date_range(days_back)
    params_list = [
        {"typeOfSetAside": code, "ncode": naics, "postedFrom": posted_from, "postedTo": posted_to}
        for code in HUBZONE_SET_ASIDE_CODES
        for naics in naics_codes
    ]

    seen, errors = _search(
        params_list, api_key, timeout,
        item_overrides={
            "source_id": HUBZONE_SOURCE_ID,
            "source_name": HUBZONE_SOURCE_NAME,
            "hubzone_set_aside": True,
        },
    )

    if errors and not seen:
        return [], f"FAILED — {'; '.join(errors)}"
    elif errors:
        return list(seen.values()), f"partial — {len(seen)} results, some queries failed: {'; '.join(errors)}"
    return list(seen.values()), f"ok — {len(seen)} HUBZone set-aside/sole-source result(s)"
