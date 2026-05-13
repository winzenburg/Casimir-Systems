import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Eye, BarChart3, BookOpen, Shield, Cpu } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';
import { PlatformMockup } from '@/components/platform-mockup';
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
  description:
    'Agile defense technology firm building AI-powered decision support applications for the U.S. Department of Defense.',
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
        description:
          'AI-powered S&T ecosystem mapping and co-investment decision support platform for U.S. Space Force.',
      },
    ],
  },
};

const PROBLEMS = [
  {
    icon: '◈',
    label: 'Decisions Without Synthesis',
    desc: 'DoD acquisition stakeholders make high-stakes investment decisions from siloed, unstructured data. No platform synthesizes the full picture — companies, capital, technologies, and risk — into a single, defensible intelligence layer.',
  },
  {
    icon: '⚑',
    label: 'Compliance vs. Speed',
    desc: 'Existing defense software takes 3–5 years to field. Commercial software moves in weeks but lacks compliance architecture. DoD needs a partner that operates at both speeds simultaneously.',
  },
  {
    icon: '⟳',
    label: 'Black Box Analytics',
    desc: 'General-purpose analytics platforms generate outputs that cannot be audited or defended in a contracting environment. Every recommendation needs a traceable evidence chain — and most platforms don\'t provide it.',
  },
];

