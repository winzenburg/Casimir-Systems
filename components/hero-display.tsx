'use client';

const CX = 300;
const CY = 390;

type NodeType = 'company' | 'investor' | 'cleared' | 'risk';

interface OrbNode {
  angle: number;
  type: NodeType;
  label: string;
  r: number;
}

const COLORS: Record<NodeType, string> = {
  company:  '#2563EB',
  investor: '#F59E0B',
  cleared:  '#10B981',
  risk:     '#EF4444',
};

const NODES: OrbNode[] = [
  // Inner ring — cleared entities
  { angle: 38,  type: 'cleared',  label: 'USSF-01',      r: 120 },
  { angle: 112, type: 'cleared',  label: 'USSF-02',      r: 120 },
  { angle: 212, type: 'cleared',  label: 'USSF-03',      r: 120 },
  { angle: 298, type: 'cleared',  label: 'USSF-04',      r: 120 },
  // Mid ring — active ecosystem
  { angle: 20,  type: 'company',  label: 'TRUE ANOMALY',  r: 200 },
  { angle: 72,  type: 'investor', label: 'SHIELD CAP.',   r: 200 },
  { angle: 130, type: 'company',  label: 'ANDURIL',       r: 200 },
  { angle: 178, type: 'risk',     label: 'FOCI FLAG',     r: 200 },
  { angle: 228, type: 'company',  label: 'ROCKET LAB',    r: 200 },
  { angle: 282, type: 'investor', label: 'A16Z DEFENSE',  r: 200 },
  { angle: 336, type: 'company',  label: 'UMBRA SPACE',   r: 200 },
  // Outer ring
  { angle: 50,  type: 'company',  label: 'SPACEFORGE',    r: 278 },
  { angle: 100, type: 'risk',     label: 'FLAG-09',       r: 278 },
  { angle: 155, type: 'investor', label: 'LOCKHEED V.',   r: 278 },
  { angle: 208, type: 'company',  label: 'STARFISH',      r: 278 },
  { angle: 262, type: 'company',  label: 'PALADIN CAP.',  r: 278 },
  { angle: 316, type: 'risk',     label: 'FOCI-07',       r: 278 },
];

const EDGES: [number, number][] = [
  [0, 4], [1, 6], [2, 8], [3, 10],
  [4, 11], [6, 13], [8, 14], [5, 11],
  [4, 6], [6, 8], [9, 15],
];

