import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { TrlBadge, ComplianceBadge, StatusBadge } from '@/components/risk-badge';

export const metadata: Metadata = {
  title: 'SBIR: Direct-to-Phase II Pursuit · U.S. Space Force',
  description: 'Casimir Intelligence is a functioning platform, not a concept, built for U.S. Space Force Task Force Futures in response to a Direct-to-Phase II SBIR solicitation. Proposal submitted; award decision pending.',
  alternates: { canonical: 'https://www.casimirsystems.com/sbir' },
};

const SOLICITATION_REQS = [
  {
    req: 'ASOT Data Synthesis',
    detail: 'Real-time fusion from 40+ authoritative sources: government contracts, VC filings, patent databases, and academic research, unified into a single queryable intelligence layer.',
  },
  {
    req: 'VC Flow Tracking',
    detail: 'Live investment monitoring across 200+ defense-relevant funds, mapped against RDT&E priorities and Objective Force Design capability themes.',
  },
  {
    req: 'Multi-Layer Risk Gating',
    detail: 'FOCI screening, CMMC Level 2 readiness, TRL scoring (DoD 1–9 scale), and supply chain exposure, each with full auditable evidence chains for contracting officers.',
  },
  {
    req: 'Zero-Code Interface',
    detail: 'No engineering support required. S&T analysts and contracting officers query, filter, and export briefing packages in minutes, not weeks.',
  },
  {
    req: 'Modular, Open Architecture',
    detail: 'REST API-first design enables integration with existing DoD data environments. Modules deploy independently or as a complete platform stack.',
  },
  {
    req: 'Phase I-Equivalent Feasibility',
    detail: 'Casimir Intelligence is a functioning platform, not a prototype or concept, satisfying the D2P2 feasibility requirement at time of proposal submission.',
  },
];

const COMPLIANCE_ITEMS: { standard: string; status: 'aligned' | 'pending' | 'na' }[] = [
  { standard: 'NIST 800-171', status: 'aligned' },
  { standard: 'CMMC Level 2', status: 'aligned' },
  { standard: 'FedRAMP', status: 'pending' },
  { standard: 'CUI/FOUO', status: 'aligned' },
  { standard: 'DISA STIG', status: 'aligned' },
  { standard: 'IL4', status: 'pending' },
];

const TIMELINE = [
  { phase: 'Phase I-Equiv.', desc: 'Feasibility demonstrated via working platform (complete at proposal)', trl: 4, color: '#10B981' },
  { phase: 'D2P2 Decision', desc: 'Proposal submitted, award decision pending (target Q3 2026)', trl: 5, color: '#2563EB' },
  { phase: 'Phase II', desc: 'Full platform development with SpaceWERX / TF-F integration', trl: 7, color: '#8B5CF6' },
  { phase: 'Transition', desc: 'Phase III transition and operational deployment', trl: 9, color: '#F59E0B' },
];

const PATHWAYS: { org: string; status: 'active' | 'targeted' | 'monitoring'; statusLabel: string; desc: string }[] = [
  {
    org: 'SpaceWERX · U.S. Space Force',
    status: 'active',
    statusLabel: 'D2P2 Submitted',
    desc: 'Casimir Intelligence, purpose-built for Task Force Futures in response to a Direct-to-Phase II SBIR solicitation. Proposal submitted with a working platform: our anchor pursuit and the proving ground for our compliance-first delivery model.',
  },
  {
    org: 'SOFWERX · U.S. Special Operations Command',
    status: 'targeted',
    statusLabel: 'Targeted · Next Pathway',
    desc: 'SOCOM holds dedicated acquisition authority for unconventional, fast-moving problems, and the shortest chain between operator need and fielded capability. Our intelligence synthesis and unified operating picture work is built for this pathway.',
  },
  {
    org: 'AFWERX · U.S. Air Force',
    status: 'monitoring',
    statusLabel: 'Monitoring Topics',
    desc: 'We track AFWERX open topics and submit where solicitations align with our decision-support and data-synthesis competency.',
  },
  {
    org: 'NRO · Commercial Engagement',
    status: 'monitoring',
    statusLabel: 'Monitoring Topics',
    desc: 'The National Reconnaissance Office is actively expanding participation by non-traditional small businesses. Our auditable AI synthesis architecture maps directly to its data-at-scale mission.',
  },
];

const TAGS = [
  'S&T Ecosystem Synthesis', 'Co-Investment Decision Support', 'Zero-Code Interface',
  'ASOT Data Fusion', 'Dual-Use Technology ID', 'FOCI Risk Screening',
  'CMMC Readiness Scoring', 'CUI/FOUO Compliant', 'Open Architecture', 'Modular Design',
  'HUBZone-Eligible',
];

