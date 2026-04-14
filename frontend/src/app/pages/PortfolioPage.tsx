import { Link } from "react-router";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

// Placeholder URLs - remplacer par vos vraies images
const logoFull = "https://via.placeholder.com/300x100?text=Logo+Full";
const logoIcon = "https://via.placeholder.com/50x50?text=Logo+Icon";

const TECH_IMAGE = "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwZGlnaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc1MzA3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

// First real project: Revyon Tech Logo
const projects = [
  {
    id: 1,
    title: "Identité Visuelle – Revyon Tech",
    category: "Design & Branding",
    categoryColor: "#8B5CF6",
    categoryBg: "#EDE9FE",
    date: "2024",
    status: "Réalisé",
    description:
      "Création complète de l'identité visuelle de Revyon Tech, incluant le logo officiel, la charte graphique et les guidelines de la marque.",
    details: [
      "Logo principal avec icône éclair (Zap) symbolisant l'innovation et la rapidité",
      "Palette de couleurs : Bleu ciel (#0EA5E9) + Orange (#F97316) + Blanc",
      "Typographie moderne et lisible",
      "Déclinaisons pour web, mobile et print",
    ],
    tags: ["Logo", "Identité visuelle", "Charte graphique", "Branding"],
    highlight: true,
  },
  {
    id: 2,
    title: "Site Web Professionnel",
    category: "Développement Web",
    categoryColor: "#0EA5E9",
    categoryBg: "#E0F2FE",
    date: "2024",
    status: "Réalisé",
    description:
      "Création d'un site web vitrine professionnel pour une PME locale avec design modern et optimisé pour conversion.",
    details: [
      "Design responsive (mobile, tablet, desktop)",
      "7 pages (accueil, services, portfolio, contact, etc.)",
      "Formulaire de contact intégré",
      "Optimisé SEO et performance",
    ],
    tags: ["Web", "React", "Design Responsive", "SEO"],
    highlight: false,
  },
  {
    id: 3,
    title: "Campagne Marketing Digital",
    category: "Marketing Digital",
    categoryColor: "#10B981",
    categoryBg: "#D1FAE5",
    date: "2024",
    status: "Réalisé",
    description:
      "Stratégie de marketing digital complète incluant gestion des réseaux sociaux et création de contenu visuel.",
    details: [
      "Gestion des réseaux sociaux (Facebook, Instagram, LinkedIn)",
      "Création de contenus visuels attractifs",
      "Campagnes publicitaires ciblées",
      "Rapports mensuel de performance",
    ],
    tags: ["Marketing", "Réseaux Sociaux", "Contenu", "Publicité"],
    highlight: false,
  },
];

const upcoming = [
  {
    title: "Site Web Vitrine",
    category: "Développement Web",
    desc: "Site web professionnel pour une entreprise locale.",
    icon: "🌐",
  },
  {
    title: "Application Mobile",
    category: "Mobile",
    desc: "Application de gestion pour une PME guinéenne.",
    icon: "📱",
  },
  {
    title: "Campagne Marketing",
    category: "Marketing Digital",
    desc: "Stratégie de croissance digitale complète.",
    icon: "📢",
  },
];

