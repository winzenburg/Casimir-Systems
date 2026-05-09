import Link from 'next/link';

const CasimirLogo = () => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="8" r="2" fill="white" />
  </svg>
);

const COLS = [
  {
    title: 'Platform',
    links: [
      { label: 'Casimir Intelligence', href: '/platform' },
      { label: 'Ecosystem Mapping', href: '/platform#ecosystem' },
      { label: 'Risk Assessment', href: '/platform#risk' },
      { label: 'Data Architecture', href: '/platform#architecture' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'S&T Analysts', href: '/solutions#analysts' },
      { label: 'Contracting Officers', href: '/solutions#contracting' },
      { label: 'Innovation Leaders', href: '/solutions#leaders' },
    ],
  },
  {
    title: 'Government',
    links: [
      { label: 'SBIR / D2P2', href: '/sbir' },
      { label: 'Space Force Focus', href: '/sbir#spaceforce' },
      { label: 'Compliance Posture', href: '/sbir#compliance' },
      { label: 'Request Briefing', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Mission', href: '/about' },
      { label: 'Leadership', href: '/about#team' },
      { label: 'Resources', href: '/resources' },
      { label: 'Glossary', href: '/resources#glossary' },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: '#0B132B',
        borderColor: 'rgba(255,255,255,0.08)',
        padding: '64px 40px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 mb-12" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}>
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#2563EB] flex items-center justify-center">
                <CasimirLogo />
              </div>
              <span className="text-[15px] font-bold text-white" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                Casimir Systems
              </span>
            </div>
            <p className="text-[13px] leading-relaxed mb-5 max-w-[260px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              AI-native intelligence infrastructure for defense and national security organizations.
            </p>

            {/* Product chip */}
            <div
              className="inline-flex items-center gap-2 rounded-full mb-4"
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.25)',
                padding: '4px 12px',
              }}
            >
              <span className="text-[9px] font-bold tracking-widest text-[#2563EB] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Product
              </span>
              <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', display: 'block' }} />
              <span className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                Casimir Intelligence
              </span>
            </div>

            <div className="block mt-2 text-[11px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'IBM Plex Sans, sans-serif', letterSpacing: '0.06em' }}>
              CUI // FOUO Compliant
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/casimir-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[12px] transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Nav columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <div
                className="text-[11px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
              >
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors duration-150 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
            © 2026 Casimir Systems, Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security'].map((t) => (
              <span key={t} className="text-[12px] cursor-pointer hover:text-white/60 transition-colors" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
