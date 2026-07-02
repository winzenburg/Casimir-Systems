import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Eye, BarChart3, Cpu, Brain, Radar, TrendingUp } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { HeroDisplay } from '@/components/hero-display';
import { RiskBadge } from '@/components/risk-badge';

export const metadata: Metadata = {
  title: 'Casimir Systems — AI Decision Support for U.S. Defense',
  description: 'Casimir Systems is an agile defense technology firm that builds AI-powered decision support applications for DoD — at commercial software speed, with the compliance architecture government requires.',
  alternates: { canonical: 'https://www.casimirsystems.com' },
};

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Casimir Systems',
  url: 'https://www.casimirsystems.com',
  description: 'Agile defense technology firm building AI-powered decision support applications for the U.S. Department of Defense.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Defense Technology Products',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        name: 'Casimir Intelligence',
        applicationCategory: 'BusinessApplication',
        description: 'AI-powered S&T ecosystem mapping and co-investment decision support platform for U.S. Space Force.',
      },
    ],
  },
};

const PROBLEMS = [
  {
    icon: '◈',
    label: 'Analysis Paralysis at Scale',
    desc: 'The data exists — sensor feeds, contracts, open sources — but it is fragmented across disconnected systems. Target analyses that consume dozens of analysts for weeks should resolve in near-real-time. Collection is not the gap. Distillation is.',
  },
  {
    icon: '⚑',
    label: 'Compliance vs. Speed',
    desc: 'Existing defense software takes 3–5 years to field. Commercial software moves in weeks but lacks compliance architecture. DoD needs a partner that operates at both speeds simultaneously.',
  },
  {
    icon: '⟳',
    label: 'AI Without a Human in the Loop',
    desc: 'AI that cannot explain its reasoning creates operational liability — in an acquisition decision room or a post-mission debrief. Every AI-generated recommendation needs a human-readable, auditable evidence chain, validated by an operator before anyone acts on it.',
  },
];

const APPROACH = [
  {
    Icon: Eye,
    title: 'Mission-Scoped Applications',
    desc: 'We don\'t build generic platforms. Every application we ship is architected against a specific, well-defined DoD mission requirement — ensuring immediate operational relevance from day one.',
    accent: '#2563EB',
  },
  {
    Icon: Cpu,
    title: 'Human-in-the-Loop AI',
    desc: 'AI accelerates the analysis; a human validates the call. Every synthesis our platforms produce carries a traceable evidence chain, so operators and analysts confirm the reasoning — not just the recommendation — before acting.',
    accent: '#10B981',
  },
  {
    Icon: Shield,
    title: 'Compliance-First Architecture',
    desc: 'NIST 800-171, CMMC Level 2, and CUI/FOUO handling are not afterthoughts. They are baked into the architectural foundation of every application we build — from the first sprint.',
    accent: '#F59E0B',
  },
  {
    Icon: Zap,
    title: 'Zero-Code Interfaces',
    desc: 'We build for operators, not engineers. Every application delivers its full capability through a zero-code interface — so analysts and decision-makers can work without depending on technical staff.',
    accent: '#8B5CF6',
  },
];

const FOCUS_AREAS = [
  {
    Icon: Brain,
    title: 'Intelligence Synthesis',
    desc: 'Collapse target analysis cycles that consume dozens of analysts for weeks into near-real-time, AI-synthesized briefs — with human-in-the-loop validation on every output.',
    accent: '#2563EB',
  },
  {
    Icon: BarChart3,
    title: 'Decision Visualization & Human Factors',
    desc: 'Sensor and platform data overload creates analysis paralysis. We distill it into displays a commander can act on — the discipline our founder has practiced for 25 years.',
    accent: '#8B5CF6',
  },
  {
    Icon: Radar,
    title: 'Unified Operating Picture',
    desc: 'Unmanned platforms — aerial, surface, and ground — generate more data than any staff can absorb. We build the data-fusion layer that turns disparate feeds into one coherent picture.',
    accent: '#10B981',
  },
  {
    Icon: TrendingUp,
    title: 'Co-Investment & Ecosystem Intelligence',
    desc: 'Mapping commercial innovation — companies, capital, technologies — against national security priorities. The active mission of Casimir Intelligence for U.S. Space Force.',
    accent: '#F59E0B',
  },
];

