import { Link } from "react-router";
import { ArrowRight, PenLine, MapPinned, LifeBuoy, FileSignature, Plane, Archive } from "lucide-react";
import { IconMark } from "../components/IconMark";
import { usePageMeta } from "../hooks/usePageMeta";
import { BrandOrbit } from "../components/BrandOrbit";
import { MaskedWords, useInViewReveal } from "../components/Reveal";
import { C, EYEBROW, H3, LEAD, TEXT, Section, SectionHead, Enter } from "../ui";

const team = [
  { name: "Salimou Diaby", role: "Directeur Général", initials: "SD", desc: "Supervise la direction de l'entreprise, la cohérence des produits et la relation avec les clients." },
  { name: "Mamadou Ramadane Condé", role: "Directeur des Opérations", initials: "MC", desc: "Pilote les projets, suit les livraisons et coordonne le travail de l'équipe." },
  { name: "Fatoumata Kanny Diallo", role: "Directrice Administrative et Financière", initials: "FD", desc: "Gère les budgets, la facturation et les processus internes." },
  { name: "Ibrahima Sory Barry", role: "Directeur Communication et Marketing", initials: "IB", desc: "Conçoit les contenus, porte la marque et accompagne les campagnes des clients." },
  { name: "Ousmane Kanté", role: "Directeur Commercial et Développement", initials: "OK", desc: "Définit les offres, rédige les propositions et développe le portefeuille clients." },
];

const values = [
  { icon: PenLine, title: "Nous écrivons ce que nous vendons", desc: "Pas de sous-traitance. L'équipe qui répond au téléphone est celle qui développe, et une correction peut partir le jour même." },
  { icon: MapPinned, title: "Nous connaissons le terrain", desc: "Francs guinéens, programme national, coupures de réseau, paiements en espèces. Nos outils sont pensés pour ce contexte, pas adaptés après coup." },
  { icon: LifeBuoy, title: "Nous restons après la livraison", desc: "Formation, support et mises à jour. Nos trois logiciels tournent en production depuis leur mise en service." },
  { icon: FileSignature, title: "Nous écrivons les choses", desc: "Périmètre, délai et budget sont posés avant de commencer. Pas de surprise en cours de route." },
  { icon: Plane, title: "Nous allons sur place", desc: "Conakry, les régions, l'intérieur du pays. Quand un déplacement est nécessaire pour comprendre un métier, nous le faisons." },
  { icon: Archive, title: "Nous construisons pour durer", desc: "Un outil doit survivre au départ de celui qui l'a commandé. Documentation, reprise de données, comptes transmis." },
];

const reach = [
  { k: "Conakry", v: "Siège et équipe de développement" },
  { k: "Régions", v: "Déplacements pour cadrage, installation et formation" },
  { k: "À distance", v: "Suivi, support et mises à jour partout dans le pays" },
  { k: "Afrique francophone", v: "Projets et produits accessibles au-delà des frontières" },
];

