"""
SAM.gov Contract Opportunities API (official, documented, requires a free
api_key from https://sam.gov/data-services).
https://open.gsa.gov/api/get-opportunities-public-api/

Used two ways by this scanner:
  1. Broad sweep — keyword search across all agencies (catches DIU, Army
     Futures Command, DARPA BAAs, and anything else that doesn't run through
     a dedicated SBIR portal).
  2. NRO filter — same endpoint, filtered to
     department = "NATIONAL RECONNAISSANCE OFFICE", since NRO is not one of
     the 11 SBIR/STTR participating agencies and posts solicitations here
     instead.

STATUS: stable, but requires SAM_GOV_API_KEY in your .env file.
"""
from __future__ import annotations
import os
from datetime import datetime, timedelta
from typing import Any

import requests

BASE_URL = "https://api.sam.gov/opportunities/v2/search"
SOURCE_ID = "sam_gov"
SOURCE_NAME = "SAM.gov Contract Opportunities"


def _date_range(days_back: int = 30) -> tuple[str, str]:
    today = datetime.now()
    start = today - timedelta(days=days_back)
    # SAM.gov expects MM/dd/yyyy
    return start.strftime("%m/%d/%Y"), today.strftime("%m/%d/%Y")


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
    seen: dict[str, dict] = {}
    errors = []

    for kw in keywords:
        params = {
            "api_key": api_key,
            "q": kw,
            "postedFrom": posted_from,
            "postedTo": posted_to,
            "limit": 25,
        }
        if department:
            params["deptname"] = department
        try:
            resp = requests.get(BASE_URL, params=params, timeout=timeout)
            resp.raise_for_status()
            data = resp.json()
        except requests.RequestException as e:
            errors.append(f"{kw}: {e}")
            continue

        for item in data.get("opportunitiesData", []):
            notice_id = item.get("noticeId")
            if not notice_id or notice_id in seen:
                continue
            seen[notice_id] = {
                "title": item.get("title", "Untitled"),
                "description": item.get("description", "") or "",
                "agency": item.get("fullParentPathName") or department or "unspecified",
                "close_date": item.get("responseDeadLine"),
                "url": item.get("uiLink"),
                "source_id": SOURCE_ID,
                "source_name": SOURCE_NAME,
            }

    if errors and not seen:
        return [], f"FAILED — {'; '.join(errors)}"
    elif errors:
        return list(seen.values()), f"partial — {len(seen)} results, some queries failed: {'; '.join(errors)}"
    return list(seen.values()), f"ok — {len(seen)} results"


def fetch_nro(keywords: list[str], days_back: int = 30) -> tuple[list[dict[str, Any]], str]:
    return fetch(keywords, department="NATIONAL RECONNAISSANCE OFFICE", days_back=days_back)
