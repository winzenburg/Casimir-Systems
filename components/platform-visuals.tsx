import { Building2, FileText, User, Tag, CheckCircle2 } from 'lucide-react';
import { NetworkGraph, LEGEND } from './network-graph';

// Panels that faithfully recreate the four live modules of Casimir Intelligence
// (intelligence.casimirsystems.com) — navy chrome, white content surfaces,
// real design tokens, and the app's own demo dataset.

// ── Shared chrome ─────────────────────────────────────────────────────────────

function ModuleTopBar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="flex items-center justify-between px-4"
      style={{ background: '#0B132B', borderBottom: '1px solid rgba(75,172,255,0.15)', height: 40 }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[12px] font-semibold text-white truncate" style={{ fontFamily: 'Inter, sans-serif' }}>{title}</span>
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>/</span>
        <span className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{subtitle}</span>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
        <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'IBM Plex Mono, monospace' }}>LIVE</span>
      </div>
    </div>
  );
}

function ModuleFrame({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
      <ModuleTopBar title={title} subtitle={subtitle} />
      {children}
    </div>
  );
}

// ── 1. Ecosystem — graph + entity detail slide ───────────────────────────────

const DETAIL_FIELDS = [
  { label: 'TYPE',           value: 'Company' },
  { label: 'TRL',            value: '6 — System demonstrated in relevant environment' },
  { label: 'CLASSIFICATION', value: 'U' },
  { label: 'CMMC',           value: 'Level 2' },
  { label: 'CAGE CODE',      value: '8QX41' },
];

