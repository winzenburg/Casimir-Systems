import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy: Casimir Systems',
  description: 'Privacy policy for Casimir Systems and the Casimir Intelligence platform.',
  alternates: { canonical: 'https://www.casimirsystems.com/privacy' },
};

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly to us, such as when you complete our contact form or request a platform demonstration. This may include your name, email address, organization, and the nature of your inquiry. We do not collect sensitive personal information beyond what is necessary to respond to your request.`,
  },
  {
    title: 'How We Use Your Information',
    body: `Information collected through this website is used solely to respond to inquiries, schedule demonstrations, and communicate about our products and services. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: 'Government and Controlled Data',
    body: `Casimir Systems operates in the U.S. defense and national security space. Any data processed through the Casimir Intelligence platform is handled in accordance with applicable federal regulations, including DFARS 252.204-7012, NIST SP 800-171, and CUI/FOUO handling requirements. Platform data is never commingled with marketing or web analytics systems.`,
  },
  {
    title: 'Cookies and Analytics',
    body: `This website uses minimal, privacy-respecting analytics to understand aggregate traffic patterns. We do not use third-party advertising trackers. Essential cookies may be set to support basic site functionality.`,
  },
  {
    title: 'Data Retention',
    body: `Contact form submissions are retained for a reasonable period to support ongoing business communications and are deleted upon request. Platform-level data retention policies are governed by individual government contracts and applicable federal records requirements.`,
  },
  {
    title: 'Your Rights',
    body: `You may request access to, correction of, or deletion of personal information we hold about you by contacting us at the address below. We will respond to verified requests within a reasonable timeframe consistent with applicable law.`,
  },
  {
    title: 'Contact',
    body: `For privacy-related inquiries, please contact us via the contact form at casimirsystems.com/contact or by email at privacy@casimirsystems.com.`,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Legal</div>
          <h1 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-semibold text-[#0B132B] mb-3" style={{ fontSize: 18, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>
                {s.title}
              </h2>
              <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.8 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