export default function SbirPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="absolute pointer-events-none" style={{ top: '30%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)' }}>
              <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>D2P2 Submitted · Space Force</span>
            </div>
            <h1 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(36px,4.5vw,60px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Purpose-built for<br /><span style={{ color: '#2563EB' }}>Task Force Futures.</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
              Casimir Intelligence was purpose-built for U.S. Space Force Task Force Futures in response to a Direct-to-Phase II SBIR solicitation. Our proposal is submitted and the award decision is pending, but the platform is not a promise. We have already built it.
            </p>
            <div className="flex gap-3 flex-wrap mb-10">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                Request Platform Access <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                Explore the Platform
              </Link>
            </div>
            <div className="flex gap-2 flex-wrap">
              {TAGS.map((tag, i) => (
                <span key={tag} className="text-[11px] font-medium rounded-full px-2.5 py-1" style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  background: i % 3 === 0 ? 'rgba(37,99,235,0.07)' : i % 3 === 1 ? 'rgba(16,185,129,0.07)' : 'rgba(245,158,11,0.07)',
                  color: i % 3 === 0 ? '#93C5FD' : i % 3 === 1 ? '#6EE7B7' : '#FCD34D',
                  border: `1px solid ${i % 3 === 0 ? 'rgba(37,99,235,0.2)' : i % 3 === 1 ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'}`,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Context card */}
          <div className="rounded-2xl p-8" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Solicitation Context</div>
            {[
              { label: 'Program Office', value: 'U.S. Space Force · Task Force Futures (TF-F)' },
              { label: 'Mechanism', value: 'Direct-to-Phase II SBIR' },
              { label: 'Vehicle', value: 'SpaceWERX / SBIR' },
              { label: 'Requirement', value: 'S&T Ecosystem & Co-Investment Decision Support' },
              { label: 'Feasibility Standard', value: 'Working platform required at proposal time' },
              { label: 'Set-Aside Profile', value: 'Small business · HUBZone-eligible principal office' },
              { label: 'Status', value: 'Proposal submitted · award decision pending' },
            ].map((row, i, arr) => (
              <div key={row.label} className="flex justify-between gap-4 py-3" style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span className="text-[12px] shrink-0" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{row.label}</span>
                <span className="text-[13px] font-medium text-white text-right" style={{ fontFamily: 'Inter, sans-serif' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D2P2 explainer */}
      <section className="py-28 lg:py-32 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>What is D2P2?</div>
                <h2 className="font-bold text-[#0B132B] mb-5" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                  The DoD&apos;s fast-track innovation pathway.
                </h2>
                <p className="text-[16px] text-[#64748B] mb-5" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                  The Direct-to-Phase II mechanism bypasses the traditional SBIR Phase I entirely, allowing companies with demonstrated Phase I-equivalent feasibility to compete directly for Phase II contracts. This is the DoD&apos;s signal that it needs this capability <em>now</em>, not in three years.
                </p>
                <p className="text-[16px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                  Casimir Intelligence satisfies this requirement. It is a functioning platform, not a proposal to build one.
                </p>
              </div>
              <StaggerReveal className="grid grid-cols-2 gap-4" staggerMs={80}>
                {TIMELINE.map((t) => (
                  <div key={t.phase} className="rounded-xl p-6" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                    <div className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{ color: t.color, fontFamily: 'Inter, sans-serif' }}>{t.phase}</div>
                    <TrlBadge trl={t.trl} label={`TRL ${t.trl}`} />
                    <p className="text-[13px] text-[#64748B] mt-3 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{t.desc}</p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solicitation compliance matrix */}
      <section className="py-28 lg:py-32 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Compliance Matrix</div>
            <h2 className="font-bold text-[#0B132B] mb-3" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Every technical requirement addressed.</h2>
            <p className="text-[17px] text-[#64748B] mb-10" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              The Space Force requirement defines specific technical capabilities. Here is how Casimir Intelligence maps to each one.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E2E8F0' }}>
              {SOLICITATION_REQS.map((item, i) => (
                <div key={item.req} className="p-6 flex gap-4 items-start" style={{ borderBottom: i < SOLICITATION_REQS.length - 1 ? '1px solid #E2E8F0' : 'none', background: i % 2 === 0 ? '#fff' : '#F8FAFC' }}>
                  <CheckCircle className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0B132B] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{item.req}</div>
                    <div className="text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Security posture */}
      <section className="py-28 lg:py-32 px-6 lg:px-10" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Security Posture</div>
            <h2 className="font-bold text-[#0B132B] mb-10" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Compliance-first from day one.</h2>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-4" staggerMs={80}>
            {COMPLIANCE_ITEMS.map((c) => (
              <div key={c.standard} className="rounded-xl p-5 flex items-center justify-between" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div className="text-[14px] font-semibold text-[#0B132B]" style={{ fontFamily: 'Inter, sans-serif' }}>{c.standard}</div>
                <ComplianceBadge standard={c.standard} status={c.status} />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Innovation pathways */}
      <section className="py-28 lg:py-32 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Innovation Pathways</div>
            <h2 className="font-bold text-[#0B132B] mb-3" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>The shortest path from operator need to fielded capability.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-10" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Requirements too often lose their meaning between the operator who has the problem and the RFP that describes it. We engage the DoD innovation ecosystem where the chain of translation is shortest, and we show up repeatedly, so program offices know exactly who we are and what we build.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-4" staggerMs={80}>
            {PATHWAYS.map((p) => (
              <div key={p.org} className="rounded-xl p-7" style={{ background: p.status === 'active' ? '#0B132B' : '#F8FAFC', border: p.status === 'active' ? '1px solid rgba(37,99,235,0.35)' : p.status === 'targeted' ? '1px solid rgba(37,99,235,0.4)' : '1px solid #E2E8F0' }}>
                <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                  <div className="text-[15px] font-bold" style={{ fontFamily: 'Inter, sans-serif', color: p.status === 'active' ? '#fff' : '#0B132B' }}>{p.org}</div>
                  <StatusBadge status={p.status} label={p.statusLabel} />
                </div>
                <p className="text-[13px] m-0" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7, color: p.status === 'active' ? 'rgba(255,255,255,0.6)' : '#64748B' }}>{p.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-32 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>For Contracting Officers &amp; S&T Leaders</div>
            <h2 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              Ready to evaluate Casimir Intelligence?
            </h2>
            <p className="text-[17px] mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Schedule a scoped demonstration or request security documentation. We respond within one business day.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px text-[15px]" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Request Access <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px text-[15px]" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Platform Overview
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
