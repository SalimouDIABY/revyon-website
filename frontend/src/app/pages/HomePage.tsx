import { Link } from "react-router";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown,
  Globe, Code2, PenTool, Megaphone, Clapperboard, GraduationCap, Cpu,
  PenLine, MapPinned, LifeBuoy,
} from "lucide-react";
import { IconMark } from "../components/IconMark";
import { usePageMeta } from "../hooks/usePageMeta";
import { BrandOrbit } from "../components/BrandOrbit";
import { MaskedWords, useInViewReveal, CountUp } from "../components/Reveal";
import { C, EYEBROW as UI_EYEBROW, H3, LEAD as UI_LEAD, TEXT, Section, SectionHead, Enter } from "../ui";
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
  { icon: Globe, slug: "sites-web", title: "Sites web", desc: "Vitrines, e-commerce et plateformes, livrés en 5 à 14 jours avec hébergement et nom de domaine." },
  { icon: Code2, slug: "logiciels", title: "Logiciels et applications", desc: "Outils métier sur mesure quand les logiciels du marché ne couvrent pas votre activité." },
  { icon: PenTool, slug: "design", title: "Design et identité visuelle", desc: "Logo, charte graphique et déclinaisons web, mobile et impression." },
  { icon: Megaphone, slug: "marketing", title: "Marketing digital", desc: "Réseaux sociaux, contenus, campagnes ciblées et rapport mensuel." },
  { icon: Clapperboard, slug: "multimedia", title: "Multimédia et vidéo", desc: "Vidéos publicitaires, motion design et présentations d'entreprise." },
  { icon: GraduationCap, slug: "formation", title: "Formation", desc: "Bureautique, outils web et ateliers pratiques, en ligne ou sur place." },
  { icon: Cpu, slug: "materiel", title: "Matériel informatique", desc: "Postes sélectionnés, configurés et testés avant livraison." },
];

const reasons = [
  { icon: PenLine, title: "Nous écrivons le code que nous vendons", desc: "Pas de sous-traitance : l'équipe qui vous répond est celle qui développe. Une correction part le jour même." },
  { icon: MapPinned, title: "Nous connaissons le terrain", desc: "Francs guinéens, programme national, coupures de réseau et paiements en espèces : nos outils sont pensés pour ici, pas adaptés après coup." },
  { icon: LifeBuoy, title: "Nous restons après la livraison", desc: "Formation de vos équipes, support et mises à jour. Nos trois logiciels tournent en production depuis leur mise en service." },
];

