import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { products } from "../data/products";
import { trackEvent } from "../analytics";

const TECH_IMAGE =
  "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwZGlnaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc1MzA3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function PortfolioPage() {
  usePageMeta(
    "Nos réalisations | Logiciels édités par Revyon Tech : Revyon School, Gestock, MarkaGest",
    "Découvrez les logiciels conçus et développés par Revyon Tech : Revyon School (gestion scolaire), Revyon Gestock (stock et trésorerie) et MarkaGest (gestion des markaz et suivi du hifz).",
    "/portfolio"
  );

  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A7BAD 0%, #0E7490 100%)",
          padding: "clamp(40px, 8vw, 80px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${TECH_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            style={{
              display: "inline-block",
              background: "rgba(3,44,72,0.32)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              padding: "4px 20px",
              borderRadius: "100px",
              fontSize: "0.85rem",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Nos réalisations
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#fff",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Trois logiciels <span style={{ color: "#FFEAD5" }}>en production</span>
          </h1>
          <p style={{ color: "#fff", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto", opacity: 0.95 }}>
            Chacun est né d'un besoin qu'un client nous a décrit, et chacun tourne aujourd'hui au
            quotidien, à Conakry comme à l'intérieur du pays. Nous les éditons nous-mêmes.
          </p>
        </div>
      </section>

      {/* ── PRODUITS ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <article
              key={product.slug}
              id={product.slug}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                border: "2px solid #0EA5E9",
                boxShadow: "0 8px 40px rgba(14,165,233,0.12)",
                marginBottom: "40px",
                scrollMarginTop: "100px",
              }}
            >
              {/* Bandeau */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0A6E9E 0%, #075985 100%)",
                  padding: "12px 24px",
                }}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      background: "rgba(3,44,72,0.38)",
                      borderRadius: "6px",
                      padding: "4px 12px",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    PRODUIT #{index + 1}
                  </div>
                  <span style={{ color: "#E8F4FB", fontSize: "0.85rem" }}>{product.year}</span>
                </div>
                <div
                  style={{
                    background: "#D1FAE5",
                    color: "#065F46",
                    borderRadius: "100px",
                    padding: "4px 14px",
                    fontSize: "0.78rem",
                    fontWeight: "700",
                  }}
                >
                  ✓ {product.status}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Capture du produit */}
                <div style={{ padding: "32px" }}>
                  <figure style={{ margin: 0 }}>
                    <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #E2E8F0", background: "#fff" }}>
                      <img
                        src={product.screenshot}
                        alt={`Interface de ${product.name}`}
                        width={1280}
                        height={760}
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "auto" }}
                      />
                    </div>
                    <figcaption style={{ fontSize: "0.82rem", lineHeight: "1.6", color: "#64748B", marginTop: "10px" }}>
                      {product.screenshotCaption}
                    </figcaption>
                  </figure>
                </div>

                {/* Détails */}
                <div style={{ padding: "40px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "#E0F2FE",
                      color: "#075985",
                      padding: "4px 14px",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    {product.audience}
                  </div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#0C4A6E",
                      marginBottom: "6px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {product.name}
                  </h2>
                  <p style={{ color: "#C2410C", fontWeight: "600", fontSize: "0.95rem", marginBottom: "16px" }}>
                    {product.tagline}
                  </p>
                  <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "20px", fontSize: "0.93rem" }}>
                    {product.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-6">
                    {product.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2">
                        <Check size={15} color="#059669" strokeWidth={2.6} style={{ marginTop: "4px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.88rem", color: "#0F172A", lineHeight: "1.6" }}>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tech.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "#F1F5F9",
                          color: "#0F172A",
                          padding: "4px 12px",
                          borderRadius: "100px",
                          fontSize: "0.78rem",
                          fontWeight: "500",
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener"
                      onClick={() => trackEvent("product_visit", { product: product.slug })}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        background: "linear-gradient(135deg, #0A6E9E 0%, #075985 100%)",
                        color: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "0.93rem",
                      }}
                    >
                      Ouvrir {product.domain} <ArrowUpRight size={15} />
                    </a>
                    <Link
                      to="/contact#devis"
                      onClick={() => trackEvent("product_demo_request", { product: product.slug })}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        background: "#fff",
                        color: "#0C4A6E",
                        border: "1px solid #0EA5E9",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "0.93rem",
                      }}
                    >
                      Demander une démonstration
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── IDENTITÉ VISUELLE ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              style={{
                display: "inline-block",
                background: "#EDE9FE",
                color: "#6D28D9",
                padding: "4px 16px",
                borderRadius: "100px",
                fontSize: "0.82rem",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Design & Branding
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", color: "#0C4A6E", letterSpacing: "-0.02em", marginBottom: "10px" }}>
              L'identité de marque Revyon Tech
            </h2>
            <p style={{ color: "#0F172A", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto" }}>
              Notre propre marque est née en interne : emblème, logotype, palette et règles d'usage.
              C'est le même travail que nous menons pour nos clients.
            </p>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #0A6E9E 0%, #0C2340 100%)",
              borderRadius: "20px",
              padding: "clamp(28px, 5vw, 48px)",
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "clamp(24px, 4vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/logo.jpeg"
                alt="Logo officiel de Revyon Tech"
                width={420}
                height={160}
                loading="lazy"
                style={{ width: "100%", maxWidth: "300px", height: "auto", objectFit: "contain" }}
              />
            </div>

            <div>
              <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Palette de couleurs
              </span>
              <div className="flex gap-3 flex-wrap" style={{ marginTop: "14px" }}>
                {[
                  { color: "#0C2340", name: "Bleu nuit" },
                  { color: "#1A3A6B", name: "Bleu marine" },
                  { color: "#0C4A6E", name: "Bleu vif" },
                  { color: "#E84C1E", name: "Orange RT" },
                  { color: "#ffffff", name: "Blanc", border: true },
                ].map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-1">
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: c.color,
                        border: c.border ? "2px solid #334155" : "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      }}
                    />
                    <span style={{ fontSize: "0.62rem", color: "#fff", textAlign: "center" }}>{c.name}</span>
                    <span style={{ fontSize: "0.6rem", color: "#E8F4FB", fontFamily: "monospace" }}>{c.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #0A7BAD 0%, #0E7490 100%)", padding: "60px 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", color: "#fff", marginBottom: "12px" }}>
            Votre métier mérite son propre outil
          </h2>
          <p style={{ color: "#fff", lineHeight: "1.8", marginBottom: "28px", opacity: 0.95 }}>
            Ces trois plateformes sont parties d'un besoin concret raconté par un client. Dites-nous
            le vôtre : la première démonstration dure une trentaine de minutes et ne coûte rien.
          </p>
          <Link
            to="/contact#devis"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 32px",
              background: "linear-gradient(135deg, #C2410C 0%, #9A3412 100%)",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "700",
              boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
            }}
          >
            Parler de votre projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
