# Casimir Opportunity Scanner

A standalone, Cursor-native agent that scans defense innovation channels for
SBIR/STTR topics, BAAs, and Commercial Solutions Openings that match Casimir
Systems' capabilities — and produces a ranked, cited markdown briefing.

Full agent behavior/instructions live in [`AGENTS.md`](./AGENTS.md) — Cursor
reads that automatically. `.cursor/rules/opportunity-scanner.mdc` carries the
condensed always-apply version.

## Sources it watches
| Source | Coverage | Status |
|---|---|---|
| SBIR.gov API | DoD-wide SBIR/STTR (Army, Navy, AFWERX/SpaceWERX, SOCOM, DARPA, MDA...) | stable |
| SOFWERX | SOCOM's early-announcement channel (correct name — not "SofWorks") | verified against live site, text-pattern based |
| SAM.gov API | Broad sweep + DIU + Army Futures + primary NRO source | stable |
| DIU (diu.mil) | Commercial Solutions Openings | verified against live site, text-pattern based |
| Army xTech | Prize-competition entry point (xtech.army.mil — corrected domain) | verified against live site, text-pattern based |
| NRO | Filtered SAM.gov query — NRO has no dedicated SBIR program | stable |

See [`config/sources.yaml`](./config/sources.yaml) for details and caveats on
each one. The three HTML scrapers (SOFWERX, DIU, Army xTech) were verified
against the live sites in July 2026 and pull real titles, deadlines, and
descriptions. They're still worth a periodic spot-check, especially if any
site restructures its content (e.g. DIU adding real per-item deep links, or
Army migrating off its current WordPress setup). The scanner will tell you
clearly in its report if a source's extraction comes back empty
unexpectedly, rather than silently reporting "no opportunities."

Note on SBIR.gov: its public API periodically returns HTTP 429 ("not
available at this time") during maintenance windows. The scanner retries,
then reports the outage clearly — just rerun the scan later.

**Worth noting on SOFWERX specifically:** most current opportunities aren't
labeled "SBIR"/"STTR" at all — they're "Assessment Events" and "Collaboration
Events" run under Other Transaction authority. The scraper pulls everything
on the current-events page and lets the relevance scorer do the filtering,
rather than pattern-matching on "SBIR" in the title (which would now miss
most of what's live).

## Setup
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# edit .env and add a free SAM.gov API key from https://sam.gov/data-services
```

## Running a scan
```bash
python scripts/scan_opportunities.py
# or, to also dump raw scored JSON:
python scripts/scan_opportunities.py --json
```

Output lands in `reports/YYYY-MM-DD-opportunity-scan.md`.

### From inside Cursor
Just ask the Agent: *"Run the opportunity scanner and summarize the top
matches."* `AGENTS.md` tells it exactly what to run and how to report back.

### Scheduled runs (GitHub Actions — already wired up)
`.github/workflows/opportunity-scan.yml` (repo root) runs the scan **every
Monday at 13:00 UTC** (7am Denver in summer). Each run:

1. Scans all sources and diffs results against `reports/seen.json`, marking
   anything not seen before as **[NEW]**.
2. Commits the dated briefing + updated seen-state to the repo (so history
   accumulates in git).
3. Opens a GitHub issue titled like *"Opportunity scan 2026-07-06 — 3 new,
   1 core match(es)"* with the full briefing as the body — **the issue
   notification email is how you know the scan ran.**

To include the SAM.gov + NRO queries in scheduled runs, add
`SAM_GOV_API_KEY` as a repository secret (repo Settings → Secrets and
variables → Actions). You can also trigger a run manually from the Actions
tab (workflow_dispatch).

**Direct email delivery.** The workflow also emails the briefing straight
to ryanwinzenburg@gmail.com through Resend
(`scripts/send_report_email.py`), reusing the same `RESEND_API_KEY` and
verified casimirsystems.com sending domain as the site's contact form —
add that key as a repository secret and you're done. Without it the email
step is skipped and the GitHub issue notification remains the delivery
channel. Preview the email locally with:
```bash
python scripts/send_report_email.py --dry-run
```

For a local dry run that doesn't consume the "new" markers:
```bash
python scripts/scan_opportunities.py --no-update-seen
```

Cursor's CLI can also run it unattended from cron:
```bash
cursor --headless "run the opportunity scanner and summarize new items since the last report"
```

## Scoring: core vs. secondary
`config/capability_filters.yaml` splits relevance tags into two tiers:

- **Core** — matches Ryan's actual differentiated skill set: AI-native rapid
  software delivery (building with tools like Cursor), UX/human factors for
  high-stakes or sensitive-context tools, product/business strategy, the
  Casimir Intelligence platform itself, and the hydrogeology/data-center-siting
  angle. Proven across Winzinvest (fintech execution software) and Kinlet.care
  (sensitive-context caregiver community UX), not just Casimir.
- **Secondary** — Dave's flagged defense-market areas (batteries, unmanned
  platforms, counter-AI). Real intel, but not a capability match by itself.

Every scan report separates these into two sections: **core capability
matches** (the ranked, "worth acting on" list) and **market intel — no direct
capability match** (Dave's areas, kept visible but clearly deprioritized).
Adjust weights or add keywords in the config as your read on the market
sharpens — no code changes needed.

## Guardrails baked in
- **Aspirational language only** — the report banner and agent rules enforce
  "pursuing/targeting," never "awarded/contracted," per Casimir's standing
  convention.
- **No auto-submission** — this agent produces briefings only. It will never
  submit a proposal, send an email, or contact anyone on your behalf.
- **Every item is cited** — source URL included so you can verify before
  acting on anything.

## Next steps to make this fully live
1. ~~Verify/fix the three HTML scrapers~~ — done (July 2026); all three pull
   live data.
2. Get a free SAM.gov API key and drop it in `.env` — this unlocks the broad
   sweep plus the NRO and DIU cross-checks.
3. Keep tuning `capability_filters.yaml` weights as you review reports —
   especially the core-tier keywords, which encode your differentiators.
4. Optional: wire up a cron job or Cursor Background Agent for a weekly
   scheduled scan.