const figures = [
  { k: "7", l: "métiers couverts", count: true },
  { k: "3", l: "logiciels en production", count: true },
  { k: "24h", l: "pour vous répondre", count: true },
  { k: "2024", l: "année de création", count: false },
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
          background: "linear-gradient(168deg, #16AEEE 0%, #0EA5E9 42%, #0B9AD9 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Signature : l'orbite du logo. Sur téléphone elle occupe toute la
            largeur derrière le texte ; au-delà, elle se range à droite. */}
        {/* Halo du bleu vif, réservé aux grands écrans : sur un téléphone,
            aucune zone n'est assez loin du texte pour l'accueillir. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden xl:block"
          style={{
            background:
              "radial-gradient(62% 130% at 100% -12%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.12) 38%, rgba(255,255,255,0) 72%)",
          }}
        />
        <BrandOrbit
          className="rt-orbit-quiet pointer-events-none select-none absolute sm:hidden"
          style={{ width: "165%", height: "auto", left: "50%", top: "46%", transform: "translate(-50%, -50%)" }}
        />
        <BrandOrbit
          className="rt-orbit-full pointer-events-none select-none absolute hidden sm:block"
          style={{ width: "min(680px, 56vw)", height: "auto", right: "-60px", top: "50%", transform: "translateY(-50%)" }}
        />
        {/* Voile : l'orbite reste nette en haut, puis s'efface sous le texte
            et les boutons, qui doivent rester parfaitement lisibles. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,154,217,0) 0%, rgba(11,154,217,0.25) 52%, rgba(10,145,205,0.55) 80%)",
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
              style={{ ...EYEBROW, color: "#0C2340", fontSize: "0.76rem", fontWeight: 650, letterSpacing: "0.1em", margin: "0 0 16px", "--rt-delay": "0.3s" } as React.CSSProperties}
            >
              Entreprise informatique en Guinée
            </p>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 8.2vw, 3.7rem)",
                fontWeight: 650,
                color: "#0C2340",
                lineHeight: 1.16,
                letterSpacing: "-0.022em",
                margin: "0 0 24px",
              }}
            >
              <MaskedWords text="Nous construisons les outils numériques dont votre activité a besoin" delay={0.12} />
            </h1>

            <p
              className="rt-rise"
              style={{
                fontSize: "1.075rem",
                lineHeight: 1.74,
                fontWeight: 420,
                color: "#102A44",
                margin: "0 0 32px",
                maxWidth: "556px",
                "--rt-delay": "0.62s",
              } as React.CSSProperties}
            >
              Sites web, logiciels, identité de marque, marketing, formation et matériel.
              Nous accompagnons les entreprises et les institutions partout en Guinée, et nous
              éditons nos propres plateformes métier, utilisées chaque jour par des écoles,
              des commerces et des markaz.
            </p>

            <div
              className="rt-rise flex flex-col sm:flex-row gap-3"
              style={{ marginBottom: "34px", "--rt-delay": "0.72s" } as React.CSSProperties}
            >
              <Link
                to="/contact#devis"
                className="rt-btn rt-btn-accent"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "15px 28px", background: "#FFFFFF", color: "#0C2340", borderRadius: "9px", textDecoration: "none", fontWeight: 650, fontSize: "1rem", boxShadow: "0 6px 18px rgba(8,38,64,0.16)" }}
              >
                Démarrer un projet <ArrowRight size={17} />
              </Link>
              <Link
                to="/portfolio"
                className="rt-btn rt-btn-ghost-dark"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "15px 28px", background: "transparent", color: "#0C2340", border: "1.5px solid rgba(12,35,64,0.42)", borderRadius: "9px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
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
                "Partout en Guinée, à distance ou chez vous",
                "Trois logiciels en production, écrits et maintenus par nous",
                "Une réponse à votre demande sous 24 heures",
              ].map((fact) => (
                <li key={fact} className="flex items-start gap-2.5">
                  <Check size={16} color="#0C2340" strokeWidth={2.6} style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.94rem", color: "#0C2340", lineHeight: 1.62 }}>{fact}</span>
                </li>
              ))}
            </ul>

            <div className="rt-scroll-cue" style={{ marginTop: "38px", display: "flex", alignItems: "center", gap: "9px", color: "#0C2340" }}>
              <ChevronDown size={18} />
              <span style={{ fontSize: "0.82rem", letterSpacing: "0.03em" }}>Nos services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHIFFRES ── */}
      <Section tone="white" compact>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-6">
          {figures.map((f, i) => (
            <Enter key={f.l} delay={Math.min(i, 5) * 0.085}>
              <div style={{ borderLeft: `2px solid ${i === 0 ? C.accent : C.lineStrong}`, paddingLeft: "16px" }}>
                <div style={{ fontSize: "clamp(1.7rem, 5vw, 2.3rem)", fontWeight: 700, color: C.navy, lineHeight: 1, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                  <CountUp value={f.k} animate={f.count} />
                </div>
                <div style={{ fontSize: "0.86rem", color: C.muted, marginTop: "7px", lineHeight: 1.45 }}>{f.l}</div>
              </div>
            </Enter>
          ))}
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section tone="tint">
        <SectionHead
          eyebrow="Nos services"
          title="Sept métiers, une seule équipe"
          lead="Du premier croquis à la mise en ligne, puis à la formation de vos équipes. Vous n'avez qu'un interlocuteur."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <Enter key={service.title} delay={Math.min(i, 5) * 0.085} style={{ height: "100%" }}>
              <Link
                to={`/services#${service.slug}`}
                className="rt-tile rt-service"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: C.surface,
                  border: `1px solid ${C.lineStrong}`,
                  borderRadius: "16px",
                  padding: "24px 22px 20px",
                  height: "100%",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <IconMark icon={service.icon} />
                <span className="rt-card-title" style={{ display: "block", fontSize: "1.05rem", fontWeight: 700, color: C.ink, letterSpacing: "-0.01em", margin: "18px 0 7px" }}>
                  {service.title}
                </span>
                <span style={{ display: "block", fontSize: "0.93rem", lineHeight: 1.6, color: C.body }}>
                  {service.desc}
                </span>
                <span className="rt-service-cta" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "auto", paddingTop: "16px", color: C.navy, fontWeight: 600, fontSize: "0.88rem" }}>
                  Le détail <ArrowRight size={14} />
                </span>
              </Link>
            </Enter>
          ))}

          <Enter delay={0.21} style={{ height: "100%" }}>
            <Link
              to="/services"
              className="rt-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: C.navy,
                border: `1px solid ${C.navy}`,
                borderRadius: "14px",
                padding: "22px",
                height: "100%",
                minHeight: "170px",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              <IconMark icon={ArrowRight} tone="light" />
              <div style={{ marginTop: "16px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", margin: "0 0 7px", letterSpacing: "-0.01em" }}>
                  Le détail de chaque service
                </h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.55, color: "#CFE0EC", margin: 0 }}>
                  Ce qui est inclus, les délais et la méthode.
                </p>
              </div>
            </Link>
          </Enter>
        </div>
      </Section>

      {/* ── NOS PRODUITS ── */}
      <Section>
        <SectionHead
          eyebrow="Nos produits"
          title="Trois logiciels que nous éditons nous-mêmes"
          lead="Au-delà des projets sur mesure, nous développons et maintenons nos propres plateformes métier. Elles tournent aujourd'hui chez nos clients, et c'est la même équipe qui écrit le code et répond au téléphone."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <Enter key={product.slug} delay={Math.min(i, 5) * 0.085} style={{ height: "100%" }}>
              <Link
                to={`/portfolio#${product.slug}`}
                className="rt-tile rt-product"
                aria-label={`${product.name} : ${product.tagline}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: C.surface,
                  border: `1px solid ${C.lineStrong}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                {/* L'interface du produit, telle qu'elle est publique */}
                <span
                  style={{
                    display: "block",
                    overflow: "hidden",
                    background: C.tintStrong,
                    borderBottom: `1px solid ${C.line}`,
                  }}
                >
                  <img
                    className="rt-product-shot"
                    src={product.thumb}
                    alt={`Interface de ${product.name}`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    style={{ display: "block", width: "100%", height: "auto", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top center" }}
                  />
                </span>

                <span style={{ display: "flex", flexDirection: "column", flex: 1, padding: "20px 22px 22px" }}>
                  <span className="rt-rule" style={{ display: "block", width: "30px", height: "3px", borderRadius: "2px", background: product.theme.accent, marginBottom: "14px" }} />

                  <span className="rt-card-title" style={{ display: "block", fontSize: "1.18rem", fontWeight: 700, color: C.ink, letterSpacing: "-0.012em", marginBottom: "4px" }}>
                    {product.name}
                  </span>
                  <span style={{ display: "block", fontSize: "0.84rem", color: C.muted, fontWeight: 500, marginBottom: "12px" }}>
                    {product.audience}
                  </span>
                  <span style={{ display: "block", fontSize: "0.93rem", lineHeight: 1.6, color: C.body, marginBottom: "18px" }}>
                    {product.cardLine}
                  </span>

                  <span className="flex items-center justify-between" style={{ marginTop: "auto", paddingTop: "14px", borderTop: `1px solid ${C.line}` }}>
                    <span className="rt-product-cta" style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: C.navy, fontWeight: 600, fontSize: "0.93rem" }}>
                      Découvrir <ArrowRight size={15} />
                    </span>
                    <span style={{ fontSize: "0.82rem", color: C.muted }}>{product.domain}</span>
                  </span>
                </span>
              </Link>
            </Enter>
          ))}
        </div>
      </Section>

      {/* ── POURQUOI NOUS ── */}
      <Section tone="tint">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="rt-enter">
              <p style={UI_EYEBROW}>À propos</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 5.2vw, 2.2rem)", fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 14px" }}>
                Une équipe technique guinéenne
              </h2>
              <p style={{ ...UI_LEAD, marginBottom: "26px" }}>
                Revyon Tech a été fondée en 2024 pour que les entreprises et les institutions
                du pays n'aient plus à choisir entre un outil étranger inadapté et un cahier.
                Notre équipe est à Conakry, nos clients sont dans toute la Guinée.
              </p>
            </div>

            <div style={{ borderTop: `1px solid ${C.lineStrong}` }}>
              {reasons.map((reason, i) => (
                <Enter key={reason.title} delay={Math.min(i, 5) * 0.085} style={{ borderBottom: `1px solid ${C.lineStrong}`, padding: "18px 0" }}>
                  <div className="flex items-start gap-4">
                    <IconMark icon={reason.icon} size={44} />
                    <div>
                      <h3 style={H3}>{reason.title}</h3>
                      <p style={TEXT}>{reason.desc}</p>
                    </div>
                  </div>
                </Enter>
              ))}
            </div>

            <Enter delay={0.1}>
              <Link
                to="/a-propos"
                className="rt-link"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "24px", color: C.navy, fontWeight: 600, fontSize: "0.97rem", textDecoration: "none" }}
              >
                L'équipe et notre histoire <ArrowRight size={16} />
              </Link>
            </Enter>
          </div>

          <Enter delay={0.08}>
            <img
              src={TEAM_IMAGE}
              alt="Réunion de travail chez Revyon Tech"
              width={1080}
              height={810}
              loading="lazy"
              style={{ width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "12px", border: `1px solid ${C.lineStrong}` }}
            />
          </Enter>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section tone="navy">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div style={{ maxWidth: "620px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4.6vw, 2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 12px" }}>
              Parlons de votre projet
            </h2>
            <p style={{ ...UI_LEAD, color: "#D5E4EF" }}>
              Décrivez-nous ce que vous voulez faire. Nous revenons vers vous sous 24 heures
              avec une estimation de délai et de budget, sans engagement.
            </p>
          </div>
          <Link
            to="/contact#devis"
            className="rt-btn rt-btn-accent"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 28px", background: C.accent, color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1rem", whiteSpace: "nowrap" }}
          >
            Demander un devis <ArrowRight size={17} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
