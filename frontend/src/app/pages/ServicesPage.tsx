import { Link } from "react-router";
import {
  ArrowRight, Check,
  Globe, Code2, PenTool, Megaphone, Clapperboard, GraduationCap, Cpu,
} from "lucide-react";
import { IconMark } from "../components/IconMark";
import { usePageMeta } from "../hooks/usePageMeta";
import { BrandOrbit } from "../components/BrandOrbit";
import { MaskedWords, useInViewReveal } from "../components/Reveal";
import { C, EYEBROW, H3, LEAD, TEXT, Section, SectionHead, Enter } from "../ui";

const services = [
  {
    icon: Globe,
    slug: "sites-web",
    title: "Création de sites web",
    tagline: "Votre vitrine ouverte jour et nuit",
    problem:
      "Un site web travaille pour vous quand votre boutique est fermée. Sans lui, un client qui vous cherche trouve un concurrent.",
    included: [
      "Site de 3 à 10 pages",
      "Affichage soigné sur téléphone",
      "Hébergement 12 mois inclus",
      "Nom de domaine",
      "Bouton WhatsApp et Google Maps",
      "Formation à la mise à jour",
    ],
    delay: "Livraison en 5 à 14 jours",
  },
  {
    icon: Code2,
    slug: "logiciels",
    title: "Logiciels et applications",
    tagline: "Un outil taillé pour votre métier",
    problem:
      "Votre activité a des règles que les logiciels du marché ne connaissent pas. Nous écrivons celui qui les connaît.",
    included: [
      "Application web ou mobile",
      "Interface d'administration",
      "Base de données et sauvegardes",
      "API sécurisée",
      "Documentation technique",
      "Formation de vos équipes",
    ],
    delay: "Support après la mise en service",
  },
  {
    icon: PenTool,
    slug: "design",
    title: "Design et identité visuelle",
    tagline: "Ce que l'on retient de vous",
    problem:
      "Votre logo est la première chose qu'un client voit, souvent la seule dont il se souvient.",
    included: [
      "Logo professionnel unique",
      "Versions couleur et noir et blanc",
      "Charte graphique complète",
      "Règles de typographie et de couleurs",
      "Fichiers PNG, SVG et PDF",
      "Guide d'utilisation",
    ],
    delay: "Déclinaisons web, mobile et impression",
  },
  {
    icon: Megaphone,
    slug: "marketing",
    title: "Marketing digital",
    tagline: "Être vu, puis être choisi",
    problem:
      "Être présent en ligne ne suffit pas. Encore faut-il que les bonnes personnes vous trouvent.",
    included: [
      "Gestion des réseaux sociaux",
      "Création de contenus visuels",
      "Campagnes publicitaires ciblées",
      "Référencement naturel",
      "Email marketing",
      "Rapport mensuel de performance",
    ],
    delay: "Engagement mensuel, sans durée imposée",
  },
  {
    icon: Clapperboard,
    slug: "multimedia",
    title: "Multimédia et vidéo",
    tagline: "Montrer plutôt que décrire",
    problem:
      "Une vidéo de trente secondes explique mieux votre service que deux pages de texte.",
    included: [
      "Vidéos publicitaires",
      "Motion design",
      "Tutoriels et démonstrations",
      "Présentation d'entreprise",
      "Montage et post-production",
      "Formats adaptés à chaque réseau",
    ],
    delay: "Tournage sur site ou production à distance",
  },
  {
    icon: GraduationCap,
    slug: "formation",
    title: "Formation",
    tagline: "L'outil ne sert que s'il est maîtrisé",
    problem:
      "Un logiciel que personne ne sait utiliser coûte de l'argent sans rien rapporter.",
    included: [
      "Programmes sur mesure",
      "En ligne ou dans vos locaux",
      "Bureautique et outils web",
      "Ateliers pratiques",
      "Supports remis aux participants",
      "Suivi après la formation",
    ],
    delay: "Partout en Guinée, déplacement possible",
  },
  {
    icon: Cpu,
    slug: "materiel",
    title: "Matériel informatique",
    tagline: "Prêt à travailler dès la livraison",
    problem:
      "Un poste mal configuré vous fait perdre quelques minutes chaque jour, toute l'année.",
    included: [
      "Pack Étudiant ou Pack Business",
      "Processeur Core i5 ou i7",
      "Windows authentique",
      "Suite bureautique installée",
      "Configuration complète",
      "Test avant livraison",
    ],
    delay: "Assistance pendant 7 jours après livraison",
  },
];

