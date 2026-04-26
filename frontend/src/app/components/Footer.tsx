import { Link } from "react-router";
import { Mail, MessageCircle, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0EA5E9", color: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="md" color="white" />
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
              Votre partenaire technologique de confiance. Nous transformons vos idées en solutions digitales performantes.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#1E293B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#0EA5E9";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#1E293B";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "16px" }}>Navigation</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="flex flex-col gap-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "À propos", path: "/a-propos" },
                { label: "Services", path: "/services" },
                //{ label: "Portfolio", path: "/portfolio" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{ color: "#fff", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0EA5E9")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "16px" }}>Nos Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="flex flex-col gap-2">
              {[
                "Création de Sites Web",
                "Applications Mobiles",
                "Marketing Digital",
                "Design & Branding",
                "Consultation IT",
                "Réseaux Sociaux",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    style={{ color: "#fff", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F97316")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "16px" }}>Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail size={16} color="#fff" />
                <a href="mailto:revyontech@gmail.com" style={{ color: "#fff", textDecoration: "none", fontSize: "0.9rem" }}>
                  contact@revyontech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} color="#25D366" />
                <a href="https://wa.me/+224627330709" style={{ color: "#fff", textDecoration: "none", fontSize: "0.9rem" }}>
                  WhatsApp disponible
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} color="#fff" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#fff", fontSize: "0.9rem" }}>Guinée, Conakry</span>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                padding: "12px 16px",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Link to="/contact" style={{ color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem" }}>
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #1E293B", marginTop: "48px", paddingTop: "24px" }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p style={{ fontSize: "0.85rem", color: "#fff" }}>
            © {currentYear} Revyon Tech. Transformez vos idées en solutions digitales.
          </p>
          <div className="flex gap-4 text-center sm:text-right">
            <Link
              to="/politique-confidentialite"
              style={{ fontSize: "0.85rem", color: "#fff", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F97316")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
