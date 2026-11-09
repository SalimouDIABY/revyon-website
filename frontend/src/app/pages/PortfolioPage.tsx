import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Check, WifiOff, Smartphone, PenLine } from "lucide-react";
import { IconMark } from "../components/IconMark";
import { usePageMeta } from "../hooks/usePageMeta";
import { BrandOrbit } from "../components/BrandOrbit";
import { products } from "../data/products";
import { ProductPreview } from "../components/ProductPreview";
import { MaskedWords, useInViewReveal } from "../components/Reveal";
import { trackEvent } from "../analytics";

const EYEBROW: React.CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: "#C2410C",
  margin: "0 0 14px",
};

const pillars = [
  {
    icon: WifiOff,
    title: "Conçus pour le réseau d'ici",
    desc: "L'appel, la caisse, la saisie : tout continue hors connexion, puis se synchronise au retour du réseau, sans double saisie.",
  },
  {
    icon: Smartphone,
    title: "Utilisables depuis un téléphone",
    desc: "Une adresse dans le navigateur, rien à installer. L'application peut s'ajouter à l'écran d'accueil comme une app native.",
  },
  {
    icon: PenLine,
    title: "Écrits et maintenus en Guinée",
    desc: "L'équipe qui répond au téléphone est celle qui écrit le code. Les produits évoluent avec ce que les clients demandent.",
  },
];

