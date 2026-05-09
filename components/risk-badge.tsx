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
