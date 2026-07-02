'use client';

import { NetworkGraph } from './network-graph';

// ── Shared primitives ─────────────────────────────────────────────────────────

function StatusDot({ color, pulse = false }: { color: string; pulse?: boolean }) {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full inline-block shrink-0"
      style={{ background: color, boxShadow: pulse ? `0 0 7px ${color}` : undefined }}
    />
  );
}

function PanelHeader({ dot, dotColor, title, meta }: { dot?: boolean; dotColor?: string; title: string; meta: string }) {
  return (
    <div
      className="flex items-center justify-between px-5 py-3"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-2">
        {dot && <StatusDot color={dotColor ?? '#10B981'} pulse />}
        <span
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}
        >
          {title}
        </span>
      </div>
      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.28)' }}>
        {meta}
      </span>
    </div>
  );
}

// ── 1. Ecosystem Panel ────────────────────────────────────────────────────────

const ENTITY_TYPES = [
  { label: 'COMPANIES',  count: '1,240', color: '#2563EB', pct: 76 },
  { label: 'INVESTORS',  count: '847',   color: '#F59E0B', pct: 52 },
  { label: 'CLEARED',    count: '412',   color: '#10B981', pct: 28 },
  { label: 'FLAGGED',    count: '12',    color: '#EF4444', pct: 4  },
];

const LEGEND_ITEMS: [string, string][] = [
  ['#2563EB', 'Company'],
  ['#F59E0B', 'Investor'],
  ['#10B981', 'Cleared'],
  ['#EF4444', 'Risk Flag'],
];

export function EcosystemPanel() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <PanelHeader dot dotColor="#10B981" title="LIVE SYNTHESIS // S&T ECOSYSTEM" meta="40+ SOURCES · Q2 2026" />

      <div className="flex" style={{ height: 290 }}>
        {/* Graph */}
        <div className="flex-1 relative" style={{ background: 'linear-gradient(135deg, #06091f 0%, #0d1630 100%)' }}>
          <div className="scan-line" />
          <div className="absolute inset-0 p-3">
            <NetworkGraph />
          </div>
          {/* Entity count bubble */}
          <div
            className="absolute top-3 right-3 rounded px-2.5 py-1.5"
            style={{ background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(37,99,235,0.3)' }}
          >
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
              2,847
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', marginTop: 2 }}>
              ENTITIES
            </div>
          </div>
        </div>

        {/* Sidebar: entity breakdown */}
        <div
          className="flex flex-col justify-center"
          style={{ width: 170, borderLeft: '1px solid rgba(255,255,255,0.07)', padding: '16px 18px' }}
        >
          <div
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.09em', marginBottom: 14 }}
          >
            ENTITY BREAKDOWN
          </div>
          {ENTITY_TYPES.map(({ label, count, color, pct }) => (
            <div key={label} style={{ marginBottom: 13 }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.35)' }}
              >
                <span>{label}</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>{count}</span>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 2 }} />
              </div>
            </div>
          ))}
          <div
            className="rounded px-2.5 py-1.5 mt-2"
            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
              DATA SOURCES
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700, color: '#60a5fa', lineHeight: 1.2, marginTop: 2 }}>
              40+
            </div>
          </div>
        </div>
      </div>

      {/* Legend footer */}
      <div
        className="flex items-center gap-5 px-5 py-2.5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {LEGEND_ITEMS.map(([color, label]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 2. Risk Assessment Panel ──────────────────────────────────────────────────

interface RiskRow {
  name: string;
  sector: string;
  trl: number;
  risk: 'low' | 'medium' | 'high';
  foci: boolean;
  cmmc: string;
  vc: string;
}

const RISK_ROWS: RiskRow[] = [
  { name: 'Sierra Space',   sector: 'Launch Systems',   trl: 7, risk: 'low',    foci: false, cmmc: 'L2',       vc: '$840M' },
  { name: 'True Anomaly',   sector: 'Orbital Maneuver', trl: 6, risk: 'low',    foci: false, cmmc: 'L2',       vc: '$100M' },
  { name: 'Anduril Ind.',   sector: 'AI / Autonomy',    trl: 5, risk: 'medium', foci: false, cmmc: 'In Prog',  vc: '$1.5B' },
  { name: 'Entity FOCI-7',  sector: 'Microelectronics', trl: 3, risk: 'high',   foci: true,  cmmc: 'N/A',      vc: '$240M' },
  { name: 'Umbra Space',    sector: 'SAR Imaging',      trl: 7, risk: 'low',    foci: false, cmmc: 'L1',       vc: '$65M'  },
  { name: 'Rocket Lab',     sector: 'Launch Systems',   trl: 8, risk: 'low',    foci: false, cmmc: 'L2',       vc: '$777M' },
  { name: 'SinoTech LLC',   sector: 'Comms / RF',       trl: 4, risk: 'high',   foci: true,  cmmc: 'N/A',      vc: '$120M' },
];

