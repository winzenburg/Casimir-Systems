'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/platform', label: 'Casimir Intelligence' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/sbir', label: 'SBIR / Gov' },
  { href: '/about', label: 'Company' },
  { href: '/resources', label: 'Resources' },
];

const CasimirLogo = () => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="8" r="2" fill="white" />
  </svg>
);

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,19,43,0.97)' : '#0B132B',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-md bg-[#2563EB] flex items-center justify-center">
              <CasimirLogo />
            </div>
            <span className="text-[15px] font-bold text-white tracking-tight" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              Casimir Systems
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-150"
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                    background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div className="hidden md:block shrink-0" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-medium text-white transition-all duration-200"
              style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', letterSpacing: '0.02em' }}
            >
              Request Access
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-auto p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-white/8"
            style={{ background: 'rgba(11,19,43,0.98)', backdropFilter: 'blur(16px)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/6 transition-all"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-4 py-3 rounded-md text-sm font-medium text-white text-center transition-all"
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
