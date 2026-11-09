import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, AlertTriangle, Linkedin } from "lucide-react";
import { IconMark } from "../components/IconMark";
import { API_URL, WHATSAPP_URL } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";
import { BrandOrbit } from "../components/BrandOrbit";
import { MaskedWords, useInViewReveal } from "../components/Reveal";
import { LINKEDIN_URL } from "../data/products";
import { trackEvent } from "../analytics";

export function ContactPage() {
  useInViewReveal();

  const location = useLocation();

  // Défile en douceur jusqu'au formulaire quand on arrive avec #devis
  useEffect(() => {
    if (location.hash === "#devis") {
      // petit délai pour laisser le rendu se faire
      const t = setTimeout(() => {
        document.getElementById("devis")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  usePageMeta(
    "Contact | Revyon Tech, entreprise informatique à Conakry, Guinée",
    "Contactez Revyon Tech pour votre projet web, logiciel ou marketing digital en Guinée. Réponse en moins de 24h. Téléphone et WhatsApp : +224 627 33 07 09.",
    "/contact"
  );

  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", service: "", message: "", honeypot: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15 secondes max

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMsg(
          data?.errors?.join(" ") ||
          data?.message ||
          "L'envoi a échoué. Contactez-nous directement via WhatsApp : +224 627 33 07 09."
        );
        return;
      }

      // Conversion : demande de devis envoyée
      trackEvent("generate_lead", { service: form.service || "non_precise" });
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", service: "", message: "", honeypot: "" });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (error) {
      console.error('Contact form error:', error);
      setErrorMsg("Connexion au serveur impossible. Contactez-nous directement via WhatsApp : +224 627 33 07 09.");
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0B2742 0%, #0C4A6E 100%)", position: "relative", overflow: "hidden" }}>
        <BrandOrbit
          className="pointer-events-none select-none absolute hidden md:block"
          style={{ width: "420px", height: "auto", right: "-90px", top: "50%", transform: "translateY(-50%)", opacity: 0.7 }}
        />
        <div
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative"
          style={{ paddingTop: "clamp(40px, 5.5vw, 68px)", paddingBottom: "clamp(40px, 5.5vw, 68px)" }}
        >
          <div style={{ maxWidth: "700px" }}>
            <p className="rt-rise" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "#FDBA74", margin: "0 0 14px", "--rt-delay": "0.05s" } as React.CSSProperties}>
              Contact
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 6.6vw, 2.9rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.022em", margin: "0 0 16px" }}>
              <MaskedWords text="Parlons de votre projet" delay={0.1} />
            </h1>
            <p className="rt-rise" style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "#CFE0EC", margin: 0, maxWidth: "600px", "--rt-delay": "0.21s" } as React.CSSProperties}>
              Où que vous soyez en Guinée, décrivez-nous ce que vous voulez faire. Nous
              revenons vers vous sous 24 heures avec une estimation de délai et de budget,
              sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDEBAR - CONTACT INFO */}
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "14px" }}>
                Nos coordonnées
              </h3>
              <p style={{ color: "#475569", marginBottom: "32px", lineHeight: "1.8" }}>
                Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans votre projet digital.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                <div className="rt-tile" style={{ background: "#fff", borderRadius: "14px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "13px", alignItems: "center", overflow: "hidden" }}>
                  <IconMark icon={Mail} size={44} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Email</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>contact@revyontech.com</p>
                  </div>
                </div>

                <div className="rt-tile" style={{ background: "#fff", borderRadius: "14px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "13px", alignItems: "center", overflow: "hidden" }}>
                  <IconMark icon={Phone} size={44} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Téléphone</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem", margin: 0 }}>
                      <a href="tel:+224627330709" style={{ color: "#0F172A", textDecoration: "none" }}>+224 627 33 07 09</a>
                    </p>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem", margin: "2px 0 0" }}>
                      <a href="tel:+224613059938" style={{ color: "#0F172A", textDecoration: "none" }}>+224 613 05 99 38</a>
                    </p>
                  </div>
                </div>

                <div className="rt-tile" style={{ background: "#fff", borderRadius: "14px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "13px", alignItems: "center", overflow: "hidden" }}>
                  <IconMark icon={MessageCircle} size={44} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>WhatsApp</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>+224 627 33 07 09</p>
                  </div>
                </div>

                <div className="rt-tile" style={{ background: "#fff", borderRadius: "14px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "13px", alignItems: "center", overflow: "hidden" }}>
                  <IconMark icon={MapPin} size={44} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Localisation</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem", margin: 0 }}>Conakry, Guinée</p>
                    <p style={{ color: "#6B7280", fontSize: "0.85rem", margin: "2px 0 0" }}>Nous intervenons dans tout le pays</p>
                  </div>
                </div>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rt-tile"
                  style={{ background: "#fff", borderRadius: "14px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "13px", alignItems: "center", textDecoration: "none", overflow: "hidden" }}
                >
                  <IconMark icon={Linkedin} size={44} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>LinkedIn</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>Suivre Revyon Tech</p>
                  </div>
                </a>

                <div className="rt-tile" style={{ background: "#fff", borderRadius: "14px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "13px", alignItems: "center", overflow: "hidden" }}>
                  <IconMark icon={Clock} size={44} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Disponibilité</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>Lundi au samedi, 8h00 à 18h00</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                aria-label="Contacter Revyon Tech via WhatsApp"
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  background: "#0F7A6C",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <MessageCircle size={18} />
                Contacter via WhatsApp
              </button>
            </div>

            {/* RIGHT - FORM */}
            <div id="devis" className="rt-enter" style={{ gridColumn: "span 2", background: "#fff", borderRadius: "16px", padding: "32px", border: "1px solid #E2E8F0", scrollMarginTop: "100px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                Envoyez-nous un message
              </h3>
              <p style={{ color: "#0F172A", marginBottom: "24px", fontSize: "0.95rem" }}>
                Tous les champs marqués d'un <span style={{ color: "#C2410C" }}>*</span> sont obligatoires.
              </p>

              {submitted ? (
                <div style={{ background: "#D1FAE5", border: "1px solid #6EE7B7", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
                  <CheckCircle2 size={48} color="#059669" style={{ margin: "0 auto 16px" }} />
                  <h4 style={{ color: "#065F46", fontWeight: "700", fontSize: "1.2rem", marginBottom: "8px" }}>Message envoyé avec succès !</h4>
                  <p style={{ color: "#047857" }}>Merci ! Notre équipe vous contactera dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {errorMsg && (
                    <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "12px", padding: "16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <AlertTriangle size={20} color="#B91C1C" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <p style={{ color: "#B91C1C", fontWeight: 600, margin: "0 0 8px" }}>{errorMsg}</p>
                        <a
                          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Bonjour Revyon Tech, je suis ${form.name || ''}. ${form.message || ''}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#15803D", fontWeight: 700, textDecoration: "underline" }}
                        >
                          Envoyer ce message via WhatsApp →
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Nom complet <span style={{ color: "#C2410C" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom et prénom"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "inherit", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Email <span style={{ color: "#C2410C" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "inherit", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Téléphone <span style={{ color: "#C2410C" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+224 ... ou 622 ..."
                        value={form.phone}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "inherit", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Service <span style={{ color: "#C2410C" }}>*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "inherit", background: "#fff", color: "#0F172A", boxSizing: "border-box", cursor: "pointer" }}
                      >
                        <option value="">Choisissez un service</option>
                        <option value="web">Création de sites web professionnels</option>
                        <option value="logiciel">Développement de logiciels et applications</option>
                        <option value="design">Design graphique et identité visuelle</option>
                        <option value="marketing">Marketing digital et communication</option>
                        <option value="multimedia">Production multimedia et vidéo IA</option>
                        <option value="formation">Formation et accompagnement numérique</option>
                        <option value="materiel">Vente de matériel informatique</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                      Votre message <span style={{ color: "#C2410C" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Décrivez votre projet, vos besoins, vos objectifs... (minimum 10 caractères)"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "inherit", resize: "vertical", boxSizing: "border-box" }}
                    />
                    <div style={{ fontSize: "0.8rem", color: form.message.length >= 10 ? "#059669" : "#64748B", marginTop: "6px" }}>
                      {form.message.length} / 10 caractères minimum
                      {form.message.length >= 10 && " ✓"}
                    </div>
                  </div>

                  {/* Honeypot */}
                  <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "14px 32px",
                      background: loading ? "#94A3B8" : "#C2410C",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "700",
                      fontSize: "1rem",
                      cursor: loading ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s",
                    }}
                  >
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                    {!loading && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4.6vw, 2rem)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Questions fréquentes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { q: "Quel est le délai moyen de réalisation ?", a: "En général, un site vitrine prend 1 à 2 semaines, une application mobile 4 à 8 semaines selon la complexité." },
              { q: "Comment se déroule le paiement ?", a: "Nous pratiquons généralement un acompte de 50% au démarrage et 50% à la livraison. Modes de paiement flexibles." },
              { q: "Proposez-vous un service de maintenance ?", a: "Oui, nous proposons des contrats de maintenance mensuelle pour assurer la sécurité et la performance de votre projet." },
              { q: "Travaillez-vous avec des clients hors de Guinée ?", a: "Absolument ! Nous collaborons avec des clients dans toute l'Afrique de l'Ouest et la diaspora guinéenne." },
            ].map((item, i) => (
              <div key={i} className="rt-enter" style={{ background: "#F8FAFC", borderRadius: "12px", padding: "20px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ color: "#111827", fontWeight: 700, fontSize: "1rem", marginBottom: "7px" }}>{item.q}</h3>
                <p style={{ color: "#0F172A", lineHeight: "1.7", fontSize: "0.95rem" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}