import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { BrandOrbit } from "../components/BrandOrbit";
import { MaskedWords, useInViewReveal } from "../components/Reveal";
import { products } from "../data/products";

/* ─────────────────────────────────────────────
   Styles partagés
   Le site suit la grammaire visuelle de revyonschool.com : fond clair,
   texte sombre aligné à gauche, sur-titre orange, échelle typographique
   sobre. Pas d'animation d'apparition : le contenu est là dès l'ouverture.
───────────────────────────────────────────── */
const EYEBROW: React.CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: "#C2410C",
  margin: "0 0 14px",
};

const H2: React.CSSProperties = {
  fontSize: "clamp(1.6rem, 5.2vw, 2.2rem)",
  fontWeight: 700,
  color: "#111827",
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  margin: "0 0 14px",
};

const LEAD: React.CSSProperties = {
  fontSize: "1.0625rem",
  lineHeight: 1.65,
  color: "#4B5563",
  margin: 0,
};

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1573167627769-e201a7ddf409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUzMDc3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  { title: "Sites web", desc: "Vitrines, e-commerce et plateformes, livrés en 5 à 14 jours avec hébergement et nom de domaine." },
  { title: "Logiciels et applications", desc: "Outils métier sur mesure quand les logiciels du marché ne couvrent pas votre activité." },
  { title: "Design et identité visuelle", desc: "Logo, charte graphique et déclinaisons web, mobile et impression." },
  { title: "Marketing digital", desc: "Réseaux sociaux, contenus, campagnes ciblées et rapport mensuel." },
  { title: "Multimédia et vidéo", desc: "Vidéos publicitaires, motion design et présentations d'entreprise." },
  { title: "Formation", desc: "Bureautique, outils web et ateliers pratiques, en ligne ou sur place." },
  { title: "Matériel informatique", desc: "Postes sélectionnés, configurés et testés avant livraison." },
];

const reasons = [
  { title: "Nous écrivons le code que nous vendons", desc: "Pas de sous-traitance : l'équipe qui vous répond est celle qui développe. Une correction part le jour même." },
  { title: "Nous connaissons le terrain", desc: "Francs guinéens, programme national, coupures de réseau et paiements en espèces : nos outils sont pensés pour ici, pas adaptés après coup." },
  { title: "Nous restons après la livraison", desc: "Formation de vos équipes, support et mises à jour. Nos trois logiciels tournent en production depuis leur mise en service." },
];

