#!/usr/bin/env python3
"""
Casimir Opportunity Scanner — orchestrator.

Runs every source module, scores results against config/capability_filters.yaml,
and writes a dated markdown report to reports/.

Opportunities are diffed against reports/seen.json (committed to git) so each
report marks what's [NEW] since the last scan — that diff is what makes the
scheduled GitHub Actions notification worth opening.

Usage:
    python scripts/scan_opportunities.py
    python scripts/scan_opportunities.py --json         # also dump raw scored JSON
    python scripts/scan_opportunities.py --no-update-seen  # dry run: don't record items as seen
"""
from __future__ import annotations
import argparse
import json
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

# make `scripts.*` importable when run as `python scripts/scan_opportunities.py`
sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv

from scripts.score import score_all
from scripts.report import generate_report
from scripts.sources import sbir_gov, sam_gov, sofwerx, diu, army_futures

SEEN_PATH = Path(__file__).parent.parent / "reports" / "seen.json"
SUMMARY_PATH = Path(__file__).parent.parent / "reports" / "latest-summary.json"

# Broad keyword sweep for SAM.gov / DIU / xTech — kept short and high-signal;
# SBIR.gov's own keyword-per-solicitation search is handled inside sbir_gov.py.
SWEEP_KEYWORDS = [
    "artificial intelligence decision support",
    "intelligence synthesis",
    "unmanned systems integration",
    "sensor data visualization",
    "human-machine teaming",
]

NRO_KEYWORDS = [
    "artificial intelligence",
    "data visualization",
    "unmanned systems",
    "geospatial",
]

# NAICS codes Casimir would actually bid under — used only for the HUBZone
# set-aside sweep (see sam_gov.fetch_hubzone), which has no keyword filter.
CASIMIR_NAICS_CODES = [
    "541511",  # Custom Computer Programming Services
    "541512",  # Computer Systems Design Services
    "541519",  # Other Computer Related Services
    "541715",  # R&D in Physical, Engineering, and Life Sciences
    "541990",  # All Other Professional, Scientific, and Technical Services
]


def _opportunity_key(opp: dict[str, Any]) -> str:
    """
    Stable identity for the seen-state diff.

    Prefers solicitation_number when present — SAM.gov reissues a new
    noticeId/uiLink with each amendment on "continuously open" vehicles
    (e.g. OASIS+), so keying on URL would make the same underlying
    solicitation look "new" forever, one alert per amendment. The
    human-facing solicitation number stays constant across amendments.
    Falls back to URL, then title, for sources without that field.
    """
    identity = opp.get("solicitation_number") or opp.get("url") or opp.get("title", "")
    return f"{opp.get('source_id', 'unknown')}::{identity}"


def annotate_new(scored: dict[str, list[dict[str, Any]]], update_seen: bool) -> int:
    """Mark each kept opportunity with is_new (not present in reports/seen.json)
    and, unless disabled, record everything from this scan as seen."""
    seen: dict[str, dict] = {}
    if SEEN_PATH.exists():
        try:
            seen = json.loads(SEEN_PATH.read_text())
        except json.JSONDecodeError:
            print(f"WARNING: {SEEN_PATH} is corrupt — treating all items as new this run")

    now_iso = datetime.now().strftime("%Y-%m-%d")
    new_count = 0
    for tier in ("hubzone", "core", "secondary"):
        for opp in scored.get(tier, []):
            key = _opportunity_key(opp)
            opp["is_new"] = key not in seen
            if opp["is_new"]:
                new_count += 1
                seen[key] = {"first_seen": now_iso, "title": opp.get("title", "")}

    if update_seen:
        SEEN_PATH.parent.mkdir(exist_ok=True)
        SEEN_PATH.write_text(json.dumps(seen, indent=2, sort_keys=True) + "\n")
    return new_count


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true", help="also write raw scored results as JSON")
    parser.add_argument(
        "--no-update-seen",
        action="store_true",
        help="dry run: mark [NEW] items against reports/seen.json but don't record this scan's items as seen",
    )
    args = parser.parse_args()

    load_dotenv()

    all_opportunities = []
    source_status: dict[str, str] = {}

    print("Scanning SBIR.gov (DoD-wide)...")
    results, status = sbir_gov.fetch()
    all_opportunities.extend(results)
    source_status["sbir_gov_dod"] = status
    print(f"  {status}")

    print("Scanning SOFWERX...")
    results, status = sofwerx.fetch()
    all_opportunities.extend(results)
    source_status["sofwerx"] = status
    print(f"  {status}")

    print("Scanning DIU...")
    results, status = diu.fetch()
    all_opportunities.extend(results)
    source_status["diu"] = status
    print(f"  {status}")

    print("Scanning Army Futures Command xTech...")
    results, status = army_futures.fetch()
    all_opportunities.extend(results)
    source_status["army_futures_xtech"] = status
    print(f"  {status}")

    print("Scanning SAM.gov (broad sweep: DIU/DARPA/Army/other)...")
    results, status = sam_gov.fetch(SWEEP_KEYWORDS)
    all_opportunities.extend(results)
    source_status["sam_gov"] = status
    print(f"  {status}")

    print("Scanning SAM.gov filtered to NRO...")
    results, status = sam_gov.fetch_nro(NRO_KEYWORDS)
    all_opportunities.extend(results)
    source_status["nro"] = status
    print(f"  {status}")

    print("Scanning SAM.gov for HUBZone set-asides (Casimir-relevant NAICS)...")
    results, status = sam_gov.fetch_hubzone(CASIMIR_NAICS_CODES)
    all_opportunities.extend(results)
    source_status["sam_gov_hubzone"] = status
    print(f"  {status}")

    print(f"\nTotal raw results before scoring: {len(all_opportunities)}")
    scored = score_all(all_opportunities)
    new_count = annotate_new(scored, update_seen=not args.no_update_seen)
    print(f"HUBZone set-asides: {len(scored['hubzone'])}")
    print(f"Core capability matches: {len(scored['core'])}")
    print(f"Secondary/market-intel matches: {len(scored['secondary'])}")
    print(f"New since last scan: {new_count}")

    report_path = generate_report(scored, source_status, new_count=new_count)
    print(f"\nReport written to: {report_path}")

    # machine-readable summary for the scheduled GitHub Actions workflow
    SUMMARY_PATH.write_text(
        json.dumps(
            {
                "date": datetime.now().strftime("%Y-%m-%d"),
                "hubzone": len(scored["hubzone"]),
                "core": len(scored["core"]),
                "secondary": len(scored["secondary"]),
                "new": new_count,
                "report": str(report_path.relative_to(SUMMARY_PATH.parent.parent)),
                "source_status": source_status,
            },
            indent=2,
        )
        + "\n"
    )

    if args.json:
        json_path = report_path.with_suffix(".json")
        json_path.write_text(json.dumps(scored, indent=2, default=str))
        print(f"Raw JSON written to: {json_path}")


if __name__ == "__main__":
    main()
