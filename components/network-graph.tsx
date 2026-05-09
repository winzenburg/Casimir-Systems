'use client';

const NODES = [
  { id: 0,  x: 12, y: 18, type: 'company',  r: 1.8 },
  { id: 1,  x: 28, y: 35, type: 'investor', r: 1.4 },
  { id: 2,  x: 48, y: 14, type: 'company',  r: 2.2 },
  { id: 3,  x: 65, y: 28, type: 'cleared',  r: 1.6 },
  { id: 4,  x: 78, y: 11, type: 'company',  r: 1.4 },
  { id: 5,  x: 86, y: 40, type: 'investor', r: 1.8 },
  { id: 6,  x: 18, y: 56, type: 'investor', r: 1.4 },
  { id: 7,  x: 36, y: 64, type: 'company',  r: 1.6 },
  { id: 8,  x: 55, y: 50, type: 'hub',      r: 3.0 },
  { id: 9,  x: 70, y: 62, type: 'company',  r: 1.4 },
  { id: 10, x: 89, y: 68, type: 'risk',     r: 1.2 },
  { id: 11, x: 14, y: 78, type: 'company',  r: 1.4 },
  { id: 12, x: 33, y: 82, type: 'investor', r: 1.6 },
  { id: 13, x: 52, y: 78, type: 'cleared',  r: 1.4 },
  { id: 14, x: 68, y: 84, type: 'company',  r: 1.2 },
  { id: 15, x: 83, y: 88, type: 'risk',     r: 1.0 },
  { id: 16, x: 41, y: 36, type: 'company',  r: 1.4 },
  { id: 17, x: 60, y: 40, type: 'investor', r: 1.4 },
  { id: 18, x: 24, y: 22, type: 'cleared',  r: 1.2 },
  { id: 19, x: 72, y: 52, type: 'company',  r: 1.4 },
];

const EDGES: [number, number][] = [
  [8,2],[8,7],[8,9],[8,16],[8,17],[8,3],[8,13],
  [2,18],[2,16],[2,4],[2,3],[2,0],
  [0,18],[0,6],[0,1],[1,6],[1,16],[1,7],
  [3,4],[3,5],[3,17],[5,4],[5,9],[5,10],
  [6,11],[6,7],[7,12],[7,13],[9,19],[9,13],
  [10,15],[10,19],[11,12],[12,13],[13,14],[14,15],[16,17],[17,19],
];

const NODE_COLORS: Record<string, string> = {
  company:  '#2563EB',
  investor: '#F59E0B',
  cleared:  '#10B981',
  hub:      '#2563EB',
  risk:     '#EF4444',
};

interface NetworkGraphProps {
  className?: string;
}

export function NetworkGraph({ className }: NetworkGraphProps) {
  const vw = 100, vh = 80;
  const toX = (x: number) => (x / 100) * vw;
  const toY = (y: number) => (y / 100) * vh;

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      width="100%"
      height="100%"
      className={className}
      style={{ overflow: 'visible' }}
      aria-label="Casimir Intelligence ecosystem map visualization"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const na = NODES[a], nb = NODES[b];
        return (
          <line
            key={i}
            x1={toX(na.x)} y1={toY(na.y)}
            x2={toX(nb.x)} y2={toY(nb.y)}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={0.3}
            style={{
              animation: `edgeFade ${2.5 + (i % 5) * 0.4}s ease-in-out ${(i * 0.12) % 2}s infinite`,
            }}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((n) => {
        const cx = toX(n.x), cy = toY(n.y);
        const color = NODE_COLORS[n.type];
        return (
          <g
            key={n.id}
            style={{
              animation: `nodeFloat ${3 + (n.id % 4) * 0.5}s ease-in-out ${(n.id * 0.2) % 2}s infinite`,
            }}
          >
            {/* Pulse ring */}
            <circle
              cx={cx} cy={cy} r={n.r * 2.5}
              fill={color} opacity={0}
              style={{
                animation: `nodePulse ${2.5 + (n.id % 3) * 0.7}s ease-out ${(n.id * 0.3) % 2.5}s infinite`,
              }}
            />
            {/* Core */}
            <circle
              cx={cx} cy={cy} r={n.r}
              fill={color}
              filter="url(#glow)"
              opacity={n.type === 'hub' ? 1 : 0.85}
            />
            {/* Inner dot */}
            <circle cx={cx} cy={cy} r={n.r * 0.4} fill="#fff" opacity={0.7} />
          </g>
        );
      })}
    </svg>
  );
}

export const LEGEND = [
  { color: '#2563EB', label: 'Company' },
  { color: '#F59E0B', label: 'Investor' },
  { color: '#10B981', label: 'Cleared' },
  { color: '#EF4444', label: 'Risk Flag' },
];
