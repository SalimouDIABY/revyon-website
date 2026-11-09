/**
 * Motif d'orbite, repris du logo Revyon Tech.
 *
 * Le logo pose le monogramme RT dans une ellipse inclinée, avec un point
 * orange sur l'anneau. On reprend cette géométrie comme signature du site :
 * deux anneaux inclinés, un arc de lumière qui en fait lentement le tour,
 * et le point orange à sa place. C'est décoratif, donc masqué aux lecteurs
 * d'écran.
 */
export function BrandOrbit({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 620 620"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="rotate(-24 310 310)">
        {/* Anneau principal */}
        <ellipse cx="310" cy="310" rx="252" ry="140" stroke="#4A90D9" strokeOpacity="0.30" strokeWidth="1.5" />
        {/* Arc de lumière qui parcourt l'anneau */}
        <ellipse
          className="rt-orbit-arc"
          cx="310"
          cy="310"
          rx="252"
          ry="140"
          stroke="#7DD3FC"
          strokeOpacity="0.85"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Le point orange du logo, posé sur l'anneau */}
        <circle cx="310" cy="450" r="17" fill="#E84C1E" fillOpacity="0.18" />
        <circle className="rt-orbit-dot" cx="310" cy="450" r="7" fill="#E84C1E" />
      </g>

      <g transform="rotate(16 310 310)">
        <ellipse cx="310" cy="310" rx="214" ry="112" stroke="#4A90D9" strokeOpacity="0.16" strokeWidth="1.5" />
      </g>

      <g transform="rotate(-58 310 310)">
        <ellipse cx="310" cy="310" rx="176" ry="92" stroke="#4A90D9" strokeOpacity="0.10" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
