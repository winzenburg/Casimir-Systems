#!/usr/bin/env python3
"""
Email the latest opportunity briefing via Resend (https://resend.com).

Reuses the same RESEND_API_KEY and verified casimirsystems.com sending domain
as the marketing site's contact form (app/api/contact/route.ts), so no extra
email infrastructure is needed. Reads reports/latest-summary.json to find the
newest report and build the subject line, converts the markdown briefing to
HTML, and sends it to Ryan.

Usage:
    python scripts/send_report_email.py            # send (needs RESEND_API_KEY)
    python scripts/send_report_email.py --dry-run  # write HTML preview, don't send

Exits 0 with a clear message when RESEND_API_KEY is unset, so the scheduled
workflow can run this unconditionally without failing.
"""
from __future__ import annotations
import argparse
import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

import markdown
import requests
from dotenv import load_dotenv

REPORTS_DIR = Path(__file__).parent.parent / "reports"
SUMMARY_PATH = REPORTS_DIR / "latest-summary.json"

RESEND_URL = "https://api.resend.com/emails"
FROM_EMAIL = "Casimir Opportunity Scanner <noreply@casimirsystems.com>"
TO_EMAIL = "ryanwinzenburg@gmail.com"


def build_email() -> tuple[str, str]:
    """Returns (subject, html_body) from the latest scan summary + report."""
    if not SUMMARY_PATH.exists():
        raise SystemExit(f"ERROR: {SUMMARY_PATH} not found — run scan_opportunities.py first")

    summary = json.loads(SUMMARY_PATH.read_text())
    report_path = Path(__file__).parent.parent / summary["report"]
    if not report_path.exists():
        raise SystemExit(f"ERROR: report {report_path} not found")

    subject = (
        f"Opportunity scan {summary['date']} — "
        f"{summary['new']} new, {summary.get('hubzone', 0)} HUBZone, {summary['core']} core match(es)"
    )

    body_html = markdown.markdown(
        report_path.read_text(),
        extensions=["tables", "fenced_code"],
    )

    # simple branded wrapper matching the contact-form emails
    html = f"""\
<div style="font-family: Inter, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; color: #0B132B;">
  <div style="background: #0B132B; padding: 28px 36px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; font-size: 18px; margin: 0; font-weight: 700;">Casimir Opportunity Scanner</h1>
    <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 6px 0 0;">{summary['new']} new since last scan · {summary.get('hubzone', 0)} HUBZone set-aside(s) · {summary['core']} core capability match(es) · {summary['secondary']} market-intel item(s)</p>
  </div>
  <div style="background: #F8FAFC; padding: 28px 36px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 12px 12px; font-size: 14px; line-height: 1.65;">
    {body_html}
  </div>
</div>
"""
    return subject, html


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="write HTML preview to reports/, don't send")
    args = parser.parse_args()

    load_dotenv()
    subject, html = build_email()

    if args.dry_run:
        preview = REPORTS_DIR / "email-preview.html"
        preview.write_text(f"<!-- subject: {subject} -->\n{html}")
        print(f"Dry run — subject: {subject}")
        print(f"HTML preview written to: {preview}")
        return

    api_key = os.environ.get("RESEND_API_KEY")
    if not api_key:
        print("RESEND_API_KEY not set — skipping email (GitHub issue notification still applies)")
        return

    resp = requests.post(
        RESEND_URL,
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        json={"from": FROM_EMAIL, "to": [TO_EMAIL], "subject": subject, "html": html},
        timeout=30,
    )
    if resp.status_code >= 400:
        raise SystemExit(f"ERROR: Resend API returned {resp.status_code}: {resp.text}")
    print(f"Email sent to {TO_EMAIL} — subject: {subject} (id: {resp.json().get('id', 'unknown')})")


if __name__ == "__main__":
    main()
