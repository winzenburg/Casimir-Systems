"""
Generate a dated markdown briefing from scored opportunities.
"""
from __future__ import annotations
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from typing import Any

REPORTS_DIR = Path(__file__).parent.parent / "reports"

BANNER = """> **Language reminder:** everything below is a candidate opportunity, not a
> confirmed award. Use "pursuing" / "targeting" / "eligible for" in any
> external-facing material drawn from this report — never "awarded" or
> "contracted" unless a human has separately confirmed an actual award.
"""


def _fmt_item(opp: dict[str, Any]) -> str:
    lines = [f"### {opp.get('title', 'Untitled opportunity')}"]
    lines.append(f"- **Score:** {opp.get('score', 0)}/100 — tags: {', '.join(opp.get('matched_tags', [])) or 'none'}")
    lines.append(f"- **Source:** {opp.get('source_name', 'unknown')}")
    if opp.get("agency"):
        lines.append(f"- **Agency/branch:** {opp['agency']}")
    if opp.get("close_date"):
        lines.append(f"- **Close date:** {opp['close_date']}")
    if opp.get("url"):
        lines.append(f"- **Link:** {opp['url']}")
    if opp.get("description"):
        desc = opp["description"].strip()
        if len(desc) > 500:
            desc = desc[:500].rsplit(" ", 1)[0] + "…"
        lines.append(f"\n{desc}\n")
    return "\n".join(lines)


def generate_report(
    opportunities: list[dict[str, Any]],
    source_status: dict[str, str],
) -> Path:
    """
    source_status: dict of source_id -> status message, e.g.
      {"sofwerx": "0 results — verify selectors, see scripts/sources/sofwerx.py"}
    Used to surface source failures instead of hiding them.
    """
    REPORTS_DIR.mkdir(exist_ok=True)
    date_str = datetime.now().strftime("%Y-%m-%d")
    out_path = REPORTS_DIR / f"{date_str}-opportunity-scan.md"

    by_agency: dict[str, list[dict]] = defaultdict(list)
    for opp in opportunities:
        by_agency[opp.get("agency", "Unclassified / other")].append(opp)

    parts = [
        f"# Casimir Opportunity Scan — {date_str}",
        "",
        BANNER,
        "",
        f"**{len(opportunities)} opportunities** matched at or above the relevance threshold, "
        f"across {len(by_agency)} agency/branch groupings.",
        "",
        "## Source status",
        "",
    ]
    for source_id, status in source_status.items():
        parts.append(f"- `{source_id}`: {status}")
    parts.append("")

    for agency, items in sorted(by_agency.items(), key=lambda kv: -max(i["score"] for i in kv[1])):
        parts.append(f"## {agency}")
        parts.append("")
        for opp in items:
            parts.append(_fmt_item(opp))
            parts.append("")

    out_path.write_text("\n".join(parts))
    return out_path
