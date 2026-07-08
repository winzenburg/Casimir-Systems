"""
Score opportunities against config/capability_filters.yaml.

Each opportunity dict must have at least 'title' and 'description' keys.
Returns the same dicts with 'score', 'matched_tags', and 'match_tier' added.

'match_tier' is one of:
  - "core"      — hit at least one core-tier tag (Ryan's actual differentiated
                  skill set: AI-native dev, UX/human factors, business
                  strategy, platform match, hydrogeology/data-center siting)
  - "secondary" — hit only secondary-tier tags (Dave's flagged defense-market
                  areas — real intel, not a capability match by itself)
  - dropped entirely if below minimum_score_threshold in both tiers combined
"""
from __future__ import annotations
import re
from pathlib import Path
from typing import Any

import yaml

CONFIG_PATH = Path(__file__).parent.parent / "config" / "capability_filters.yaml"


def load_filter_config() -> dict:
    with open(CONFIG_PATH, "r") as f:
        return yaml.safe_load(f)


def _count_hits(text: str, keywords: list[str]) -> int:
    text_lower = text.lower()
    hits = 0
    for kw in keywords:
        pattern = r"(?<![a-zA-Z0-9])" + re.escape(kw.lower()) + r"(?![a-zA-Z0-9])"
        if re.search(pattern, text_lower):
            hits += 1
    return hits


def score_opportunity(opp: dict[str, Any], config: dict) -> dict[str, Any]:
    text = f"{opp.get('title', '')} {opp.get('description', '')}"
    groups = config["groups"]

    # Normalize within each tier separately (as documented in
    # capability_filters.yaml). Normalizing against ALL groups globally would
    # make secondary-only items mathematically unable to clear the threshold —
    # the secondary tier's total weight is a fraction of the combined total —
    # leaving the market-intel section permanently empty.
    raw: dict[str, float] = {"core": 0.0, "secondary": 0.0}
    max_possible: dict[str, float] = {"core": 0.0, "secondary": 0.0}
    matched_tags: list[str] = []

    for group in groups:
        tier = group.get("tier", "secondary")
        weight = group["weight"]
        max_possible[tier] += weight
        hits = _count_hits(text, group["keywords"])
        if hits > 0:
            # diminishing returns per group: first hit counts 0.7x weight,
            # each additional hit in the same group adds a smaller bonus
            raw[tier] += weight * min(1.0, 0.7 + 0.1 * (hits - 1))
            matched_tags.append(group["tag"])

    core_score = round((raw["core"] / max_possible["core"]) * 100, 1) if max_possible["core"] else 0.0
    secondary_score = (
        round((raw["secondary"] / max_possible["secondary"]) * 100, 1) if max_possible["secondary"] else 0.0
    )

    core_hit = raw["core"] > 0
    opp["score"] = core_score if core_hit else secondary_score
    opp["matched_tags"] = matched_tags
    opp["match_tier"] = "core" if core_hit else ("secondary" if matched_tags else "none")
    return opp


def score_all(opportunities: list[dict[str, Any]]) -> dict[str, list[dict[str, Any]]]:
    """
    Returns {"hubzone": [...], "core": [...], "secondary": [...]}.

    - "hubzone": opportunities pulled from sam_gov.fetch_hubzone — a
      *structural* SAM.gov set-aside field (typeOfSetAside=HZC/HZS), not a
      keyword match. Casimir's principal office is HUBZone-eligible, so any
      solicitation here has a legally restricted competitor pool. These
      bypass minimum_score_threshold entirely: being a HUBZone set-aside in
      a Casimir-relevant NAICS is itself the reason to look, even if the
      capability-keyword score is 0 — Ryan should see the full list and
      judge fit himself. Still scored/tagged for context and sorted by
      score, just never dropped for scoring low.
    - "core": matched at least one core-tier tag and clears the threshold.
    - "secondary": matched only Dave's flagged market-area tags and clears
      the threshold.

    Items already in "hubzone" are excluded from core/secondary to avoid
    listing the same opportunity twice across sections.
    """
    config = load_filter_config()
    threshold = config.get("minimum_score_threshold", 0)

    scored = [score_opportunity(o, config) for o in opportunities]

    hubzone = [o for o in scored if o.get("hubzone_set_aside")]
    remaining = [o for o in scored if not o.get("hubzone_set_aside")]

    kept = [o for o in remaining if o["score"] >= threshold]
    core = [o for o in kept if o["match_tier"] == "core"]
    secondary = [o for o in kept if o["match_tier"] == "secondary"]

    hubzone.sort(key=lambda o: o["score"], reverse=True)
    core.sort(key=lambda o: o["score"], reverse=True)
    secondary.sort(key=lambda o: o["score"], reverse=True)

    return {"hubzone": hubzone, "core": core, "secondary": secondary}
