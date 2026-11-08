import type { Product } from "../data/products";

/**
 * Aperçu d'interface stylisé d'un produit Revyon Tech.
 *
 * Dessiné en HTML/CSS aux couleurs du produit : il montre la nature de
 * l'outil (modules, indicateurs) sans reproduire l'interface réelle ni
 * exposer la moindre donnée d'un établissement ou d'un commerce. Les
 * chiffres affichés sont des valeurs d'illustration, signalées comme telles.
 */
export function ProductPreview({ product }: { product: Product }) {
  const { theme, preview, name } = product;

  return (
    <div
      aria-hidden="true"
      style={{
        background: theme.deep,
        borderRadius: "20px",
        padding: "clamp(14px, 3vw, 22px)",
        boxShadow: "0 18px 50px rgba(13,43,85,0.22)",
        overflow: "hidden",
      }}
    >
      {/* Barre de fenêtre */}
      <div className="flex items-center gap-2" style={{ marginBottom: "14px" }}>
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "rgba(255,255,255,0.28)" }} />
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "rgba(255,255,255,0.18)" }} />
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "rgba(255,255,255,0.18)" }} />
        <span
          style={{
            marginLeft: "8px",
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {product.domain}
        </span>
      </div>

      {/* Corps de l'application */}
      <div
        style={{
          background: theme.surface,
          borderRadius: "14px",
          padding: "clamp(14px, 2.6vw, 20px)",
        }}
      >
        <div className="flex items-center justify-between gap-3" style={{ marginBottom: "14px" }}>
          <span style={{ color: theme.deep, fontWeight: 800, fontSize: "0.92rem", letterSpacing: "-0.01em" }}>
            {preview.label}
          </span>
          <span
            style={{
              background: theme.accentText,
              color: "#fff",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: "100px",
              padding: "3px 10px",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        </div>

        {/* Modules */}
        <div className="flex flex-wrap gap-2" style={{ marginBottom: "16px" }}>
          {preview.nav.map((item, i) => (
            <span
              key={item}
              style={{
                background: i === 0 ? theme.deep : theme.soft,
                color: i === 0 ? "#fff" : theme.deep,
                fontSize: "0.7rem",
                fontWeight: 600,
                borderRadius: "8px",
                padding: "5px 11px",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Indicateurs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {preview.tiles.map((tile) => (
            <div
              key={tile.label}
              style={{
                background: "#fff",
                border: `1px solid ${theme.soft}`,
                borderRadius: "11px",
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  fontSize: "0.63rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#64748B",
                  marginBottom: "6px",
                }}
              >
                {tile.label}
              </div>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: theme.deep, lineHeight: 1 }}>
                {tile.value}
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "5px" }}>{tile.note}</div>
            </div>
          ))}
        </div>

        {/* Barre de progression décorative */}
        <div style={{ marginTop: "16px" }}>
          <div
            style={{
              height: "7px",
              borderRadius: "100px",
              background: theme.soft,
              overflow: "hidden",
            }}
          >
            <div style={{ width: "72%", height: "100%", background: theme.accent, borderRadius: "100px" }} />
          </div>
        </div>
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.67rem",
          margin: "12px 2px 0",
          lineHeight: 1.5,
        }}
      >
        Aperçu d'illustration — aucune donnée réelle d'un client n'est affichée.
      </p>
    </div>
  );
}
