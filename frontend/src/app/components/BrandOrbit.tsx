/**
 * Motif d'orbite, repris du logo Revyon Tech.
 *
 * Le logo pose le monogramme RT dans une ellipse inclinée, avec un point
 * orange sur l'anneau. On en fait la signature du site : trois anneaux
 * inclinés qui se tracent au chargement, deux arcs de lumière qui les
 * parcourent en sens inverse, et trois points aux couleurs de nos trois
 * produits posés sur l'anneau principal.
 *
 * Décoratif, donc masqué aux lecteurs d'écran. Tout s'arrête si le système
 * demande de réduire les animations (voir theme.css).
 */
export function BrandOrbit({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 620 620"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Anneau principal */}
      <g transform="rotate(-24 310 310)">
        <ellipse
          className="rt-ring rt-ring-1"
          cx="310" cy="310" rx="252" ry="140"
          stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.5"
        />
        <ellipse
          className="rt-arc rt-arc-1"
          cx="310" cy="310" rx="252" ry="140"
          stroke="#FFFFFF" strokeOpacity="0.95" strokeWidth="2.25" strokeLinecap="round"
        />
        {/* Les trois produits, posés sur l'anneau */}
        <g className="rt-node rt-node-1">
          <circle cx="562" cy="310" r="15" fill="#D9480F" fillOpacity="0.2" />
          <circle cx="562" cy="310" r="5.5" fill="#F08A4B" />
        </g>
        <g className="rt-node rt-node-2">
          <circle cx="310" cy="450" r="15" fill="#E84C1E" fillOpacity="0.22" />
          <circle cx="310" cy="450" r="6.5" fill="#E84C1E" />
        </g>
        <g className="rt-node rt-node-3">
          <circle cx="58" cy="310" r="15" fill="#C9A227" fillOpacity="0.2" />
          <circle cx="58" cy="310" r="5.5" fill="#E8C35A" />
        </g>

        {/* Point de marque réservé au téléphone. Sa position a été calculée
            pour tomber en haut à droite, à côté du sur-titre, là où aucun
            texte ne passe. Les autres points y sont masqués. */}
        <g className="rt-node-mobile">
          <circle cx="505" cy="221" r="26" fill="#E84C1E" fillOpacity="0.14" />
          <circle cx="505" cy="221" r="15" fill="#E84C1E" fillOpacity="0.22" />
          <circle className="rt-node-core" cx="505" cy="221" r="7.5" fill="#F2622C" />
        </g>
      </g>

      {/* Anneau intermédiaire, parcouru en sens inverse */}
      <g transform="rotate(16 310 310)">
        <ellipse
          className="rt-ring rt-ring-2"
          cx="310" cy="310" rx="214" ry="112"
          stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1.5"
        />
        <ellipse
          className="rt-arc rt-arc-2"
          cx="310" cy="310" rx="214" ry="112"
          stroke="#EAF8FF" strokeOpacity="0.75" strokeWidth="1.75" strokeLinecap="round"
        />
      </g>

      {/* Anneau intérieur, fixe */}
      <g transform="rotate(-58 310 310)">
        <ellipse
          className="rt-ring rt-ring-3"
          cx="310" cy="310" rx="176" ry="92"
          stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
