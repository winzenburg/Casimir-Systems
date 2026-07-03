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
| SBIR.gov API | DoD-wide SBIR/STTR (Army, Navy, AFWERX/SpaceWERX, SOCOM, DARPA, MDA...) | stable (has maintenance windows — see below) |
| SOFWERX | SOCOM's early-announcement channel (correct name — not "SofWorks") | verified July 2026 |
| SAM.gov API | Broad sweep + DIU + Army Futures + primary NRO source | stable (needs free API key) |
| DIU (diu.mil) | Commercial Solutions Openings | verified July 2026 |
| Army xTech | Prize-competition entry point (moved to xtech.army.mil) | verified July 2026 |
| NRO | Filtered SAM.gov query — NRO has no dedicated SBIR program | stable (needs free API key) |

See [`config/sources.yaml`](./config/sources.yaml) for details and caveats on
each one. The three HTML scrapers were verified against the live sites in
July 2026 and pull real titles, deadlines, and descriptions. If a site's
markup drifts later, the scanner says so explicitly in the report's source
status section instead of silently reporting "no opportunities."

Note on SBIR.gov: its public API periodically returns HTTP 429 ("not
available at this time") during maintenance windows. The scanner retries,
then reports the outage clearly — just rerun the scan later.

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

### Scheduled runs (headless)
Cursor's CLI can run this unattended, e.g. from cron or CI:
```bash
cursor --headless "run the opportunity scanner and summarize new items since the last report"
```

## Scoring
`config/capability_filters.yaml` defines weighted keyword groups covering
Casimir's core platform capabilities plus the opportunity areas Dave flagged
(battery/power, unmanned platforms, AI intel synthesis, data viz/human
factors, counter-AI/influence ops, rural-West data center siting). Adjust
weights or add keywords there as your read on the market sharpens — no code
changes needed.

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
3. Keep tuning `capability_filters.yaml` weights as you review reports. The
   threshold is calibrated so any single strong capability match (e.g. a
   SOCOM unmanned-systems event) makes the report.
4. Optional: wire up a cron job or Cursor Background Agent for a weekly
   scheduled scan.
