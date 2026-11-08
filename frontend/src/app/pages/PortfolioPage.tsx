import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Check, CircleDot, Palette, WifiOff, Smartphone, Building2 } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { products } from "../data/products";
import { ProductPreview } from "../components/ProductPreview";
import { trackEvent } from "../analytics";

const pillars = [
  {
    Icon: WifiOff,
    title: "Conçus pour le réseau d'ici",
    desc: "Nos logiciels continuent de fonctionner quand la connexion tombe, puis se synchronisent d'eux-mêmes au retour du réseau.",
  },
  {
    Icon: Smartphone,
    title: "Utilisables depuis un téléphone",
    desc: "Rien à installer : une adresse dans le navigateur, et l'application peut être ajoutée à l'écran d'accueil comme une app.",
  },
  {
    Icon: Building2,
    title: "Écrits et maintenus à Conakry",
    desc: "L'équipe qui répond au téléphone est celle qui écrit le code. Les produits évoluent avec ce que nos clients demandent.",
  },
];

export function PortfolioPage() {
  usePageMeta(
    "Nos réalisations | Logiciels édités par Revyon Tech — Revyon School, Gestock, MarkaGest",
    "Découvrez les logiciels conçus et développés par Revyon Tech à Conakry : Revyon School (gestion scolaire), Revyon Gestock (stock et trésorerie) et MarkaGest (gestion des markaz et suivi du hifz).",
    "/portfolio"
  );

  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0C4A6E 0%, #0E7490 100%)",
          padding: "clamp(48px, 8vw, 88px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-100px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              padding: "5px 20px",
              borderRadius: "100px",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            Nos réalisations
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Des logiciels que nous <span style={{ color: "#FDBA74" }}>éditons</span>, pas seulement des sites
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "620px",
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            Revyon Tech conçoit, développe et maintient ses propres plateformes métier depuis Conakry.
            Trois d'entre elles sont aujourd'hui en production chez nos clients.
          </p>
        </div>
      </section>

      {/* ── CE QUI CARACTÉRISE NOS PRODUITS ── */}
      <section style={{ background: "#fff", padding: "clamp(36px, 6vw, 56px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#E0F2FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <Icon size={21} color="#0284C7" />
                </div>
                <h2 style={{ fontWeight: 700, color: "#0C4A6E", marginBottom: "8px", fontSize: "1rem" }}>{title}</h2>
                <p style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUITS ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 7vw, 72px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          {products.map((product, index) => (
            <article
              key={product.slug}
              id={product.slug}
              style={{
                background: "#fff",
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 40px rgba(15,23,42,0.06)",
                overflow: "hidden",
                scrollMarginTop: "100px",
              }}
            >
              {/* Bandeau */}
              <div
                style={{
                  background: product.theme.deep,
                  padding: "14px 24px",
                }}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      borderRadius: "6px",
                      padding: "4px 12px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.category}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem" }}>{product.audience}</span>
                </div>
                <span
                  style={{
                    background: "#D1FAE5",
                    color: "#065F46",
                    borderRadius: "100px",
                    padding: "4px 14px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  ✓ {product.status} · {product.year}
                </span>
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                style={{ padding: "clamp(24px, 4vw, 40px)" }}
              >
                {/* Aperçu */}
                <div>
                  <ProductPreview product={product} />
                </div>

                {/* Contenu */}
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 1.9rem)",
                      fontWeight: 800,
                      color: product.theme.deep,
                      letterSpacing: "-0.02em",
                      marginBottom: "6px",
                    }}
                  >
                    {product.name}
                  </h2>
                  <p
                    style={{
                      color: product.theme.accentText,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                    }}
                  >
                    {product.tagline}
                  </p>
                  <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "0.94rem", marginBottom: "22px" }}>
                    {product.description}
                  </p>

                  <h3
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      color: "#64748B",
                      marginBottom: "12px",
                    }}
                  >
                    Ce que ça change au quotidien
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px" }} className="flex flex-col gap-2.5">
                    {product.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5">
                        <Check size={16} color={product.theme.accentText} style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.65 }}>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <h3
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      color: "#64748B",
                      marginBottom: "12px",
                    }}
                  >
                    Périmètre fonctionnel
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px" }} className="flex flex-col gap-2">
                    {product.modules.map((module) => (
                      <li key={module} className="flex items-start gap-2.5">
                        <CircleDot size={14} color="#94A3B8" style={{ marginTop: "4px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.6 }}>{module}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2" style={{ marginBottom: "26px" }}>
                    {product.tech.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "#F1F5F9",
                          color: "#334155",
                          padding: "4px 12px",
                          borderRadius: "100px",
                          fontSize: "0.76rem",
                          fontWeight: 500,
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
                        background: product.theme.deep,
                        color: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                      }}
                    >
                      Voir {product.name} <ArrowUpRight size={16} />
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
                        color: product.theme.deep,
                        border: `1px solid ${product.theme.deep}`,
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.92rem",
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
      <section style={{ background: "#fff", padding: "clamp(40px, 7vw, 72px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background: "linear-gradient(135deg, #0C4A6E 0%, #0E7490 100%)",
              borderRadius: "24px",
              padding: "clamp(28px, 5vw, 48px)",
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  padding: "5px 16px",
                  borderRadius: "100px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                <Palette size={14} /> Design & identité visuelle
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: "14px",
                }}
              >
                L'identité de marque Revyon Tech
              </h2>
              <p style={{ color: "#E0F2FE", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px" }}>
                Notre propre marque est née en interne : emblème, logotype, palette et règles d'usage.
                C'est le même travail que nous menons pour nos clients, du premier croquis aux déclinaisons
                web, mobile et impression.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { color: "#0C2340", name: "Bleu nuit" },
                  { color: "#0C4A6E", name: "Bleu vif" },
                  { color: "#38BDF8", name: "Bleu clair" },
                  { color: "#C2410C", name: "Orange" },
                  { color: "#FFFFFF", name: "Blanc" },
                ].map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-1.5">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "11px",
                        background: c.color,
                        border: "1px solid rgba(255,255,255,0.35)",
                      }}
                    />
                    <span style={{ fontSize: "0.65rem", color: "#E0F2FE" }}>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "clamp(24px, 4vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "200px",
              }}
            >
              <img
                src="/logo.jpeg"
                alt="Logo officiel de Revyon Tech"
                width={420}
                height={160}
                loading="lazy"
                style={{ width: "100%", maxWidth: "340px", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #0C4A6E 0%, #0E7490 100%)", padding: "clamp(40px, 7vw, 68px) 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            Votre métier mérite son propre outil
          </h2>
          <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: "28px", opacity: 0.95 }}>
            Ces trois plateformes sont parties d'un besoin concret raconté par un client. Dites-nous le vôtre :
            la première démonstration dure une trentaine de minutes et ne coûte rien.
          </p>
          <Link
            to="/contact#devis"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "linear-gradient(135deg, #C2410C 0%, #9A3412 100%)",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
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