const process = [
  { n: "01", title: "Écoute", desc: "Nous partons de votre activité, pas d'un catalogue. Un échange suffit souvent à cadrer le besoin." },
  { n: "02", title: "Proposition", desc: "Périmètre, délai et budget écrits noir sur blanc avant de commencer quoi que ce soit." },
  { n: "03", title: "Conception", desc: "Maquettes et structure validées avec vous, avant la première ligne de code." },
  { n: "04", title: "Réalisation", desc: "Vous voyez le travail avancer par étapes, pas seulement à la fin." },
  { n: "05", title: "Mise en service", desc: "Mise en ligne, reprise de vos données, et formation de ceux qui vont s'en servir." },
  { n: "06", title: "Suivi", desc: "Corrections, évolutions et assistance. Nous restons joignables." },
];

const faqs = [
  {
    q: "Où intervient Revyon Tech ?",
    a: "Dans toute la Guinée. Notre équipe est basée à Conakry, et nous travaillons aussi bien avec des clients de la capitale qu'avec des établissements et des commerces de l'intérieur du pays, à distance ou en nous déplaçant. Nous accompagnons également des clients ailleurs en Afrique francophone.",
  },
  {
    q: "Combien de temps prend un projet ?",
    a: "Un site vitrine est livré en 5 à 14 jours. Un logiciel métier se compte en semaines, selon le périmètre. Dans tous les cas, le délai est écrit dans la proposition avant le démarrage.",
  },
  {
    q: "Travaillez-vous avec de petites structures ?",
    a: "Oui. Une boutique, une école de quartier ou un markaz sont des clients comme les autres. Nos propres logiciels ont d'ailleurs été conçus pour ce type de structure.",
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: "Nous formons vos équipes, puis nous restons joignables pour les corrections et les évolutions. C'est la même équipe qui a écrit le logiciel qui répond au téléphone.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Par le formulaire de la page Contact, par téléphone ou par WhatsApp au +224 627 33 07 09. Nous revenons vers vous sous 24 heures. Le devis est gratuit et sans engagement.",
  },
];