export function HomePage() {
  useInViewReveal();

  usePageMeta(
    "Revyon Tech, entreprise informatique à Conakry : web, logiciels, design et marketing",
    "Revyon Tech accompagne les entreprises et institutions guinéennes sur tout leur numérique : sites web, logiciels et applications mobiles, identité visuelle, marketing digital, formation et matériel informatique. Également éditeur de ses propres plateformes métier : Revyon School, Revyon Gestock et MarkaGest.",
    "/"
  );

  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          background: "radial-gradient(130% 95% at 72% 18%, #10507A 0%, #0C3C5E 45%, #0A2740 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Signature : l'orbite du logo. Sur téléphone elle occupe toute la
            largeur derrière le texte ; au-delà, elle se range à droite. */}
        <BrandOrbit
          className="rt-orbit-quiet pointer-events-none select-none absolute sm:hidden"
          style={{ width: "165%", height: "auto", left: "50%", top: "46%", transform: "translate(-50%, -50%)" }}
        />
        <BrandOrbit
          className="pointer-events-none select-none absolute hidden sm:block"
          style={{ width: "min(680px, 56vw)", height: "auto", right: "-60px", top: "50%", transform: "translateY(-50%)" }}
        />
        {/* Voile : l'orbite reste nette en haut, puis s'efface sous le texte
            et les boutons, qui doivent rester parfaitement lisibles. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,39,64,0) 0%, rgba(10,39,64,0.18) 36%, rgba(10,39,64,0.66) 58%, rgba(10,39,64,0.86) 80%)",
          }}
        />

        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative"
          style={{ paddingTop: "clamp(54px, 7vw, 104px)", paddingBottom: "clamp(44px, 6vw, 92px)" }}
        >
          <div style={{ maxWidth: "740px" }}>
            <span className="rt-eyebrow-rule" style={{ marginBottom: "16px" }} />

            <p
              className="rt-rise"
              style={{ ...EYEBROW, color: "#FDBA74", margin: "0 0 18px", "--rt-delay": "0.3s" } as React.CSSProperties}
            >
              Entreprise informatique à Conakry
            </p>

            <h1
              style={{
                fontSize: "clamp(2.15rem, 8vw, 3.6rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.12,
                letterSpacing: "-0.024em",
                margin: "0 0 22px",
              }}
            >
              <MaskedWords text="Nous construisons les outils numériques dont votre activité a besoin" delay={0.12} />
            </h1>

            <p
              className="rt-rise"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "#CFE0EC",
                margin: "0 0 30px",
                maxWidth: "580px",
                "--rt-delay": "0.62s",
              } as React.CSSProperties}
            >
              Sites web, logiciels, identité de marque, marketing, formation et matériel.
              Nous éditons aussi nos propres plateformes métier, utilisées chaque jour par
              des écoles, des commerces et des markaz.
            </p>

            <div
              className="rt-rise flex flex-col sm:flex-row gap-3"
              style={{ marginBottom: "34px", "--rt-delay": "0.72s" } as React.CSSProperties}
            >
              <Link
                to="/contact#devis"
                className="rt-btn rt-btn-accent"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "15px 26px", background: "#C2410C", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
              >
                Démarrer un projet <ArrowRight size={17} />
              </Link>
              <Link
                to="/portfolio"
                className="rt-btn rt-btn-ghost-dark"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "15px 26px", background: "rgba(255,255,255,0.07)", color: "#fff", border: "1px solid rgba(255,255,255,0.34)", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
              >
                Voir nos réalisations
              </Link>
            </div>

            <ul
              className="rt-rise flex flex-col gap-2.5"
              style={{ listStyle: "none", padding: 0, margin: 0, "--rt-delay": "0.82s" } as React.CSSProperties}
            >
              {[
                "Sept métiers, du site web au matériel informatique",
                "Trois logiciels en production, écrits et maintenus ici",
                "Une réponse à votre demande sous 24 heures",
              ].map((fact) => (
                <li key={fact} className="flex items-start gap-2.5">
                  <Check size={17} color="#6EE7B7" strokeWidth={2.4} style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "#CFE0EC", lineHeight: 1.55 }}>{fact}</span>
                </li>
              ))}
            </ul>

            <div className="rt-scroll-cue" style={{ marginTop: "38px", display: "flex", alignItems: "center", gap: "9px", color: "#9FC2DA" }}>
              <ChevronDown size={18} />
              <span style={{ fontSize: "0.82rem", letterSpacing: "0.03em" }}>Nos services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "#F8FAFC", borderBottom: "1px solid #E7EBF0" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ paddingTop: "clamp(48px, 7vw, 88px)", paddingBottom: "clamp(48px, 7vw, 88px)" }}>
          <div style={{ maxWidth: "640px", marginBottom: "34px" }}>
            <p style={EYEBROW}>Nos services</p>
            <h2 style={H2}>Sept métiers, une seule équipe</h2>
            <p style={LEAD}>
              Du premier croquis à la mise en ligne, puis à la formation de vos équipes.
              Vous n'avez qu'un interlocuteur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10" style={{ borderTop: "1px solid #E2E8F0" }}>
            {services.map((service) => (
              <div
                key={service.title}
                style={{ borderBottom: "1px solid #E2E8F0", padding: "20px 0" }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.6, color: "#4B5563", margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="rt-link"
            style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "26px", color: "#0C4A6E", fontWeight: 600, fontSize: "0.97rem", textDecoration: "none" }}
          >
            Le détail de chaque service <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── NOS PRODUITS ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #E7EBF0" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ paddingTop: "clamp(48px, 7vw, 88px)", paddingBottom: "clamp(48px, 7vw, 88px)" }}>
          <div style={{ maxWidth: "660px", marginBottom: "36px" }}>
            <p style={EYEBROW}>Nos produits</p>
            <h2 style={H2}>Trois logiciels que nous éditons nous-mêmes</h2>
            <p style={LEAD}>
              Au-delà des projets sur mesure, nous développons et maintenons nos propres
              plateformes métier. Elles tournent aujourd'hui chez nos clients, et c'est la
              même équipe qui écrit le code et répond au téléphone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10" style={{ borderTop: "1px solid #E7EBF0" }}>
            {products.map((product, i) => (
              <article
                key={product.slug}
                className="rt-card rt-enter"
                style={{ borderBottom: "1px solid #E7EBF0", padding: "26px 0", "--rt-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="rt-rule" style={{ width: "30px", height: "3px", borderRadius: "2px", background: product.theme.accent, marginBottom: "16px" }} />
                <h3 className="rt-card-title" style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", margin: "0 0 5px", letterSpacing: "-0.01em" }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", margin: "0 0 14px", fontWeight: 500 }}>
                  {product.audience}
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#4B5563", margin: "0 0 18px" }}>
                  {product.cardLine}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Link
                    to={`/portfolio#${product.slug}`}
                    className="rt-link"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0C4A6E", fontWeight: 600, fontSize: "0.93rem", textDecoration: "none" }}
                  >
                    En savoir plus <ArrowRight size={15} />
                  </Link>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener"
                    style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "0.88rem", textDecoration: "none" }}
                  >
                    {product.domain} <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section style={{ background: "#F8FAFC", borderBottom: "1px solid #E7EBF0" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ paddingTop: "clamp(48px, 7vw, 88px)", paddingBottom: "clamp(48px, 7vw, 88px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <p style={EYEBROW}>À propos</p>
              <h2 style={H2}>Une équipe technique, à Conakry</h2>
              <p style={{ ...LEAD, marginBottom: "26px" }}>
                Revyon Tech a été fondée en 2024 pour que les entreprises et les institutions
                guinéennes n'aient plus à choisir entre un outil étranger inadapté et un cahier.
                Nous sommes une équipe de direction pluridisciplinaire : développement, design,
                commerce, communication et gestion.
              </p>

              <div style={{ borderTop: "1px solid #E2E8F0" }}>
                {reasons.map((reason) => (
                  <div key={reason.title} style={{ borderBottom: "1px solid #E2E8F0", padding: "16px 0" }}>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#111827", margin: "0 0 5px" }}>
                      {reason.title}
                    </h3>
                    <p style={{ fontSize: "0.93rem", lineHeight: 1.6, color: "#4B5563", margin: 0 }}>{reason.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/a-propos"
                className="rt-link"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "24px", color: "#0C4A6E", fontWeight: 600, fontSize: "0.97rem", textDecoration: "none" }}
              >
                L'équipe et notre histoire <ArrowRight size={16} />
              </Link>
            </div>

            <img
              src={TEAM_IMAGE}
              alt="Réunion de travail chez Revyon Tech"
              width={1080}
              height={720}
              loading="lazy"
              style={{ width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "10px", border: "1px solid #E2E8F0" }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0C4A6E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ paddingTop: "clamp(44px, 6vw, 72px)", paddingBottom: "clamp(44px, 6vw, 72px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div style={{ maxWidth: "620px" }}>
              <h2 style={{ ...H2, color: "#fff", margin: "0 0 12px" }}>Parlons de votre projet</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#D5E4EF", margin: 0 }}>
                Décrivez-nous ce que vous voulez faire. Nous revenons vers vous sous 24 heures
                avec une estimation de délai et de budget, sans engagement.
              </p>
            </div>
            <Link
              to="/contact#devis"
              className="rt-btn rt-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 28px", background: "#C2410C", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1rem", whiteSpace: "nowrap" }}
            >
              Demander un devis <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