const COMPETITORS = [
  { name: 'Palantir',          type: 'Enterprise Integrator', note: 'Deeply capable, deeply entrenched. Sells enterprise transformation — forward-deployed engineers, long integrations, enterprise cost.' },
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
  { value: '4–6 wks', label: 'From Award to First Delivery' },
  { value: 'CMMC L2', label: 'Compliance Architecture' },
  { value: 'Phase II', label: 'Active SBIR Award' },
  { value: 'Zero Code', label: 'Operator Interface' },
];

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden flex"
        style={{ background: '#0B132B', paddingTop: 60 }}
      >
        <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />

        {/* Left — copy */}
        <div className="flex items-center w-full lg:w-[50%] xl:w-[46%] shrink-0 z-10 px-6 md:px-10 lg:pl-16 xl:pl-24 py-32">
          <div className="max-w-lg w-full">

            <div className="flex items-center gap-2.5 mb-8">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                style={{ boxShadow: '0 0 8px #10B981' }}
              />
              <span
                className="text-[10px] uppercase tracking-widest"
                style={{ color: '#10B981', fontFamily: 'IBM Plex Mono, monospace' }}
              >
                Multi-Domain Decision Support · Active
              </span>
            </div>

            <h1
              className="text-white font-extrabold mb-6 leading-[1.06]"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.035em',
              }}
            >
              Building the Software<br />
              <span style={{ color: '#60a5fa' }}>that Secures the Future.</span>
            </h1>

            <p
              className="mb-10"
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'IBM Plex Sans, sans-serif',
                lineHeight: 1.75,
                maxWidth: 440,
              }}
            >
              Casimir Systems is an agile defense technology firm that builds AI-powered decision support applications for the U.S. Department of Defense — at commercial software speed, with the compliance architecture DoD requires.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-primary">
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="btn-ghost">
                See Casimir Intelligence →
              </Link>
            </div>

            <div
              className="grid grid-cols-2 gap-x-8 gap-y-5 max-w-sm pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="tabular text-white font-bold mb-1"
                    style={{ fontSize: 26, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — orbital intelligence radar, bleeds to edge */}
        <div className="hidden lg:block flex-1 self-stretch">
          <HeroDisplay />
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">The Problem</span>
              <h2
                className="font-bold text-[#0B132B] mb-4"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                DoD needs faster, better decision support.
              </h2>
              <p style={{ fontSize: 17, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                Defense acquisition stakeholders face a common problem: the data exists, but it is fragmented, unaudited, and impossible to synthesize fast enough to matter.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-5 items-stretch" staggerMs={100}>
            {PROBLEMS.map((p) => (
              <div key={p.label} className="card-light card-light-hover p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl leading-none shrink-0" style={{ color: '#2563EB' }}>{p.icon}</span>
                  <h3 className="font-semibold text-[#0B132B]" style={{ fontSize: 17, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{p.label}</h3>
                </div>
                <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 14, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── How We Work ──────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-xl mb-16">
              <span className="eyebrow">How We Work</span>
              <h2
                className="font-bold text-white"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                A different kind of defense technology firm.
              </h2>
              <p className="mt-4" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                We are builders, not consultants. Our methodology is repeatable across any DoD mission domain.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-5" staggerMs={90}>
            {APPROACH.map(({ Icon, title, desc, accent }) => (
              <div
                key={title}
                className="group p-8 rounded-xl transition-all duration-200 hover:-translate-y-px"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <h3 className="font-semibold text-white" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{title}</h3>
                </div>
                <p className="leading-relaxed" style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Mission Focus Areas ──────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">Mission Focus Areas</span>
              <h2
                className="font-bold text-[#0B132B] mb-4"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                One competency. Four mission domains.
              </h2>
              <p style={{ fontSize: 17, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                Casimir Systems builds the decision layer — not the platform, not the sensor. Wherever DoD operators are drowning in data and starving for distilled, defensible answers, our methodology applies.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-5 items-stretch" staggerMs={90}>
            {FOCUS_AREAS.map(({ Icon, title, desc, accent }) => (
              <div key={title} className="card-light card-light-hover p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${accent}14`, border: `1px solid ${accent}26` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <h3 className="font-semibold text-[#0B132B]" style={{ fontSize: 17, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{title}</h3>
                </div>
                <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 14, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal delay={150}>
            <div className="mt-8 flex justify-center">
              <Link href="/sbir" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#2563EB] hover:gap-3 transition-all duration-200" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                See where we&apos;re deploying this — our innovation pathways <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Product Portfolio ─────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-10" style={{ background: '#ffffff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow">Current Product Portfolio</span>
              <h2
                className="font-bold text-[#0B132B] mb-4"
                style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
              >
                Built against real mission requirements.
              </h2>
              <p style={{ fontSize: 17, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                Every Casimir Systems product begins with a specific, validated DoD requirement — not a market hypothesis.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-8" style={{ background: '#0B132B', border: '1px solid rgba(37,99,235,0.35)' }}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Flagship Product · Active</div>
                  <div className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontFamily: 'Inter, sans-serif' }}>Phase IIa</div>
                </div>
                <div className="text-[26px] font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Casimir Intelligence</div>
                <p className="text-[14px] mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75, maxWidth: 560 }}>
                  AI-powered S&T ecosystem mapping and co-investment decision support for U.S. Space Force. Maps the full commercial innovation landscape — companies, capital, technologies — and synthesizes actionable intelligence briefs for Task Force Futures analysts and contracting officers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['S&T Ecosystem Mapping', 'AI Knowledge Synthesis', 'Co-Investment Analysis', 'FOCI Screening', 'Active Phase II Award'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium rounded-full px-2.5 py-1" style={{ background: 'rgba(37,99,235,0.12)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <Link href="/platform" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                  Explore the Platform <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Competitive Landscape ─────────────────────────────────── */}
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
                Existing tools are either too broad to be actionable or too narrow to drive co-investment decisions.{' '}
                <span className="font-semibold text-[#10B981]">Casimir Intelligence is the only platform purpose-built for this.</span>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E8EDF2', boxShadow: 'var(--shadow-sm)' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#0B132B' }}>
                    {['Competitor', 'Category', 'Limitation'].map((h) => (
                      <th key={h} className="text-left px-6 py-4" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c, i) => (
                    <tr key={c.name} style={{ background: i % 2 === 0 ? '#ffffff' : '#F8FAFC', borderBottom: '1px solid #E8EDF2' }}>
                      <td className="px-6 py-4 font-semibold text-[#0B132B]" style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>{c.name}</td>
                      <td className="px-6 py-4"><span className="text-[11px] font-medium rounded-md px-2 py-0.5" style={{ background: '#F1F5F9', color: '#475569', fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.type}</span></td>
                      <td className="px-6 py-4 text-[#64748B]" style={{ fontSize: 13, fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.note}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'rgba(37,99,235,0.04)', borderTop: '2px solid #2563EB' }}>
                    <td className="px-6 py-5 font-bold text-[#2563EB]" style={{ fontSize: 13, fontFamily: 'Inter, sans-serif' }}>Casimir Intelligence</td>
                    <td className="px-6 py-5"><RiskBadge level="low" label="Co-Investment AI" /></td>
                    <td className="px-6 py-5 font-semibold text-[#10B981]" style={{ fontSize: 13, fontFamily: 'IBM Plex Sans, sans-serif' }}>Zero-code, auditable, AI-synthesized intelligence — purpose-built for S&T co-investment. The only platform that does all of this.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-28 px-6 lg:px-10 text-center"
        style={{ background: '#0B132B', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <span className="eyebrow mx-auto block text-center">Get In Touch</span>
            <h2
              className="font-bold text-white mb-5"
              style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.2 }}
            >
              A requirement. A problem. A gap in your stack.
            </h2>
            <p className="mb-10" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
              If you have a specific DoD decision support challenge, we want to hear about it. Reach out to schedule a scoped conversation with the Casimir Systems team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15 }}>
                Work With Us
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
