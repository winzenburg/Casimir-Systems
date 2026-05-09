import Link from 'next/link';

const Logo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="10" cy="10" r="2.5" fill="white" />
  </svg>
);

const COLS = [
  {
    title: 'Platform',
    links: [
      { label: 'Casimir Intelligence', href: '/platform' },
      { label: 'Ecosystem Mapping',    href: '/platform#ecosystem' },
      { label: 'Risk Assessment',      href: '/platform#risk' },
      { label: 'Data Architecture',    href: '/platform#architecture' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'S&T Analysts',        href: '/solutions' },
      { label: 'Contracting Officers', href: '/solutions' },
      { label: 'Innovation Leaders',   href: '/solutions' },
    ],
  },
  {
    title: 'Defense',
    links: [
      { label: 'Defense Focus',      href: '/sbir' },
      { label: 'Space Force',        href: '/sbir#spaceforce' },
      { label: 'Compliance Posture', href: '/sbir#compliance' },
      { label: 'Request Briefing',   href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',     href: '/about' },
      { label: 'Resources', href: '/resources' },
      { label: 'Glossary',  href: '/resources#glossary' },
      { label: 'Contact',   href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: '#070f22',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid gap-12 mb-14" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-[30px] h-[30px] rounded-lg bg-[#2563EB] flex items-center justify-center">
                <Logo />
              </div>
              <span
                className="text-[14px] font-semibold text-white leading-none"
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}
              >
                Casimir Systems
              </span>
            </div>

            <p
              className="text-[13px] leading-relaxed mb-6 max-w-[240px]"
              style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}
            >
              AI-native intelligence infrastructure for defense and national security organizations.
            </p>

            {/* Product chip */}
            <div
              className="inline-flex items-center gap-2 rounded-full mb-5"
              style={{
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.2)',
                padding: '4px 12px',
              }}
            >
              <span
                className="text-[9px] font-bold tracking-widest text-[#60a5fa] uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Product
              </span>
              <span style={{ width: 1, height: 9, background: 'rgba(255,255,255,0.1)', display: 'block' }} />
              <span
                className="text-[11px] font-medium"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
              >
                Casimir Intelligence
              </span>
            </div>

            <div
              className="block text-[10px] font-medium tracking-widest uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.1em' }}
            >
              CUI // FOUO Compliant
            </div>

            <a
              href="https://linkedin.com/company/casimir-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] transition-colors duration-150 hover:text-white/70"
              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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
                className="text-[10px] font-semibold tracking-widest uppercase mb-5"
                style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
              >
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors duration-150 hover:text-white/75"
                      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}
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
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="text-[12px]"
            style={{ color: 'rgba(255,255,255,0.22)', fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            © 2026 Casimir Systems, Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security'].map((t) => (
              <span
                key={t}
                className="text-[12px] cursor-pointer transition-colors duration-150 hover:text-white/40"
                style={{ color: 'rgba(255,255,255,0.22)', fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
