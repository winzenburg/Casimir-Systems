
// ── Casimir Systems: Shared Components ───────────────────────────────────────

const CS_COLORS = {
  navy: '#0B132B', blue: '#2563EB', white: '#F8FAFC',
  slate: '#64748B', red: '#EF4444', green: '#10B981', amber: '#F59E0B',
  navyMid: '#111827', navyLight: '#1E2D4E',
};

// Inject global styles
const styleEl = document.createElement('style');
styleEl.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'IBM Plex Sans', sans-serif; background: #F8FAFC; color: #0B132B; -webkit-font-smoothing: antialiased; }
  h1,h2,h3,h4,h5,h6 { font-family: 'Inter', sans-serif; }

  :root {
    --navy: #0B132B; --blue: #2563EB; --white: #F8FAFC;
    --slate: #64748B; --red: #EF4444; --green: #10B981; --amber: #F59E0B;
    --navy-mid: #111827; --navy-light: #1E2D4E;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
    --shadow-lg: 0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
  }

  /* Scroll reveal */
  .sr { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .sr.visible { opacity: 1; transform: translateY(0); }

  /* Grid dot background */
  .grid-bg {
    background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  /* Node pulse animations */
  @keyframes nodePulse {
    0%, 100% { opacity: 0.4; r: 3; }
    50% { opacity: 0.08; r: 8; }
  }
  @keyframes nodeFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
  }
  @keyframes edgeFade {
    0%, 100% { opacity: 0.15; }
    50% { opacity: 0.35; }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(300%); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroReveal {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes graphDraw {
    from { stroke-dashoffset: 1000; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes scanLine {
    0% { top: 0%; opacity: 0.6; }
    100% { top: 100%; opacity: 0; }
  }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue); color: #fff; border: none;
    padding: 12px 24px; border-radius: 6px; font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px; font-weight: 500; cursor: pointer; letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    text-decoration: none; white-space: nowrap;
  }
  .btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(37,99,235,0.3); }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.3);
    padding: 11px 24px; border-radius: 6px; font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px; font-weight: 500; cursor: pointer; letter-spacing: 0.02em;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
    text-decoration: none; white-space: nowrap;
  }
  .btn-secondary:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.06); transform: translateY(-1px); }
  .btn-outline-blue {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--blue); border: 1px solid var(--blue);
    padding: 11px 24px; border-radius: 6px; font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px; font-weight: 500; cursor: pointer; letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none; white-space: nowrap;
  }
  .btn-outline-blue:hover { background: rgba(37,99,235,0.06); transform: translateY(-1px); }
`;
document.head.appendChild(styleEl);

// ── useScrollReveal hook ──────────────────────────────────────────────────────
function useScrollReveal(threshold = 0.12) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── ScrollReveal wrapper ──────────────────────────────────────────────────────
function ScrollReveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`sr${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

// ── RiskBadge ─────────────────────────────────────────────────────────────────
function RiskBadge({ level = 'low', label }) {
  const config = {
    high:   { bg: '#FEF2F2', text: '#B91C1C', dot: '#EF4444', defaultLabel: 'High Risk' },
    medium: { bg: '#FFFBEB', text: '#92400E', dot: '#F59E0B', defaultLabel: 'Review' },
    low:    { bg: '#F0FDF4', text: '#065F46', dot: '#10B981', defaultLabel: 'Verified' },
  };
  const c = config[level] || config.low;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
      background: c.bg, color: c.text, padding: '3px 10px', borderRadius: 99,
      fontSize: 12, fontWeight: 500, fontFamily: 'IBM Plex Sans, sans-serif' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dot, flexShrink: 0 }} />
      {label || c.defaultLabel}
    </span>
  );
}

