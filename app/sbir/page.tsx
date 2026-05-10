import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { TrlBadge, ComplianceBadge } from '@/components/risk-badge';

export const metadata: Metadata = {
  title: 'Defense Focus — SF254-D1201 | Casimir Systems',
  description: 'Casimir Intelligence was purpose-built to address SF254-D1201 from U.S. Space Force Task Force Futures — a Direct-to-Phase II platform covering all six solicitation objectives.',
};

const PHASE_II_OBJECTIVES = [
  {
    num: '01',
    obj: 'Assess Technology Trajectories',
    solicit: 'Identify and track R&D activities across industry and academia, capability development timelines, and TRL in areas of Space Force interest. Visualize technology maturation paths.',
    casimir: 'S&T Ecosystem Mapping synthesizes patent filings, VC filings, government contracts, and academic research from 40+ sources into a dynamic, queryable network graph. TRL scoring uses DoD 1–9 methodology with exportable snapshots for TF-F briefings.',
  },
  {
    num: '02',
    obj: 'Analyze Capital Flow & Investment Trends',
    solicit: 'Provide insight into private and strategic investor activities. Assess convergence or misalignment between private capital and government priorities.',
    casimir: 'Real-time investment monitoring across 200+ defense-relevant funds, mapped against RDT&E priorities. Dual-use opportunity identification and convergence analysis between private capital and Objective Force Design themes.',
  },
  {
    num: '03',
    obj: 'Capture & Retain Institutional Knowledge',
    solicit: 'Develop structured knowledge management frameworks to document past and ongoing engagements. Enable continuity across personnel changes and reduce duplicated outreach efforts.',
    casimir: 'Structured engagement logs capture every company, investor, and technology interaction by officer and date. Personnel-agnostic knowledge continuity prevents information loss across TF-F rotations. Automated deduplication eliminates redundant outreach.',
  },
  {
    num: '04',
    obj: 'Facilitate Co-Investment Planning',
    solicit: 'Support planning and coordination of joint investment strategies between government and private sector. Provide automation for early-stage scouting, portfolio analysis, and strategic transition planning.',
    casimir: 'One-click investment memo generation aligned to Objective Force Design priorities. Automated co-investment opportunity scoring surfaces misalignments between RDT&E budget and private capital flows. SBIR/STTR pipeline integration for Phase III transition planning.',
  },
  {
    num: '05',
    obj: 'Enable Situational Awareness & Data Exploration',
    solicit: 'Present relevant, high-quality insights via an intuitive, user-friendly interface. Support data-driven prioritization, trend identification, and exploratory analysis for non-technical users.',
    casimir: 'Zero-code operational interface designed for S&T analysts and contracting officers — no engineering support required. Query, filter, and generate briefing packages in minutes. Interactive ecosystem visualization and trend dashboards.',
  },
  {
    num: '06',
    obj: 'Ensure Data Governance & Accountability',
    solicit: 'Implement robust controls for data access, version control, and leadership oversight. Ensure auditability and integrity of all outputs produced within the solution.',
    casimir: 'Full audit trail for every recommendation, flag, and export — traceable to primary sources. Role-based access controls and version-controlled data layers. CUI/FOUO certified with NIST 800-171 compliance and CMMC Level 2 readiness.',
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
  { phase: 'D2P2 Award', desc: 'SBIR Direct-to-Phase II award (target Q3 2026)', trl: 5, color: '#2563EB' },
  { phase: 'Phase II', desc: 'Full platform development with SpaceWERX / TF-F integration', trl: 7, color: '#8B5CF6' },
  { phase: 'Transition', desc: 'Phase III transition and operational deployment', trl: 9, color: '#F59E0B' },
];

const TAGS = [
  'S&T Ecosystem Synthesis', 'Co-Investment Decision Support', 'Zero-Code Interface',
  'ASOT Data Fusion', 'Dual-Use Technology ID', 'FOCI Risk Screening',
  'CMMC Readiness Scoring', 'CUI/FOUO Compliant', 'Open Architecture', 'Modular Design',
];

export default function SbirPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="absolute pointer-events-none" style={{ top: '30%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)' }}>
              <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>SBIR D2P2 · SF254-D1201</span>
            </div>
            <h1 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(36px,4.5vw,60px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Purpose-built for<br /><span style={{ color: '#2563EB' }}>Task Force Futures.</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
              Casimir Intelligence was architected in direct response to SBIR solicitation <strong className="text-white font-semibold">SF254-D1201</strong>. We are not proposing to build this capability — we have already built it.
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
              { label: 'Solicitation Topic', value: 'SF254-D1201' },
              { label: 'Mechanism', value: 'Direct-to-Phase II (D2P2)' },
              { label: 'Vehicle', value: 'SpaceWERX / SBIR' },
              { label: 'Requirement', value: 'S&T Ecosystem & Co-Investment Decision Support' },
              { label: 'Feasibility Standard', value: 'Working platform required at proposal time' },
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
      <section className="py-20 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>What is D2P2?</div>
                <h2 className="font-bold text-[#0B132B] mb-5" style={{ fontSize: 'clamp(24px,2.5vw,38px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                  The DoD&apos;s fast-track innovation pathway.
                </h2>
                <p className="text-[16px] text-[#64748B] mb-5" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                  The Direct-to-Phase II mechanism bypasses the traditional SBIR Phase I entirely, allowing companies with demonstrated Phase I-equivalent feasibility to compete directly for Phase II contracts. This is the DoD&apos;s signal that it needs this capability <em>now</em> — not in three years.
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

      {/* Phase II objective mapping */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Phase II Objective Mapping</div>
            <h2 className="font-bold text-[#0B132B] mb-3" style={{ fontSize: 'clamp(24px,2.5vw,36px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>All six solicitation objectives addressed.</h2>
            <p className="text-[17px] text-[#64748B] mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7, maxWidth: 640 }}>
              SF254-D1201 defines six core Phase II objectives. Casimir Intelligence was architected to address each one at time of proposal — not as a roadmap.
            </p>
          </ScrollReveal>
          <StaggerReveal className="flex flex-col gap-0" staggerMs={60}>
            {PHASE_II_OBJECTIVES.map((obj, i) => (
              <div
                key={obj.num}
                className="grid gap-8 p-7"
                style={{
                  gridTemplateColumns: '48px 1fr 1fr',
                  borderTop: '1px solid #E2E8F0',
                  background: i % 2 === 0 ? '#fff' : '#F8FAFC',
                }}
              >
                {/* Objective number */}
                <div
                  className="font-bold"
                  style={{ fontSize: 28, color: 'rgba(37,99,235,0.2)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {obj.num}
                </div>

                {/* Solicitation requirement */}
                <div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Solicitation Requirement
                  </div>
                  <div className="text-[14px] font-semibold text-[#0B132B] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{obj.obj}</div>
                  <div className="text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{obj.solicit}</div>
                </div>

                {/* Casimir response */}
                <div className="rounded-xl p-5" style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.1)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-[#10B981]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Casimir Response
                    </div>
                  </div>
                  <div className="text-[13px] text-[#334155]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{obj.casimir}</div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Security posture */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Security Posture</div>
            <h2 className="font-bold text-[#0B132B] mb-10" style={{ fontSize: 'clamp(24px,2.5vw,36px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Compliance-first from day one.</h2>
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

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>For Contracting Officers &amp; S&T Leaders</div>
            <h2 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
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
