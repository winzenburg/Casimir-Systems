# Casimir Opportunity Scanner

A standalone, Cursor-native agent that scans defense innovation channels for
SBIR/STTR topics, BAAs, and Commercial Solutions Openings that match Casimir
Systems' capabilities, and produces a ranked, cited markdown briefing.

Full agent behavior/instructions live in [`AGENTS.md`](./AGENTS.md); Cursor
reads that automatically. `.cursor/rules/opportunity-scanner.mdc` carries the
condensed always-apply version.

## Sources it watches
| Source | Coverage | Status |
|---|---|---|
| SBIR.gov | DoD-wide SBIR/STTR (Army, Navy, AFWERX/SpaceWERX, SOCOM, DARPA, MDA...) | JSON API down since ~June 18, 2026; automatic HTML fallback covers it |
| SOFWERX | SOCOM's early-announcement channel (correct name, not "SofWorks") | verified against live site, text-pattern based |
| SAM.gov API | Broad sweep + DIU + Army Futures + primary NRO source | stable |
| SAM.gov: HUBZone filter | Structural `typeOfSetAside=HZC/HZS` sweep across Casimir's NAICS codes; see "HUBZone leverage" below | stable |
| DIU (diu.mil) | Commercial Solutions Openings | verified against live site, text-pattern based |
| Army xTech | Prize-competition entry point (xtech.army.mil, corrected domain) | verified against live site, text-pattern based |
| NRO | Filtered SAM.gov query, NRO has no dedicated SBIR program | stable |

See [`config/sources.yaml`](./config/sources.yaml) for details and caveats on
each one. The three HTML scrapers (SOFWERX, DIU, Army xTech) were verified
against the live sites in July 2026 and pull real titles, deadlines, and
descriptions. They're still worth a periodic spot-check, especially if any
site restructures its content (e.g. DIU adding real per-item deep links, or
Army migrating off its current WordPress setup). The scanner will tell you
clearly in its report if a source's extraction comes back empty
unexpectedly, rather than silently reporting "no opportunities."

**Note on SBIR.gov (confirmed July 8, 2026): the documented JSON API has
been down for an extended period, not just intermittently throttled, but
the scanner covers it automatically with a live HTML fallback.** Every
request to the JSON API (`api.www.sbir.gov`) returns HTTP 429
`{"Code":"TooManyRequestsError","Message":"The SBIR Public API is not
available at this time."}`, reproduced from three independent networks
(this differs by request, not by source IP, so it isn't per-client rate
limiting). SBIR.gov's own `/api` documentation page has said "APIs are
undergoing maintenance" since at least June 18, 2026, independently
corroborated by third-party sources checking the same page around that
date. There is no client-side fix for the JSON API itself (no header,
retry count, or backoff avoids it); this is the API Gateway throttled to
zero during an extended backend outage.

`scripts/sources/sbir_gov.py`'s `fetch()` tries the JSON API first (so it
resumes working automatically the moment SBIR.gov fixes the outage, no code
change needed) and falls back to scraping `https://www.sbir.gov/topics`
when the JSON API fails. That's a separate, server-rendered Drupal search
page on a different backend, unaffected by the JSON API outage; verified
live to return real, current open DoD solicitations (title, dates, agency,
description, program tags) via its exposed filter form's GET parameters
(`status=Open`, `agency[DOD]=DOD`, `page=N`). `agency[DOD]=DOD` alone was
confirmed to already cover the full DoD-wide open-topic set (checked
against every individual military-branch checkbox combined, same total
either way), so there's no need to enumerate every branch separately.

Since the fallback means `sbir_gov_dod` now returns real data again, it's
reported as `ok` overall (the practical thing that matters), with the status
line itself, `ok (via topics-page fallback, JSON API down): 36 results`,
still noting that the JSON API specifically remains broken. If both paths
ever fail at once, `annotate_source_health()`'s duration tracking in
`reports/source-health.json` kicks back in and reports how long the source
has been fully down, the same behavior used for every other source.

**Worth noting on SOFWERX specifically:** most current opportunities aren't
labeled "SBIR"/"STTR" at all; they're "Assessment Events" and "Collaboration
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

### Scheduled runs (GitHub Actions, already wired up)
`.github/workflows/opportunity-scan.yml` (repo root) runs the scan **every
Monday at 13:00 UTC** (7am Denver in summer). Each run:

1. Scans all sources and diffs results against `reports/seen.json`, marking
   anything not seen before as **[NEW]**.
2. Commits the dated briefing + updated seen-state to the repo (so history
   accumulates in git).
3. Opens a GitHub issue titled like *"Opportunity scan 2026-07-06, 3 new,
   1 core match(es)"* with the full briefing as the body. **The issue
   notification email is how you know the scan ran.**

To include the SAM.gov + NRO queries in scheduled runs, add
`SAM_GOV_API_KEY` as a repository secret (repo Settings → Secrets and
variables → Actions). You can also trigger a run manually from the Actions
tab (workflow_dispatch).

