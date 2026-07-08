'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

const PERSONAS = [
  {
    title: 'S&T Analysts',
    subtitle: 'Task Force Futures · AFWERX · DARPA · Army Futures Command · NRO · Space Domain Awareness',
    challenge: 'You are responsible for identifying and tracking commercial technologies across your mission domain, whether that is S&T investment, commercial satellite data, or multi-domain sensor synthesis. Your current workflow requires manual web searches, spreadsheets, and weeks of synthesis work before a single briefing can be prepared.',
    jobs: [
      'Map the full commercial innovation landscape for a given S&T or geospatial domain in hours, not weeks',
      'Automatically track funding rounds, government contracts, and sensor data feeds as they publish',
      'Generate ecosystem briefing packages with a single export, no engineering support needed',
      'Identify emerging dual-use technologies and multi-domain signals before competitors do',
    ],
    icon: '◈',
    color: '#2563EB',
  },
  {
    title: 'Contracting Officers',
    subtitle: 'DoD Acquisition Workforce · DCMA · AFMC · PEO Offices',
    challenge: 'Every co-investment recommendation or award decision requires a defensible risk assessment. Determining FOCI exposure, CMMC readiness, and supply chain risk currently takes weeks of manual investigation, with no standardized audit trail and no platform that handles all three simultaneously.',
    jobs: [
      'Run FOCI screening and entity classification in minutes, not weeks',
      'Generate audit-ready risk assessments with full primary source documentation',
      'Score CMMC readiness levels using automated compliance checks',
      'Produce investment memos and decision packages that meet acquisition standards',
    ],
    icon: '⚑',
    color: '#F59E0B',
  },
  {
    title: 'Mission Operators',
    subtitle: 'USAF Pilots · Mission Commanders · Human-Machine Teaming Programs · CHORD',
    challenge: 'After a mission, AI systems have generated recommendations, flagged anomalies, and made autonomous decisions. You need to understand what the AI did, why it did it, and whether those decisions were sound before you can brief leadership, file an after-action report, or trust the system on the next sortie.',
    jobs: [
      'Review AI decision logs in plain language, no engineering support required',
      'Flag AI outputs for human review before they propagate downstream',
      'Generate post-mission AI debrief packages ready to brief to leadership',
      'Maintain a full, auditable trail of AI actions and human approval decisions',
    ],
    icon: '◉',
    color: '#EF4444',
  },
  {
    title: 'Innovation Leaders',
    subtitle: 'COMSO · SpaceWERX · DIU · AFWERX · Naval X · Army AI Task Force',
    challenge: 'Your mission is to align the U.S. defense industrial base with private capital and mission priorities. You need to demonstrate to senior leadership that investment and co-investment decisions are strategic, evidenced, and defensible, but the data is scattered across hundreds of disconnected sources, and your team lacks the bandwidth to synthesize it at scale.',
    jobs: [
      'Align RDT&E budget priorities with real-time venture capital flow data',
      'Identify co-investment opportunities that match current force design priorities',
      'Track portfolio company TRL progression and signal velocity over time',
      'Brief senior leadership with one-click executive summary generation',
    ],
    icon: '⟳',
    color: '#10B981',
  },
];

export default function SolutionsPage() {
  const [active, setActive] = useState(0);
  const persona = PERSONAS[active];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Casimir Systems · Who We Serve</div>
            <h1 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(36px,4.5vw,60px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Precision tools for the people<br />making the decisions.
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Casimir Systems builds decision support applications for the DoD acquisition workforce, across services, program offices, and innovation organizations. Every application is designed around the specific Jobs To Be Done of its users.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Persona switcher */}
      <section className="py-28 lg:py-32 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          {/* Tab switcher */}
          <div className="flex gap-1 rounded-xl p-1 mb-14 w-fit" style={{ background: '#E2E8F0' }}>
            {PERSONAS.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="px-6 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  background: active === i ? '#fff' : 'transparent',
                  color: active === i ? '#0B132B' : '#64748B',
                  boxShadow: active === i ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Active persona content */}
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: persona.color, fontFamily: 'Inter, sans-serif' }}>{persona.subtitle}</div>
              <h2 className="font-bold text-[#0B132B] mb-5" style={{ fontSize: 32, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.25 }}>{persona.title}</h2>
              <div className="rounded-xl p-6 mb-7" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-[#64748B] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>The Challenge</div>
                <p className="text-[15px] text-[#334155]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>{persona.challenge}</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14 }}>
                Request a Tailored Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-[#64748B] mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>Jobs To Be Done</div>
              {persona.jobs.map((job, k) => (
                <div key={k} className="flex gap-4 py-4" style={{ borderBottom: k < persona.jobs.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold" style={{ background: `${persona.color}14`, border: `1px solid ${persona.color}30`, color: persona.color, fontFamily: 'Inter, sans-serif' }}>
                    {k + 1}
                  </div>
                  <p className="text-[15px] text-[#334155] pt-0.5" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>{job}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All personas overview */}
      <section className="py-28 lg:py-32 px-6 lg:px-10" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Who We Serve</div>
            <h2 className="font-bold text-[#0B132B] mb-12" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Across services, branches, and program offices.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAS.map((p, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <button
                  onClick={() => { setActive(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-left p-8 rounded-xl w-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl leading-none shrink-0" style={{ color: p.color }}>{p.icon}</span>
                    <h3 className="font-semibold text-[#0B132B] text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{p.title}</h3>
                  </div>
                  <p className="text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{p.subtitle}</p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-32 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <h2 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(28px,2.8vw,40px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Ready to see it in action?</h2>
            <p className="text-[17px] mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Schedule a scoped demonstration tailored to your specific role and mission requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
