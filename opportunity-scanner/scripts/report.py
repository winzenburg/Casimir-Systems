"""
Generate a dated markdown briefing from scored opportunities.

Takes the {"core": [...], "secondary": [...]} structure from score.py and
presents core matches (Ryan's actual differentiated skill set) as the main
ranked list, with secondary matches (Dave's flagged market areas, no direct
capability match) in a clearly separated section below — so the market intel
isn't lost, but it doesn't crowd out real capability fits.
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

CORE_INTRO = """## Core capability matches

These hit at least one of your actual differentiated skills: AI-native rapid
software delivery, UX/human factors for high-stakes or sensitive-context
tools, product/business strategy, the Casimir Intelligence platform itself,
or the hydrogeology/data-center-siting angle. This is the list worth acting on.
"""

SECONDARY_INTRO = """## Market intel — Dave's flagged areas, no direct capability match

These matched one of the defense-market areas Dave flagged as active
(batteries, unmanned platforms, counter-AI, etc.) but didn't hit any of your
core differentiators. Useful to know the market is moving here, but treat
these as "worth watching," not "worth a proposal," unless paired with a
teaming partner who covers the engineering domain.
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


def _grouped_by_agency(items: list[dict[str, Any]]) -> str:
    by_agency: dict[str, list[dict]] = defaultdict(list)
    for opp in items:
        by_agency[opp.get("agency", "Unclassified / other")].append(opp)

    parts = []
    for agency, group in sorted(by_agency.items(), key=lambda kv: -max(i["score"] for i in kv[1])):
        parts.append(f"#### {agency}")
        parts.append("")
        for opp in group:
            parts.append(_fmt_item(opp))
            parts.append("")
    return "\n".join(parts)


def generate_report(
    scored: dict[str, list[dict[str, Any]]],
    source_status: dict[str, str],
) -> Path:
    """
    scored: {"core": [...], "secondary": [...]} as returned by score.score_all()
    source_status: dict of source_id -> status message, surfaced instead of
      silently hiding a broken/empty source.
    """
    REPORTS_DIR.mkdir(exist_ok=True)
    date_str = datetime.now().strftime("%Y-%m-%d")
    out_path = REPORTS_DIR / f"{date_str}-opportunity-scan.md"

    core = scored.get("core", [])
    secondary = scored.get("secondary", [])

    parts = [
        f"# Casimir Opportunity Scan — {date_str}",
        "",
        BANNER,
        "",
        f"**{len(core)} core capability match(es)**, **{len(secondary)} secondary/market-intel item(s)**.",
        "",
        "## Source status",
        "",
    ]
    for source_id, status in source_status.items():
        parts.append(f"- `{source_id}`: {status}")
    parts.append("")

    parts.append(CORE_INTRO)
    parts.append("")
    if core:
        parts.append(_grouped_by_agency(core))
    else:
        parts.append("*No core capability matches this scan.*")
    parts.append("")

    parts.append(SECONDARY_INTRO)
    parts.append("")
    if secondary:
        parts.append(_grouped_by_agency(secondary))
    else:
        parts.append("*No secondary/market-intel matches this scan.*")
    parts.append("")

    out_path.write_text("\n".join(parts))
    return out_path