const RISK_COLOR: Record<string, string> = { low: '#10B981', medium: '#F59E0B', high: '#EF4444' };

export function RiskPanel() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <PanelHeader dot dotColor="#EF4444" title="RISK ASSESSMENT // LIVE" meta="FOCI FLAGS: 2 · PENDING: 1" />

      {/* Column headers */}
      <div
        className="grid px-5 py-2"
        style={{
          gridTemplateColumns: '1.1fr 1fr 70px 56px 68px 64px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 8,
          color: 'rgba(255,255,255,0.22)',
          letterSpacing: '0.08em',
        }}
      >
        <span>ENTITY</span>
        <span>SECTOR</span>
        <span>RISK</span>
        <span>TRL</span>
        <span>CMMC</span>
        <span>VC RAISED</span>
      </div>

      {/* Rows */}
      {RISK_ROWS.map((r, i) => (
        <div
          key={i}
          className="grid items-center px-5 py-2.5"
          style={{
            gridTemplateColumns: '1.1fr 1fr 70px 56px 68px 64px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            background: r.foci ? 'rgba(239,68,68,0.04)' : 'transparent',
          }}
        >
          <div className="flex items-center gap-1.5">
            <span
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: 11,
                fontWeight: 600,
                color: r.foci ? '#EF4444' : 'rgba(255,255,255,0.75)',
              }}
            >
              {r.name}
            </span>
            {r.foci && (
              <span
                className="text-[8px] px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.28)', color: '#EF4444', fontFamily: 'IBM Plex Mono, monospace' }}
              >
                FOCI
              </span>
            )}
          </div>
          <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.32)' }}>
            {r.sector}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: RISK_COLOR[r.risk] }} />
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: RISK_COLOR[r.risk], textTransform: 'uppercase' }}>
              {r.risk}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>
              {r.trl}
            </span>
            <div style={{ height: 3, width: 22, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: `${(r.trl / 9) * 100}%`, background: '#2563EB', borderRadius: 2 }} />
            </div>
          </div>
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: 10,
              color: r.cmmc === 'N/A' ? '#EF4444' : r.cmmc === 'In Prog' ? '#F59E0B' : 'rgba(255,255,255,0.45)',
            }}
          >
            {r.cmmc}
          </span>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>
            {r.vc}
          </span>
        </div>
      ))}

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.18)' }}>
          SHOWING 7 OF 2,847 ENTITIES // SORTED BY RISK DESC
        </span>
        <div
          className="rounded px-3 py-1 text-[9px] font-medium"
          style={{ background: '#2563EB', color: '#fff', fontFamily: 'IBM Plex Mono, monospace', cursor: 'pointer' }}
        >
          GENERATE REPORT →
        </div>
      </div>
    </div>
  );
}

// ── 3. Co-Investment Panel ────────────────────────────────────────────────────

const THEMES = [
  { theme: 'Space ISR',          rdte: 2.4, vc: 1.8 },
  { theme: 'Directed Energy',    rdte: 1.2, vc: 0.9 },
  { theme: 'Orbital Logistics',  rdte: 0.7, vc: 1.1 },
  { theme: 'PNT Resilience',     rdte: 0.9, vc: 0.4 },
  { theme: 'Cyber / EW',         rdte: 0.6, vc: 0.3 },
];

const OPPORTUNITIES = [
  { label: 'PNT Resilience', note: 'Underweighted 2.1× vs. RDT&E priority', count: 14 },
  { label: 'Orbital Logistics', note: 'VC outpacing DoD — 8 co-inv. candidates', count: 8 },
];

const MAX_VAL = 2.4;

