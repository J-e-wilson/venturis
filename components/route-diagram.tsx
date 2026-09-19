const CX = 300;
const CY = 244;

const NODES = [
  { x: 177, y: 158, label: "AFRICA", lx: 157, ly: 144, anchor: "end" as const },
  { x: 423, y: 158, label: "EUROPE", lx: 443, ly: 144, anchor: "start" as const },
  { x: 300, y: 394, label: "ASIA", lx: 300, ly: 426, anchor: "middle" as const },
];

export function RouteDiagram() {
  return (
    <svg
      viewBox="0 0 600 480"
      className="h-auto w-full"
      role="img"
      aria-label="Sourcing routes from Africa, Asia and Europe consolidating through a hub in Mauritius"
    >
      <circle
        cx={CX}
        cy={CY}
        r={190}
        fill="none"
        stroke="var(--accent-bright)"
        strokeOpacity={0.4}
        strokeWidth={1.25}
      />
      <circle
        cx={CX}
        cy={CY}
        r={112}
        fill="none"
        stroke="var(--accent-bright)"
        strokeOpacity={0.55}
        strokeWidth={1.25}
      />

      {NODES.map((n) => (
        <line
          key={n.label}
          x1={CX}
          y1={CY}
          x2={n.x}
          y2={n.y}
          stroke="var(--text)"
          strokeOpacity={0.55}
          strokeWidth={1.5}
        />
      ))}

      {NODES.map((n) => (
        <circle
          key={`${n.label}-node`}
          cx={n.x}
          cy={n.y}
          r={7}
          fill="var(--accent-bright)"
          stroke="var(--bg)"
          strokeWidth={3}
        />
      ))}

      {NODES.map((n) => (
        <text
          key={`${n.label}-label`}
          x={n.lx}
          y={n.ly}
          textAnchor={n.anchor}
          fontFamily="var(--font-mono)"
          style={{ fill: "var(--text)", fontSize: 12, letterSpacing: "0.16em" }}
        >
          {n.label}
        </text>
      ))}

      <circle cx={CX} cy={CY} r={10} fill="var(--text)" />
      <rect
        x={CX - 62}
        y={CY + 15}
        width={124}
        height={20}
        fill="var(--bg)"
      />
      <text
        x={CX}
        y={CY + 30}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        style={{
          fill: "var(--text)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.24em",
        }}
      >
        MAURITIUS
      </text>
    </svg>
  );
}