function RevyonLogoDisplay() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0EA5E9 0%, #0C2340 100%)",
        borderRadius: "20px",
        padding: "48px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "320px",
        gap: "36px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-40px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Versions du logo */}
      <div className="flex flex-col sm:flex-row gap-10 items-center justify-center relative z-10 w-full">
        {/* Version principale (fond blanc) */}
        <div className="flex flex-col items-center gap-4">
          <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Version principale
          </span>
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px 28px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoFull}
              alt="Revyon Tech Logo"
              style={{ height: "90px", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "80px", background: "rgba(255,255,255,0.1)" }} className="hidden sm:block" />

        {/* Version dark (fond sombre) */}
        <div className="flex flex-col items-center gap-4">
          <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Version dark
          </span>
          <div
            style={{
              background: "#1E293B",
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "20px 28px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoFull}
              alt="Revyon Tech Logo Dark"
              style={{ height: "90px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "80px", background: "rgba(255,255,255,0.1)" }} className="hidden sm:block" />

        {/* Icône seule */}
        <div className="flex flex-col items-center gap-4">
          <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Icône seule
          </span>
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoIcon}
              alt="Revyon Tech Icon"
              style={{ height: "80px", width: "80px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Color palette */}
      <div className="flex flex-col items-center gap-3 relative z-10">
        <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Palette de couleurs
        </span>
        <div className="flex gap-3 flex-wrap justify-center">
          {[
            { color: "#1A3A6B", name: "Bleu Marine" },
            { color: "#4A90D9", name: "Bleu Ciel" },
            { color: "#0EA5E9", name: "Bleu Vif" },
            { color: "#E84C1E", name: "Orange RT" },
            { color: "#ffffff", name: "Blanc Pur", border: true },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-1">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: c.color,
                  border: c.border ? "2px solid #334155" : "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              />
              <span style={{ fontSize: "0.6rem", color: "#fff", textAlign: "center" }}>{c.name}</span>
              <span style={{ fontSize: "0.6rem", color: "#fff", fontFamily: "monospace" }}>{c.color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Get unique categories
  const categories = ["Tous", ...Array.from(new Set(projects.map(p => p.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
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
              background: "rgba(14,165,233,0.15)",
              border: "1px solid rgba(14,165,233,0.3)",
              color: "#7DD3FC",
              padding: "4px 20px",
              borderRadius: "100px",
              fontSize: "0.85rem",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Portfolio
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
            Nos{" "}
            <span style={{ color: "#F97316" }}>réalisations</span>
          </h1>
          <p style={{ color: "#fff", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto", opacity: 0.95 }}>
            Découvrez nos projets réalisés. Notre portfolio s'enrichit progressivement au fur et à mesure de nos collaborations.
          </p>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "100px",
                  background: selectedCategory === cat ? "#0EA5E9" : "#fff",
                  color: selectedCategory === cat ? "#fff" : "#0F172A",
                  border: selectedCategory === cat ? "none" : "1px solid #E2E8F0",
                  fontWeight: selectedCategory === cat ? "700" : "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                border: "2px solid #0EA5E9",
                boxShadow: "0 8px 40px rgba(14,165,233,0.12)",
                marginBottom: "40px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 50px rgba(14,165,233,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(14,165,233,0.12)";
              }}
            >
              {/* Badge */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                  padding: "12px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "6px",
                      padding: "4px 12px",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    PROJET #{project.id}
                  </div>
                  <span style={{ color: "#BAE6FD", fontSize: "0.85rem" }}>{project.date}</span>
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
                  ✓ {project.status}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Logo display */}
                <div style={{ padding: "32px" }}>
                  <RevyonLogoDisplay />
                </div>

                {/* Details */}
                <div style={{ padding: "40px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: project.categoryBg,
                      color: project.categoryColor,
                      padding: "4px 14px",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    {project.category}
                  </div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#0EA5E9",
                      marginBottom: "16px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "20px", fontSize: "0.93rem" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-6">
                    {project.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#0EA5E9",
                            marginTop: "6px",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: "0.88rem", color: "#0F172A", lineHeight: "1.6" }}>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "20px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Close Button */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={24} color="#0F172A" />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: "0 32px 32px" }}>
              <div
                style={{
                  display: "inline-block",
                  background: selectedProject.categoryBg,
                  color: selectedProject.categoryColor,
                  padding: "6px 16px",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                {selectedProject.category}
              </div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "800",
                  color: "#0EA5E9",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {selectedProject.title}
              </h2>
              <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "24px", fontSize: "0.95rem" }}>
                {selectedProject.description}
              </p>

              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0F172A", marginBottom: "12px" }}>
                Détails du projet
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                {selectedProject.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: selectedProject.categoryColor,
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.9rem", color: "#0F172A", lineHeight: "1.6" }}>{detail}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#0F172A", marginBottom: "12px" }}>
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "#F1F5F9",
                        color: "#0F172A",
                        padding: "6px 14px",
                        borderRadius: "100px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "24px" }}>
                <p style={{ color: "#0F172A", fontSize: "0.9rem", marginBottom: "16px" }}>
                  Vous avez un projet similaire ou une demande spécifique ?
                </p>
                <Link
                  to="/contact"
                  onClick={() => setSelectedProject(null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                    color: "#fff",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                  }}
                >
                  Démarrer un projet <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── COMING SOON ── */}
      <section style={{ background: "#fff", padding: "60px 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "800",
                color: "#0EA5E9",
                letterSpacing: "-0.02em",
                marginBottom: "10px",
              }}
            >
              Projets à venir 🚀
            </h2>
            <p style={{ color: "#0F172A", lineHeight: "1.8" }}>
              Notre portfolio s'agrandit. Voici un aperçu des prochains projets en cours de développement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {upcoming.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "16px",
                  padding: "28px",
                  border: "1px dashed #CBD5E1",
                  textAlign: "center",
                  opacity: 0.8,
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{item.icon}</div>
                <div
                  style={{
                    display: "inline-block",
                    background: "#E2E8F0",
                    color: "#0F172A",
                    padding: "3px 12px",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {item.category}
                </div>
                <h3 style={{ fontWeight: "700", color: "#0EA5E9", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ color: "#0F172A", fontSize: "0.87rem", lineHeight: "1.6" }}>{item.desc}</p>
                <div
                  style={{
                    display: "inline-block",
                    background: "#FFF7ED",
                    color: "#F97316",
                    padding: "4px 14px",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    marginTop: "14px",
                  }}
                >
                  En préparation...
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
          padding: "60px 0",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", color: "#fff", marginBottom: "12px" }}>
            Votre projet pourrait être ici !
          </h2>
          <p style={{ color: "#fff", lineHeight: "1.8", marginBottom: "28px", opacity: 0.95 }}>
            Contactez-nous dès aujourd'hui pour commencer votre transformation digitale avec Revyon Tech.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 32px",
              background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "700",
              boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
            }}
          >
            Démarrer un projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}


