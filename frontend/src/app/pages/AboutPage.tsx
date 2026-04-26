import { Link } from "react-router";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Crown,
  Zap,
  Lightbulb,
  Globe,
  Clock,
  Award,
  ShieldCheck,
  Briefcase,
  BarChart2,
  Megaphone,
  Handshake,
  Settings,
} from "lucide-react";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1594098882270-66ce9399b040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVjaCUyMHN0YXJ0dXAlMjBjb21wYW55JTIwb2ZmaWNlfGVufDF8fHx8MTc3NTMwNzcxMHww&ixlib=rb-4.1.0&q=80&w=1080";

const team = [
  {
    name: "Salimou DIABY",
    role: "Directeur Général",
    Icon: Crown,
    desc: "Assure la supervision globale du projet, valide le contenu, le design et la structure de l'entreprise.",
    color: "#F97316",
    bg: "#FFF7ED",
    initials: "SD",
    avatarGradient: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
  },
  {
    name: "Mamadou Ramadane Condé",
    role: "Directeur des Opérations",
    Icon: Settings,
    desc: "Gère le projet site web, assure le suivi des tâches et coordonne l'équipe des directeurs.",
    color: "#0EA5E9",
    bg: "#E0F2FE",
    initials: "MC",
    avatarGradient: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)",
  },
  {
    name: "Fatoumata Kanny Diallo",
    role: "Directrice Administrative & Financière",
    Icon: BarChart2,
    desc: "Gère les dépenses, prévoit le budget et documente les processus pour les futurs projets.",
    color: "#8B5CF6",
    bg: "#EDE9FE",
    initials: "FD",
    avatarGradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
  },
  {
    name: "Ibrahima Sory Barry",
    role: "Directeur Communication & Marketing",
    Icon: Megaphone,
    desc: "Rédige les contenus, gère les textes et images, et adapte le message marketing.",
    color: "#10B981",
    bg: "#D1FAE5",
    initials: "IB",
    avatarGradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
  },
  {
    name: "Ousmane Kanté",
    role: "Directeur Commercial & Développement",
    Icon: Handshake,
    desc: "Définit les services à proposer, rédige les offres commerciales et oriente les relations clients.",
    color: "#F97316",
    bg: "#FFF7ED",
    initials: "OK",
    avatarGradient: "linear-gradient(135deg, #F97316 0%, #FBBF24 100%)",
  },
];

const values = [
  {
    Icon: Zap,
    color: "#F97316",
    bg: "#FFF7ED",
    title: "Innovation",
    desc: "Nous adoptons les dernières technologies pour offrir des solutions avant-gardistes.",
  },
  {
    Icon: Award,
    color: "#0EA5E9",
    bg: "#E0F2FE",
    title: "Excellence",
    desc: "Chaque projet est traité avec le plus haut niveau de qualité et d'attention aux détails.",
  },
  {
    Icon: ShieldCheck,
    color: "#8B5CF6",
    bg: "#EDE9FE",
    title: "Intégrité",
    desc: "Nous bâtissons des relations durables fondées sur la confiance et la transparence.",
  },
  {
    Icon: Lightbulb,
    color: "#F59E0B",
    bg: "#FFFBEB",
    title: "Créativité",
    desc: "Nous pensons différemment pour créer des solutions uniques et impactantes.",
  },
  {
    Icon: Globe,
    color: "#10B981",
    bg: "#D1FAE5",
    title: "Impact Local",
    desc: "Nous contribuons au développement du numérique en Afrique et en Guinée.",
  },
  {
    Icon: Clock,
    color: "#0EA5E9",
    bg: "#E0F2FE",
    title: "Réactivité",
    desc: "Nous répondons rapidement aux besoins de nos clients pour ne jamais perdre de temps.",
  },
];

