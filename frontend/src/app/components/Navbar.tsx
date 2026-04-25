import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Services", path: "/services" },
 // { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setIsOpen(false)}>
            <Logo size="lg" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: isActive ? "600" : "500",
                    fontSize: "0.9rem",
                    color: isActive ? "#0EA5E9" : "#475569",
                    background: isActive ? "#E0F2FE" : "transparent",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.background = "#F1F5F9";
                      (e.target as HTMLElement).style.color = "#0EA5E9";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.background = "transparent";
                      (e.target as HTMLElement).style.color = "#475569";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              style={{
                marginLeft: "8px",
                padding: "9px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                color: "#fff",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                boxShadow: "0 2px 8px rgba(249,115,22,0.3)",
                transition: "all 0.2s",
              }}
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "#475569" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #E2E8F0", padding: "16px" }} className="md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: isActive ? "600" : "500",
                    color: isActive ? "#0EA5E9" : "#475569",
                    background: isActive ? "#E0F2FE" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: "8px",
                padding: "12px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                color: "#fff",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                textAlign: "center",
              }}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
