import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Eye, BarChart3 } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { PlatformMockup } from '@/components/platform-mockup';
import { RiskBadge } from '@/components/risk-badge';

export const metadata: Metadata = {
  title: 'Building the Software that Secures the Future',
  description: 'Casimir Systems builds AI-powered S&T ecosystem and co-investment decision support for U.S. Space Force and DoD — transforming fragmented data into defensible decisions.',
};

const PROBLEMS = [
  {
    icon: '◈',
    label: 'Fragmented Intelligence',
    desc: 'S&T ecosystems span thousands of companies, patent filings, and investment signals. No single platform synthesizes them into actionable co-investment strategy.',
  },
  {
    icon: '⚑',
    label: 'Opaque Risk Layers',
    desc: 'FOCI exposure, CMMC readiness, and TRL assessments exist in silos. Contracting officers face weeks of manual due diligence with no auditable trail.',
  },
  {
    icon: '⟳',
    label: 'Speed Mismatch',
    desc: 'Commercial innovation cycles in 18 months. DoD acquisition cycles in 18 years. Casimir Intelligence bridges that gap with real-time ecosystem synthesis.',
  },
];

const CAPABILITIES = [
  {
    Icon: Eye,
    title: 'Ecosystem Mapping',
    desc: 'Visualize the full S&T landscape — companies, investors, technologies, and relationships — in a dynamic, queryable network graph.',
    accent: '#2563EB',
  },
  {
    Icon: BarChart3,
    title: 'Co-Investment Analysis',
    desc: 'Identify alignment between RDT&E priorities and private capital flows. Surface dual-use opportunities before the competition.',
    accent: '#10B981',
  },
  {
    Icon: Shield,
    title: 'Institutional Risk Layers',
    desc: 'Multi-gate risk architecture: FOCI screening, CMMC readiness, TRL scoring, and supply chain exposure — all with full audit trails.',
    accent: '#F59E0B',
  },
  {
    Icon: Zap,
    title: 'Zero-Code Interface',
    desc: 'Designed for S&T staff and contracting officers, not data scientists. Query, filter, and generate reports without writing a single line of code.',
    accent: '#8B5CF6',
  },
];

const COMPETITORS = [
  { name: 'Govini',            type: 'Defense Analytics', note: 'Broad data platform. Complex, costly, requires dedicated analyst teams.' },
  { name: 'Strider',           type: 'Entity Risk',        note: 'Deep foreign influence detection. Not built for co-investment workflows.' },
  { name: 'Primer AI',         type: 'NLP / Document AI',  note: 'Strong document synthesis. Narrow scope, no ecosystem mapping.' },
  { name: 'Sayari',            type: 'Corporate Intel',    note: 'Ownership & entity resolution. No S&T or investment layer.' },
  { name: 'Accrete AI',        type: 'Anomaly Detection',  note: 'Open-source signal processing. Not purpose-built for acquisition.' },
  { name: 'Vannevar Labs',     type: 'Agentic AI',         note: 'Software-defined intelligence. Opaque reasoning, high integration cost.' },
  { name: 'Rebellion Defense', type: 'Defense Software',   note: 'Broad mission software. Less focused on co-investment decision support.' },
  { name: '9-HI',              type: 'Tech Selection',     note: 'Closest competitor. Quantitative scoring, but limited ecosystem scope.' },
];