export function AboutPage() {
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
            backgroundImage: `url(${ABOUT_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
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
            À propos
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
            L'histoire de{" "}
            <span style={{ color: "#F97316" }}>Revyon Tech</span>
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            Une agence tech fondée avec la vision de transformer le paysage
            digital africain, une solution à la fois.
          </p>
        </div>
      </section>

      {/* ── PRÉSENTATION ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: "800",
                  color: "#0EA5E9",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Qui sommes-nous ?
              </h2>
              <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "16px" }}>
                <strong style={{ color: "#0EA5E9" }}>Revyon Tech</strong> est
                une agence technologique guinéenne spécialisée dans la création
                de solutions digitales sur mesure. Nous accompagnons les
                entrepreneurs, les PME et les grandes entreprises dans leur
                transformation numérique.
              </p>
              <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "16px" }}>
                Notre nom incarne notre ambition :{" "}
                <em>Révolution &amp; Innovation</em>. Nous croyons fermement que
                la technologie est un levier puissant pour le développement
                économique de l'Afrique.
              </p>
              <p style={{ color: "#0F172A", lineHeight: "1.8" }}>
                Composée d'une équipe dynamique de cinq directeurs aux
                compétences complémentaires, Revyon Tech place l'excellence et
                l'innovation au cœur de chaque projet.
              </p>
            </div>
            <div>
              <img
                src={ABOUT_IMAGE}
                alt="Revyon Tech bureau"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Notre Vision",
                color: "#0EA5E9",
                bg: "#E0F2FE",
                content:
                  "Devenir l'agence technologique de référence en Afrique de l'Ouest, reconnue pour son excellence, son innovation et son impact positif sur le développement numérique du continent.",
              },
              {
                icon: Target,
                title: "Notre Mission",
                color: "#F97316",
                bg: "#FFF7ED",
                content:
                  "Offrir des solutions digitales de haute qualité, accessibles et sur mesure, pour permettre à chaque entreprise africaine de se digitaliser et de compétir sur le marché mondial.",
              },
              {
                icon: Heart,
                title: "Nos Valeurs",
                color: "#8B5CF6",
                bg: "#EDE9FE",
                content:
                  "Innovation, Excellence, Intégrité, Créativité, Impact Local et Réactivité. Ces valeurs guident chacune de nos décisions et définissent la culture de Revyon Tech.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    padding: "36px",
                    border: "1px solid #E2E8F0",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <Icon size={28} color={item.color} />
                  </div>
                  <h3
                    style={{
                      fontWeight: "700",
                      color: "#0EA5E9",
                      marginBottom: "14px",
                      fontSize: "1.15rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#0F172A",
                      lineHeight: "1.8",
                      fontSize: "0.93rem",
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "800",
                color: "#0EA5E9",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Nos valeurs fondamentales
            </h2>
            <p
              style={{
                color: "#0F172A",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Les principes qui guident chacune de nos actions et définissent
              qui nous sommes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.Icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "#F8FAFC",
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid #E2E8F0",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Icône dans un cercle coloré */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: v.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={v.color} strokeWidth={2} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: "700",
                        color: "#0EA5E9",
                        marginBottom: "8px",
                      }}
                    >
                      {v.title}
                    </h4>
                    <p
                      style={{
                        color: "#0F172A",
                        fontSize: "0.9rem",
                        lineHeight: "1.7",
                      }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#FFF7ED",
                color: "#EA580C",
                padding: "4px 16px",
                borderRadius: "100px",
                fontSize: "0.82rem",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              <Crown size={14} />
              Notre Équipe Dirigeante
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "800",
                color: "#0EA5E9",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Les visages derrière Revyon Tech
            </h2>
            <p
              style={{
                color: "#0F172A",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Une équipe complémentaire et passionnée, unie par une seule
              ambition : votre réussite digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => {
              const MemberIcon = member.Icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 16px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* ── AVATAR INITIALES ── */}
                  <div
                    style={{
                      position: "relative",
                      height: "220px",
                      background: member.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Cercle décoratif de fond */}
                    <div
                      style={{
                        position: "absolute",
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        background: member.avatarGradient,
                        opacity: 0.08,
                      }}
                    />
                    {/* Cercle principal avec initiales */}
                    <div
                      style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        background: member.avatarGradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 8px 32px ${member.color}40`,
                        border: "4px solid #fff",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "2rem",
                          fontWeight: "800",
                          color: "#fff",
                          letterSpacing: "0.05em",
                          fontFamily: "Georgia, serif",
                          lineHeight: 1,
                        }}
                      >
                        {member.initials}
                      </span>
                    </div>

                    {/* Badge icône du rôle (remplace emoji) */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "#fff",
                        borderRadius: "10px",
                        padding: "6px 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${member.bg}`,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                    >
                      
                    </div>
                  </div>

                  <div style={{ padding: "20px" }}>
                    <h3
                      style={{
                        fontWeight: "700",
                        color: "#0EA5E9",
                        marginBottom: "4px",
                        fontSize: "1rem",
                      }}
                    >
                      {member.name}
                    </h3>
                    <div
                      style={{
                        display: "inline-block",
                        background: member.bg,
                        color: member.color,
                        padding: "3px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        marginBottom: "12px",
                      }}
                    >
                      {member.role}
                    </div>
                    <p
                      style={{
                        color: "#64748B",
                        fontSize: "0.87rem",
                        lineHeight: "1.7",
                      }}
                    >
                      
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
          padding: "60px 0",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            Rejoignez l'aventure Revyon Tech
          </h2>
          <p
            style={{
              color: "#BAE6FD",
              lineHeight: "1.8",
              marginBottom: "28px",
            }}
          >
            Discutons de votre projet et trouvons ensemble la solution idéale
            pour votre transformation digitale.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 32px",
              background: "#fff",
              color: "#0284C7",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}