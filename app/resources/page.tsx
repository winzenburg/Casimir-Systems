import type { Metadata } from 'next';
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
  title: 'Intelligence Hub & Resources',
  description: 'Analysis, whitepapers, and S&T intelligence briefings from the Casimir Systems team. Includes the DoD co-investment glossary.',
};

const ARTICLES = [
  {
    tag: 'Intelligence Insight',
    title: "The FOCI Problem: Why Foreign Influence is the DoD's Biggest Co-Investment Blind Spot",
    date: 'Apr 14, 2026',
    readTime: '8 min read',
    color: '#2563EB',
  },
  {
    tag: 'Analysis',
    title: 'Directed Energy in 2026: Mapping the Commercial S&T Landscape for USSF Priorities',
    date: 'Mar 28, 2026',
    readTime: '12 min read',
    color: '#10B981',
  },
  {
    tag: 'Perspective',
    title: "Zero-Code Intelligence: Why the Future of DoD Acquisition Belongs to the Analyst, Not the Engineer",
    date: 'Mar 10, 2026',
    readTime: '6 min read',
    color: '#F59E0B',
  },
];

const GLOSSARY: [string, string][] = [
  ['ASOT', 'Authoritative Source of Truth — a recognized, verified, and trusted data source used as the primary reference for decision-making.'],
  ['Co-Investment', 'The strategic alignment of government RDT&E funding with private venture capital to accelerate dual-use technology development.'],
  ['COMSO', 'Commercial Operator for Military Space Operations — the organizational construct for integrating commercial capabilities into space operations.'],
  ['D2P2', 'Direct-to-Phase II — the SBIR funding mechanism that bypasses Phase I for companies demonstrating Phase I-equivalent feasibility at proposal time.'],
  ['FOCI', 'Foreign Ownership, Control, or Influence — a critical risk factor in defense acquisition that screens for adverse foreign government interests.'],
  ['Objective Force Design', "The U.S. Space Force's framework for defining future capabilities and force structure requirements."],
  ['RDT&E', 'Research, Development, Test, and Evaluation — the DoD budget category funding new technology development from basic research through operational testing.'],
  ['TF-F', 'Task Force Futures — the primary USSF stakeholder responsible for identifying and accelerating future space capabilities and innovation.'],
  ['TRL', 'Technology Readiness Level — the DoD scale (1–9) used to assess technology maturity from basic principles (TRL 1) to operational deployment (TRL 9).'],
  ['Dual-Use Technology', 'Technology developed for commercial markets that also has direct defense applications, enabling co-investment efficiency.'],
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Casimir Systems · Intelligence Hub</div>
            <h1 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(36px,4.5vw,60px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Thought leadership from the<br />frontier of defense tech.
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Analysis, whitepapers, and research from the Casimir Systems intelligence team — covering S&T ecosystem trends, co-investment strategy, and DoD acquisition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Latest Insights</div>
            <h2 className="font-bold text-[#0B132B] mb-12" style={{ fontSize: 'clamp(24px,2.5vw,36px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Intelligence Briefings</h2>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-6" staggerMs={100}>
            {ARTICLES.map((a, i) => (
              <div key={i} className="rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 cursor-pointer" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div className="h-1" style={{ background: a.color }} />
                <div className="p-7">
                  <div className="inline-block rounded px-2.5 py-0.5 text-[11px] font-medium mb-4" style={{ background: `${a.color}14`, color: a.color, fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {a.tag}
                  </div>
                  <h3 className="font-semibold text-[#0B132B] mb-5 text-[16px] leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>{a.title}</h3>
                  <div className="flex justify-between text-[12px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    <span>{a.date}</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] text-[#64748B]" style={{ background: '#fff', border: '1px solid #E2E8F0', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Additional briefings publishing Q3 2026
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Reference</div>
            <h2 className="font-bold text-[#0B132B] mb-3" style={{ fontSize: 'clamp(24px,2.5vw,36px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>S&T Intelligence Glossary</h2>
            <p className="text-[17px] text-[#64748B] mb-10" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Standard terminology used across the DoD co-investment and SBIR ecosystem.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E2E8F0' }}>
              {GLOSSARY.map(([term, def], i) => (
                <div key={i} className="grid" style={{ gridTemplateColumns: '160px 1fr', borderBottom: i < GLOSSARY.length - 1 ? '1px solid #E2E8F0' : 'none', background: i % 2 === 0 ? '#fff' : '#F8FAFC' }}>
                  <div className="px-6 py-4 text-[13px] font-semibold text-[#2563EB]" style={{ fontFamily: 'Inter, sans-serif', borderRight: '1px solid #E2E8F0' }}>{term}</div>
                  <div className="px-6 py-4 text-[14px] text-[#334155]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>{def}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stay informed CTA */}
      <section className="py-20 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Intelligence Updates</div>
            <h2 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(24px,2.5vw,36px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Stay ahead of the S&T landscape.</h2>
            <p className="text-[17px] mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Request early access to Casimir Intelligence and receive briefings as they publish.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
              Request Access
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
