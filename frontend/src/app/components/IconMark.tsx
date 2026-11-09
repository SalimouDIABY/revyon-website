import type { LucideIcon } from "lucide-react";

/**
 * Pastille d'icône de la marque.
 *
 * L'icône est posée dans un disque traversé par un arc, repris de l'orbite
 * du logo. C'est ce qui distingue nos pastilles d'une icône posée dans un
 * carré de couleur : la même géométrie revient du héros jusqu'aux cartes.
 * L'arc pivote légèrement quand la carte est survolée.
 */
export function IconMark({
  icon: Icon,
  tone = "navy",
  size = 46,
}: {
  icon: LucideIcon;
  tone?: "navy" | "accent" | "light";
  size?: number;
}) {
  const palette = {
    navy: { bg: "#F1F6FA", ring: "#9CC3DE", icon: "#0C4A6E" },
    accent: { bg: "#FDF2EC", ring: "#E9A97F", icon: "#C2410C" },
    light: { bg: "rgba(255,255,255,0.08)", ring: "rgba(165,219,255,0.5)", icon: "#CFE0EC" },
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
        borderRadius: "50%",
        background: palette.bg,
        flexShrink: 0,
      }}
    >
      <svg
        className="rt-mark-ring"
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <ellipse
          cx="50" cy="50" rx="46" ry="26"
          transform="rotate(-28 50 50)"
          fill="none"
          stroke={palette.ring}
          strokeWidth="1.6"
        />
      </svg>
      <Icon size={Math.round(size * 0.42)} color={palette.icon} strokeWidth={1.8} style={{ position: "relative" }} />
    </span>
  );
}