export function InvestmentPanel() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <PanelHeader dot dotColor="#F59E0B" title="CO-INVESTMENT ALIGNMENT" meta="$4.2B TOTAL · 200+ FUNDS" />

      {/* Legend */}
      <div
        className="flex gap-5 px-5 py-2.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {([['#2563EB', 'RDT&E Budget'], ['#10B981', 'VC Investment']] as [string, string][]).map(([c, l]) => (
          <div key={l} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm" style={{ background: c }} />
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="px-5 pt-4 pb-2">
        {THEMES.map((t, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.52)', letterSpacing: '0.04em' }}>
                {t.theme.toUpperCase()}
              </span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.28)' }}>
                ${(t.rdte + t.vc).toFixed(1)}B
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                <div style={{ height: '100%', width: `${(t.rdte / MAX_VAL) * 100}%`, background: '#2563EB', borderRadius: 3 }} />
              </div>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                <div style={{ height: '100%', width: `${(t.vc / MAX_VAL) * 100}%`, background: '#10B981', borderRadius: 3 }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Opportunity signals */}
      <div className="px-5 pb-4">
        <div
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', marginBottom: 8 }}
        >
          OPPORTUNITY SIGNALS
        </div>
        {OPPORTUNITIES.map((o, i) => (
          <div
            key={i}
            className="rounded-lg px-4 py-3 mb-2"
            style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: '#10B981', letterSpacing: '0.07em' }}>
                {o.label.toUpperCase()}
              </span>
              <span
                className="rounded px-1.5 py-0.5 text-[8px]"
                style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', fontFamily: 'IBM Plex Mono, monospace' }}
              >
                {o.count} CANDIDATES
              </span>
            </div>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
              {o.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── AI Synthesis Panel — intelligence brief with human-in-the-loop review ─────

const BRIEF_THEMES = ['SPACE ISR', 'ORBITAL LOGISTICS', 'DUAL-USE'];

const BRIEF_SOURCES = [
  { src: 'SAM.gov',    n: 14 },
  { src: 'SEC EDGAR',  n: 6  },
  { src: 'USPTO',      n: 9  },
  { src: 'arXiv',      n: 4  },
];

const BRIEF_LINES: { text: string; cite?: string }[] = [
  { text: 'True Anomaly closed a $260M Series C (Mar 2026) led by defense-focused funds; total raised $360M.', cite: '1' },
  { text: 'Active USSF contract history: 2 SBIR Phase II awards, 1 STRATFI — orbital pursuit and rendezvous ops.', cite: '2' },
  { text: 'Patent velocity up 3.2× YoY across autonomous proximity operations (9 filings, Q1–Q2 2026).', cite: '3' },
  { text: 'No FOCI exposure identified across cap table. CMMC L2 self-attestation on file.', cite: '4' },
];

export function SynthesisPanel() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <PanelHeader dot dotColor="#2563EB" title="AI SYNTHESIS // INTELLIGENCE BRIEF" meta="CLAUDE SONNET · SOURCE-ATTRIBUTED" />

      {/* Brief document */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff' }}>
              True Anomaly, Inc.
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em', marginTop: 2 }}>
              ENTITY BRIEF · GENERATED 06:42 MT · 33 SOURCES FUSED
            </div>
          </div>
          <div className="flex gap-1.5">
            {BRIEF_THEMES.map((t) => (
              <span
                key={t}
                className="text-[8px] rounded px-1.5 py-0.5"
                style={{ background: 'rgba(37,99,235,0.14)', border: '1px solid rgba(37,99,235,0.25)', color: '#93C5FD', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.05em' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {BRIEF_LINES.map((line, i) => (
          <div key={i} className="flex gap-2.5 mb-2.5 items-start">
            <div className="w-1 rounded-sm shrink-0 self-stretch" style={{ background: 'rgba(37,99,235,0.35)' }} />
            <p className="m-0" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              {line.text}
              {line.cite && (
                <sup style={{ color: '#60a5fa', fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, marginLeft: 3 }}>[{line.cite}]</sup>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Source attribution strip */}
      <div className="flex items-center gap-4 px-5 py-2.5 flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
          EVIDENCE CHAIN
        </span>
        {BRIEF_SOURCES.map(({ src, n }) => (
          <div key={src} className="flex items-center gap-1.5">
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.45)' }}>{src}</span>
            <span
              className="rounded px-1 text-[8px]"
              style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)', fontFamily: 'IBM Plex Mono, monospace' }}
            >
              {n}
            </span>
          </div>
        ))}
      </div>

      {/* Human-in-the-loop review bar */}
      <div className="flex items-center justify-between px-5 py-3 flex-wrap gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 700, color: '#F59E0B' }}>MC</span>
          </div>
          <div>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.65)' }}>
              Maj. Chen · S&T Analyst
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <StatusDot color="#10B981" pulse />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: '#10B981', letterSpacing: '0.07em' }}>
                HUMAN VALIDATED · 4 OF 4 CLAIMS VERIFIED
              </span>
            </div>
          </div>
        </div>
        <div
          className="rounded px-3 py-1 text-[9px]"
          style={{ background: '#2563EB', color: '#fff', fontFamily: 'IBM Plex Mono, monospace', cursor: 'pointer' }}
        >
          APPROVE &amp; DISSEMINATE →
        </div>
      </div>
    </div>
  );
}

// ── 4. Institutional Knowledge Panel ─────────────────────────────────────────

interface EngagementRow {
  entity: string;
  type: string;
  topic: string;
  officer: string;
  status: 'active' | 'follow-up' | 'closed';
}

const ENGAGEMENTS: EngagementRow[] = [
  { entity: 'True Anomaly',   type: 'Company',  topic: 'Orbital Maneuver — TRL 6 Review',      officer: 'Maj. Chen',    status: 'follow-up' },
  { entity: 'Shield Capital', type: 'Investor', topic: 'Co-inv. alignment: Directed Energy',    officer: 'Lt. Col. Ray', status: 'active'    },
  { entity: 'Umbra Space',    type: 'Company',  topic: 'SAR Imaging — Acquisition Path',        officer: 'Maj. Chen',    status: 'closed'    },
  { entity: 'Anduril Ind.',   type: 'Company',  topic: 'AI Autonomy — FOCI Review Required',    officer: 'Capt. Morris', status: 'follow-up' },
  { entity: 'a16z Defense',   type: 'Investor', topic: 'Portfolio Briefing — Space ISR',        officer: 'Lt. Col. Ray', status: 'closed'    },
  { entity: 'Rocket Lab',     type: 'Company',  topic: 'Launch Cadence — Phase III Transition', officer: 'Capt. Morris', status: 'active'    },
];

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  'active':    { bg: 'rgba(37,99,235,0.15)',   color: '#60a5fa',                  label: 'Active'    },
  'follow-up': { bg: 'rgba(245,158,11,0.15)',  color: '#FCD34D',                  label: 'Follow-Up' },
  'closed':    { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)',    label: 'Closed'    },
};

export function KnowledgePanel() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <PanelHeader dot dotColor="#8B5CF6" title="ENGAGEMENT KNOWLEDGE BASE" meta="CONTINUITY SCORE: 94%" />

      {/* Stats bar */}
      <div className="flex" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        {[
          { label: 'ENGAGEMENTS', value: '847' },
          { label: 'ENTITIES',    value: '312' },
          { label: 'PERSONNEL',   value: '14'  },
          { label: 'DUPES SAVED', value: '63'  },
        ].map((s, i) => (
          <div
            key={i}
            className="flex-1 px-4 py-3"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
          >
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', marginBottom: 3 }}>
              {s.label}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Column headers */}
      <div
        className="grid px-5 py-2"
        style={{
          gridTemplateColumns: '1fr 0.7fr 1.6fr 0.9fr 80px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 8,
          color: 'rgba(255,255,255,0.22)',
          letterSpacing: '0.08em',
        }}
      >
        <span>ENTITY</span>
        <span>TYPE</span>
        <span>ENGAGEMENT TOPIC</span>
        <span>OFFICER</span>
        <span>STATUS</span>
      </div>

      {/* Engagement rows */}
      {ENGAGEMENTS.map((e, i) => {
        const s = STATUS_STYLE[e.status];
        return (
          <div
            key={i}
            className="grid items-center px-5 py-2.5"
            style={{
              gridTemplateColumns: '1fr 0.7fr 1.6fr 0.9fr 80px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>
              {e.entity}
            </span>
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>
              {e.type}
            </span>
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>
              {e.topic}
            </span>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>
              {e.officer}
            </span>
            <span
              className="text-[8px] rounded px-2 py-0.5 text-center"
              style={{ background: s.bg, color: s.color, fontFamily: 'IBM Plex Mono, monospace' }}
            >
              {s.label}
            </span>
          </div>
        );
      })}

      {/* Footer */}
      <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#8B5CF6', boxShadow: '0 0 6px #8B5CF6' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>
            KNOWLEDGE RETAINED ACROSS 3 PERSONNEL ROTATIONS
          </span>
        </div>
        <div
          className="rounded px-3 py-1 text-[9px]"
          style={{ background: '#8B5CF6', color: '#fff', fontFamily: 'IBM Plex Mono, monospace', cursor: 'pointer' }}
        >
          EXPORT BRIEFING →
        </div>
      </div>
    </div>
  );
}
