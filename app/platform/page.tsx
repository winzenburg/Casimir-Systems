import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { NetworkGraph } from '@/components/network-graph';
import { PlatformMockup } from '@/components/platform-mockup';

export const metadata: Metadata = {
  title: 'Casimir Intelligence — Defense S&T Co-Investment Platform',
  description: 'Casimir Intelligence maps S&T ecosystems, tracks VC flows, synthesizes AI-powered intelligence briefs, and surfaces co-investment opportunities — zero-code and fully auditable. Purpose-built for U.S. Space Force Task Force Futures.',
  alternates: { canonical: 'https://www.casimirsystems.com/platform' },
};

const FEATURES = [
  {
    eyebrow: 'Core Capability 01',
    title: 'S&T Ecosystem Mapping',
    desc: 'Query the full commercial innovation landscape. Casimir Intelligence synthesizes patent filings, funding rounds, government contracts, and academic research into a dynamic, queryable network graph.',
    points: [
      'Real-time data synthesis from 40+ authoritative sources',
      'Company-investor-technology relationship mapping',
      'TRL scoring with DoD-standard methodology (TRL 1–9)',
      'Exportable ecosystem snapshots for briefings',
    ],
  },
  {
    eyebrow: 'Core Capability 02',
    title: 'Co-Investment Decision Support',
    desc: 'Align RDT&E budget priorities with private venture capital flows. Casimir Intelligence surfaces co-investment opportunities mapped directly against Objective Force Design capability themes.',
    points: [
      'VC flow tracking across 200+ defense-relevant funds',
      'SBIR/STTR pipeline integration and signal scoring',
      'Dual-use technology identification and prioritization',
      'Defensible, evidence-backed investment recommendations',
    ],
  },
  {
    eyebrow: 'Core Capability 03',
    title: 'AI Knowledge Synthesis',
    desc: 'Claude-powered synthesis engine converts raw entity and signal data into structured intelligence briefs — automatically theme-tagged, source-attributed, and ready to brief to leadership.',
    points: [
      'Anthropic Claude Sonnet AI synthesis engine',
      'Automatic theme tagging across 15 capability domains',
      'Analyst engagement tracking and CRM-style activity logging',
      'Human-in-the-loop review workflow before dissemination',
    ],
  },
  {
    eyebrow: 'Core Capability 04',
    title: 'Institutional Risk & Governance',
    desc: 'Every co-investment recommendation is backed by a multi-layer risk gate architecture designed for the DoD acquisition environment. No black boxes — every flag is traceable to a primary source.',
    points: [
      'FOCI exposure screening and classification tracking',
      'CMMC Level 2 readiness scoring per entity',
      'CUI/FOUO-compliant data handling architecture',
      'Full audit trail for contracting officers',
    ],
  },
];

const SECURITY_BADGES = [
  { label: 'NIST 800-171', sub: 'Compliant' },
  { label: 'FedRAMP', sub: 'In Process' },
  { label: 'CUI/FOUO', sub: 'Handling Certified' },
  { label: 'CMMC Level 2', sub: 'Ready' },
  { label: 'IL4', sub: 'Compatible' },
  { label: 'DISA STIG', sub: 'Hardened' },
];

const SBIR_REQS = [
  { req: 'ASOT Data Synthesis', cap: 'Fuses data from 40+ verified sources — government contracts, VC filings, patent databases, and academic research — into a single, queryable intelligence layer.' },
  { req: 'Real-Time VC Flow Tracking', cap: 'Investment monitoring across 200+ defense-relevant funds, mapped against RDT&E priorities and Objective Force Design themes.' },
  { req: 'AI Knowledge Synthesis', cap: 'Anthropic Claude Sonnet generates structured intelligence briefs per entity — theme-tagged across 15 capability domains, with human-in-the-loop review workflow.' },
  { req: 'Multi-Layer Risk & Governance', cap: 'FOCI screening, CMMC Level 2 readiness, TRL scoring (DoD 1–9 scale), and CUI/FOUO-compliant data handling — each with a full, auditable evidence chain.' },
  { req: 'Zero-Code Operational Interface', cap: 'No engineering support required. S&T analysts and contracting officers query, filter, and export briefing packages in minutes — not weeks.' },
  { req: 'Modular, Open Architecture', cap: 'REST API-first design enables integration with existing DoD data environments. Modules deploy independently or as a complete platform stack.' },
];