export function ServicesPage() {
  useInViewReveal();

  usePageMeta(
    "Nos services | Création de sites web, logiciels et marketing digital en Guinée | Revyon Tech",
    "Création de sites web professionnels, développement de logiciels et applications mobiles, design graphique, marketing digital, formation et matériel informatique partout en Guinée.",
    "/services"
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
          className="rt-orbit-full pointer-events-none select-none absolute hidden md:block"
          style={{ width: "460px", height: "auto", right: "-70px", top: "50%", transform: "translateY(-50%)", opacity: 0.85 }}
        />
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative"
          style={{ paddingTop: "clamp(42px, 5.5vw, 72px)", paddingBottom: "clamp(42px, 5.5vw, 72px)" }}
        >
          <div style={{ maxWidth: "720px" }}>
            <span className="rt-eyebrow-rule" style={{ marginBottom: "16px" }} />
            <p className="rt-rise" style={{ ...EYEBROW, color: "#FFE7CC", "--rt-delay": "0.28s" } as React.CSSProperties}>
              Nos services
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 6.6vw, 2.9rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.022em", margin: "0 0 16px" }}>
              <MaskedWords text="Sept métiers, une seule équipe" delay={0.1} />
            </h1>
            <p className="rt-rise" style={{ ...LEAD, color: "#E2F1FA", maxWidth: "580px", "--rt-delay": "0.5s" } as React.CSSProperties}>
              Du premier croquis à la prise en main par vos équipes. Nous intervenons
              partout en Guinée, à distance ou chez vous.
            </p>
          </div>
        </div>
      </section>

      {/* ── LES SEPT MÉTIERS ── */}
      <Section>
        <SectionHead
          eyebrow="Ce que nous faisons"
          title="Sept façons de vous accompagner"
          lead="Chaque prestation est vendue avec son périmètre écrit. Vous savez ce qui est inclus avant de signer."
        />

        <div style={{ borderTop: `1px solid ${C.lineStrong}` }}>
          {services.map((service, i) => (
            <Enter
              key={service.title}
              delay={Math.min(i, 5) * 0.085}
              className="rt-card"
              id={service.slug}
              style={{ borderBottom: `1px solid ${C.lineStrong}`, padding: "clamp(22px, 3vw, 32px) 0", scrollMarginTop: "96px" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <IconMark icon={service.icon} size={44} />
                    <div style={{ minWidth: 0 }}>
                      <div className="flex items-baseline gap-2.5">
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: C.accent, fontVariantNumeric: "tabular-nums" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 style={{ ...H3, fontSize: "1.15rem", margin: 0 }}>{service.title}</h3>
                      </div>
                      <p style={{ fontSize: "0.92rem", color: C.muted, margin: "5px 0 0", fontWeight: 500 }}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <p style={TEXT}>{service.problem}</p>
                  <p style={{ fontSize: "0.85rem", color: C.accent, marginTop: "10px", fontWeight: 600 }}>
                    {service.delay}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={14} color="#047857" strokeWidth={2.6} style={{ marginTop: "4px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.88rem", color: C.body, lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Enter>
          ))}
        </div>

        <Enter delay={0.1} style={{ marginTop: "30px" }}>
          <Link
            to="/contact#devis"
            className="rt-btn rt-btn-accent"
            style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 26px", background: C.accent, color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
          >
            Demander un devis gratuit <ArrowRight size={17} />
          </Link>
        </Enter>
      </Section>

      {/* ── MÉTHODE ── */}
      <Section tone="tint">
        <SectionHead
          eyebrow="Notre méthode"
          title="Six étapes, et vous savez toujours où en est votre projet"
          lead="La même marche à suivre pour un site vitrine comme pour un logiciel métier. Rien ne démarre sans un périmètre écrit."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {process.map((step, i) => (
            <Enter
              key={step.n}
              delay={Math.min(i, 5) * 0.085}
              style={{ height: "100%" }}
            >
              <div
                className="rt-tile"
                style={{ background: C.surface, border: `1px solid ${C.lineStrong}`, borderRadius: "14px", padding: "20px", height: "100%", overflow: "hidden" }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      width: "34px", height: "34px", borderRadius: "50%",
                      background: i === 0 ? C.accent : "#F1F6FA",
                      color: i === 0 ? "#fff" : C.navy,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.78rem", fontWeight: 700, fontVariantNumeric: "tabular-nums", flexShrink: 0,
                    }}
                  >
                    {step.n}
                  </span>
                  <h3 style={{ ...H3, margin: 0 }}>{step.title}</h3>
                </div>
                <p style={TEXT}>{step.desc}</p>
              </div>
            </Enter>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-8 lg:gap-16">
          <div className="rt-enter">
            <p style={EYEBROW}>Questions fréquentes</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 5.2vw, 2.1rem)", fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 14px" }}>
              Ce qu'on nous demande le plus souvent
            </h2>
            <p style={{ ...TEXT, marginBottom: "18px" }}>
              Une question qui n'est pas là ? Écrivez-nous, nous répondons sous 24 heures.
            </p>
            <Link
              to="/contact"
              className="rt-link"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: C.navy, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}
            >
              Poser votre question <ArrowRight size={15} />
            </Link>
          </div>

          <dl style={{ margin: 0, borderTop: `1px solid ${C.lineStrong}` }}>
            {faqs.map((faq, i) => (
              <Enter key={faq.q} delay={Math.min(i, 5) * 0.07} style={{ borderBottom: `1px solid ${C.lineStrong}`, padding: "18px 0" }}>
                <dt style={{ ...H3, marginBottom: "8px" }}>{faq.q}</dt>
                <dd style={{ ...TEXT, margin: 0 }}>{faq.a}</dd>
              </Enter>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section tone="navy">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div style={{ maxWidth: "620px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4.6vw, 2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 12px" }}>
              Dites-nous ce que vous voulez faire
            </h2>
            <p style={{ ...LEAD, color: "#D5E4EF" }}>
              Nous revenons vers vous sous 24 heures avec une estimation de délai et de budget.
              Le devis est gratuit et sans engagement.
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
