import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
  title: 'About Casimir Systems — Agile Defense Technology Firm',
  description: 'Casimir Systems is an agile defense technology firm building AI-powered intelligence infrastructure for the U.S. Department of Defense and Space Force. Founded in Denver, CO — near Peterson and Schriever Space Force Bases.',
  alternates: { canonical: 'https://casimirsystems.com/about' },
};

const VALUES = [
  { title: 'Authoritative & Trusted', desc: 'We understand the stakes of national security and the rigorous compliance it demands. NIST 800-171, CMMC, CUI — we speak the language of institutional trust from day one, not as an afterthought.' },
  { title: 'Agile & Builder-Focused', desc: 'We are builders, not consultants. We ship working software in 4–6 week cycles using AI-augmented development. Our applications are designed for immediate operational impact, not multi-year deployments.' },
  { title: 'Strategic & Precise', desc: 'We scope before we build. Every product we ship begins with a specific, validated DoD mission requirement — not a market hypothesis or a solution in search of a problem.' },
  { title: 'Modular by Design', desc: 'Our applications are zero-code, open-architecture, and built to integrate with existing DoD data environments. Modules deploy independently or as a complete platform stack.' },
];

const DOMAINS = [
  { label: 'Space Force / SpaceWERX', sub: 'S&T ecosystem intelligence, co-investment decision support', active: true },
  { label: 'AFWERX / Air Force S&T', sub: 'Technology scouting, dual-use identification, program analysis', active: false },
  { label: 'DARPA / ARPA-H', sub: 'Research pipeline synthesis, advanced concept tracking', active: false },
  { label: 'Army Futures Command', sub: 'Industrial base mapping, supplier intelligence, co-investment alignment', active: false },
  { label: 'SOCOM / Special Operations', sub: 'Vendor intelligence, acquisition decision support, threat synthesis', active: false },
  { label: 'Naval Innovation (NavalX)', sub: 'Maritime S&T ecosystem mapping, dual-use technology identification', active: false },
];

