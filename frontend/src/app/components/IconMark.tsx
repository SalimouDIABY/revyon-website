import type { LucideIcon } from "lucide-react";

/**
 * Pastille d'icône de la marque.
 *
 * Un carré aux angles très arrondis, dégradé très doux, traversé par deux
 * arcs repris de l'orbite du logo, avec un point d'accent posé sur l'arc
 * extérieur. La même géométrie revient du héros jusqu'aux cartes, ce qui
 * distingue nos pastilles d'une icône posée dans un carré de couleur.
 *
 * Les arcs pivotent et le point grandit quand la carte est survolée.
 */
export function IconMark({
  icon: Icon,
  tone = "navy",
  size = 52,
}: {
  icon: LucideIcon;
  tone?: "navy" | "accent" | "light";
  size?: number;
}) {
  const palette = {
    navy: {
      from: "#F4F8FB",
      to: "#E4EEF6",
      border: "#DCE8F1",
      ring: "#8FB9D6",
      ring2: "#B9D3E6",
      dot: "#C2410C",
      icon: "#0C4A6E",
    },
    accent: {
      from: "#FEF5F0",
      to: "#FBE6DA",
      border: "#F5DCCB",
      ring: "#E3A275",
      ring2: "#EFC8AC",
      dot: "#0C4A6E",
      icon: "#C2410C",
    },
    light: {
      from: "rgba(255,255,255,0.14)",
      to: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.22)",
      ring: "rgba(165,219,255,0.55)",
      ring2: "rgba(165,219,255,0.3)",
      dot: "#FDBA74",
      icon: "#EAF4FB",
    },
  }[tone];

  return (
    <span
      className="rt-mark"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size * 0.32,
        background: `linear-gradient(145deg, ${palette.from}, ${palette.to})`,
        border: `1px solid ${palette.border}`,
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <svg
        className="rt-mark-ring"
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <ellipse cx="50" cy="50" rx="44" ry="25" transform="rotate(-28 50 50)" fill="none" stroke={palette.ring} strokeWidth="1.5" />
        <ellipse cx="50" cy="50" rx="34" ry="19" transform="rotate(26 50 50)" fill="none" stroke={palette.ring2} strokeWidth="1.2" />
        <circle className="rt-mark-dot" cx="88" cy="38" r="3.4" fill={palette.dot} />
      </svg>
      <Icon
        size={Math.round(size * 0.40)}
        color={palette.icon}
        strokeWidth={1.7}
        style={{ position: "relative" }}
      />
    </span>
  );
}
