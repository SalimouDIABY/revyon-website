// Logo officiel Revyon Tech (emblème RT + texte), placé dans /public
const LOGO_SRC = "/logo.jpeg";

export function Logo({ size = "md", color = "text" }: { size?: "sm" | "md" | "lg"; color?: "text" | "white" }) {
  const heights = { sm: 44, md: 56, lg: 64 };
  const h = heights[size];

  const img = (
    <img
      src={LOGO_SRC}
      alt="Revyon Tech — Entreprise informatique en Guinée"
      style={{ height: `${h}px`, width: "auto", objectFit: "contain", display: "block" }}
    />
  );

  // Sur fond bleu (footer), le logo à fond blanc est posé sur un badge blanc
  // arrondi pour un rendu propre et intentionnel.
  if (color === "white") {
    return (
      <span
        style={{
          display: "inline-flex",
          background: "#fff",
          borderRadius: "12px",
          padding: "8px 14px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
        }}
      >
        {img}
      </span>
    );
  }

  return img;
}
