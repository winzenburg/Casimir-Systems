// Faithful recreation of the Casimir Intelligence ecosystem graph
// (D3 force graph, dark #07101f canvas, blue dot-grid, 5 entity types).

type EntityType = 'company' | 'institution' | 'person' | 'technology' | 'program';

// Real app palette — components/ecosystem/network-graph.tsx in the product repo
const NODE_FILL: Record<EntityType, string> = {
  company:     '#4da6ff',
  institution: '#c4b5fd',
  person:      '#6ee7b7',
  technology:  '#fcd34d',
  program:     '#fca5a5',
};

interface Node {
  id: number;
  x: number;
  y: number;
  type: EntityType;
  r: number;
  label?: string;
  foci?: boolean;
  selected?: boolean;
}

const NODES: Node[] = [
  { id: 0,  x: 50, y: 38, type: 'company',     r: 3.2, label: 'Shield AI', selected: true },
  { id: 1,  x: 26, y: 22, type: 'technology',  r: 2.2, label: 'Hivemind' },
  { id: 2,  x: 72, y: 18, type: 'program',     r: 2.2, label: 'DARPA ACE' },
  { id: 3,  x: 82, y: 44, type: 'company',     r: 2.4, label: 'Anduril' },
  { id: 4,  x: 66, y: 62, type: 'institution', r: 2.2, label: 'AFRL' },
  { id: 5,  x: 30, y: 58, type: 'company',     r: 2.4, label: 'Epirus' },
  { id: 6,  x: 14, y: 40, type: 'person',      r: 1.8 },
  { id: 7,  x: 42, y: 12, type: 'institution', r: 2.0, label: 'MIT LL' },
  { id: 8,  x: 90, y: 66, type: 'technology',  r: 1.8, label: 'Lattice OS' },
  { id: 9,  x: 12, y: 64, type: 'company',     r: 2.0, foci: true, label: 'Entity 0417' },
  { id: 10, x: 48, y: 67, type: 'program',     r: 2.0, label: 'SBIR PH III' },
  { id: 11, x: 88, y: 26, type: 'person',      r: 1.6 },
  { id: 12, x: 60, y: 30, type: 'person',      r: 1.6 },
  { id: 13, x: 26, y: 71, type: 'technology',  r: 1.8 },
  { id: 14, x: 78, y: 70, type: 'company',     r: 1.8 },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 4], [0, 12], [0, 10],
  [1, 7], [2, 11], [2, 3], [3, 8], [3, 4],
  [4, 10], [4, 14], [5, 6], [5, 13], [5, 0],
  [6, 9], [9, 13], [10, 14], [12, 3], [7, 6],
];

interface NetworkGraphProps {
  className?: string;
}

export function NetworkGraph({ className }: NetworkGraphProps) {
  const vw = 100, vh = 80;

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      width="100%"
      height="100%"
      className={className}
      aria-label="Casimir Intelligence S&T entity relationship network graph"
    >
      <defs>
        <pattern id="ng-dotgrid" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="3.5" cy="3.5" r="0.35" fill="rgba(96,165,250,0.12)" />
        </pattern>
        <filter id="ng-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Canvas — matches product graph background */}
      <rect x="0" y="0" width={vw} height={vh} fill="#07101f" rx="1.5" />
      <rect x="0" y="0" width={vw} height={vh} fill="url(#ng-dotgrid)" rx="1.5" />

      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const na = NODES[a], nb = NODES[b];
        return (
          <line
            key={i}
            x1={na.x} y1={na.y}
            x2={nb.x} y2={nb.y}
            stroke="rgba(96,165,250,0.18)"
            strokeWidth={0.35}
            style={{ animation: `edgeFade ${2.5 + (i % 5) * 0.4}s ease-in-out ${(i * 0.12) % 2}s infinite` }}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((n) => {
        const fill = NODE_FILL[n.type];
        const stroke = n.foci ? '#f87171' : n.selected ? '#60a5fa' : 'rgba(255,255,255,0.18)';
        return (
          <g key={n.id} style={{ animation: `nodeFloat ${3 + (n.id % 4) * 0.5}s ease-in-out ${(n.id * 0.2) % 2}s infinite` }}>
            {(n.selected || n.foci) && (
              <circle
                cx={n.x} cy={n.y} r={n.r * 2.4}
                fill={fill} opacity={0}
                style={{ animation: `nodePulse ${2.6 + (n.id % 3) * 0.6}s ease-out ${(n.id * 0.3) % 2.5}s infinite` }}
              />
            )}
            <circle
              cx={n.x} cy={n.y} r={n.r}
              fill={fill}
              stroke={stroke}
              strokeWidth={n.selected ? 0.7 : n.foci ? 0.6 : 0.25}
              filter="url(#ng-glow)"
              opacity={0.92}
            />
            {n.label && (
              <text
                x={n.x}
                y={n.y + n.r + 3.2}
                textAnchor="middle"
                fill={n.selected ? '#ffffff' : n.foci ? '#f87171' : 'rgba(255,255,255,0.55)'}
                style={{ fontSize: 2.6, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.04em' }}
              >
                {n.label.toUpperCase()}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// Real app entity taxonomy
export const LEGEND = [
  { color: '#4da6ff', label: 'Company' },
  { color: '#c4b5fd', label: 'Institution' },
  { color: '#6ee7b7', label: 'Person' },
  { color: '#fcd34d', label: 'Technology' },
  { color: '#fca5a5', label: 'Program' },
];
