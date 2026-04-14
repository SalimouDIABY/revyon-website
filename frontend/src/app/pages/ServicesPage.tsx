import { Link } from "react-router";
import {
  Globe,
  Code,
  Palette,
  TrendingUp,
  Video,
  BookOpen,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de sites web professionnels",
    tagline: "Votre vitrine digitale 24h/24",
    color: "#0EA5E9",
    bg: "#E0F2FE",
    problem: "Un site web, c'est votre commercial qui travaille 24h/24. Sans lui, vous perdez des clients chaque jour.",
    included: [
      "Site de 3 à 10 pages",
      "Design responsive",
      "Hébergement 12 mois",
      "Nom de domaine",
      "Bouton WhatsApp & Google Maps",
      "Formation à la mise à jour",
      "Livraison 5-14 jours",
    ],
  },
  {
    icon: Code,
    title: "Développement de logiciels et applications",
    tagline: "Solutions sur mesure pour vos besoins",
    color: "#F97316",
    bg: "#FFF7ED",
    problem: "Votre activité a des besoins spécifiques que les logiciels standards ne couvrent pas.",
    included: [
      "Application web (React) ou mobile",
      "Interface d'administration",
      "Base de données MySQL",
      "API REST sécurisée",
      "Documentation technique",
      "Formation équipe",
      "Support post-livraison",
    ],
  },
  {
    icon: Palette,
    title: "Design graphique et identité visuelle",
    tagline: "Identité visuelle inoubliable",
    color: "#8B5CF6",
    bg: "#EDE9FE",
    problem: "Votre logo est la première chose que vos clients voient. Il doit être mémorable.",
    included: [
      "Logo professionnel unique",
      "Versions couleur & noir/blanc",
      "Charte graphique complète",
      "Règles typographie et couleurs",
      "Formats PNG, SVG, PDF",
      "Guides d'utilisation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing digital et communication",
    tagline: "Soyez vu, entendu et choisi",
    color: "#10B981",
    bg: "#D1FAE5",
    problem: "Être présent en ligne ne suffit pas. Il faut être vu, entendu et choisi.",
    included: [
      "Gestion réseaux sociaux",
      "Création contenu visuel",
      "Campagnes publicitaires",
      "Rapport mensuel",
      "Stratégie SEO & SEM",
      "Email marketing",
    ],
  },
  {
    icon: Video,
    title: "Production multimedia et vidéo IA",
    tagline: "Contenus visuels professionnels",
    color: "#EC4899",
    bg: "#FCE7F3",
    problem: "Une vidéo professionnelle convainc 10x plus qu'un texte.",
    included: [
      "Vidéos publicitaires",
      "Motion design",
      "Tutoriels et explainers",
      "Présentation d'entreprise",
      "Édition et post-production",
      "Formats multiples",
      "Technologie IA",
    ],
  },
  {
    icon: BookOpen,
    title: "Formation et accompagnement numérique",
    tagline: "Votre équipe maîtrise la technologie",
    color: "#06B6D4",
    bg: "#CFFAFE",
    problem: "La technologie ne sert à rien si elle n'est pas maîtrisée.",
    included: [
      "Formations sur mesure",
      "En ligne ou présentiel",
      "Bureautique et outils web",
      "Ateliers pratiques",
      "Supports de formation",
      "Suivi post-formation",
      "Certification",
    ],
  },
  {
    icon: Cpu,
    title: "Vente de matériel informatique",
    tagline: "Ordinateur sélectionné et prêt à l'emploi",
    color: "#6366F1",
    bg: "#E0E7FF",
    problem: "Un matériel mal configuré vous coûte du temps chaque jour.",
    included: [
      "Pack Étudiant ou Business",
      "Core i5/i7 sélectionné",
      "Windows authentique",
      "Microsoft Office",
      "Configuration complète",
      "Test avant livraison",
      "Assistance 7 jours",
    ],
  },
];

export function ServicesPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
          padding: "clamp(40px, 8vw, 80px) 0",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", color: "#fff", marginBottom: "20px" }}>
            Nos 7 services digitaux <span style={{ color: "#F97316" }}>complets</span>
          </h1>
          <p style={{ color: "#fff", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
            De la création web au marketing digital, découvrez toutes nos solutions conçues pour propulser votre entreprise.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(60px, 10vw, 100px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      background: service.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={28} color={service.color} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0EA5E9", marginBottom: "4px" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: service.color, fontWeight: "600", marginBottom: "12px" }}>
                    {service.tagline}
                  </p>
                  <p style={{ color: "#0F172A", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "16px", flex: "1" }}>
                    {service.problem}
                  </p>
                  <ul style={{ margin: "16px 0", paddingLeft: "0", listStyle: "none" }}>
                    {service.included.slice(0, 3).map((item, j) => (
                      <li key={j} style={{ fontSize: "0.8rem", color: "#475569", marginBottom: "6px", display: "flex", gap: "6px" }}>
                        <CheckCircle2 size={14} color={service.color} style={{ flexShrink: 0, marginTop: "1px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.included.length > 3 && (
                      <li style={{ fontSize: "0.8rem", color: service.color, fontWeight: "600", marginTop: "8px" }}>
                        + {service.included.length - 3} autres inclus
                      </li>
                    )}
                  </ul>
                  <Link
                    to="/contact"
                    style={{
                      marginTop: "16px",
                      padding: "10px 16px",
                      background: service.color,
                      color: "#fff",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                      textAlign: "center",
                    }}
                  >
                    Demander un devis
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section style={{ background: "#fff", padding: "clamp(60px, 10vw, 100px) 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", textAlign: "center" }}>
            Notre processus de travail
          </h2>
          <p style={{ textAlign: "center", color: "#0F172A", marginBottom: "48px", fontSize: "1rem" }}>
            Accompagnement structuré du début à la fin pour garantir votre succès.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Analyse", desc: "Étude approfondie de vos besoins et objectifs" },
              { num: "02", title: "Conception", desc: "Création de maquettes et structure du projet" },
              { num: "03", title: "Développement", desc: "Développement avec les meilleures technologies" },
              { num: "04", title: "Test", desc: "Tests rigoureux pour garantir la qualité" },
              { num: "05", title: "Déploiement", desc: "Mise en ligne et formation utilisateur" },
              { num: "06", title: "Suivi", desc: "Accompagnement continu et maintenance" },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "900",
                    color: "#0EA5E9",
                    marginBottom: "8px",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#475569", fontSize: "0.9rem" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", padding: "60px 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "12px" }}>
            Prêt à transformer votre activité ?
          </h2>
          <p style={{ color: "#BAE6FD", marginBottom: "28px" }}>
            Obtenez un devis gratuit et personnalisé pour votre projet.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 36px",
              background: "#fff",
              color: "#0284C7",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Demander mon devis gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const process = [
  { step: "01", title: "Analyse", desc: "Étude approfondie de vos besoins et objectifs" },
  { step: "02", title: "Conception", desc: "Création de maquettes et structure du projet" },
  { step: "03", title: "Développement", desc: "Développement avec les meilleures technologies" },
  { step: "04", title: "Test", desc: "Tests rigoureux pour garantir la qualité" },
  { step: "05", title: "Déploiement", desc: "Mise en ligne et formation utilisateur" },
  { step: "06", title: "Suivi", desc: "Accompagnement continu et maintenance" },
];