export function AboutPage() {
  useInViewReveal();

  usePageMeta(
    "À propos | Revyon Tech, société informatique en Guinée",
    "Revyon Tech est une entreprise informatique guinéenne : développement web, logiciels, applications mobiles et transformation digitale, pour des clients à Conakry comme à l'intérieur du pays.",
    "/a-propos"
  );

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(168deg, #16AEEE 0%, #0EA5E9 42%, #0B9AD9 100%)", position: "relative", overflow: "hidden" }}>
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
          className="rt-orbit-full pointer-events-none select-none absolute hidden md:block"
          style={{ width: "460px", height: "auto", right: "-70px", top: "50%", transform: "translateY(-50%)", opacity: 0.85 }}
        />
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative"
          style={{ paddingTop: "clamp(42px, 5.5vw, 72px)", paddingBottom: "clamp(42px, 5.5vw, 72px)" }}
        >
          <div style={{ maxWidth: "720px" }}>
            <span className="rt-eyebrow-rule" style={{ marginBottom: "16px" }} />
            <p className="rt-rise" style={{ ...EYEBROW, color: "#0C2340", fontSize: "0.76rem", fontWeight: 650, letterSpacing: "0.1em", "--rt-delay": "0.28s" } as React.CSSProperties}>
              À propos
            </p>
            <h1 style={{ fontFamily: "'Revyon Serif', Georgia, serif", fontSize: "clamp(2.1rem, 7vw, 3.1rem)", fontWeight: 600, color: "#0C2340", lineHeight: 1.12, letterSpacing: "-0.018em", margin: "0 0 18px" }}>
              <MaskedWords text="Une équipe technique guinéenne" delay={0.1} />
            </h1>
            <p className="rt-rise" style={{ ...LEAD, color: "#1E293B", fontWeight: 420, lineHeight: 1.74, maxWidth: "560px", "--rt-delay": "0.5s" } as React.CSSProperties}>
              Revyon Tech a été fondée en 2024 pour que les entreprises et les institutions
              du pays n'aient plus à choisir entre un outil étranger inadapté et un cahier.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUI NOUS SOMMES ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,420px)] gap-10 lg:gap-16 items-start">
          <div className="rt-enter">
            <p style={EYEBROW}>Qui nous sommes</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 5.2vw, 2.2rem)", fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 18px" }}>
              Le numérique guinéen, fait par des Guinéens
            </h2>
            <p style={{ ...LEAD, marginBottom: "16px" }}>
              Nous concevons des sites web, des logiciels et des identités de marque pour les
              entrepreneurs, les PME, les écoles et les institutions de Guinée. Notre équipe
              est à Conakry, nos clients sont dans tout le pays.
            </p>
            <p style={{ ...TEXT, marginBottom: "16px" }}>
              Notre nom porte notre ambition : <em>Révolution et Innovation</em>. Nous pensons
              que la technologie est un levier de développement, à condition qu'elle soit écrite
              par ceux qui connaissent le terrain sur lequel elle sera utilisée.
            </p>
            <p style={TEXT}>
              Cinq directeurs aux compétences complémentaires, et trois logiciels que nous
              éditons nous-mêmes pour des écoles, des commerces et des markaz.
            </p>
          </div>

          <Enter delay={0.08}>
            <div style={{ border: `1px solid ${C.lineStrong}`, borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: C.navy, padding: "16px 20px" }}>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#FDBA74", margin: 0 }}>
                  Où nous intervenons
                </p>
              </div>
              <dl style={{ margin: 0 }}>
                {reach.map((r, i) => (
                  <div
                    key={r.k}
                    style={{
                      padding: "14px 20px",
                      borderTop: i === 0 ? "none" : `1px solid ${C.line}`,
                      background: C.surface,
                    }}
                  >
                    <dt style={{ fontSize: "0.93rem", fontWeight: 700, color: C.ink, marginBottom: "3px" }}>{r.k}</dt>
                    <dd style={{ fontSize: "0.88rem", color: C.body, margin: 0, lineHeight: 1.55 }}>{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Enter>
        </div>
      </Section>

      {/* ── CE QUI NOUS TIENT ── */}
      <Section tone="tint">
        <SectionHead
          eyebrow="Notre façon de travailler"
          title="Six principes, tenus sur chaque projet"
          lead="Ce ne sont pas des valeurs affichées : ce sont les règles que nous nous appliquons, et sur lesquelles vous pouvez nous juger."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <Enter key={value.title} delay={Math.min(i, 5) * 0.085} style={{ height: "100%" }}>
              <article
                className="rt-tile"
                style={{ background: C.surface, border: `1px solid ${C.lineStrong}`, borderRadius: "14px", padding: "22px", height: "100%", overflow: "hidden" }}
              >
                <IconMark icon={value.icon} />
                <h3 style={{ ...H3, marginTop: "16px" }}>{value.title}</h3>
                <p style={TEXT}>{value.desc}</p>
              </article>
            </Enter>
          ))}
        </div>
      </Section>

      {/* ── ÉQUIPE ── */}
      <Section>
        <SectionHead
          eyebrow="L'équipe dirigeante"
          title="Cinq personnes, cinq responsabilités"
          lead="Une structure volontairement petite : chaque projet a un interlocuteur, et cet interlocuteur décide."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <Enter key={member.name} delay={Math.min(i, 5) * 0.085}>
              <article
                className="rt-tile"
                style={{
                  border: `1px solid ${C.lineStrong}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  padding: "22px",
                  height: "100%",
                  background: C.surface,
                }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: "14px" }}>
                  <span
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: C.navy,
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      letterSpacing: "0.02em",
                      flexShrink: 0,
                    }}
                  >
                    {member.initials}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ ...H3, fontSize: "1rem", margin: "0 0 2px" }}>{member.name}</h3>
                    <p style={{ fontSize: "0.82rem", color: C.accent, margin: 0, fontWeight: 600 }}>{member.role}</p>
                  </div>
                </div>
                <p style={{ ...TEXT, fontSize: "0.9rem" }}>{member.desc}</p>
              </article>
            </Enter>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section tone="navy">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div style={{ maxWidth: "620px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4.6vw, 2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 12px" }}>
              Travaillons ensemble
            </h2>
            <p style={{ ...LEAD, color: "#D5E4EF" }}>
              Où que vous soyez en Guinée, le premier échange ne coûte rien et dure une trentaine de minutes.
            </p>
          </div>
          <Link
            to="/contact#devis"
            className="rt-btn rt-btn-accent"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 28px", background: C.accent, color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1rem", whiteSpace: "nowrap" }}
          >
            Nous contacter <ArrowRight size={17} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