const APPROACH = [
  {
    icon: Eye,
    title: 'Mission-Scoped Applications',
    desc: 'We don\'t build generic platforms. Every application we ship is architected against a specific, well-defined DoD mission requirement — ensuring immediate operational relevance from day one.',
    color: '#2563EB',
  },
  {
    icon: Cpu,
    title: 'AI-Augmented Velocity',
    desc: 'Using Claude-powered synthesis and AI-augmented workflows, we compress 18-month development cycles into 4–6 weeks — without sacrificing architectural rigor or compliance posture.',
    color: '#10B981',
  },
  {
    icon: Shield,
    title: 'Compliance-First Architecture',
    desc: 'NIST 800-171, CMMC Level 2, and CUI/FOUO handling are not afterthoughts. They are baked into the architectural foundation of every application we build — from the first sprint.',
    color: '#F59E0B',
  },
  {
    icon: Zap,
    title: 'Zero-Code Interfaces',
    desc: 'We build for operators, not engineers. Every application delivers its full capability through a zero-code interface — so analysts and decision-makers can work without depending on technical staff.',
    color: '#8B5CF6',
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
  { value: '2,847+', label: 'Entities Tracked' },
  { value: '$4.2B',  label: 'Capital Flows Mapped' },
  { value: '40+',    label: 'Authoritative Sources' },
  { value: '<4 hrs', label: 'Time to First Insight' },
];

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      {/* Hero — Company positioning */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-60 pointer-events-none" />
        <div className="absolute pointer-events-none" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 rounded-md px-3 py-1.5" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)' }}>
              <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>Defense Technology · AI Decision Support</span>
            </div>
            <h1 className="font-extrabold text-white mb-6" style={{ fontSize: 'clamp(36px,4.5vw,64px)', fontFamily: 'Inter, sans-serif', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Building the Software<br /><span style={{ color: '#2563EB' }}>that Secures the Future.</span>
            </h1>
            <p className="mb-8 max-w-lg" style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Casimir Systems is an agile defense technology firm that builds AI-powered decision support applications for the U.S. Department of Defense — at commercial software speed, with the compliance architecture DoD requires.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                See Casimir Intelligence →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5 max-w-sm">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold tabular text-white mb-0.5" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>{s.value}</div>
                  <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block"><PlatformMockup /></div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>The Problem</div>
            <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>DoD needs faster, better decision support.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-16" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>Defense acquisition stakeholders face a common problem: the data exists, but it is fragmented, unaudited, and impossible to synthesize fast enough to matter.</p>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-6" staggerMs={120}>
            {PROBLEMS.map((p) => (
              <div key={p.label} className="p-8 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div className="text-2xl mb-4 text-[#2563EB]">{p.icon}</div>
                <h3 className="font-semibold text-[#0B132B] mb-3 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{p.label}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{p.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* How We Work — Company Methodology */}
      <section className="relative py-24 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>How We Work</div>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>A different kind of defense technology firm.</h2>
            <p className="text-[17px] max-w-2xl mb-16" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              We are builders, not consultants. Our methodology is repeatable across any DoD mission domain.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerMs={100}>
            {APPROACH.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="p-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: `${c.color}18`, border: `1px solid ${c.color}30` }}>
                    <Icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{c.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.desc}</p>
                </div>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Flagship Product callout */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Current Product Portfolio</div>
            <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Built against real mission requirements.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Every Casimir Systems product begins with a specific, validated DoD requirement — not a market hypothesis.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerMs={120}>
            {/* Flagship */}
            <ScrollReveal>
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
            </ScrollReveal>

            {/* Pipeline teaser */}
            <ScrollReveal delay={120}>
              <div className="rounded-2xl p-8 h-full flex flex-col" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748B] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Future Applications</div>
                    <div className="text-[22px] font-bold text-[#0B132B]" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Additional Domains</div>
                  </div>
                  <div className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#D97706', fontFamily: 'Inter, sans-serif' }}>In Development</div>
                </div>
                <p className="text-[14px] mb-6 flex-1 text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>
                  The Casimir Systems methodology — mission scoping, AI synthesis, zero-code delivery, compliance-first architecture — applies across any DoD decision support domain. We are actively pursuing requirements in supply chain intelligence, program analysis, and multi-domain threat synthesis.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['AFWERX', 'DARPA', 'NRO', 'Army SBIR', 'SOCOM', 'Navy SBIR'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium rounded-full px-2.5 py-1" style={{ background: 'rgba(245,158,11,0.07)', color: '#92400E', border: '1px solid rgba(245,158,11,0.15)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{tag}</span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  Discuss a Requirement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </StaggerReveal>
        </div>
      </section>

      {/* Competitive landscape */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Competitive Landscape</div>
            <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Precision where others offer platforms.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Existing platforms are either too broad to be actionable or too narrow to drive co-investment decisions.{' '}
              <span className="text-[#10B981] font-semibold">Casimir Intelligence is the only platform purpose-built for this.</span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E2E8F0' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#0B132B' }}>
                    {['Competitor', 'Category', 'Limitation'].map((h) => (
                      <th key={h} className="text-left px-6 py-4 text-[11px] font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c, i) => (
                    <tr key={c.name} style={{ background: i % 2 === 0 ? '#fff' : '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                      <td className="px-6 py-4 text-[13px] font-semibold text-[#0B132B]" style={{ fontFamily: 'Inter, sans-serif' }}>{c.name}</td>
                      <td className="px-6 py-4"><span className="text-[11px] font-medium rounded px-2 py-0.5" style={{ background: '#F1F5F9', color: '#475569', fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.type}</span></td>
                      <td className="px-6 py-4 text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.note}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'rgba(37,99,235,0.05)', borderTop: '2px solid #2563EB' }}>
                    <td className="px-6 py-4 text-[13px] font-bold text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Casimir Intelligence</td>
                    <td className="px-6 py-4"><RiskBadge level="low" label="Co-Investment AI" /></td>
                    <td className="px-6 py-4 text-[13px] font-semibold text-[#10B981]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Zero-code, auditable, AI-synthesized intelligence — purpose-built for S&T co-investment. The only platform that does all of this.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 text-center" style={{ background: '#0B132B', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Get In Touch</div>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>A requirement. A problem. A gap in your stack.</h2>
            <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>If you have a specific DoD decision support challenge, we want to hear about it. Reach out to schedule a scoped conversation with the Casimir Systems team.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px text-[15px]" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/sbir" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px text-[15px]" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                SBIR / Government Focus
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
