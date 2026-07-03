import {
  LayoutDashboard,
  Network,
  Zap,
  TrendingUp,
  BookOpen,
  ClipboardList,
  Search,
  BarChart2,
  Settings,
  Building2,
  GraduationCap,
  Cpu,
  Flag,
  RefreshCw,
} from 'lucide-react';
import { NetworkGraph, LEGEND } from './network-graph';

// Faithful recreation of the live Casimir Intelligence Ecosystem module
// (intelligence.casimirsystems.com/dashboard/ecosystem).

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Overview',   active: false },
  { icon: Network,         label: 'Ecosystem',  active: true  },
  { icon: Zap,             label: 'Technology', active: false },
  { icon: TrendingUp,      label: 'Capital',    active: false },
  { icon: BookOpen,        label: 'Knowledge',  active: false },
  { icon: Search,          label: 'Search',     active: false },
  { icon: BarChart2,       label: 'Portfolio',  active: false },
  { icon: ClipboardList,   label: 'Governance', active: false },
];

type EntityType = 'company' | 'institution' | 'technology' | 'program';

const TYPE_META: Record<EntityType, { icon: typeof Building2; color: string }> = {
  company:     { icon: Building2,     color: '#2563EB' },
  institution: { icon: GraduationCap, color: '#7C3AED' },
  technology:  { icon: Cpu,           color: '#0891B2' },
  program:     { icon: Flag,          color: '#D97706' },
};

const CLASS_STYLE: Record<string, { bg: string; color: string }> = {
  U:    { bg: 'rgba(16,185,129,0.1)',  color: '#047857' },
  CUI:  { bg: 'rgba(245,158,11,0.12)', color: '#B45309' },
  FOUO: { bg: 'rgba(251,191,36,0.12)', color: '#92400E' },
};

const ENTITIES: { name: string; type: EntityType; trl: number | null; cls: string; foci: boolean; selected?: boolean }[] = [
  { name: 'Shield AI',        type: 'company',     trl: 6, cls: 'U',    foci: false, selected: true },
  { name: 'Anduril Industries', type: 'company',   trl: 7, cls: 'U',    foci: false },
  { name: 'DARPA ACE',        type: 'program',     trl: null, cls: 'CUI', foci: false },
  { name: 'Epirus',           type: 'company',     trl: 5, cls: 'U',    foci: false },
  { name: 'Entity 0417',      type: 'company',     trl: 4, cls: 'FOUO', foci: true },
  { name: 'MIT Lincoln Laboratory', type: 'institution', trl: null, cls: 'U', foci: false },
  { name: 'Hivemind',         type: 'technology',  trl: 6, cls: 'U',    foci: false },
];

