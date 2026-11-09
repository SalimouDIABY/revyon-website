import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Services", path: "/services" },
  { label: "Réalisations", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // La barre gagne une ombre discrète dès qu'on quitte le haut de page :
  // elle se détache du contenu sans jamais bouger.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 8);
        const doc = document.documentElement;
        const span = doc.scrollHeight - window.innerHeight;
        setProgress(span > 0 ? Math.min(100, (window.scrollY / span) * 100) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  return (
    <nav
      className="rt-nav"
      data-scrolled={scrolled}
      style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 50 }}
    >
      <span
        aria-hidden="true"
        className="rt-progress"
        style={{ "--rt-progress": `${progress}%` } as React.CSSProperties}
      />
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
                  className="rt-navlink"
                  data-active={isActive}
                  style={{
                    padding: "10px 12px 12px",
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.92rem",
                    color: isActive ? "#0C4A6E" : "#475569",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact#devis"
              className="rt-btn rt-btn-accent"
              style={{
                marginLeft: "14px",
                padding: "10px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#fff",
                background: "#C2410C",
              }}
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rt-burger md:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              width: "44px",
              height: "44px",
            }}
          >
            <span style={{ width: "22px", transform: isOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ width: "22px", opacity: isOpen ? 0 : 1 }} />
            <span style={{ width: isOpen ? "22px" : "15px", transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="rt-panel md:hidden"
          style={{ background: "#fff", borderTop: "1px solid #E2E8F0", padding: "10px 16px 18px" }}
        >
          <div className="flex flex-col">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rt-panel-item"
                  style={{
                    padding: "14px 4px",
                    borderBottom: "1px solid #EEF2F6",
                    textDecoration: "none",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "1.02rem",
                    color: isActive ? "#0C4A6E" : "#334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "--rt-delay": `${0.04 + i * 0.045}s`,
                  } as React.CSSProperties}
                >
                  {link.label}
                  {isActive ? (
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C2410C" }} />
                  ) : null}
                </Link>
              );
            })}
            <Link
              to="/contact#devis"
              onClick={() => setIsOpen(false)}
              className="rt-panel-item rt-btn rt-btn-accent"
              style={{
                marginTop: "16px",
                padding: "14px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                color: "#fff",
                background: "#C2410C",
                textAlign: "center",
                "--rt-delay": `${0.04 + navLinks.length * 0.045}s`,
              } as React.CSSProperties}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