export function EcosystemPanel() {
  return (
    <ModuleFrame title="S&T Ecosystem" subtitle="Entity Directory & Relationship Map">
      <div className="flex" style={{ height: 300 }}>
        {/* Graph canvas */}
        <div className="flex-1 relative overflow-hidden" style={{ background: '#07101f' }}>
          <div className="absolute inset-0">
            <NetworkGraph />
          </div>
          <div className="absolute bottom-2 left-3 flex gap-2.5 flex-wrap">
            {LEGEND.map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1" style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                <div className="rounded-full" style={{ width: 5, height: 5, background: color }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Entity detail slide — white, matches product detail panel */}
        <div className="hidden sm:flex flex-col shrink-0" style={{ width: 190, background: '#fff', borderLeft: '1px solid #E2E8F0' }}>
          <div className="px-3.5 py-2.5" style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
            <div className="flex items-center gap-1.5">
              <Building2 size={12} style={{ color: '#2563EB' }} />
              <span className="text-[12px] font-bold" style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>Shield AI</span>
            </div>
            <div className="text-[9px] mt-1" style={{ color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Autonomy stack for aircraft — Hivemind pilot AI
            </div>
          </div>
          <div className="flex-1 px-3.5 py-2">
            {DETAIL_FIELDS.map((f) => (
              <div key={f.label} className="py-1.5" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <div className="text-[8px] font-semibold mb-0.5" style={{ color: '#94A3B8', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>{f.label}</div>
                <div className="text-[10px]" style={{ color: '#0F172A', fontFamily: 'IBM Plex Mono, monospace' }}>{f.value}</div>
              </div>
            ))}
          </div>
          <div className="px-3.5 py-2.5" style={{ borderTop: '1px solid #E2E8F0' }}>
            <div className="text-[9px] font-medium text-center text-white rounded py-1.5" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              View Full Profile →
            </div>
          </div>
        </div>
      </div>
    </ModuleFrame>
  );
}

// ── 2. Capital Flows — funding by entity + RDT&E/VC alignment ────────────────

const FUNDING_ROWS = [
  { name: 'Anduril Industries', type: 'company', amount: '$1.50B', pct: 100, note: 'Series F · Lattice OS JADC2 pilot' },
  { name: 'Shield AI',          type: 'company', amount: '$860M',  pct: 57,  note: 'Series G + DARPA ACE Phase III' },
  { name: 'Epirus',             type: 'company', amount: '$310M',  pct: 21,  note: 'Series D · Leonidas HPM production' },
  { name: 'Joby Aviation',      type: 'company', amount: '$180M',  pct: 12,  note: 'Army DEVCOM eVTOL logistics' },
  { name: 'Q-PNT Program',      type: 'program', amount: '$95M',   pct: 6,   note: 'RDT&E · quantum PNT airborne demo' },
];

const TYPE_COLOR: Record<string, string> = {
  company: '#2563EB',
  program: '#D97706',
};

export function InvestmentPanel() {
  return (
    <ModuleFrame title="Capital Flows" subtitle="RDT&E + VC Co-Investment Tracking">
      {/* Metric strip */}
      <div className="grid grid-cols-3" style={{ borderBottom: '1px solid #E2E8F0' }}>
        {[
          { label: 'TOTAL TRACKED', value: '$4.2B', sub: 'FY24–FY26' },
          { label: 'INVESTMENTS',   value: '312',   sub: 'across sources' },
          { label: 'CO-INV SIGNALS', value: '22',   sub: 'active candidates' },
        ].map((m, i) => (
          <div key={m.label} className="px-4 py-2.5" style={{ borderRight: i < 2 ? '1px solid #E2E8F0' : 'none' }}>
            <div className="text-[8px] font-semibold mb-1" style={{ color: '#64748B', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>{m.label}</div>
            <div className="text-[17px] font-bold leading-none" style={{ color: '#0F172A', fontFamily: 'IBM Plex Mono, monospace' }}>{m.value}</div>
            <div className="text-[9px] mt-1" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Sans, sans-serif' }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Funding by entity — ranked bars, matches product funding chart */}
      <div className="px-4 py-3">
        <div className="text-[9px] font-semibold mb-0.5" style={{ color: '#475569', letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif' }}>
          FUNDING BY ENTITY
        </div>
        <div className="text-[9px] mb-2.5" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Mono, monospace' }}>
          Top 5 recipients — total obligated value
        </div>
        {FUNDING_ROWS.map((r, i) => (
          <div key={i} className="mb-2.5" style={{ background: i === 0 ? '#EFF6FF' : 'transparent', borderRadius: 4, padding: '4px 6px', margin: '0 -6px 10px' }}>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-[11px] font-medium" style={{ color: '#0F172A', fontFamily: 'IBM Plex Sans, sans-serif' }}>{r.name}</span>
              <span className="text-[10px] font-bold" style={{ color: '#0F172A', fontFamily: 'IBM Plex Mono, monospace' }}>{r.amount}</span>
            </div>
            <div style={{ height: 5, background: '#F1F5F9', borderRadius: 3 }}>
              <div style={{ height: '100%', width: `${r.pct}%`, background: TYPE_COLOR[r.type], borderRadius: 3 }} />
            </div>
            <div className="text-[9px] mt-1" style={{ color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>{r.note}</div>
          </div>
        ))}
      </div>
    </ModuleFrame>
  );
}

// ── 3. Knowledge Synthesis — AI brief card with HITL review ──────────────────

export function SynthesisPanel() {
  return (
    <ModuleFrame title="Knowledge Synthesis" subtitle="AI Briefs & Analyst Continuity">
      <div className="p-4" style={{ background: '#F8FAFC' }}>
        {/* Knowledge article card — matches product card style */}
        <div className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[9px] font-semibold rounded px-1.5 py-0.5" style={{ background: 'rgba(16,185,129,0.1)', color: '#047857', fontFamily: 'Inter, sans-serif' }}>
              <FileText size={9} /> Published
            </span>
            <span className="text-[9px] font-semibold rounded-full px-2 py-0.5" style={{ background: 'rgba(37,99,235,0.09)', color: '#1D4ED8', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'Inter, sans-serif' }}>
              Autonomous Systems
            </span>
            <span className="ml-auto text-[9px]" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Mono, monospace' }}>v3 · 2026-07-01</span>
          </div>

          <div className="text-[13px] font-bold mb-1.5" style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>
            Shield AI — Hivemind Autonomy Platform Assessment
          </div>
          <p className="text-[11px] m-0" style={{ color: '#475569', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>
            Shield AI Hivemind at TRL 6 following F-16 flight test. Strong VC backing with clear
            path to production contract. DARPA ACE 5–0 dogfight result positions Hivemind for
            T-38C adversary-air integration; monitor Red Flag procurement decision Q4 FY26.
          </p>

          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <span className="flex items-center gap-1 text-[9px]" style={{ color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <User size={9} /> AI-drafted · Claude Sonnet
            </span>
            <span className="flex items-center gap-1 text-[9px]" style={{ color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <Tag size={9} /> autonomy, DARPA ACE, adversary air
            </span>
          </div>
        </div>

        {/* Evidence chain */}
        <div className="flex items-center gap-3 mt-3 px-1 flex-wrap">
          <span className="text-[8px] font-semibold" style={{ color: '#94A3B8', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>EVIDENCE CHAIN</span>
          {[['SAM.gov', 14], ['SEC EDGAR', 6], ['USPTO', 9], ['arXiv', 4]].map(([src, n]) => (
            <span key={src as string} className="text-[9px]" style={{ color: '#475569', fontFamily: 'IBM Plex Mono, monospace' }}>
              {src} <span style={{ color: '#94A3B8' }}>({n})</span>
            </span>
          ))}
        </div>

        {/* HITL review bar */}
        <div className="flex items-center justify-between gap-3 mt-3 rounded-lg px-3.5 py-2.5 flex-wrap" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold text-white" style={{ background: '#2563EB' }}>
              MC
            </div>
            <div>
              <div className="text-[10px] font-medium" style={{ color: '#0F172A', fontFamily: 'IBM Plex Sans, sans-serif' }}>Maj. Chen · S&amp;T Analyst</div>
              <div className="flex items-center gap-1 mt-0.5">
                <CheckCircle2 size={9} style={{ color: '#047857' }} />
                <span className="text-[8.5px] font-semibold" style={{ color: '#047857', letterSpacing: '0.05em', fontFamily: 'IBM Plex Mono, monospace' }}>
                  HUMAN VALIDATED — 4 OF 4 CLAIMS VERIFIED
                </span>
              </div>
            </div>
          </div>
          <div className="rounded px-3 py-1.5 text-[9px] font-medium text-white" style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Approve &amp; Disseminate →
          </div>
        </div>
      </div>
    </ModuleFrame>
  );
}

// ── 4. Governance — audit log + FOCI screening ────────────────────────────────

const AUDIT_ROWS: { action: 'CREATE' | 'UPDATE' | 'FLAG' | 'VIEW'; target: string; table: string; actor: string; time: string }[] = [
  { action: 'FLAG',   target: 'Entity 0417',       table: 'Entity',     actor: 'system/foci-screen', time: '2m ago' },
  { action: 'UPDATE', target: 'Shield AI',          table: 'Entity',     actor: 'maj.chen',           time: '18m ago' },
  { action: 'CREATE', target: 'Series D — Epirus',  table: 'Investment', actor: 'ingest/sec-edgar',   time: '1h ago' },
  { action: 'VIEW',   target: 'Q-PNT Program',      table: 'Entity',     actor: 'lt.col.ray',         time: '2h ago' },
  { action: 'UPDATE', target: 'Hivemind TRL 5→6',   table: 'Signal',     actor: 'maj.chen',           time: '4h ago' },
  { action: 'CREATE', target: 'DARPA ACE debrief',  table: 'Engagement', actor: 'capt.morris',        time: '6h ago' },
];

const ACTION_STYLE: Record<string, { bg: string; color: string }> = {
  CREATE: { bg: 'rgba(16,185,129,0.1)',  color: '#047857' },
  UPDATE: { bg: 'rgba(245,158,11,0.12)', color: '#B45309' },
  FLAG:   { bg: 'rgba(239,68,68,0.1)',   color: '#991B1B' },
  VIEW:   { bg: '#F1F5F9',               color: '#64748B' },
};

export function RiskPanel() {
  return (
    <ModuleFrame title="Governance" subtitle="Audit Trail & Risk Screening">
      {/* FOCI alert strip */}
      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: 'rgba(239,68,68,0.04)', borderBottom: '1px solid #E2E8F0' }}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#EF4444', boxShadow: '0 0 6px #EF4444' }} />
          <span className="text-[10px] font-semibold" style={{ color: '#991B1B', fontFamily: 'Inter, sans-serif' }}>
            FOCI screening: 1 new flag requires review
          </span>
        </div>
        <span className="text-[9px] font-semibold rounded px-2 py-0.5" style={{ background: 'rgba(239,68,68,0.1)', color: '#991B1B', fontFamily: 'IBM Plex Mono, monospace' }}>
          Entity 0417
        </span>
      </div>

      {/* Column headers */}
      <div
        className="grid px-4 py-1.5"
        style={{
          gridTemplateColumns: '64px 1.5fr 0.8fr 1fr 52px',
          background: '#F1F5F9',
          borderBottom: '1px solid #E2E8F0',
          fontFamily: 'Inter, sans-serif',
          fontSize: 8.5,
          fontWeight: 600,
          color: '#64748B',
          letterSpacing: '0.08em',
        }}
      >
        <span>ACTION</span>
        <span>TARGET</span>
        <span>TABLE</span>
        <span>ACTOR</span>
        <span>TIME</span>
      </div>

      {/* Audit rows */}
      {AUDIT_ROWS.map((r, i) => {
        const s = ACTION_STYLE[r.action];
        return (
          <div
            key={i}
            className="grid items-center px-4 py-2"
            style={{ gridTemplateColumns: '64px 1.5fr 0.8fr 1fr 52px', borderBottom: '1px solid #F1F5F9' }}
          >
            <span className="text-[8px] font-bold rounded px-1.5 py-0.5 w-fit" style={{ background: s.bg, color: s.color, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.06em' }}>
              {r.action}
            </span>
            <span className="text-[10.5px] font-medium truncate pr-2" style={{ color: '#0F172A', fontFamily: 'IBM Plex Sans, sans-serif' }}>{r.target}</span>
            <span className="text-[9.5px]" style={{ color: '#64748B', fontFamily: 'IBM Plex Mono, monospace', opacity: 0.8 }}>{r.table}</span>
            <span className="text-[9.5px] truncate pr-2" style={{ color: '#475569', fontFamily: 'IBM Plex Mono, monospace' }}>{r.actor}</span>
            <span className="text-[9px]" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Mono, monospace' }}>{r.time}</span>
          </div>
        );
      })}

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="text-[9px]" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Mono, monospace' }}>
          Every write is logged — immutable audit trail
        </span>
        <span className="text-[9px] font-semibold" style={{ color: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>
          Export for Contracting Officer →
        </span>
      </div>
    </ModuleFrame>
  );
}