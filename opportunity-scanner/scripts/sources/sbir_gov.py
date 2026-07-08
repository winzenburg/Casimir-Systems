"""
SBIR.gov Solicitations API: documented, public, no key required.
https://www.sbir.gov/api

STATUS (confirmed July 8, 2026): DOWN, and has been for weeks, not
intermittently throttled. Every request returns HTTP 429
{"Code":"TooManyRequestsError","Message":"The SBIR Public API is not
available at this time."} regardless of source IP (verified from three
independent networks) or request headers, and SBIR.gov's own /api
documentation page has said "APIs are undergoing maintenance" since at
least June 18, 2026 (independently corroborated by third-party sources
checking the same page). This reads as the API Gateway usage plan being
throttled to zero while the backend is offline for an extended
maintenance window, not per-client rate limiting.

There is no client-side fix: no header, retry count, or backoff avoids
it. scan_opportunities.py's annotate_source_health() tracks how many
consecutive days this source has been down (reports/source-health.json)
so the report/notification shows real outage duration instead of a
generic "try again" message that implies a transient blip. If this
becomes permanent, the fallback is SBIR.gov's bulk data-resources
downloads (https://www.sbir.gov/data-resources, JSON/XML/XLS snapshots)
rather than the live API, at the cost of a large periodic file fetch
instead of a targeted query.
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
                    # this time" — confirmed as an extended maintenance outage
                    # (weeks, not minutes), not per-client rate limiting. See the
                    # module docstring. annotate_source_health() in
                    # scan_opportunities.py appends how long this has persisted.
                    errors.append(
                        f"{kw or 'ALL'}: SBIR.gov API unavailable (HTTP 429, \"not available at this time\"), a known extended outage per sbir.gov/api, not a transient blip"
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
        return [], f"FAILED: {'; '.join(errors)}"
    elif errors:
        return list(seen.values()), f"partial: {len(seen)} results, some queries failed: {'; '.join(errors)}"
    return list(seen.values()), f"ok: {len(seen)} results"
