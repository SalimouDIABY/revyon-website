import type { CSSProperties, ReactNode } from "react";

/**
 * Base de design du site.
 *
 * Une seule famille de couleurs (bleu profond) et un seul accent (orange).
 * Les pages n'inventent plus leur propre palette : les sept services
 * affichaient sept couleurs différentes, et l'équipe cinq teintes pastel,
 * ce qui donnait une impression de patchwork au lieu d'une marque.
 */
export const C = {
  ink: "#111827",
  body: "#4B5563",
  muted: "#6B7280",
  faint: "#9AA5B1",
  navy: "#0C4A6E",
  navyDeep: "#0B2742",
  accent: "#C2410C",
  surface: "#FFFFFF",
  tint: "#F8FAFC",
  tintStrong: "#F1F5F9",
  line: "#E7EBF0",
  lineStrong: "#E2E8F0",
} as const;

export const EYEBROW: CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: C.accent,
  margin: "0 0 14px",
};

export const H2: CSSProperties = {
  fontSize: "clamp(1.6rem, 5.2vw, 2.2rem)",
  fontWeight: 700,
  color: C.ink,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  margin: "0 0 14px",
};

export const H3: CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: C.ink,
  letterSpacing: "-0.01em",
  margin: "0 0 7px",
};

export const LEAD: CSSProperties = {
  fontSize: "1.0625rem",
  lineHeight: 1.65,
  color: C.body,
  margin: 0,
};

export const TEXT: CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.62,
  color: C.body,
  margin: 0,
};

/** Bande de page, avec son fond et son rythme vertical. */
export function Section({
  children,
  tone = "white",
  compact = false,
  id,
  style,
}: {
  children: ReactNode;
  tone?: "white" | "tint" | "navy";
  compact?: boolean;
  id?: string;
  style?: CSSProperties;
}) {
  const bg = tone === "navy" ? C.navy : tone === "tint" ? C.tint : C.surface;
  return (
    <section
      id={id}
      style={{
        background: bg,
        borderBottom: tone === "navy" ? "none" : `1px solid ${C.line}`,
        ...style,
      }}
    >
      <div
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
        style={{
          paddingTop: compact ? "clamp(34px, 4.5vw, 56px)" : "clamp(48px, 6.5vw, 88px)",
          paddingBottom: compact ? "clamp(34px, 4.5vw, 56px)" : "clamp(48px, 6.5vw, 88px)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

/** Titre de section : sur-titre, titre, chapô. Toujours aligné à gauche. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  maxWidth = "680px",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  maxWidth?: string;
}) {
  return (
    <div className="rt-enter" style={{ maxWidth, marginBottom: "clamp(26px, 3.4vw, 40px)" }}>
      <p style={{ ...EYEBROW, color: dark ? "#FDBA74" : C.accent }}>{eyebrow}</p>
      <h2 style={{ ...H2, color: dark ? "#fff" : C.ink }}>{title}</h2>
      {lead ? <p style={{ ...LEAD, color: dark ? "#CFE0EC" : C.body }}>{lead}</p> : null}
    </div>
  );
}

/** Enveloppe une entrée au défilement, avec son décalage. */
export function Enter({
  children,
  delay = 0,
  className = "",
  style,
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  /** Ancre de section, pour les liens « /services#formation ». */
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rt-enter ${className}`.trim()}
      style={{ ...style, "--rt-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
