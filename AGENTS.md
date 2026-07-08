# Casimir Systems Website: Agent Instructions

This repo has two parts:
- **The marketing site** (`app/`, `components/`, `lib/`): a Next.js 16 App
  Router site at casimirsystems.com, deployed on Vercel.
- **The opportunity scanner** (`opportunity-scanner/`): a standalone Python
  agent with its own `AGENTS.md` and `.cursor/rules/opportunity-scanner.mdc`.
  Read that subproject's `AGENTS.md` before working inside
  `opportunity-scanner/`; the rules below are for the marketing site.

## Stack
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer
Motion (via `components/scroll-reveal.tsx`), Lucide React for icons. Email
via Resend (`app/api/contact/route.ts`, `RESEND_API_KEY`).

## Design system: "Illuminated Intelligence"
Full token reference in `.cursor/rules/design-tokens.mdc`. In short: navy
(`#0B132B`) and signal blue (`#2563EB`) as primary colors, Inter for
headings/UI, IBM Plex Sans for body copy, IBM Plex Mono for stats/codes. The
site is **hand-rolled Tailwind + inline `style={{}}` objects**, not a shadcn
component library; see `.cursor/rules/component-library.mdc` before reaching
for shadcn primitives that mostly aren't installed or used here.

## Copy rules (always apply, see `.cursor/rules/copy-style.mdc`)
1. **No em dashes** in any user-visible text. Use periods, commas, colons,
   semicolons, or parentheses instead.
2. **Aspirational language only** for anything about awards, contracts, or
   certifications. Casimir is small business pursuing government contracts;
   never claim something is awarded/active/certified unless a human has
   explicitly confirmed it. Default to "pursuing," "targeting," "eligible
   for," "proposal submitted, decision pending."
3. **No generic AI-writing filler** ("leverage," "seamless," "cutting-edge,"
   "delve," "boasts," etc.).

These rules exist because both patterns were found live on the site and had
to be corrected after the fact (a misleading "Active Phase II Award" claim,
and a full em-dash cleanup pass across every page). Don't reintroduce either.

## Git and deploy conventions
- `main` auto-deploys to production via Vercel's Git integration. Any push
  to `main` triggers a build; there is no separate staging environment.
- PRs are drafts by default. Never merge, mark ready, or enable auto-merge
  without explicit user instruction.
- Run `npx next build` before considering a change complete; the site must
  build cleanly across all routes.
- When editing scattered copy across many files (a sweep-style change), do a
  full `grep`/verification pass afterward rather than trusting individual
  edits; check the actual built HTML output in `.next/server/app/` when
  precision matters, since source-level checks can miss template
  interpolation or component-level text.

## CI/scheduled workflow resilience pattern
`.github/workflows/opportunity-scan.yml` runs weekly and commits its own
output back to `main`. It hit a real race condition once: a scheduled run's
`git push` was rejected because unrelated PRs merged into `main` while the
job was running, and because GitHub Actions skips subsequent steps after a
failure by default, that same race also silently dropped the run's
notifications (GitHub issue + email), not just the commit.

**If you add another scheduled workflow that commits back to `main`, reuse
this pattern rather than a plain `git commit && git push`:**
1. Retry the push with fetch + rebase on rejection (a handful of attempts
   with backoff), aborting cleanly with a clear error if rebase hits a real
   conflict rather than leaving the working tree in a broken rebase state.
2. Make any notification steps (issue creation, email, Slack, etc.)
   conditional on the *scan/build* step succeeding, not on the git-push step
   succeeding. A push race shouldn't also cost you the notification.

See the workflow file's inline comments and the "Fix opportunity-scan
workflow race with concurrent main pushes" commit for the concrete
implementation.

## Persistent outage/failure reporting
If a monitored external source (an API, a scraped site) is down across
multiple consecutive runs, don't repeat a generic "try again later" message
in every report. Track how long it's actually been failing (see
`opportunity-scanner/scripts/scan_opportunities.py`'s
`annotate_source_health()` for the pattern: a small JSON file tracking
first-failure date per source, committed to git) and report the real
duration, so a 5-week outage doesn't read identically to a 5-minute blip.