**Direct email delivery.** The workflow also emails the briefing straight
to ryanwinzenburg@gmail.com through Resend
(`scripts/send_report_email.py`), reusing the same `RESEND_API_KEY` and
verified casimirsystems.com sending domain as the site's contact form.
Add that key as a repository secret and you're done. Without it the email
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

## HUBZone leverage

Casimir's principal office sits in a HUBZone-designated area, which makes it
**eligible** for SBA HUBZone certification (not yet certified; see the
pathway below). This scanner treats that as a distinct, structural signal
rather than a keyword:

- `scripts/sources/sam_gov.py`'s `fetch_hubzone()` queries SAM.gov's official
  `typeOfSetAside=HZC` (set-aside) and `HZS` (sole-source) fields (FAR 19.13),
  filtered to Casimir-relevant NAICS codes (`CASIMIR_NAICS_CODES` in
  `scan_opportunities.py`: 541511, 541512, 541519, 541715, 541990). This is
  the real SAM.gov field the government uses to restrict competition, not a
  guess based on text mentioning "HUBZone."
- These results get their own report section, **HUBZone set-asides:
  restricted competitor pool**, and unconditionally bypass
  `minimum_score_threshold` (see `score.py`), since being a HUBZone set-aside
  in Casimir's NAICS is itself the reason to look, independent of whether the
  topic also matches a capability keyword.
- HZC items are ones you can actually bid where competition is legally
  restricted to HUBZone firms. HZS items are already sole-sourced to a
  HUBZone firm, shown as market intel on who's winning and under what NAICS.
  Each item's report line spells out which case it is.
- **Stable identity across amendments.** "Continuously open" vehicles like
  OASIS+ get reissued with a new SAM.gov notice ID/URL on every amendment.
  The new-item tracker keys HUBZone items on their human-facing solicitation
  number (e.g. `47QRCA23R0003-P2`), not the URL, so a routine amendment
  doesn't re-trigger a "[NEW]" alert every week for the same underlying
  opportunity.

### Certification pathway (do this to actually bid on HZC items)
Eligibility alone doesn't let you win a HUBZone set-aside; SBA certification
is required first. Rough path (SBA's HUBZone program page has the current
details, this may shift):
1. Register/confirm your entity in SAM.gov with an active UEI.
2. Apply for HUBZone certification through the SBA's certification portal
   (certification.sba.gov): principal office address, employee count, and
   the 35%-of-employees-live-in-a-HUBZone residency requirement are the main
   checks. As a small owner-operated firm, the principal-office test is
   likely the one that matters most.
3. SBA reviews and either certifies or requests more documentation. Historic
   processing time has run a few months; there's no way to expedite from the
   applicant side.
4. Once certified, update `/sbir`, `/about`, and the footer on the marketing
   site from "HUBZone-Eligible" to "HUBZone Certified" (those three spots are
   flagged in the PR that added the eligibility language), and update your
   SAM.gov entity profile's representations/certifications section so
   contracting officers see it when they pull your profile.

## Scoring: core vs. secondary
`config/capability_filters.yaml` splits relevance tags into two tiers:

- **Core:** matches Ryan's actual differentiated skill set: AI-native rapid
  software delivery (building with tools like Cursor), UX/human factors for
  high-stakes or sensitive-context tools, product/business strategy, the
  Casimir Intelligence platform itself, and the hydrogeology/data-center-siting
  angle. Proven across Winzinvest (fintech execution software) and Kinlet.care
  (sensitive-context caregiver community UX), not just Casimir.
- **Secondary:** Dave's flagged defense-market areas (batteries, unmanned
  platforms, counter-AI). Real intel, but not a capability match by itself.

Every scan report separates these into two sections: **core capability
matches** (the ranked, "worth acting on" list) and **market intel, no direct
capability match** (Dave's areas, kept visible but clearly deprioritized).
Adjust weights or add keywords in the config as your read on the market
sharpens; no code changes needed.

## Guardrails baked in
- **Aspirational language only:** the report banner and agent rules enforce
  "pursuing/targeting," never "awarded/contracted," per Casimir's standing
  convention.
- **No auto-submission:** this agent produces briefings only. It will never
  submit a proposal, send an email, or contact anyone on your behalf.
- **Every item is cited:** source URL included so you can verify before
  acting on anything.

## Next steps to make this fully live
1. ~~Verify/fix the three HTML scrapers~~ (done July 2026); all three pull
   live data.
2. Get a free SAM.gov API key and drop it in `.env`; this unlocks the broad
   sweep plus the NRO and DIU cross-checks.
3. Keep tuning `capability_filters.yaml` weights as you review reports,
   especially the core-tier keywords, which encode your differentiators.
4. Optional: wire up a cron job or Cursor Background Agent for a weekly
   scheduled scan.
