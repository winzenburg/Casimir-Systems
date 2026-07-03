"""
SBIR.gov Solicitations API — documented, public, no key required.
https://www.sbir.gov/api

STATUS: stable (but SBIR.gov has posted intermittent maintenance windows on
this API in the past — we retry once and report clearly if it's down rather
than silently returning zero results).
"""
from __future__ import annotations
import time
from typing import Any

import requests

BASE_URL = "https://api.www.sbir.gov/public/api/solicitations"
SOURCE_ID = "sbir_gov_dod"
SOURCE_NAME = "SBIR.gov (DoD-wide)"


def fetch(keywords: list[str] | None = None, timeout: int = 20) -> tuple[list[dict[str, Any]], str]:
    """
    Returns (opportunities, status_message).
    Pulls open DoD solicitations; if `keywords` is given, makes one request
    per keyword and de-dupes by solicitation_number (the API's keyword param
    only matches title, so multiple calls give broader coverage than one).
    """
    params_base = {"agency": "DOD", "open": 1, "rows": 50}
    seen: dict[str, dict] = {}
    errors = []

    queries = keywords if keywords else [None]
    for kw in queries:
        params = dict(params_base)
        if kw:
            params["keyword"] = kw
        try:
            resp = requests.get(BASE_URL, params=params, timeout=timeout)
            resp.raise_for_status()
            data = resp.json()
        except requests.RequestException:
            # one retry after a backoff, in case it's a transient maintenance blip
            time.sleep(5)
            try:
                resp = requests.get(BASE_URL, params=params, timeout=timeout)
                resp.raise_for_status()
                data = resp.json()
            except requests.RequestException as e2:
                status_code = getattr(getattr(e2, "response", None), "status_code", None)
                if status_code == 429:
                    # SBIR.gov returns 429 "The SBIR Public API is not available at
                    # this time" during maintenance windows, not just rate limiting.
                    errors.append(
                        f"{kw or 'ALL'}: SBIR.gov API unavailable (HTTP 429 maintenance/throttle) — rerun the scan later"
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

    if errors and not seen:
        return [], f"FAILED — {'; '.join(errors)}"
    elif errors:
        return list(seen.values()), f"partial — {len(seen)} results, some queries failed: {'; '.join(errors)}"
    return list(seen.values()), f"ok — {len(seen)} results"