const EXPERIENCE = [
  { org: 'U.S. Dept. of the Interior', sub: 'Office of Natural Resources Revenue', detail: 'Federal information systems for resource management' },
  { org: 'CVS Health / Aetna', sub: 'Enterprise UX', detail: 'Task completion 50% → 90% on mission-critical healthcare apps' },
  { org: 'Pitney Bowes', sub: 'Design Systems', detail: 'Standardized design architecture across 300+ products' },
  { org: 'CenturyLink / Level3', sub: 'Enterprise B2B', detail: 'Telecom platform design for enterprise customers' },
  { org: 'MapQuest / AOL', sub: 'Information Architecture', detail: 'Early-scale consumer platform UX' },
  { org: 'Winzinvest', sub: 'Founder', detail: 'Current role — institutional-grade execution for active strategies' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>The Company</div>
            <h1 className="font-extrabold text-white mb-6" style={{ fontSize: 'clamp(32px,4vw,56px)', fontFamily: 'Inter, sans-serif', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
              Building the software<br />that secures the future.
            </h1>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
              Casimir Systems is an agile defense technology firm building AI-driven decision support applications for the U.S. Department of Defense. We ship working software fast — designed for immediate operational impact, not multi-year deployments.
            </p>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold text-white transition-colors duration-200 hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Inter, sans-serif' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-white/50 font-normal">Current product:</span>
              Casimir Intelligence →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Company Character · The Strategic Builder</div>
              <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Authoritative. Agile. Built to ship.</h2>
              <p className="text-[17px] text-[#64748B] max-w-2xl mx-auto" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
                Casimir Systems doesn&apos;t sell enterprise transformation. We build precise, modular software that works on day one — and we stand behind it with evidence, not marketing.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerMs={100}>
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl p-8 flex gap-5" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div className="w-1 rounded-sm bg-[#2563EB] shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0B132B] mb-2.5 text-[17px]" style={{ fontFamily: 'Inter, sans-serif' }}>{v.title}</h3>
                  <p className="text-[14px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* DoD Domains */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Defense Domains</div>
            <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Built for DoD. Built for any branch.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Casimir Systems is not a single-contract company. Our methodology applies wherever DoD stakeholders need faster, more defensible decision support — regardless of service branch or program office.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" staggerMs={80}>
            {DOMAINS.map((d) => (
              <div key={d.label} className="rounded-xl p-6 flex gap-4" style={{ background: d.active ? '#0B132B' : '#F8FAFC', border: d.active ? '1px solid rgba(37,99,235,0.35)' : '1px solid #E2E8F0' }}>
                <div className="shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: d.active ? '#10B981' : '#CBD5E1' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-[14px]" style={{ fontFamily: 'Inter, sans-serif', color: d.active ? '#fff' : '#0B132B' }}>{d.label}</div>
                  <div className="text-[12px] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif', color: d.active ? 'rgba(255,255,255,0.5)' : '#64748B' }}>{d.sub}</div>
                  {d.active && (
                    <div className="mt-2 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#10B981', fontFamily: 'Inter, sans-serif' }}>Active · Phase IIa</div>
                  )}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>Founder &amp; Principal Investigator</div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-[280px_1fr] gap-16 rounded-2xl p-12 mb-10" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              {/* Identity column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5" style={{ border: '3px solid rgba(37,99,235,0.25)' }}>
                  <Image
                    src="/uploads/ryan-winzenburg.png"
                    alt="Ryan Winzenburg, Founder & Principal Investigator of Casimir Systems"
                    width={120}
                    height={120}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="text-[20px] font-bold text-[#0B132B] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Ryan Winzenburg</div>
                <div className="text-[13px] font-medium text-[#2563EB] mb-1" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Founder &amp; Principal Investigator</div>
                <div className="text-[12px] text-[#64748B] mb-5" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Denver, CO</div>
                <div className="text-[11px] text-[#64748B] leading-relaxed px-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  Near Peterson Space Force Base<br />&amp; Schriever Space Force Base
                </div>
                <div className="w-full h-px bg-[#E2E8F0] my-5" />
                <div className="w-full text-left">
                  <div className="text-[12px] font-semibold text-[#0B132B] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Current Role</div>
                  <div className="text-[11px] text-[#64748B] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    Founder<br />
                    <span>Winzinvest</span>
                  </div>
                </div>
              </div>

              {/* Bio column */}
              <div>
                <p className="text-[16px] text-[#334155] mb-6" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.8 }}>
                  Ryan Winzenburg has spent 25+ years solving one problem: making complex systems navigable for the people who depend on them most. As a UX leader and information architect, he has built decision-support interfaces across federal government, healthcare, telecommunications, and enterprise technology — at organizations where the cost of a bad decision is measured in lives, dollars, or national infrastructure.
                </p>
                <p className="text-[16px] text-[#334155] mb-8" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.8 }}>
                  Casimir Systems is the synthesis of that career. The architecture behind Casimir Intelligence — multi-layer risk gates, zero-code interfaces, real-time data synthesis — draws directly from systems Ryan has built and validated in the field. He has compressed product development cycles from 18 months to 4–6 weeks using AI-augmented workflows, and brings that same operational velocity to the DoD co-investment problem.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {EXPERIENCE.map((e, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                      <div className="text-[12px] font-semibold text-[#0B132B] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{e.org}</div>
                      <div className="text-[11px] text-[#2563EB] mb-1" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{e.sub}</div>
                      <div className="text-[11px] text-[#64748B] leading-snug" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{e.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feasibility proof */}
          <ScrollReveal delay={150}>
            <div className="mb-2">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-[#64748B] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Demonstrated Feasibility · AI Platforms in Production</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-7" style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3v12M5 5l8 8M13 5l-8 8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Winzinvest</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>Automated Trading Platform</div>
                    </div>
                  </div>
                  <p className="text-[13px] m-0" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
                    Automated trading execution with 13-layer risk gate analysis — the direct architectural precedent for Casimir Intelligence&apos;s multi-layer institutional risk framework. Validates real-time, multi-variable risk synthesis at production scale.
                  </p>
                </div>
                <div className="rounded-xl p-7" style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="#10B981" strokeWidth="1.5" /><path d="M6 9l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Kinlet</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>Caregiver SaaS Platform</div>
                    </div>
                  </div>
                  <p className="text-[13px] m-0" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
                    Behavioral design frameworks applied to a zero-code caregiver platform — demonstrating the ability to build complex, compliance-sensitive SaaS products with compressed timelines, from concept to production in 4–6 weeks.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hiring CTA */}
          <ScrollReveal delay={200}>
            <div className="mt-8 p-7 rounded-xl flex items-center justify-between gap-8" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div>
                <div className="text-[14px] font-semibold text-[#0B132B] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Building the team.</div>
                <div className="text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>
                  Casimir Systems is actively recruiting for key roles in intelligence analysis, platform engineering, and DoD acquisition advisory. If you have relevant experience and share the mission, we want to hear from you.
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white whitespace-nowrap transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13 }}>
                Join the Mission <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