export function PlatformMockup() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden text-left"
      style={{
        boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#0B132B',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: '#1e293b', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex gap-1.5">
          {['#EF4444', '#F59E0B', '#10B981'].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.8 }} />
          ))}
        </div>
        <div
          className="flex-1 rounded text-center text-[11px] mx-2"
          style={{
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.4)',
            padding: '3px 12px',
            fontFamily: 'IBM Plex Mono, monospace',
          }}
        >
          intelligence.casimirsystems.com/dashboard/ecosystem
        </div>
        <div className="w-14" />
      </div>

      {/* App layout */}
      <div className="flex" style={{ height: 480 }}>
        {/* Sidebar — navy, matches product */}
        <div
          className="hidden sm:flex flex-col shrink-0"
          style={{ width: 168, background: '#0B132B', borderRight: '1px solid rgba(75,172,255,0.15)' }}
        >
          <div className="px-4 py-3" style={{ borderBottom: '1px solid rgba(75,172,255,0.15)' }}>
            <div className="text-[12px] font-bold tracking-widest" style={{ color: '#60a5fa', fontFamily: 'IBM Plex Mono, monospace' }}>
              CASIMIR
            </div>
            <div className="text-[10px] mt-0.5 tracking-widest text-white" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
              INTELLIGENCE
            </div>
          </div>
          <div className="flex-1 py-2.5 px-2">
            <div className="text-[9px] font-semibold px-2 mb-1.5" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', fontFamily: 'Inter, sans-serif' }}>
              MODULES
            </div>
            {NAV_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-2 py-[7px] text-[12px] rounded-[3px]"
                style={{
                  background: item.active ? 'rgba(77,172,255,0.12)' : 'transparent',
                  borderLeft: item.active ? '2px solid #4dacff' : '2px solid transparent',
                  color: item.active ? '#fff' : 'rgba(255,255,255,0.55)',
                  fontFamily: 'IBM Plex Sans, sans-serif',
                }}
              >
                <item.icon size={13} style={{ color: item.active ? '#60a5fa' : 'rgba(255,255,255,0.4)' }} />
                {item.label}
              </div>
            ))}
          </div>
          <div className="px-2 py-2.5" style={{ borderTop: '1px solid rgba(75,172,255,0.15)' }}>
            <div className="flex items-center gap-2.5 px-2 py-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <Settings size={13} style={{ color: 'rgba(255,255,255,0.4)' }} />
              Settings
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ background: '#F8FAFC' }}>
          {/* Top bar — navy, matches product */}
          <div
            className="flex items-center justify-between px-5"
            style={{ background: '#0B132B', borderBottom: '1px solid rgba(75,172,255,0.15)', height: 44 }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-[13px] font-semibold text-white truncate" style={{ fontFamily: 'Inter, sans-serif' }}>S&amp;T Ecosystem</span>
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>/</span>
              <span className="text-[11px] truncate" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'IBM Plex Sans, sans-serif' }}>Entity Directory &amp; Relationship Map</span>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'IBM Plex Mono, monospace' }}>LIVE</span>
              </div>
              <span className="hidden md:block text-[10px]" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'IBM Plex Mono, monospace' }}>
                Jul 02, 2026, 01:42 PM MDT
              </span>
              <RefreshCw size={12} style={{ color: 'rgba(255,255,255,0.5)' }} />
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: '#2563EB' }}>
                AN
              </div>
            </div>
          </div>

          {/* Filter bar — white */}
          <div className="flex items-center gap-2 px-4 py-2" style={{ background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
            <div className="flex items-center gap-1.5 rounded border px-2.5 py-1 flex-1 max-w-[220px]" style={{ borderColor: '#E2E8F0' }}>
              <Search size={11} style={{ color: '#94A3B8' }} />
              <span className="text-[11px]" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Sans, sans-serif' }}>Search entities…</span>
            </div>
            {['All Types', 'All Classifications'].map((t) => (
              <div key={t} className="hidden md:block text-[10px] rounded border px-2 py-1" style={{ borderColor: '#E2E8F0', color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', background: '#fff' }}>
                {t}
              </div>
            ))}
            <div className="ml-auto text-[10px]" style={{ color: '#64748B', fontFamily: 'IBM Plex Mono, monospace' }}>
              1,247 entities
            </div>
          </div>

          {/* Split: entity table + network graph */}
          <div className="flex flex-1 overflow-hidden">
            {/* Entity table — white surface */}
            <div className="flex flex-col shrink-0" style={{ width: '46%', background: '#fff', borderRight: '1px solid #E2E8F0' }}>
              <div
                className="grid px-3 py-1.5"
                style={{
                  gridTemplateColumns: '1.7fr 44px 56px 36px',
                  borderBottom: '1px solid #E2E8F0',
                  background: '#F1F5F9',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 9,
                  fontWeight: 600,
                  color: '#64748B',
                  letterSpacing: '0.08em',
                }}
              >
                <span>ENTITY</span>
                <span>TRL</span>
                <span>CLASS</span>
                <span>FOCI</span>
              </div>
              <div className="flex-1 overflow-hidden">
                {ENTITIES.map((e, i) => {
                  const meta = TYPE_META[e.type];
                  const cls = CLASS_STYLE[e.cls];
                  return (
                    <div
                      key={i}
                      className="grid items-center px-3 py-[7px]"
                      style={{
                        gridTemplateColumns: '1.7fr 44px 56px 36px',
                        borderBottom: '1px solid #F1F5F9',
                        background: e.selected ? '#DBEAFE' : 'transparent',
                        boxShadow: e.selected ? 'inset 3px 0 0 #2563EB' : undefined,
                      }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <meta.icon size={12} style={{ color: meta.color }} className="shrink-0" />
                        <span className="text-[11px] font-medium truncate" style={{ color: '#0F172A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                          {e.name}
                        </span>
                      </div>
                      <span className="text-[10px]" style={{ color: '#475569', fontFamily: 'IBM Plex Mono, monospace' }}>
                        {e.trl ?? '—'}
                      </span>
                      <span
                        className="text-[8px] font-semibold rounded px-1.5 py-0.5 w-fit"
                        style={{ background: cls.bg, color: cls.color, fontFamily: 'IBM Plex Mono, monospace' }}
                      >
                        {e.cls}
                      </span>
                      {e.foci ? (
                        <span className="text-[8px] font-semibold rounded px-1.5 py-0.5 w-fit" style={{ background: 'rgba(239,68,68,0.1)', color: '#991B1B', fontFamily: 'IBM Plex Mono, monospace' }}>
                          FLAG
                        </span>
                      ) : (
                        <span className="text-[10px]" style={{ color: '#CBD5E1' }}>—</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between px-3 py-2" style={{ borderTop: '1px solid #E2E8F0' }}>
                <span className="text-[9px]" style={{ color: '#94A3B8', fontFamily: 'IBM Plex Mono, monospace' }}>1–7 of 1,247</span>
                <span className="text-[9px] font-semibold" style={{ color: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}>Next →</span>
              </div>
            </div>

            {/* Network graph — dark canvas, matches product */}
            <div className="flex-1 relative overflow-hidden" style={{ background: '#07101f' }}>
              <div className="absolute inset-0">
                <NetworkGraph />
              </div>
              {/* Legend */}
              <div className="absolute bottom-2 left-3 flex gap-2.5 flex-wrap">
                {LEGEND.map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1" style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    <div className="rounded-full" style={{ width: 5, height: 5, background: color }} />
                    {label}
                  </div>
                ))}
              </div>
              {/* Zoom controls */}
              <div className="absolute top-2.5 right-2.5 flex flex-col gap-1">
                {['+', '−', '⤢'].map((c) => (
                  <div key={c} className="w-5 h-5 rounded flex items-center justify-center text-[10px]" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
