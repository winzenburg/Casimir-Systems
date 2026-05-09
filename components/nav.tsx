'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/platform',  label: 'Casimir Intelligence' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/sbir',      label: 'SBIR / Gov' },
  { href: '/about',     label: 'Company' },
  { href: '/resources', label: 'Resources' },
];

const Logo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="10" cy="10" r="2.5" fill="white" />
  </svg>
);

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,19,43,0.96)' : '#0B132B',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.07)'
            : '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[60px] flex items-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-[30px] h-[30px] rounded-lg flex items-center justify-center transition-opacity duration-200 group-hover:opacity-90"
              style={{ background: '#2563EB' }}
            >
              <Logo />
            </div>
            <span
              className="text-[14px] font-semibold text-white tracking-tight leading-none"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}
            >
              Casimir Systems
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'px-3.5 py-2 rounded-md text-[13px] font-medium transition-all duration-150',
                    active
                      ? 'text-white bg-white/9'
                      : 'text-white/50 hover:text-white/90 hover:bg-white/5',
                  ].join(' ')}
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="hidden md:block shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium text-white transition-all duration-150 hover:bg-[#1d4ed8]"
              style={{
                background: '#2563EB',
                fontFamily: 'IBM Plex Sans, sans-serif',
                boxShadow: '0 1px 3px rgba(37,99,235,0.4)',
              }}
            >
              Request Access
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-auto p-1.5 rounded-md text-white/50 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-[60px] left-0 right-0 z-40"
            style={{
              background: 'rgba(11,19,43,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'px-4 py-2.5 rounded-md text-[14px] font-medium transition-all duration-150',
                      active ? 'text-white bg-white/8' : 'text-white/55 hover:text-white hover:bg-white/5',
                    ].join(' ')}
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-3 px-4 py-3 rounded-lg text-[14px] font-medium text-white text-center transition-colors duration-150 hover:bg-[#1d4ed8]"
                style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                Request Access
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
