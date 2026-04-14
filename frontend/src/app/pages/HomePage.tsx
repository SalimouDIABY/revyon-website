import { Link } from "react-router";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Server,
  Share2,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwZGlnaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc1MzA3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_IMAGE = "https://images.unsplash.com/photo-1573167627769-e201a7ddf409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUzMDc3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  { icon: Globe, title: "Création de Sites Web", desc: "Sites vitrine, e-commerce et plateformes web modernes, rapides et optimisés." },
  { icon: Smartphone, title: "Applications Mobiles", desc: "Applications iOS et Android intuitives pour propulser votre business." },
  { icon: TrendingUp, title: "Marketing Digital", desc: "Stratégies digitales sur mesure pour accroître votre visibilité en ligne." },
  { icon: Palette, title: "Design & Branding", desc: "Identité visuelle professionnelle qui reflète vos valeurs et attire vos clients." },
  { icon: Server, title: "Consultation IT", desc: "Conseils et solutions technologiques adaptés à vos besoins spécifiques." },
  { icon: Share2, title: "Réseaux Sociaux", desc: "Gestion et animation de vos pages sociales pour engager votre audience." },
];

const reasons = [
  { icon: Award, title: "Expertise Reconnue", desc: "Une équipe de professionnels qualifiés passionnés par l'innovation technologique." },
  { icon: Clock, title: "Livraison Rapide", desc: "Respect des délais et des engagements pris avec chaque client." },
  { icon: Users, title: "Accompagnement Personnalisé", desc: "Un suivi dédié à chaque étape pour garantir votre satisfaction totale." },
  { icon: Star, title: "Qualité Premium", desc: "Des solutions de haute qualité conçues pour durer et performer dans le temps." },
];

const stats = [
  { value: "100%", label: "Satisfaction client" },
  { value: "5+", label: "Services proposés" },
  { value: "2024", label: "Année de création" },
  { value: "24/7", label: "Support disponible" },
];

export function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #0096D6 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(14,165,233,0.3) 0%, rgba(14,165,233,0.2) 100%)",
          }}
        />
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(14,165,233,0.15)",
                border: "1px solid rgba(14,165,233,0.3)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0EA5E9", animation: "pulse 2s infinite" }} />
              <span style={{ color: "#7DD3FC", fontSize: "0.85rem", fontWeight: "500" }}>
                Votre partenaire digital en Guinée
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "800",
                color: "#fff",
                lineHeight: "1.1",
                marginBottom: "24px",
                letterSpacing: "-0.03em",
              }}
            >
              Transformez vos{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F97316 0%, #FBBF24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                idées
              </span>{" "}
              en solutions{" "}
              <span style={{ color: "#38BDF8" }}>digitales</span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#fff",
                lineHeight: "1.8",
                marginBottom: "36px",
                maxWidth: "600px",
                opacity: 0.95,
              }}
            >
              Revyon Tech est votre agence technologique de référence. Nous créons des expériences digitales modernes, 
              performantes et sur mesure pour propulser votre entreprise vers le succès.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  color: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                Démarrer un projet <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                Nos services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "#F97316" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "#fff", marginTop: "2px", opacity: 0.9 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#E0F2FE",
                  color: "#0284C7",
                  padding: "4px 16px",
                  borderRadius: "100px",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                À propos de nous
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: "800",
                  color: "#0EA5E9",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Une agence tech au cœur de l'Afrique
              </h2>
              <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "20px" }}>
                Revyon Tech est une agence technologique fondée avec l'ambition de démocratiser le numérique en Afrique. 
                Nous combinons expertise technique et créativité pour livrer des solutions qui font la différence.
              </p>
              <p style={{ color: "#0F172A", lineHeight: "1.8", marginBottom: "28px" }}>
                Notre équipe de directeurs passionnés met tout son savoir-faire au service de votre croissance digitale, 
                avec des solutions personnalisées adaptées au contexte local et aux standards internationaux.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {["Solutions 100% personnalisées", "Équipe pluridisciplinaire", "Accompagnement de A à Z"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} color="#0EA5E9" />
                    <span style={{ color: "#334155", fontWeight: "500" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/a-propos"
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
                }}
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={TEAM_IMAGE}
                alt="Équipe Revyon Tech"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#F97316" }}>5+</div>
                <div style={{ fontSize: "0.8rem", color: "#0F172A", fontWeight: "500" }}>Services digitaux</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  boxShadow: "0 8px 30px rgba(14,165,233,0.3)",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff" }}>100%</div>
                <div style={{ fontSize: "0.8rem", color: "#BAE6FD", fontWeight: "500" }}>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              style={{
                display: "inline-block",
                background: "#FFF7ED",
                color: "#EA580C",
                padding: "4px 16px",
                borderRadius: "100px",
                fontSize: "0.82rem",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Nos Services
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "800",
                color: "#0EA5E9",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Ce que nous faisons pour vous
            </h2>
            <p style={{ color: "#0F172A", maxWidth: "550px", margin: "0 auto", lineHeight: "1.8" }}>
              Des services digitaux complets pour accompagner votre transformation numérique, de la conception à la mise en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(14,165,233,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#BAE6FD";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: i % 2 === 0 ? "#E0F2FE" : "#FFF7ED",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={24} color={i % 2 === 0 ? "#0EA5E9" : "#F97316"} />
                  </div>
                  <h3 style={{ fontWeight: "700", color: "#0EA5E9", marginBottom: "8px" }}>{service.title}</h3>
                  <p style={{ color: "#0F172A", fontSize: "0.9rem", lineHeight: "1.7" }}>{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 32px",
                background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                color: "#fff",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 4px 16px rgba(14,165,233,0.3)",
              }}
            >
              Voir tous nos services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              style={{
                display: "inline-block",
                background: "#E0F2FE",
                color: "#0284C7",
                padding: "4px 16px",
                borderRadius: "100px",
                fontSize: "0.82rem",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Pourquoi nous choisir
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "800",
                color: "#0EA5E9",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Notre engagement envers l'excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: "32px 20px",
                    borderRadius: "16px",
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      boxShadow: "0 4px 16px rgba(14,165,233,0.3)",
                    }}
                  >
                    <Icon size={26} color="#fff" />
                  </div>
                  <h3 style={{ fontWeight: "700", color: "#0EA5E9", marginBottom: "10px" }}>{reason.title}</h3>
                  <p style={{ color: "#0F172A", fontSize: "0.88rem", lineHeight: "1.7" }}>{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: "800",
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Prêt à lancer votre projet digital ?
          </h2>
          <p style={{ color: "#fff", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "36px", opacity: 0.95 }}>
            Contactez-nous dès aujourd'hui et obtenez un devis gratuit. Notre équipe est prête à transformer vos ambitions en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 36px",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                color: "#fff",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1.05rem",
                boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
              }}
            >
              Nous contacter <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 36px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.05rem",
              }}
            >
              Voir notre portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




