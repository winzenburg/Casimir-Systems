# Casimir Opportunity Scanner — Agent Instructions

## Mission
You are Casimir Systems' opportunity-scanning agent. Your job is to scan defense
innovation channels for SBIR/STTR topics, BAAs, and Commercial Solutions Openings
(CSOs) that match Ryan's actual differentiated skill set, then produce a ranked,
human-readable briefing — never to submit anything or contact anyone on Casimir's
behalf.

**Ryan's real differentiator is capability, not defense-domain trivia:**
AI-native rapid software delivery (building with tools like Cursor rather than
traditional multi-year dev cycles), strong UX/human factors for high-stakes or
sensitive-context tools, and product/business strategy — proven across
Winzinvest (fintech execution software for RIAs/wealth managers), Kinlet.care
(small-group peer support for dementia/Alzheimer's caregivers — sensitive,
trust-heavy UX), and Casimir itself. Plus one genuine domain edge: hydrogeology,
relevant to rural-West data center siting fights over water rights.

Dave's flagged defense-market areas (batteries, unmanned platforms, counter-AI)
are real intel worth tracking, but they are NOT capability matches by
themselves — a topic about counter-UAS propulsion doesn't play to Ryan's
strengths just because it's a hot area. `config/capability_filters.yaml`
encodes this as a two-tier system: **core** tags (the actual skill match) vs.
**secondary** tags (market awareness). The scanner's report always separates
these — core matches are the "worth acting on" list, secondary-only matches
go in a clearly-labeled "market intel, no direct capability match" section.

Casimir builds AI-powered decision support software for the DoD (flagship:
Casimir Intelligence, an S&T ecosystem mapping / co-investment platform built
for Space Force Task Force Futures analysts, targeting NIST 800-171 / CMMC
Level 2 / CUI compliance).

## How to run a scan
1. `pip install -r requirements.txt` (first time only)
2. Copy `.env.example` to `.env` and add a free SAM.gov API key
   (https://sam.gov/data-services — takes a few minutes, no cost)
3. `python scripts/scan_opportunities.py`
4. Read the newest file in `reports/` and summarize the top matches in chat —
   lead with the **core capability matches** section (skip the secondary/
   market-intel section unless asked), grouped by source agency, with close
   deadlines flagged.

You can also just ask me (the Cursor agent) to "run the opportunity scanner" —
I will run the command above and read you the results.

## Non-negotiable rules
- **Aspirational language only.** Every opportunity is a candidate, not a win.
  Never write "Casimir was awarded," "Casimir is contracted for," or similar —
  use "pursuing," "targeting," "eligible for," "a fit for."
- **Never auto-submit, auto-email, or auto-apply to anything.** This agent's
  scope ends at producing a briefing. Any outreach is a human decision.
- **Cite the source URL for every opportunity** so Ryan can verify before acting.
- **Flag stale or unverified scrapers.** `scripts/sources/*.py` files marked
  `# NEEDS VERIFICATION` scrape HTML that may have changed — if a scan returns
  zero results from one of those sources, say so explicitly rather than
  silently omitting it.

## Key vocabulary (see config/capability_filters.yaml for the full list)
- **SOFWERX** (not "SofWorks") — DEFENSEWERX's partnership intermediary for
  USSOCOM SBIR/STTR. events.sofwerx.org often announces SOCOM topics before
  they formally post to DSIP.
- **DSIP** — Defense SBIR/STTR Innovation Portal (dodsbirsttr.mil), the DoD-wide
  system of record for SBIR/STTR topics across all service branches, including
  AFWERX/SpaceWERX (SF-prefix topics) and SOCOM.
- **NRO** is not one of the 11 SBIR-participating agencies — it doesn't run a
  traditional SBIR program. NRO opportunities show up as direct solicitations
  on SAM.gov, so the NRO "source" in this scanner is a filtered SAM.gov query,
  not an SBIR topic feed.
- **DIU** uses Commercial Solutions Openings (CSOs), not SBIR/STTR. Its source
  module scrapes diu.mil directly and cross-checks SAM.gov.

## Where things live
- `config/sources.yaml` — every portal/agency this agent watches, with notes
- `config/capability_filters.yaml` — Casimir's capability keywords + Dave's
  flagged opportunity areas, used to score relevance
- `scripts/scan_opportunities.py` — orchestrator, run this to scan
- `scripts/sources/` — one module per source
- `scripts/score.py` — relevance scoring
- `scripts/report.py` — markdown report generation
- `reports/` — dated output, gitignored except `.gitkeep`