// ── Network Graph (animated SVG) ──────────────────────────────────────────────
const GRAPH_NODES = [
  { id: 0, x: 12, y: 18, type: 'company', r: 1.8 },
  { id: 1, x: 28, y: 35, type: 'investor', r: 1.4 },
  { id: 2, x: 48, y: 14, type: 'company', r: 2.2 },
  { id: 3, x: 65, y: 28, type: 'cleared', r: 1.6 },
  { id: 4, x: 78, y: 11, type: 'company', r: 1.4 },
  { id: 5, x: 86, y: 40, type: 'investor', r: 1.8 },
  { id: 6, x: 18, y: 56, type: 'investor', r: 1.4 },
  { id: 7, x: 36, y: 64, type: 'company', r: 1.6 },
  { id: 8, x: 55, y: 50, type: 'hub', r: 3.0 },
  { id: 9, x: 70, y: 62, type: 'company', r: 1.4 },
  { id: 10, x: 89, y: 68, type: 'risk', r: 1.2 },
  { id: 11, x: 14, y: 78, type: 'company', r: 1.4 },
  { id: 12, x: 33, y: 82, type: 'investor', r: 1.6 },
  { id: 13, x: 52, y: 78, type: 'cleared', r: 1.4 },
  { id: 14, x: 68, y: 84, type: 'company', r: 1.2 },
  { id: 15, x: 83, y: 88, type: 'risk', r: 1.0 },
  { id: 16, x: 41, y: 36, type: 'company', r: 1.4 },
  { id: 17, x: 60, y: 40, type: 'investor', r: 1.4 },
  { id: 18, x: 24, y: 22, type: 'cleared', r: 1.2 },
  { id: 19, x: 72, y: 52, type: 'company', r: 1.4 },
];
const GRAPH_EDGES = [
  [8,2],[8,7],[8,9],[8,16],[8,17],[8,3],[8,13],
  [2,18],[2,16],[2,4],[2,3],[2,0],
  [0,18],[0,6],[0,1],[1,6],[1,16],[1,7],
  [3,4],[3,5],[3,17],[5,4],[5,9],[5,10],
  [6,11],[6,7],[7,12],[7,13],[9,19],[9,13],
  [10,15],[10,19],[11,12],[12,13],[13,14],[14,15],[16,17],[17,19],
];
const NODE_COLORS = { company: '#2563EB', investor: '#F59E0B', cleared: '#10B981', hub: '#2563EB', risk: '#EF4444' };

function NetworkGraph({ width = 600, height = 480, dark = true }) {
  const vw = 100, vh = 80;
  const toX = x => (x / 100) * vw;
  const toY = y => (y / 100) * vh;
  return (
    <svg viewBox={`0 0 ${vw} ${vh}`} width={width} height={height} style={{ overflow: 'visible' }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Edges */}
      {GRAPH_EDGES.map(([a,b], i) => {
        const na = GRAPH_NODES[a], nb = GRAPH_NODES[b];
        return (
          <line key={i}
            x1={toX(na.x)} y1={toY(na.y)} x2={toX(nb.x)} y2={toY(nb.y)}
            stroke={dark ? 'rgba(255,255,255,0.15)' : 'rgba(11,19,43,0.12)'}
            strokeWidth={0.3}
            style={{ animation: `edgeFade ${2.5 + (i % 5) * 0.4}s ease-in-out ${(i * 0.12) % 2}s infinite` }}
          />
        );
      })}
      {/* Nodes */}
      {GRAPH_NODES.map(n => {
        const cx = toX(n.x), cy = toY(n.y), color = NODE_COLORS[n.type];
        return (
          <g key={n.id} style={{ animation: `nodeFloat ${3 + (n.id % 4) * 0.5}s ease-in-out ${(n.id * 0.2) % 2}s infinite` }}>
            {/* Pulse ring */}
            <circle cx={cx} cy={cy} r={n.r * 2.5} fill={color} opacity={0}
              style={{ animation: `nodePulse ${2.5 + (n.id % 3) * 0.7}s ease-out ${(n.id * 0.3) % 2.5}s infinite` }} />
            {/* Core */}
            <circle cx={cx} cy={cy} r={n.r} fill={color} filter="url(#glow)"
              opacity={n.type === 'hub' ? 1 : 0.85} />
            {/* Inner */}
            <circle cx={cx} cy={cy} r={n.r * 0.4} fill="#fff" opacity={0.7} />
          </g>
        );
      })}
    </svg>
  );
}

