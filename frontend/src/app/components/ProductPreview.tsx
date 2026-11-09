import type { Product } from "../data/products";

/**
 * Capture réelle du produit, telle qu'elle est publiquement accessible sur
 * son propre domaine.
 *
 * Remplace l'ancien aperçu dessiné à la main : des chiffres inventés dans
 * une fausse interface ne prouvent rien, et une capture de l'écran réel
 * d'un client n'était pas envisageable. On montre donc ce que n'importe
 * qui voit déjà en ouvrant l'adresse.
 */
export function ProductPreview({ product }: { product: Product }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        className="rt-shot"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #E2E8F0",
          background: "#fff",
        }}
      >
        {/* Barre de fenêtre discrète : situe la capture sans l'encombrer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            padding: "9px 12px",
            borderBottom: "1px solid #EDF1F5",
            background: "#F8FAFC",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D7DEE6" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D7DEE6" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D7DEE6" }} />
          <span
            style={{
              marginLeft: "6px",
              fontSize: "0.72rem",
              color: "#6B7280",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.domain}
          </span>
        </div>
        <img
          src={product.screenshot}
          alt={`Interface de ${product.name}`}
          width={1280}
          height={760}
          loading="lazy"
          decoding="async"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
      <figcaption style={{ fontSize: "0.82rem", lineHeight: 1.55, color: "#6B7280", marginTop: "10px" }}>
        {product.screenshotCaption}
      </figcaption>
    </figure>
  );
}
