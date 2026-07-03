"""
Score opportunities against config/capability_filters.yaml.

Each opportunity dict must have at least 'title' and 'description' keys.
Returns the same dicts with 'score' (0-100) and 'matched_tags' (list) added.
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
        # word-boundary-ish match so "AI" doesn't match inside "maintain"
        pattern = r"(?<![a-zA-Z0-9])" + re.escape(kw.lower()) + r"(?![a-zA-Z0-9])"
        if re.search(pattern, text_lower):
            hits += 1
    return hits


def score_opportunity(opp: dict[str, Any], config: dict) -> dict[str, Any]:
    text = f"{opp.get('title', '')} {opp.get('description', '')}"
    groups = config["groups"]

    raw_score = 0.0
    max_possible = 0.0
    matched_tags = []

    for group in groups:
        weight = group["weight"]
        max_possible += weight  # each group can contribute at most its weight
        hits = _count_hits(text, group["keywords"])
        if hits > 0:
            # diminishing returns per group: first hit counts full weight,
            # each additional hit in the same group adds a smaller bonus
            contribution = weight * min(1.0, 0.7 + 0.1 * (hits - 1))
            raw_score += contribution
            matched_tags.append(group["tag"])

    normalized = round((raw_score / max_possible) * 100, 1) if max_possible else 0.0

    opp["score"] = normalized
    opp["matched_tags"] = matched_tags
    return opp


def score_all(opportunities: list[dict[str, Any]]) -> list[dict[str, Any]]:
    config = load_filter_config()
    threshold = config.get("minimum_score_threshold", 0)
    scored = [score_opportunity(o, config) for o in opportunities]
    kept = [o for o in scored if o["score"] >= threshold]
    kept.sort(key=lambda o: o["score"], reverse=True)
    return kept
