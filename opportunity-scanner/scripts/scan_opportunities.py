#!/usr/bin/env python3
"""
Casimir Opportunity Scanner — orchestrator.

Runs every source module, scores results against config/capability_filters.yaml,
and writes a dated markdown report to reports/.

Usage:
    python scripts/scan_opportunities.py
    python scripts/scan_opportunities.py --json   # also dump raw scored JSON
"""
from __future__ import annotations
import argparse
import json
import sys
from pathlib import Path

# make `scripts.*` importable when run as `python scripts/scan_opportunities.py`
sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv

from scripts.score import score_all
from scripts.report import generate_report
from scripts.sources import sbir_gov, sam_gov, sofwerx, diu, army_futures

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


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true", help="also write raw scored results as JSON")
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

    print(f"\nTotal raw results before scoring: {len(all_opportunities)}")
    scored = score_all(all_opportunities)
    print(f"Opportunities above relevance threshold: {len(scored)}")

    report_path = generate_report(scored, source_status)
    print(f"\nReport written to: {report_path}")

    if args.json:
        json_path = report_path.with_suffix(".json")
        json_path.write_text(json.dumps(scored, indent=2, default=str))
        print(f"Raw JSON written to: {json_path}")


if __name__ == "__main__":
    main()
