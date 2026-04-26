import { useEffect, useRef, useState } from "react";
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

/* ─────────────────────────────────────────────
   CSS ANIMATIONS (injectées une seule fois)
───────────────────────────────────────────── */
const CSS = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes floatA {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes floatB {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(10px); }
  }
  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(1.4); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* Reveal classes (appliquées par IntersectionObserver) */
  .reveal        { opacity: 0; }
  .reveal.visible { animation: fadeSlideUp 0.65s cubic-bezier(.22,.68,0,1.2) forwards; }

  .reveal-left        { opacity: 0; }
  .reveal-left.visible { animation: fadeSlideLeft 0.65s cubic-bezier(.22,.68,0,1.2) forwards; }

  .reveal-scale        { opacity: 0; }
  .reveal-scale.visible { animation: scaleIn 0.55s cubic-bezier(.22,.68,0,1.2) forwards; }

  /* Hover sur les cartes services */
  .service-card {
    transition: transform 0.28s cubic-bezier(.22,.68,0,1.2),
                box-shadow 0.28s ease,
                border-color 0.28s ease;
  }
  .service-card:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 20px 48px rgba(14,165,233,0.16) !important;
    border-color: #BAE6FD !important;
  }

  /* Hover sur les cartes "Pourquoi nous" */
  .reason-card {
    transition: transform 0.28s cubic-bezier(.22,.68,0,1.2),
                box-shadow 0.28s ease;
  }
  .reason-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(14,165,233,0.14);
  }
  .reason-card:hover .reason-icon {
    transform: scale(1.12) rotate(-4deg);
  }
  .reason-icon {
    transition: transform 0.28s cubic-bezier(.22,.68,0,1.2);
  }

  /* Hover boutons hero */
  .btn-primary {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(249,115,22,0.5) !important;
  }
  .btn-secondary {
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .btn-secondary:hover {
    background: rgba(255,255,255,0.12) !important;
  }

  /* Floating badges sur l'image */
  .float-a { animation: floatA 4s ease-in-out infinite; }
  .float-b { animation: floatB 4.5s ease-in-out infinite; }

  /* Point pulsant */
  .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }

  /* Checklist items */
  .check-item {
    opacity: 0;
    animation: slideRight 0.5s ease forwards;
  }
