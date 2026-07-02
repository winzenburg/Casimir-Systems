interface RiskBadgeProps {
  level: 'high' | 'medium' | 'low';
  label?: string;
}

const CONFIG = {
  high:   { bg: '#FEF2F2', text: '#B91C1C', dot: '#EF4444', defaultLabel: 'High Risk' },
  medium: { bg: '#FFFBEB', text: '#92400E', dot: '#F59E0B', defaultLabel: 'Review' },
  low:    { bg: '#F0FDF4', text: '#065F46', dot: '#10B981', defaultLabel: 'Verified' },
};

export function RiskBadge({ level, label }: RiskBadgeProps) {
  const c = CONFIG[level];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full text-[11px] font-medium"
      style={{
        background: c.bg,
        color: c.text,
        padding: '3px 10px',
        fontFamily: 'IBM Plex Sans, sans-serif',
      }}
    >
      <span
        className="rounded-full shrink-0"
        style={{ width: 6, height: 6, background: c.dot }}
      />
      {label ?? c.defaultLabel}
    </span>
  );
}

interface TrlBadgeProps {
  trl: number;
  label?: string;
}

export function TrlBadge({ trl, label }: TrlBadgeProps) {
  const color = trl >= 7 ? '#10B981' : trl >= 4 ? '#F59E0B' : '#EF4444';
  const bg    = trl >= 7 ? '#F0FDF4' : trl >= 4 ? '#FFFBEB' : '#FEF2F2';
  const text  = trl >= 7 ? '#065F46' : trl >= 4 ? '#92400E' : '#B91C1C';
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full text-[11px] font-medium tabular"
      style={{ background: bg, color: text, padding: '3px 10px', fontFamily: 'IBM Plex Sans, sans-serif' }}
    >
      <span className="rounded-full shrink-0" style={{ width: 6, height: 6, background: color }} />
      TRL {trl}{label ? ` · ${label}` : ''}
    </span>
  );
}

export type EngagementStatus = 'active' | 'targeted' | 'monitoring' | 'future';

interface StatusBadgeProps {
  status: EngagementStatus;
  label?: string;
}

const STATUS_CONFIG: Record<EngagementStatus, { color: string; bg: string; border: string; defaultLabel: string }> = {
  active:     { color: '#10B981', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.3)',  defaultLabel: 'Active' },
  targeted:   { color: '#2563EB', bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.25)',  defaultLabel: 'Targeted' },
  monitoring: { color: '#64748B', bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.2)', defaultLabel: 'Monitoring' },
  future:     { color: '#94A3B8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)', defaultLabel: 'Future' },
};

/** Engagement-tier pill used for defense domains and innovation pathways. Works on light and dark surfaces. */
export function StatusBadge({ status, label }: StatusBadgeProps) {
  const c = STATUS_CONFIG[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase whitespace-nowrap"
      style={{
        color: c.color,
        background: c.bg,
        border: `1px solid ${c.border}`,
        padding: '4px 10px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <span className="rounded-full shrink-0" style={{ width: 5, height: 5, background: c.color }} />
      {label ?? c.defaultLabel}
    </span>
  );
}

interface ComplianceBadgeProps {
  standard: string;
  status?: 'aligned' | 'pending' | 'na';
}

export function ComplianceBadge({ standard, status = 'aligned' }: ComplianceBadgeProps) {
  const map = {
    aligned: { bg: '#F0FDF4', text: '#065F46', dot: '#10B981', icon: '✓' },
    pending: { bg: '#FFFBEB', text: '#92400E', dot: '#F59E0B', icon: '◎' },
    na:      { bg: '#F8FAFC', text: '#64748B', dot: '#94A3B8', icon: '–' },
  };
  const c = map[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md text-[11px] font-medium"
      style={{ background: c.bg, color: c.text, padding: '4px 10px', fontFamily: 'IBM Plex Sans, sans-serif' }}
    >
      <span style={{ color: c.dot, fontWeight: 700 }}>{c.icon}</span>
      {standard}
    </span>
  );
}