const TAGS = ['S&T Ecosystem Synthesis', 'Co-Investment Decision Support', 'AI Knowledge Synthesis', 'Claude Sonnet AI Engine', 'ASOT Data Fusion', 'Dual-Use Technology ID', 'FOCI Risk Screening', 'CMMC Readiness Scoring', 'CUI/FOUO Compliant', 'Open Architecture', 'Modular Design'];
const TAG_STYLES = [
  { bg: 'rgba(37,99,235,0.07)', color: '#1D4ED8', border: 'rgba(37,99,235,0.15)' },
  { bg: 'rgba(16,185,129,0.07)', color: '#065F46', border: 'rgba(16,185,129,0.15)' },
  { bg: 'rgba(245,158,11,0.07)', color: '#92400E', border: 'rgba(245,158,11,0.15)' },
];

export default function PlatformPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="flex items-center gap-1.5 rounded-full px-3.5 py-1" style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Product</span>
              </div>
              <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'IBM Plex Sans, sans-serif' }}>by</span>
              <span className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>Casimir Systems</span>
            </div>
            <h1 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(40px,5vw,72px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Aligning Private Capital<br /><span style={{ color: '#2563EB' }}>with National Security.</span>
            </h1>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              A zero-code, fully auditable platform that maps S&T ecosystems, tracks VC flows, and synthesizes AI-powered intelligence briefs — purpose-built for U.S. Space Force Task Force Futures.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
                Request Access
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
                View Solutions
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="mt-16 max-w-4xl mx-auto">
              <PlatformMockup />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features — alternating light sections */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={i} delay={100}>
              <div className={`grid lg:grid-cols-2 gap-20 items-center mb-24 last:mb-0 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="[direction:ltr]">
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{f.eyebrow}</div>
                  <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 32, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.25 }}>{f.title}</h2>
                  <p className="text-[16px] text-[#64748B] mb-7" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>{f.desc}</p>
                  {f.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2.5 mb-2.5">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <span className="text-[14px] text-[#334155]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
                <div className="[direction:ltr] rounded-2xl p-10 flex items-center justify-center min-h-[300px]" style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <NetworkGraph />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SBIR / D2P2 context */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Direct-to-Phase II Submission</span>
                  <span className="w-px h-2.5 bg-[rgba(37,99,235,0.2)]" />
                  <span className="text-[11px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>U.S. Space Force · SpaceWERX</span>
                </div>
                <h2 className="font-bold text-[#0B132B] mb-5" style={{ fontSize: 32, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.25 }}>Purpose-built for a specific mission requirement.</h2>
                <p className="text-[15px] text-[#64748B] mb-5" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                  Casimir Intelligence was purpose-built for U.S. Space Force Task Force Futures in response to a Direct-to-Phase II SBIR solicitation — the DoD's fast-track mechanism for companies demonstrating working capability at the time of proposal. Our proposal is submitted; the award decision is pending.
                </p>
                <p className="text-[15px] text-[#64748B] mb-8" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                  We are not proposing to build this. The platform is functioning. TF-F needs this capability now — not in three years.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {TAGS.map((tag, i) => {
                    const s = TAG_STYLES[i % 3];
                    return (
                      <span key={i} className="text-[11px] font-medium rounded-full px-2.5 py-1" style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontFamily: 'IBM Plex Sans, sans-serif' }}>{tag}</span>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-[#64748B] mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>Solicitation Requirements → Platform Capabilities</div>
                {SBIR_REQS.map((item, i) => (
                  <div key={i} className="flex gap-4 py-4" style={{ borderBottom: i < SBIR_REQS.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                    <div className="shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#F0FDF4', border: '1px solid rgba(16,185,129,0.3)' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#0B132B] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{item.req}</div>
                      <div className="text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>{item.cap}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-6 rounded-xl p-5" style={{ background: '#0B132B' }}>
                  <div className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Phase II Feasibility Standard</div>
                  <p className="text-[13px] m-0" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
                    Direct-to-Phase II requires a functioning platform — not a prototype — at time of proposal. Casimir Intelligence satisfies this standard.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Security &amp; Compliance</div>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(28px,3vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Built to operate in the DoD environment.</h2>
            <p className="text-[17px] max-w-xl mx-auto mb-12" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Casimir Intelligence meets or exceeds all compliance requirements for handling Controlled Unclassified Information in defense acquisition contexts.
            </p>
          </ScrollReveal>
          <StaggerReveal className="flex gap-4 justify-center flex-wrap" staggerMs={80}>
            {SECURITY_BADGES.map((b) => (
              <div key={b.label} className="rounded-xl py-4 px-6 text-center min-w-[130px]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="text-[14px] font-semibold text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{b.label}</div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{b.sub}</div>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal delay={300}>
            <div className="mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
                Request Security Documentation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