const STATS = [
  { value: '2,847+', label: 'Companies Tracked' },
  { value: '$4.2B',  label: 'Investment Flows Mapped' },
  { value: '99.7%',  label: 'Synthesis Accuracy' },
  { value: '<4 hrs', label: 'Time to First Insight' },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: '#0B132B', paddingTop: 60 }}
      >
        <div className="grid-bg absolute inset-0 opacity-50 pointer-events-none" />
        {/* Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '15%', left: '55%', transform: 'translateX(-50%)',
            width: 900, height: 700, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)',
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            <h1
              className="text-white font-extrabold mb-6 leading-[1.06]"
              style={{
                fontSize: 'clamp(38px, 4.8vw, 64px)',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.035em',
              }}
            >
              Building the Software<br />
              <span style={{ color: '#60a5fa' }}>that Secures the Future.</span>
            </h1>

            <p
              className="mb-10 leading-relaxed"
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'IBM Plex Sans, sans-serif',
                lineHeight: 1.75,
                maxWidth: 460,
              }}
            >
              Casimir Systems builds AI-driven decision support and data synthesis for U.S. Space Force and DoD — designed for immediate operational impact, not multi-year deployments.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14">
              <Link href="/contact" className="btn-primary">
                Request Platform Access
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="btn-ghost">
                Explore the Platform
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-sm">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="tabular text-white font-bold mb-1"
                    style={{
                      fontSize: 26,
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[12px] leading-tight"
                    style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'IBM Plex Sans, sans-serif' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mockup */}
          <div className="hidden lg:block w-[540px] shrink-0">
            <PlatformMockup />
          </div>
        </div>
      </section>

      {/* ── Problem — Titanium White ─────────────────────────────── */}
      <section className="py-28 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">The Problem</span>
              <h2
                className="font-bold text-[#0B132B] mb-4"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                The S&T ecosystem is fragmented by design.
              </h2>
              <p
                className="text-[#64748B]"
                style={{ fontSize: 17, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}
              >
                Defense S&T stakeholders lack a unified view of the innovation ecosystem — making co-investment decisions reactive, slow, and difficult to defend.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-5" staggerMs={100}>
            {PROBLEMS.map((p) => (
              <div key={p.label} className="card-light card-light-hover p-8">
                <div
                  className="text-2xl mb-5"
                  style={{ color: '#2563EB' }}
                >
                  {p.icon}
                </div>
                <h3
                  className="font-semibold text-[#0B132B] mb-3"
                  style={{ fontSize: 17, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}
                >
                  {p.label}
                </h3>
                <p
                  className="text-[#64748B] leading-relaxed"
                  style={{ fontSize: 14, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Capabilities — Navy ──────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-xl mb-16">
              <span className="eyebrow">Platform Capabilities</span>
              <h2
                className="font-bold text-white"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                Built for the speed of commercial innovation.
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-2 gap-5" staggerMs={90}>
            {CAPABILITIES.map(({ Icon, title, desc, accent }) => (
              <div
                key={title}
                className="group p-8 rounded-xl transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3
                  className="font-semibold text-white mb-3"
                  style={{ fontSize: 16, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}
                >
                  {title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Competitive whitespace — White ──────────────────────── */}
      <section className="py-28 px-6 lg:px-10" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow">Competitive Landscape</span>
              <h2
                className="font-bold text-[#0B132B] mb-4"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                Precision where others offer platforms.
              </h2>
              <p style={{ fontSize: 17, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                Existing tools are either too broad to be actionable or too narrow to drive co-investment.{' '}
                <span className="font-semibold text-[#10B981]">Casimir is purpose-built for this specific problem.</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E8EDF2', boxShadow: 'var(--shadow-sm)' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#0B132B' }}>
                    {['Competitor', 'Category', 'Limitation'].map((h) => (
                      <th key={h} className="text-left px-6 py-4" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c, i) => (
                    <tr key={c.name} style={{ background: i % 2 === 0 ? '#ffffff' : '#F8FAFC', borderBottom: '1px solid #E8EDF2' }}>
                      <td className="px-6 py-4 font-semibold text-[#0B132B]" style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>{c.name}</td>
                      <td className="px-6 py-4">
                        <span className="text-[11px] font-medium rounded-md px-2 py-0.5" style={{ background: '#F1F5F9', color: '#475569', fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.type}</span>
                      </td>
                      <td className="px-6 py-4 text-[#64748B]" style={{ fontSize: 13, fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.note}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'rgba(37,99,235,0.04)', borderTop: '2px solid #2563EB' }}>
                    <td className="px-6 py-5 font-bold text-[#2563EB]" style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>Casimir Intelligence</td>
                    <td className="px-6 py-5"><RiskBadge level="low" label="Co-Investment AI" /></td>
                    <td className="px-6 py-5 font-semibold text-[#10B981]" style={{ fontSize: 13, fontFamily: 'IBM Plex Sans, sans-serif' }}>Zero-code, auditable, purpose-built for S&T co-investment. The only platform that does this.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA — Navy ──────────────────────────────────────────── */}
      <section
        className="py-28 px-6 lg:px-10 text-center"
        style={{ background: '#0B132B', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <span className="eyebrow mx-auto block text-center">Request Access</span>
            <h2
              className="font-bold text-white mb-5"
              style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
            >
              Ready to see Casimir Intelligence?
            </h2>
            <p className="mb-10" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
              Complete a brief intake form and our team will reach out within one business day to schedule a scoped platform demonstration.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15 }}>
                Request Platform Access
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/sbir" className="btn-ghost" style={{ padding: '14px 28px', fontSize: 15 }}>
                SBIR / Government Focus
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