export function PortfolioPage() {
  useInViewReveal();

  usePageMeta(
    "Nos réalisations | Logiciels édités par Revyon Tech : Revyon School, Gestock, MarkaGest",
    "Découvrez les logiciels conçus et développés par Revyon Tech à Conakry : Revyon School (gestion scolaire), Revyon Gestock (stock et trésorerie) et MarkaGest (gestion des markaz et suivi du hifz).",
    "/portfolio"
  );

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(165deg, #0A6E9E 0%, #07628C 48%, #054F72 100%)", position: "relative", overflow: "hidden" }}>
        {/* Halo du bleu vif, réservé aux grands écrans : sur un téléphone,
            aucune zone n'est assez loin du texte pour l'accueillir. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden xl:block"
          style={{
            background:
              "radial-gradient(58% 120% at 101% -14%, rgba(38,190,255,0.92) 0%, rgba(20,156,220,0.62) 34%, rgba(10,110,160,0.22) 62%, rgba(6,79,112,0) 80%)",
          }}
        />
        <BrandOrbit
          className="pointer-events-none select-none absolute hidden md:block"
          style={{ width: "420px", height: "auto", right: "-90px", top: "50%", transform: "translateY(-50%)", opacity: 0.7 }}
        />
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative"
          style={{ paddingTop: "clamp(40px, 5.5vw, 68px)", paddingBottom: "clamp(40px, 5.5vw, 68px)" }}
        >
          <div style={{ maxWidth: "700px" }}>
            <p className="rt-rise" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "#FFE7CC", margin: "0 0 14px", "--rt-delay": "0.05s" } as React.CSSProperties}>
              Nos réalisations
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 6.6vw, 2.9rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.022em", margin: "0 0 16px" }}>
              <MaskedWords text="Trois logiciels en production, écrits en Guinée" delay={0.1} />
            </h1>
            <p className="rt-rise" style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "#E2F1FA", margin: 0, maxWidth: "600px", "--rt-delay": "0.21s" } as React.CSSProperties}>
              Chacun est né d'un besoin qu'un client nous a décrit, et chacun tourne aujourd'hui
              au quotidien, à Conakry comme à l'intérieur du pays. Nous les éditons nous-mêmes :
              conception, développement, mises à jour et support.
            </p>
          </div>
        </div>
      </section>

      {/* ── CE QUI LES CARACTÉRISE ── */}
      <section style={{ background: "#F8FAFC", borderBottom: "1px solid #E7EBF0" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ paddingTop: "clamp(32px, 4vw, 48px)", paddingBottom: "clamp(32px, 4vw, 48px)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="rt-enter rt-tile"
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "14px",
                  padding: "22px",
                  overflow: "hidden",
                  "--rt-delay": `${Math.min(i, 5) * 0.085}s`,
                } as React.CSSProperties}
              >
                <IconMark icon={pillar.icon} />
                <h2 style={{ fontSize: "1.02rem", fontWeight: 700, color: "#111827", margin: "16px 0 7px" }}>
                  {pillar.title}
                </h2>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.6, color: "#4B5563", margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUITS ── */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <article
              key={product.slug}
              id={product.slug}
              className="rt-enter"
              style={{
                paddingTop: "clamp(44px, 6vw, 76px)",
                paddingBottom: "clamp(44px, 6vw, 76px)",
                borderTop: index > 0 ? "1px solid #E7EBF0" : "none",
                scrollMarginTop: "90px",
              }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-14 items-start ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Capture */}
                <ProductPreview product={product} />

                {/* Contenu */}
                <div>
                  <p style={{ ...EYEBROW, color: product.theme.accentText }}>{product.audience}</p>

                  <h2
                    style={{
                      fontSize: "clamp(1.6rem, 5vw, 2.1rem)",
                      fontWeight: 700,
                      color: "#111827",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      margin: "0 0 12px",
                    }}
                  >
                    {product.name}
                  </h2>

                  <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "#374151", margin: "0 0 18px", fontWeight: 500 }}>
                    {product.tagline}
                  </p>

                  <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: "#4B5563", margin: "0 0 26px" }}>
                    {product.description}
                  </p>

                  <h3
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "#6B7280",
                      margin: "0 0 14px",
                    }}
                  >
                    Ce que ça change au quotidien
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }} className="flex flex-col gap-3">
                    {product.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5">
                        <Check size={16} color="#047857" strokeWidth={2.4} style={{ marginTop: "4px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.6 }}>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <h3
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "#6B7280",
                      margin: "0 0 12px",
                    }}
                  >
                    Modules
                  </h3>
                  <ul
                    style={{ listStyle: "none", padding: 0, margin: "0 0 26px", borderTop: "1px solid #EDF1F5" }}
                  >
                    {product.modules.map((module) => {
                      const [head, ...rest] = module.split(" : ");
                      return (
                        <li
                          key={module}
                          style={{ borderBottom: "1px solid #EDF1F5", padding: "10px 0" }}
                        >
                          <span style={{ fontSize: "0.93rem", color: "#111827", fontWeight: 600 }}>{head}</span>
                          {rest.length > 0 && (
                            <span style={{ fontSize: "0.9rem", color: "#6B7280" }}> : {rest.join(" : ")}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <p style={{ fontSize: "0.88rem", color: "#6B7280", margin: "0 0 24px", lineHeight: 1.6 }}>
                    {product.tech.join(" · ")}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener"
                      onClick={() => trackEvent("product_visit", { product: product.slug })}
                      className="rt-btn rt-btn-solid"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "13px 24px",
                        background: "#0C4A6E",
                        color: "#fff",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                      }}
                    >
                      Ouvrir {product.domain} <ArrowUpRight size={16} />
                    </a>
                    <Link
                      to="/contact#devis"
                      onClick={() => trackEvent("product_demo_request", { product: product.slug })}
                      className="rt-btn rt-btn-ghost"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "13px 24px",
                        background: "#fff",
                        color: "#0C4A6E",
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.95rem",
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
      <section style={{ background: "#F8FAFC", borderTop: "1px solid #E7EBF0" }}>
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
          style={{ paddingTop: "clamp(44px, 6vw, 76px)", paddingBottom: "clamp(44px, 6vw, 76px)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p style={EYEBROW}>Design & identité visuelle</p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4.6vw, 2rem)",
                  fontWeight: 700,
                  color: "#111827",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                }}
              >
                Notre propre marque, faite en interne
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4B5563", margin: "0 0 22px" }}>
                Emblème, logotype, palette et règles d'usage : c'est le même travail que nous
                menons pour nos clients, du premier croquis aux déclinaisons web, mobile et
                impression.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { color: "#0C2340", name: "Bleu nuit" },
                  { color: "#0C4A6E", name: "Bleu profond" },
                  { color: "#0EA5E9", name: "Bleu vif" },
                  { color: "#C2410C", name: "Orange" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-2"
                    style={{
                      border: "1px solid #E2E8F0",
                      background: "#fff",
                      borderRadius: "7px",
                      padding: "6px 11px 6px 7px",
                    }}
                  >
                    <span style={{ width: "16px", height: "16px", borderRadius: "4px", background: c.color }} />
                    <span style={{ fontSize: "0.78rem", color: "#4B5563" }}>{c.name}</span>
                    <span style={{ fontSize: "0.72rem", color: "#6B7280", fontFamily: "ui-monospace, monospace" }}>
                      {c.color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: "10px",
                padding: "clamp(28px, 5vw, 48px)",
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
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0C4A6E" }}>
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
          style={{ paddingTop: "clamp(44px, 6vw, 72px)", paddingBottom: "clamp(44px, 6vw, 72px)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div style={{ maxWidth: "620px" }}>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4.6vw, 2rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  margin: "0 0 12px",
                }}
              >
                Votre métier mérite son propre outil
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#D5E4EF", margin: 0 }}>
                Ces trois plateformes sont parties d'un besoin concret raconté par un client.
                Dites-nous le vôtre : la première démonstration dure une trentaine de minutes
                et ne coûte rien.
              </p>
            </div>
            <Link
              to="/contact#devis"
              className="rt-btn rt-btn-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "#C2410C",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              Parler de votre projet <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
