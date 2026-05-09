'use client';

import { NetworkGraph, LEGEND } from './network-graph';
import { RiskBadge } from './risk-badge';

const NAV_ITEMS = [
  { icon: '⬡', label: 'Dashboard',   active: false },
  { icon: '◎', label: 'Ecosystem',   active: true  },
  { icon: '◻', label: 'Companies',   active: false },
  { icon: '◈', label: 'Investments', active: false },
  { icon: '⚑', label: 'Risk Layers', active: false },
  { icon: '≡', label: 'Reports',     active: false },
];

const RISKS: { name: string; sector: string; risk: 'low' | 'medium' | 'high'; trl: number; flag: string | null }[] = [
  { name: 'Company A', sector: 'Launch Systems',   risk: 'low',    trl: 7, flag: null },
  { name: 'Company B', sector: 'AI/ML Platform',   risk: 'high',   trl: 4, flag: 'FOCI' },
  { name: 'Company C', sector: 'SatCom',           risk: 'medium', trl: 6, flag: 'Review' },
  { name: 'Company D', sector: 'Directed Energy',  risk: 'low',    trl: 8, flag: null },
];

const METRICS = [
  { label: 'Companies Tracked', value: '2,847', delta: '+124 this quarter',  alert: false },
  { label: 'Investment Flows',  value: '$4.2B', delta: 'RDT&E + VC combined', alert: false },
  { label: 'FOCI Flags',        value: '12',    delta: 'Requires review',     alert: true  },
  { label: 'Avg TRL',           value: '4.7',   delta: 'Ecosystem average',   alert: false },
];

export function PlatformMockup() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.07)',
        background: '#0f172a',
      }}
    >
      {/* Status bar — no browser chrome */}
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ background: '#0B132B', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#10B981', boxShadow: '0 0 6px #10B981' }}
          />
          <span
            className="text-[10px] uppercase tracking-widest"
            style={{ color: '#10B981', fontFamily: 'IBM Plex Mono, monospace' }}
          >
            Live Synthesis
          </span>
        </div>
        <div
          className="text-[10px]"
          style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.06em' }}
        >
          intelligence.casimir.systems · Directed Energy S&T Ecosystem
        </div>
        <div
          className="text-[9px] px-2 py-0.5 rounded"
          style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', color: '#60a5fa', fontFamily: 'IBM Plex Mono, monospace' }}
        >
          CUI // FOUO
        </div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ height: 480 }}>
        {/* Sidebar */}
        <div
          className="flex flex-col"
          style={{ width: 196, background: '#0B132B', borderRight: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="px-4 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-[11px] font-bold text-[#2563EB] tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
              CASIMIR
            </div>
            <div className="text-[9px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.08em' }}>
              INTELLIGENCE PLATFORM
            </div>
          </div>
          <div className="flex-1 py-2">
            {NAV_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 text-[12px]"
                style={{
                  background: item.active ? 'rgba(37,99,235,0.12)' : 'transparent',
                  borderLeft: item.active ? '2px solid #2563EB' : '2px solid transparent',
                  color: item.active ? '#fff' : 'rgba(255,255,255,0.38)',
                  fontFamily: 'IBM Plex Sans, sans-serif',
                }}
              >
                <span className="text-sm" style={{ opacity: item.active ? 1 : 0.6 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.06em' }}>
              CUI // FOUO
            </div>
            <div className="text-[9px] mt-0.5" style={{ color: 'rgba(255,255,255,0.15)', fontFamily: 'IBM Plex Mono, monospace' }}>
              TF-F Analyst Session
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ background: '#f1f5f9' }}>
          {/* Top bar */}
          <div
            className="flex items-center gap-3 px-5 py-2.5"
            style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}
          >
            <div className="flex-1 text-[13px] font-semibold text-[#0B132B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Directed Energy — S&T Ecosystem Map
            </div>
            <div className="flex gap-1.5">
              {['Q2 2026', 'All TRL', 'USSF Filter'].map((t, i) => (
                <div
                  key={i}
                  className="text-[10px] rounded px-2 py-0.5"
                  style={{ border: '1px solid #e2e8f0', color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', background: '#fff' }}
                >
                  {t}
                </div>
              ))}
            </div>
            <RiskBadge level="low" label="Synthesis: Current" />
          </div>

          {/* Metrics */}
          <div className="flex" style={{ gap: 1, background: '#e2e8f0', padding: 1 }}>
            {METRICS.map((m, i) => (
              <div key={i} className="flex-1 bg-white px-3.5 py-2.5">
                <div
                  className="text-[9px] uppercase tracking-widest mb-1"
                  style={{ color: '#94a3b8', fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.07em' }}
                >
                  {m.label}
                </div>
                <div
                  className="text-lg font-bold tabular"
                  style={{ fontFamily: 'Inter, sans-serif', color: m.alert ? '#EF4444' : '#0B132B' }}
                >
                  {m.value}
                </div>
                <div
                  className="text-[9px] mt-0.5"
                  style={{ color: m.alert ? '#F59E0B' : '#94a3b8', fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  {m.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Graph + Risk panel */}
          <div className="flex flex-1 overflow-hidden">
            {/* Graph */}
            <div
              className="flex-1 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0B132B 0%, #1a2744 100%)' }}
            >
              <div className="scan-line" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <NetworkGraph />
              </div>
              {/* Legend */}
              <div className="absolute bottom-2.5 left-3 flex gap-3">
                {LEGEND.map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1" style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Mono, monospace' }}>
                    <div className="rounded-full" style={{ width: 6, height: 6, background: color }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Risk panel */}
            <div className="flex flex-col" style={{ width: 215, background: '#fff', borderLeft: '1px solid #e2e8f0' }}>
              <div
                className="px-3.5 py-2.5 text-[11px] font-semibold text-[#0B132B]"
                style={{ fontFamily: 'Inter, sans-serif', borderBottom: '1px solid #e2e8f0' }}
              >
                Risk Assessment
              </div>
              <div className="flex-1 overflow-y-auto py-1">
                {RISKS.map((r, i) => (
                  <div key={i} className="px-3.5 py-2.5" style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-[11px] font-semibold text-[#0B132B] truncate max-w-[108px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {r.name}
                      </div>
                      <RiskBadge
                        level={r.risk}
                        label={r.flag ?? (r.risk === 'low' ? 'Clear' : r.risk === 'medium' ? 'Pending' : 'Flag')}
                      />
                    </div>
                    <div className="text-[9px]" style={{ color: '#94a3b8', fontFamily: 'IBM Plex Mono, monospace' }}>
                      {r.sector} · TRL {r.trl}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-3.5 py-2.5" style={{ borderTop: '1px solid #e2e8f0' }}>
                <div
                  className="text-[10px] font-medium text-center text-white rounded py-1.5 cursor-pointer"
                  style={{ background: '#2563EB', fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  Generate Risk Report →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
