import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = 'ryan@casimirsystems.com';
const FROM_EMAIL = 'Casimir Systems <noreply@casimirsystems.com>';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, org, role, email, message } = req.body ?? {};

  if (!name || !org || !email || !role) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // Notify the Casimir Systems team
    const { error: notifyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      replyTo: email,
      subject: `New Access Request — ${name} (${org})`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #0B132B;">
          <div style="background: #0B132B; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 20px; margin: 0; font-weight: 700;">
              New Platform Access Request
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 8px 0 0;">
              Casimir Intelligence
            </p>
          </div>
          <div style="background: #F8FAFC; padding: 32px 40px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 13px; color: #64748B; width: 140px;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 13px; color: #64748B;">Organization</td><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600;">${org}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 13px; color: #64748B;">Role</td><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 14px;">${role}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 13px; color: #64748B;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
              ${message ? `<tr><td style="padding: 10px 0; font-size: 13px; color: #64748B; vertical-align: top;">S&amp;T Domain</td><td style="padding: 10px 0; font-size: 14px; line-height: 1.6;">${message}</td></tr>` : ''}
            </table>
            <div style="margin-top: 28px;">
              <a href="mailto:${email}?subject=Re: Casimir Intelligence Access Request" style="background: #2563EB; color: #fff; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    if (notifyError) {
      throw new Error(notifyError.message);
    }

    // Send confirmation to the requester
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Access Request Received — Casimir Intelligence',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #0B132B;">
          <div style="background: #0B132B; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 20px; margin: 0; font-weight: 700;">
              Casimir Systems
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 8px 0 0;">
              Access Request Confirmation
            </p>
          </div>
          <div style="background: #F8FAFC; padding: 40px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 15px; line-height: 1.7; margin: 0 0 20px;">Hi ${name},</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
              We've received your request for access to <strong>Casimir Intelligence</strong>. A member of the Casimir Systems team will reach out within one business day to schedule your platform demonstration.
            </p>
            <div style="background: rgba(37,99,235,0.06); border: 1px solid rgba(37,99,235,0.15); border-radius: 8px; padding: 20px; margin: 28px 0;">
              <p style="font-size: 13px; color: #334155; line-height: 1.65; margin: 0;">
                All information provided is handled under CUI/FOUO protocols by Casimir Systems. This confirmation does not transmit classified information.
              </p>
            </div>
            <p style="font-size: 14px; color: #64748B; line-height: 1.7; margin: 0;">
              Casimir Systems — <a href="https://casimirsystems.com" style="color: #2563EB; text-decoration: none;">casimirsystems.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send. Please try again.' });
  }
}