function polar(r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export function HeroDisplay() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #06091f 0%, #090e22 100%)' }}
    >
      {/* Left-edge blend into hero background */}
      <div
        className="absolute inset-y-0 left-0 w-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, #0B132B 0%, transparent 100%)' }}
      />

      {/* HUD — top left */}
      <div
        className="absolute top-8 left-12 z-20"
        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, lineHeight: 1.7 }}
      >
        <div style={{ color: '#10B981', letterSpacing: '0.09em' }}>● SYNTHESIS ACTIVE</div>
        <div style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.06em' }}>CASIMIR INTELLIGENCE v4.2</div>
        <div style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em' }}>UNCLASSIFIED // FOUO</div>
      </div>

      {/* HUD — top right */}
      <div
        className="absolute top-8 right-8 text-right z-20"
        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, lineHeight: 1.7 }}
      >
        <div style={{ color: 'rgba(255,255,255,0.32)', letterSpacing: '0.06em' }}>ENTITIES: 2,847</div>
        <div style={{ color: 'rgba(255,255,255,0.32)', letterSpacing: '0.06em' }}>INVESTMENT: $4.2B</div>
        <div style={{ color: '#F59E0B', letterSpacing: '0.06em' }}>FLAGS: 12 ACTIVE</div>
      </div>

      {/* HUD — bottom left */}
      <div
        className="absolute bottom-8 left-12 z-20"
        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em', lineHeight: 1.7 }}
      >
        <div>38°50′N 104°49′W</div>
        <div>EPOCH {today}</div>
      </div>

      {/* HUD — bottom right */}
      <div
        className="absolute bottom-8 right-8 text-right z-20"
        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em', lineHeight: 1.7 }}
      >
        <div>ACCURACY: 99.7%</div>
        <div>TRL AVG 4.7 // 200+ FUNDS</div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-8 z-20" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <div className="flex items-center gap-5" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.07em' }}>
          {([['#10B981', 'CLEARED'], ['#2563EB', 'COMPANY'], ['#F59E0B', 'INVESTOR'], ['#EF4444', 'FOCI FLAG']] as [string, string][]).map(([color, label]) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main SVG radar display */}
      <svg
        viewBox="0 0 600 780"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Casimir Intelligence orbital S&T ecosystem display"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <filter id="hdNodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hdHubGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="hdAmbient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(37,99,235,0.14)" />
            <stop offset="55%" stopColor="rgba(37,99,235,0.04)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </radialGradient>
        </defs>

        {/* Ambient center glow */}
        <ellipse cx={CX} cy={CY} rx="330" ry="330" fill="url(#hdAmbient)" />

        {/* Crosshairs */}
        <line x1="0" y1={CY} x2="600" y2={CY} stroke="rgba(37,99,235,0.07)" strokeWidth="0.5" />
        <line x1={CX} y1="0" x2={CX} y2="780" stroke="rgba(37,99,235,0.07)" strokeWidth="0.5" />
        <line x1={CX - 270} y1={CY - 270} x2={CX + 270} y2={CY + 270} stroke="rgba(37,99,235,0.03)" strokeWidth="0.5" />
        <line x1={CX + 270} y1={CY - 270} x2={CX - 270} y2={CY + 270} stroke="rgba(37,99,235,0.03)" strokeWidth="0.5" />

        {/* Orbital rings */}
        {[120, 200, 278].map((r, i) => (
          <circle
            key={r}
            cx={CX} cy={CY} r={r}
            fill="none"
            stroke="rgba(37,99,235,0.13)"
            strokeWidth={i === 0 ? 0.8 : 0.5}
            strokeDasharray={i === 2 ? '4 9' : undefined}
          />
        ))}

        {/* Outer tick ring */}
        <circle cx={CX} cy={CY} r="308" fill="none" stroke="rgba(37,99,235,0.18)" strokeWidth="0.4" />
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = i * 5;
          const r1 = 308;
          const r2 = i % 18 === 0 ? 326 : i % 6 === 0 ? 316 : 311;
          const p1 = polar(r1, angle);
          const p2 = polar(r2, angle);
          return (
            <line
              key={i}
              x1={p1.x} y1={p1.y}
              x2={p2.x} y2={p2.y}
              stroke="rgba(37,99,235,0.22)"
              strokeWidth={i % 18 === 0 ? 1.2 : i % 6 === 0 ? 0.7 : 0.35}
            />
          );
        })}

        {/* Degree labels */}
        {[0, 90, 180, 270].map((angle) => {
          const p = polar(336, angle);
          return (
            <text
              key={angle}
              x={p.x} y={p.y + 3}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(37,99,235,0.38)"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              {angle}°
            </text>
          );
        })}

        {/* Radar sweep arm — rotates around CX,CY */}
        <g style={{ transformOrigin: `${CX}px ${CY}px`, animation: 'radarSpin 10s linear infinite' }}>
          {/* Trailing fade wedge */}
          <path
            d={`M ${CX} ${CY} L ${polar(308, 0).x} ${polar(308, 0).y} A 308 308 0 0 0 ${polar(308, -55).x} ${polar(308, -55).y} Z`}
            fill="rgba(37,99,235,0.05)"
          />
          {/* Sweep arm line */}
          <line
            x1={CX} y1={CY}
            x2={CX} y2={CY - 308}
            stroke="rgba(37,99,235,0.55)"
            strokeWidth="1"
          />
        </g>

        {/* Edges */}
        {EDGES.map(([ai, bi], i) => {
          const a = NODES[ai], b = NODES[bi];
          const pa = polar(a.r, a.angle);
          const pb = polar(b.r, b.angle);
          return (
            <line
              key={i}
              x1={pa.x} y1={pa.y}
              x2={pb.x} y2={pb.y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.4"
              strokeDasharray="2 5"
              style={{ animation: `edgeFade ${2.5 + i * 0.27}s ease-in-out ${(i * 0.19) % 2.5}s infinite` }}
            />
          );
        })}

        {/* Hub spokes to inner ring */}
        {NODES.slice(0, 4).map((n, i) => {
          const p = polar(n.r, n.angle);
          return (
            <line
              key={`spoke-${i}`}
              x1={CX} y1={CY}
              x2={p.x} y2={p.y}
              stroke="rgba(37,99,235,0.2)"
              strokeWidth="0.6"
              style={{ animation: `edgeFade 4s ease-in-out ${i * 0.5}s infinite` }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => {
          const { x, y } = polar(n.r, n.angle);
          const color = COLORS[n.type];
          const nodeR = n.type === 'risk' ? 3.8 : 5;
          const showLabel = n.r <= 200;
          const labelP = polar(n.r + 20, n.angle);
          const anchor = labelP.x > CX ? 'start' : 'end';
          const lx = labelP.x + (anchor === 'start' ? 4 : -4);

          return (
            <g
              key={i}
              style={{ animation: `nodeFloat ${3.2 + (i % 5) * 0.38}s ease-in-out ${(i * 0.24) % 2.5}s infinite` }}
            >
              {n.type === 'risk' && (
                <circle
                  cx={x} cy={y} r={nodeR * 3}
                  fill={color} opacity={0}
                  style={{ animation: `nodePulse 2.5s ease-out ${i * 0.35}s infinite` }}
                />
              )}
              <circle cx={x} cy={y} r={nodeR + 3.5} fill="none" stroke={color} strokeWidth="0.4" opacity={0.22} />
              <circle cx={x} cy={y} r={nodeR} fill={color} filter="url(#hdNodeGlow)" opacity={0.88} />
              <circle cx={x} cy={y} r={nodeR * 0.35} fill="#fff" opacity={0.75} />
              {showLabel && (
                <text
                  x={lx} y={labelP.y + 3.5}
                  textAnchor={anchor}
                  fontSize="6.8"
                  fill={n.type === 'risk' ? '#EF4444' : 'rgba(255,255,255,0.35)'}
                  style={{ fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.05em' }}
                >
                  {n.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Central hub */}
        <g>
          <circle
            cx={CX} cy={CY} r="42"
            fill="rgba(37,99,235,0.07)"
            style={{ animation: 'nodePulse 4s ease-out 0s infinite' }}
          />
          <circle cx={CX} cy={CY} r="25" fill="rgba(37,99,235,0.14)" />
          <circle cx={CX} cy={CY} r="25" fill="none" stroke="rgba(37,99,235,0.35)" strokeWidth="0.8" strokeDasharray="5 5" />
          <circle cx={CX} cy={CY} r="14" fill="#1d4ed8" filter="url(#hdHubGlow)" />
          <circle cx={CX} cy={CY} r="5" fill="#fff" opacity={0.9} />
        </g>

        {/* Hub label */}
        <text
          x={CX} y={CY + 46}
          textAnchor="middle"
          fontSize="7.5"
          fill="rgba(255,255,255,0.25)"
          style={{ fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.14em' }}
        >
          CASIMIR // S&T HUB
        </text>
      </svg>
    </div>
  );
}