`;

/* ─────────────────────────────────────────────
   HOOK : IntersectionObserver léger
───────────────────────────────────────────── */
function useReveal(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

/* ─────────────────────────────────────────────
   HOOK : Compteur animé
───────────────────────────────────────────── */
function useCounter(target: number, suffix: string, duration = 1400) {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target) + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return { ref, value };
}

/* ─────────────────────────────────────────────
   IMAGES
───────────────────────────────────────────── */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwZGlnaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc1MzA3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1573167627769-e201a7ddf409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUzMDc3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  { icon: Globe,      title: "Création de Sites Web",   desc: "Sites vitrine, e-commerce et plateformes web modernes, rapides et optimisés." },
  { icon: Smartphone, title: "Applications Mobiles",    desc: "Applications iOS et Android intuitives pour propulser votre business." },
  { icon: TrendingUp, title: "Marketing Digital",       desc: "Stratégies digitales sur mesure pour accroître votre visibilité en ligne." },
  { icon: Palette,    title: "Design & Branding",       desc: "Identité visuelle professionnelle qui reflète vos valeurs et attire vos clients." },
  { icon: Server,     title: "Consultation IT",         desc: "Conseils et solutions technologiques adaptés à vos besoins spécifiques." },
  { icon: Share2,     title: "Réseaux Sociaux",         desc: "Gestion et animation de vos pages sociales pour engager votre audience." },
];

const reasons = [
  { icon: Award,  title: "Expertise Reconnue",         desc: "Une équipe de professionnels qualifiés passionnés par l'innovation technologique." },
  { icon: Clock,  title: "Livraison Rapide",           desc: "Respect des délais et des engagements pris avec chaque client." },
  { icon: Users,  title: "Accompagnement Personnalisé",desc: "Un suivi dédié à chaque étape pour garantir votre satisfaction totale." },
  { icon: Star,   title: "Qualité Premium",            desc: "Des solutions de haute qualité conçues pour durer et performer dans le temps." },
];

/* ─────────────────────────────────────────────
   COMPOSANT STAT avec compteur
───────────────────────────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  // Parse numeric part
  const numMatch = value.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/\d+/, "");
  const { ref, value: displayed } = useCounter(num, suffix);

  return (
    <div ref={ref}>
      <div style={{ fontSize: "1.9rem", fontWeight: "800", color: "#F97316", lineHeight: 1 }}>
        {displayed || value}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#fff", marginTop: "4px", opacity: 0.9 }}>{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE PRINCIPALE
───────────────────────────────────────────── */
export function HomePage() {
  // Inject CSS once
  useEffect(() => {
    const id = "revyon-anim-css";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  // Scroll reveal hooks
  useReveal(".reveal");
  useReveal(".reveal-left");
  useReveal(".reveal-scale");

  return (
    <div>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
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
        {/* Background image */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(14,165,233,.3) 0%,rgba(14,165,233,.2) 100%)" }} />
        {/* Decorative circles */}
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,.15) 0%,transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(249,115,22,.1) 0%,transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">

            {/* Badge — animation 1 */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(14,165,233,0.15)",
                border: "1px solid rgba(14,165,233,0.3)",
                borderRadius: "100px", padding: "6px 16px", marginBottom: "24px",
                animation: "fadeIn 0.6s ease forwards",
                opacity: 0,
              }}
            >
              <div className="pulse-dot" style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#7DD3FC" }} />
              <span style={{ color:"#7DD3FC", fontSize:"0.85rem", fontWeight:"500" }}>
                Votre partenaire digital en Guinée
              </span>
            </div>

            {/* Titre — animation 2 */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "800", color: "#fff",
                lineHeight: "1.1", marginBottom: "24px",
                letterSpacing: "-0.03em",
                animation: "fadeSlideUp 0.7s 0.15s cubic-bezier(.22,.68,0,1.2) forwards",
                opacity: 0,
              }}
            >
              Transformez vos{" "}
              <span style={{ background:"linear-gradient(135deg,#F97316 0%,#FBBF24 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                idées
              </span>{" "}
              en solutions{" "}
              <span style={{ color:"#38BDF8" }}>digitales</span>
            </h1>

            {/* Paragraphe — animation 3 */}
            <p
              style={{
                fontSize: "1.15rem", color: "#fff", lineHeight: "1.8",
                marginBottom: "36px", maxWidth: "600px", opacity: 0,
                animation: "fadeSlideUp 0.7s 0.3s cubic-bezier(.22,.68,0,1.2) forwards",
              }}
            >
              Revyon Tech est votre agence technologique de référence. Nous créons des expériences digitales modernes,
              performantes et sur mesure pour propulser votre entreprise vers le succès.
            </p>

            {/* Boutons — animation 4 */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation:"fadeSlideUp 0.7s 0.45s cubic-bezier(.22,.68,0,1.2) forwards", opacity:0 }}
            >
              <Link
                to="/contact"
                className="btn-primary"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 32px",
                  background:"linear-gradient(135deg,#F97316 0%,#EA580C 100%)",
                  color:"#fff", borderRadius:"10px", textDecoration:"none",
                  fontWeight:"700", fontSize:"1rem",
                  boxShadow:"0 4px 20px rgba(249,115,22,0.4)",
                }}
              >
                Démarrer un projet <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="btn-secondary"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 32px",
                  background:"rgba(255,255,255,0.05)",
                  border:"1px solid rgba(255,255,255,0.2)",
                  color:"#fff", borderRadius:"10px", textDecoration:"none",
                  fontWeight:"600", fontSize:"1rem",
                  backdropFilter:"blur(10px)",
                }}
              >
                Nos services
              </Link>
            </div>

            {/* Stats avec compteurs — animation 5 */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14"
              style={{ animation:"fadeSlideUp 0.7s 0.6s cubic-bezier(.22,.68,0,1.2) forwards", opacity:0 }}
            >
              <AnimatedStat value="100%" label="Satisfaction client" />
              <AnimatedStat value="5+"   label="Services proposés" />
              <AnimatedStat value="2024" label="Année de création" />
              <AnimatedStat value="24"   label="Support 24/7" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════ */}
      <section style={{ background:"#fff", padding:"clamp(40px,8vw,80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Texte — slide depuis la gauche */}
            <div className="reveal-left">
              <div style={{ display:"inline-block", background:"#E0F2FE", color:"#0284C7", padding:"4px 16px", borderRadius:"100px", fontSize:"0.82rem", fontWeight:"600", marginBottom:"16px" }}>
                À propos de nous
              </div>
              <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.5rem)", fontWeight:"800", color:"#0EA5E9", lineHeight:"1.2", marginBottom:"16px", letterSpacing:"-0.02em" }}>
                Une agence tech au cœur de l'Afrique
              </h2>
              <p style={{ color:"#0F172A", lineHeight:"1.8", marginBottom:"20px" }}>
                Revyon Tech est une agence technologique fondée avec l'ambition de démocratiser le numérique en Afrique.
                Nous combinons expertise technique et créativité pour livrer des solutions qui font la différence.
              </p>
              <p style={{ color:"#0F172A", lineHeight:"1.8", marginBottom:"28px" }}>
                Notre équipe de directeurs passionnés met tout son savoir-faire au service de votre croissance digitale,
                avec des solutions personnalisées adaptées au contexte local et aux standards internationaux.
              </p>

              {/* Checklist avec délais en cascade */}
              <div className="flex flex-col gap-3 mb-8">
                {["Solutions 100% personnalisées", "Équipe pluridisciplinaire", "Accompagnement de A à Z"].map((item, i) => (
                  <div
                    key={item}
                    className="check-item flex items-center gap-3"
                    style={{ animationDelay: `${0.1 + i * 0.15}s` }}
                  >
                    <CheckCircle2 size={18} color="#0EA5E9" />
                    <span style={{ color:"#334155", fontWeight:"500" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/a-propos"
                className="btn-primary"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"12px 28px", background:"linear-gradient(135deg,#0EA5E9 0%,#0284C7 100%)", color:"#fff", borderRadius:"10px", textDecoration:"none", fontWeight:"600", boxShadow:"0 4px 16px rgba(14,165,233,0.3)" }}
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image avec badges flottants */}
            <div className="reveal" style={{ position:"relative" }}>
              <img
                src={TEAM_IMAGE}
                alt="Équipe Revyon Tech"
                style={{ width:"100%", height:"420px", objectFit:"cover", borderRadius:"20px", boxShadow:"0 20px 60px rgba(0,0,0,0.15)" }}
              />
              {/* Badge bas-gauche — flotte vers le bas */}
              <div
                className="float-b"
                style={{
                  position:"absolute", bottom:"-20px", left:"-20px",
                  background:"#fff", borderRadius:"16px", padding:"16px 20px",
                  boxShadow:"0 8px 30px rgba(0,0,0,0.12)", border:"1px solid #E2E8F0",
                }}
              >
                <div style={{ fontSize:"1.5rem", fontWeight:"800", color:"#F97316" }}>5+</div>
                <div style={{ fontSize:"0.8rem", color:"#0F172A", fontWeight:"500" }}>Services digitaux</div>
              </div>
              {/* Badge haut-droite — flotte vers le haut */}
              <div
                className="float-a"
                style={{
                  position:"absolute", top:"-20px", right:"-20px",
                  background:"linear-gradient(135deg,#0EA5E9,#0284C7)",
                  borderRadius:"16px", padding:"16px 20px",
                  boxShadow:"0 8px 30px rgba(14,165,233,0.3)",
                }}
              >
                <div style={{ fontSize:"1.5rem", fontWeight:"800", color:"#fff" }}>100%</div>
                <div style={{ fontSize:"0.8rem", color:"#BAE6FD", fontWeight:"500" }}>Satisfaction</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES PREVIEW
      ══════════════════════════════════════ */}
      <section style={{ background:"#F8FAFC", padding:"clamp(40px,8vw,80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 reveal">
            <div style={{ display:"inline-block", background:"#FFF7ED", color:"#EA580C", padding:"4px 16px", borderRadius:"100px", fontSize:"0.82rem", fontWeight:"600", marginBottom:"16px" }}>
              Nos Services
            </div>
            <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.5rem)", fontWeight:"800", color:"#0EA5E9", letterSpacing:"-0.02em", marginBottom:"16px" }}>
              Ce que nous faisons pour vous
            </h2>
            <p style={{ color:"#0F172A", maxWidth:"550px", margin:"0 auto", lineHeight:"1.8" }}>
              Des services digitaux complets pour accompagner votre transformation numérique, de la conception à la mise en ligne.
            </p>
          </div>

          {/* Grille avec stagger en vague */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="service-card reveal"
                  style={{
                    background:"#fff", borderRadius:"16px", padding:"28px",
                    border:"1px solid #E2E8F0", cursor:"default",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width:"52px", height:"52px", borderRadius:"14px",
                      background: i % 2 === 0 ? "#E0F2FE" : "#FFF7ED",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      marginBottom:"16px",
                    }}
                  >
                    <Icon size={24} color={i % 2 === 0 ? "#0EA5E9" : "#F97316"} />
                  </div>
                  <h3 style={{ fontWeight:"700", color:"#0EA5E9", marginBottom:"8px" }}>{service.title}</h3>
                  <p style={{ color:"#0F172A", fontSize:"0.9rem", lineHeight:"1.7" }}>{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 reveal">
            <Link
              to="/services"
              className="btn-primary"
              style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 32px", background:"linear-gradient(135deg,#0EA5E9 0%,#0284C7 100%)", color:"#fff", borderRadius:"10px", textDecoration:"none", fontWeight:"600", boxShadow:"0 4px 16px rgba(14,165,233,0.3)" }}
            >
              Voir tous nos services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section style={{ background:"#fff", padding:"clamp(40px,8vw,80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 reveal">
            <div style={{ display:"inline-block", background:"#E0F2FE", color:"#0284C7", padding:"4px 16px", borderRadius:"100px", fontSize:"0.82rem", fontWeight:"600", marginBottom:"16px" }}>
              Pourquoi nous choisir
            </div>
            <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.5rem)", fontWeight:"800", color:"#0EA5E9", letterSpacing:"-0.02em", marginBottom:"16px" }}>
              Notre engagement envers l'excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  className="reason-card reveal reveal-scale"
                  style={{
                    textAlign:"center", padding:"32px 20px",
                    borderRadius:"16px", background:"#F8FAFC",
                    border:"1px solid #E2E8F0",
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div
                    className="reason-icon"
                    style={{
                      width:"64px", height:"64px", borderRadius:"50%",
                      background:"linear-gradient(135deg,#0EA5E9 0%,#0284C7 100%)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      margin:"0 auto 16px",
                      boxShadow:"0 4px 16px rgba(14,165,233,0.3)",
                    }}
                  >
                    <Icon size={26} color="#fff" />
                  </div>
                  <h3 style={{ fontWeight:"700", color:"#0EA5E9", marginBottom:"10px" }}>{reason.title}</h3>
                  <p style={{ color:"#0F172A", fontSize:"0.88rem", lineHeight:"1.7" }}>{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section
        style={{
          background:"linear-gradient(135deg,#0EA5E9 0%,#06B6D4 100%)",
          padding:"clamp(40px,8vw,80px) 0",
          position:"relative", overflow:"hidden",
        }}
      >
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(249,115,22,.15) 0%,transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <h2 style={{ fontSize:"clamp(1.75rem,4vw,2.75rem)", fontWeight:"800", color:"#fff", letterSpacing:"-0.02em", marginBottom:"16px" }}>
            Prêt à lancer votre projet digital ?
          </h2>
          <p style={{ color:"#fff", fontSize:"1.05rem", lineHeight:"1.8", marginBottom:"36px", opacity:.95 }}>
            Contactez-nous dès aujourd'hui et obtenez un devis gratuit. Notre équipe est prête à transformer vos ambitions en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary"
              style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"15px 36px", background:"linear-gradient(135deg,#F97316 0%,#EA580C 100%)", color:"#fff", borderRadius:"10px", textDecoration:"none", fontWeight:"700", fontSize:"1.05rem", boxShadow:"0 4px 20px rgba(249,115,22,0.4)" }}
            >
              Nous contacter <ArrowRight size={18} />
            </Link>
            {/* <Link
              to="/portfolio"
              className="btn-secondary"
              style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"15px 36px", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.2)", color:"#fff", borderRadius:"10px", textDecoration:"none", fontWeight:"600", fontSize:"1.05rem" }}
            >
              Voir notre portfolio
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}