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
  { icon: '◈', label: 'Fragmented Intelligence', desc: 'S&T ecosystems span thousands of companies, patent filings, and investment signals. No single platform synthesizes them into actionable co-investment strategy.' },
  { icon: '⚑', label: 'Opaque Risk Layers', desc: 'FOCI exposure, CMMC readiness, and TRL assessments exist in silos. Contracting officers face weeks of manual due diligence with no auditable trail.' },
  { icon: '⟳', label: 'Speed Mismatch', desc: 'Commercial innovation cycles in 18 months. DoD acquisition cycles in 18 years. Casimir Intelligence bridges that gap with real-time ecosystem synthesis.' },
];

const CAPABILITIES = [
  { icon: Eye, title: 'Ecosystem Mapping', desc: 'Visualize the full S&T landscape — companies, investors, technologies, and relationships — in a dynamic, queryable network graph.', color: '#2563EB' },
  { icon: BarChart3, title: 'Co-Investment Analysis', desc: 'Identify alignment between RDT&E priorities and private capital flows. Surface dual-use opportunities before the competition.', color: '#10B981' },
  { icon: Shield, title: 'Institutional Risk Layers', desc: 'Multi-gate risk architecture: FOCI screening, CMMC readiness, TRL scoring, and supply chain exposure — all with full audit trails.', color: '#F59E0B' },
  { icon: Zap, title: 'Zero-Code Interface', desc: 'Designed for S&T staff and contracting officers, not data scientists. Query, filter, and generate reports without writing a single line of code.', color: '#8B5CF6' },
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
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-60 pointer-events-none" />
        <div className="absolute pointer-events-none" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 rounded-md px-3 py-1.5" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)' }}>
              <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>SBIR D2P2 · SF254-D1201</span>
            </div>
            <h1 className="font-extrabold text-white mb-6" style={{ fontSize: 'clamp(36px,4.5vw,64px)', fontFamily: 'Inter, sans-serif', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Building the Software<br /><span style={{ color: '#2563EB' }}>that Secures the Future.</span>
            </h1>
            <p className="mb-8 max-w-lg" style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Casimir Systems is an agile defense technology firm specializing in AI-driven decision support and data synthesis — built for immediate operational impact, not multi-year deployments.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                Request Platform Access <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                Explore the Platform
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

      {/* Problems — Titanium White section */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>The Problem</div>
            <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>The S&T ecosystem is fragmented by design.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-16" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>Defense S&T stakeholders lack a unified view of the innovation ecosystem — making co-investment decisions reactive, slow, and difficult to defend.</p>
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

      {/* Capabilities — Navy section */}
      <section className="relative py-24 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Platform Capabilities</div>
            <h2 className="font-bold text-white mb-16" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Built for the speed of commercial innovation.</h2>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerMs={100}>
            {CAPABILITIES.map((c) => {
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

      {/* Competitive landscape — White section */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Competitive Landscape</div>
            <h2 className="font-bold text-[#0B132B] mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Precision where others offer platforms.</h2>
            <p className="text-[17px] text-[#64748B] max-w-2xl mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Existing platforms are either too broad to be actionable or too narrow to drive co-investment decisions.{' '}
              <span className="text-[#10B981] font-semibold">Casimir is the only platform purpose-built for this.</span>
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
                    <td className="px-6 py-4 text-[13px] font-semibold text-[#10B981]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Zero-code, auditable, purpose-built for S&T co-investment. The only platform that does this.</td>
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
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif' }}>Request Access</div>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Ready to see Casimir Intelligence?</h2>
            <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>Complete a brief intake form and the Casimir Systems team will reach out within one business day to schedule a scoped platform demonstration.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px text-[15px]" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Request Platform Access <ArrowRight className="w-4 h-4" />
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
