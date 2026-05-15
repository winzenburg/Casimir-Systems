import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Eye, BarChart3, BookOpen, Cpu } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { HeroDisplay } from '@/components/hero-display';
import { RiskBadge } from '@/components/risk-badge';

export const metadata: Metadata = {
  title: 'Casimir Systems — AI Decision Support for U.S. Defense',
  description: 'Casimir Systems is an agile defense technology firm that builds AI-powered decision support applications for DoD — at commercial software speed, with the compliance architecture government requires.',
  alternates: { canonical: 'https://casimirsystems.com' },
};

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Casimir Systems',
  url: 'https://casimirsystems.com',
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
    label: 'Decisions Without Synthesis',
    desc: 'DoD decision-makers — from S&T analysts to mission commanders — face the same problem: the data exists, but it is fragmented across disconnected sources. No platform synthesizes the full picture into a single, defensible intelligence layer.',
  },
  {
    icon: '⚑',
    label: 'Compliance vs. Speed',
    desc: 'Existing defense software takes 3–5 years to field. Commercial software moves in weeks but lacks compliance architecture. DoD needs a partner that operates at both speeds simultaneously.',
  },
  {
    icon: '⟳',
    label: 'AI Without Legibility',
    desc: 'AI systems that cannot explain their reasoning create liability — whether in an acquisition decision room or a post-mission debrief. Every AI-generated recommendation needs a human-readable, auditable evidence chain before an operator can act on it.',
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
    title: 'AI-Augmented Velocity',
    desc: 'Using Claude-powered synthesis and AI-augmented workflows, we compress 18-month development cycles into 4–6 weeks — without sacrificing architectural rigor or compliance posture.',
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
                Intelligence Platform · Active
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
          <StaggerReveal className="grid md:grid-cols-3 gap-5" staggerMs={100}>
            {PROBLEMS.map((p) => (
              <div key={p.label} className="card-light card-light-hover p-8">
                <div className="text-2xl mb-5" style={{ color: '#2563EB' }}>{p.icon}</div>
                <h3 className="font-semibold text-[#0B132B] mb-3" style={{ fontSize: 17, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{p.label}</h3>
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
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="font-semibold text-white mb-3" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{title}</h3>
                <p className="leading-relaxed" style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </StaggerReveal>
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
          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerMs={120}>
            {/* Flagship */}
            <div className="rounded-2xl p-8 h-full flex flex-col" style={{ background: '#0B132B', border: '1px solid rgba(37,99,235,0.35)' }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Flagship Product · Active</div>
                  <div className="text-[22px] font-bold text-white" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Casimir Intelligence</div>
                </div>
                <div className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontFamily: 'Inter, sans-serif' }}>Phase IIa</div>
              </div>
              <p className="text-[14px] mb-6 flex-1" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                AI-powered S&T ecosystem mapping and co-investment decision support for U.S. Space Force. Maps the full commercial innovation landscape — companies, capital, technologies — and synthesizes actionable intelligence briefs for Task Force Futures analysts and contracting officers.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['S&T Ecosystem Mapping', 'AI Knowledge Synthesis', 'Co-Investment Analysis', 'FOCI Screening', 'SBIR SF254-D1201'].map((tag) => (
                  <span key={tag} className="text-[10px] font-medium rounded-full px-2.5 py-1" style={{ background: 'rgba(37,99,235,0.12)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{tag}</span>
                ))}
              </div>
              <Link href="/platform" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB] hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Explore the Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pipeline teaser */}
            <div className="rounded-2xl p-8 h-full flex flex-col" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748B] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Future Applications</div>
                  <div className="text-[22px] font-bold text-[#0B132B]" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Additional Domains</div>
                </div>
                <div className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#D97706', fontFamily: 'Inter, sans-serif' }}>In Development</div>
              </div>
              <p className="text-[14px] mb-6 flex-1 text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                The Casimir Systems platform architecture — RBAC, AI output approval workflows, audit logging, zero-code interfaces — is domain-portable. Active pipeline targets include post-mission AI decision legibility for human-machine teaming (DAF CHORD) and multi-domain commercial satellite and sensor data synthesis (DAF TacSRT).
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['CHORD · DAF26BZ01-DV007', 'TacSRT · DAF26BZ01-NV501', 'AFWERX', 'DARPA', 'Army SBIR', 'NRO'].map((tag) => (
                  <span key={tag} className="text-[10px] font-medium rounded-full px-2.5 py-1" style={{ background: 'rgba(245,158,11,0.07)', color: '#92400E', border: '1px solid rgba(245,158,11,0.15)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{tag}</span>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Discuss a Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </StaggerReveal>
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