// ── Platform Mockup (browser frame + dashboard) ───────────────────────────────
function PlatformMockup() {
  const navItems = [
    { icon: '⬡', label: 'Dashboard', active: false },
    { icon: '◎', label: 'Ecosystem', active: true },
    { icon: '◻', label: 'Companies', active: false },
    { icon: '◈', label: 'Investments', active: false },
    { icon: '⚑', label: 'Risk Layers', active: false },
    { icon: '≡', label: 'Reports', active: false },
  ];
  const risks = [
    { name: 'Company A', sector: 'Launch Systems', risk: 'low', trl: 7, flag: null },
    { name: 'Company B', sector: 'AI/ML Platform', risk: 'high', trl: 4, flag: 'FOCI' },
    { name: 'Company C', sector: 'SatCom', risk: 'medium', trl: 6, flag: 'Review' },
    { name: 'Company D', sector: 'Directed Energy', risk: 'low', trl: 8, flag: null },
  ];

  return (
    <div style={{ width: '100%', borderRadius: 10, overflow: 'hidden',
      boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.2)',
      border: '1px solid rgba(255,255,255,0.08)', background: '#0f172a' }}>

      {/* Browser chrome */}
      <div style={{ background: '#1e293b', padding: '10px 16px', display: 'flex',
        alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#EF4444','#F59E0B','#10B981'].map((c,i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 4,
          padding: '4px 12px', fontSize: 11, color: 'rgba(255,255,255,0.4)',
          fontFamily: 'IBM Plex Sans, sans-serif', textAlign: 'center' }}>
          intelligence.casimir.systems · Directed Energy S&T Ecosystem
        </div>
        <div style={{ width: 60 }} />
      </div>

      {/* App layout */}
      <div style={{ display: 'flex', height: 480 }}>

        {/* Left nav */}
        <div style={{ width: 200, background: '#0B132B', borderRight: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexDirection: 'column', padding: '16px 0' }}>
          <div style={{ padding: '0 16px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em',
              fontFamily: 'Inter, sans-serif' }}>CASIMIR</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em',
              fontFamily: 'IBM Plex Sans, sans-serif', marginTop: 2 }}>INTELLIGENCE PLATFORM</div>
          </div>
          <div style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
            {navItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 16px', fontSize: 12,
                background: item.active ? 'rgba(37,99,235,0.15)' : 'transparent',
                borderLeft: item.active ? '2px solid #2563EB' : '2px solid transparent',
                color: item.active ? '#fff' : 'rgba(255,255,255,0.45)',
                fontFamily: 'IBM Plex Sans, sans-serif', cursor: 'pointer',
                transition: 'all 0.15s',
              }}>
                <span style={{ fontSize: 14, opacity: 0.8 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              CUI // FOUO
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontFamily: 'IBM Plex Sans, sans-serif', marginTop: 2 }}>
              TF-F Analyst Session
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f1f5f9', overflow: 'hidden' }}>

          {/* Top bar */}
          <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0',
            padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1, fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#0B132B' }}>
              Directed Energy — S&T Ecosystem Map
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Q2 2026', 'All TRL', 'USSF Filter'].map((t,i) => (
                <div key={i} style={{ padding: '3px 8px', border: '1px solid #e2e8f0', borderRadius: 4,
                  fontSize: 10, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', background: '#fff' }}>
                  {t}
                </div>
              ))}
            </div>
            <RiskBadge level="low" label="Synthesis: Current" />
          </div>

          {/* Metrics row */}
          <div style={{ display: 'flex', gap: 1, background: '#e2e8f0', padding: '1px' }}>
            {[
              { label: 'Companies Tracked', value: '2,847', delta: '+124 this quarter' },
              { label: 'Investment Flows', value: '$4.2B', delta: 'RDT&E + VC combined' },
              { label: 'FOCI Flags', value: '12', delta: 'Requires review', alert: true },
              { label: 'Avg TRL', value: '4.7', delta: 'Ecosystem average' },
            ].map((m,i) => (
              <div key={i} style={{ flex: 1, background: '#fff', padding: '10px 14px' }}>
                <div style={{ fontSize: 9, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif',
                  letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>{m.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: 'Inter, sans-serif',
                  color: m.alert ? '#EF4444' : '#0B132B' }}>{m.value}</div>
                <div style={{ fontSize: 9, color: m.alert ? '#F59E0B' : '#64748B',
                  fontFamily: 'IBM Plex Sans, sans-serif', marginTop: 2 }}>{m.delta}</div>
              </div>
            ))}
          </div>

          {/* Main area: graph + risk panel */}
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Graph area */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(135deg, #0B132B 0%, #1E2D4E 100%)' }}>
              {/* Scan line effect */}
              <div style={{ position: 'absolute', left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)',
                animation: 'scanLine 4s linear infinite', pointerEvents: 'none', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
                justifyContent: 'center', padding: 16 }}>
                <NetworkGraph width="100%" height="100%" dark={true} />
              </div>
              {/* Legend */}
              <div style={{ position: 'absolute', bottom: 10, left: 12, display: 'flex', gap: 12 }}>
                {[['#2563EB','Company'],['#F59E0B','Investor'],['#10B981','Cleared'],['#EF4444','Risk Flag']].map(([c,l],i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4,
                    fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* Risk panel */}
            <div style={{ width: 220, background: '#fff', borderLeft: '1px solid #e2e8f0',
              display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '10px 14px', borderBottom: '1px solid #e2e8f0',
                fontSize: 11, fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#0B132B' }}>
                Risk Assessment
              </div>
              <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
                {risks.map((r,i) => (
                  <div key={i} style={{ padding: '8px 14px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'Inter, sans-serif',
                        color: '#0B132B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        maxWidth: 110 }}>{r.name}</div>
                      <RiskBadge level={r.risk} label={r.flag || (r.risk === 'low' ? 'Clear' : r.risk === 'medium' ? 'Pending' : 'Flag')} />
                    </div>
                    <div style={{ fontSize: 9, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                      {r.sector} · TRL {r.trl}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '10px 14px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ background: '#2563EB', color: '#fff', padding: '6px 10px',
                  borderRadius: 4, fontSize: 10, fontWeight: 500, textAlign: 'center',
                  fontFamily: 'IBM Plex Sans, sans-serif', cursor: 'pointer' }}>
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

// ── Nav ───────────────────────────────────────────────────────────────────────
function CasimirNav({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { id: 'platform', label: 'Casimir Intelligence' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'Company' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(11,19,43,0.97)' : '#0B132B',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 40px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>
        {/* Logo */}
        <button onClick={() => onNavigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: '#2563EB',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="8" cy="8" r="2" fill="white"/>
            </svg>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.02em' }}>Casimir Systems</span>
        </button>

        {/* Links */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => onNavigate(l.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px 16px', borderRadius: 6,
                color: currentPage === l.id ? '#fff' : 'rgba(255,255,255,0.55)',
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500,
                background: currentPage === l.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                transition: 'all 0.15s' }}>
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-primary" onClick={() => onNavigate('contact')}
          style={{ padding: '9px 20px', fontSize: 13 }}>
          Request Access
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function CasimirFooter({ onNavigate }) {
  const cols = [
    { title: 'Platform', links: ['Ecosystem Mapping','Risk Assessment','Data Architecture','Security & Compliance'] },
    { title: 'Solutions', links: ['S&T Analysts','Contracting Officers','Innovation Leaders'] },
    { title: 'Company', links: ['Our Mission','Leadership','Careers','Contact'] },
    { title: 'Resources', links: ['Intelligence Insights','Whitepapers','Glossary','API Docs'] },
  ];
  return (
    <footer style={{ background: '#0B132B', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '64px 40px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#2563EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="8" r="2" fill="white"/>
                </svg>
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Inter, sans-serif' }}>Casimir Systems</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif',
              lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>
              AI-native intelligence infrastructure for defense and national security organizations.
            </p>
            {/* Product chip */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)',
              borderRadius: 99, padding: '4px 10px', marginBottom: 16 }}>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: '#2563EB',
                textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Product</span>
              <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Inter, sans-serif' }}>Casimir Intelligence</span>
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontFamily: 'IBM Plex Sans, sans-serif',
              letterSpacing: '0.06em' }}>CUI // FOUO COMPLIANT</div>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 16 }}>
                {col.title}
              </div>
              {col.links.map((link, j) => (
                <div key={j} style={{ marginBottom: 10, fontSize: 13, color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'IBM Plex Sans, sans-serif', cursor: 'pointer',
                  transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
            © 2026 Casimir Systems, Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy','Terms of Service','Security'].map((t,i) => (
              <span key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)',
                fontFamily: 'IBM Plex Sans, sans-serif', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, subtitle, dark = false, center = false }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 640 : '100%', margin: center ? '0 auto' : 0 }}>
      {eyebrow && (
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#2563EB', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, fontFamily: 'Inter, sans-serif',
        color: dark ? '#fff' : '#0B132B', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: subtitle ? 16 : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 17, color: dark ? 'rgba(255,255,255,0.55)' : '#64748B',
          fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

Object.assign(window, {
  CS_COLORS, useScrollReveal, ScrollReveal, RiskBadge,
  NetworkGraph, PlatformMockup, CasimirNav, CasimirFooter,
  SectionHeader, GRAPH_NODES, GRAPH_EDGES, NODE_COLORS,
});
