import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", service: "", message: "", honeypot: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors([]); // Clear errors when user starts typing
  };

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || [data.message || 'Une erreur s\'est produite']);
        setLoading(false);
        return;
      }

      // Success
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", service: "", message: "", honeypot: "" });
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error: any) {
        console.error('Contact form error:', error);
        setErrors(['Une erreur de connexion est survenue. Veuillez réessayer ou nous contacter directement via WhatsApp.']);
        setLoading(false);
    }
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #0096D6 100%)", padding: "clamp(50px, 10vw, 100px) 0", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "100px",
              padding: "8px 16px",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", opacity: 0.7 }} />
            <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: "600" }}>Contactez-nous</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)", fontWeight: "800", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Parlons de votre{" "}
            <span style={{ color: "#fff" }}>projet</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", maxWidth: "650px", margin: "0 auto", lineHeight: "1.8" }}>
            Une idée ? Un besoin ? Remplissez le formulaire ou contactez-nous directement. Notre équipe vous répondra en moins de 24h.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDEBAR - CONTACT INFO */}
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0F172A", marginBottom: "12px" }}>
                Nos coordonnées
              </h3>
              <p style={{ color: "#475569", marginBottom: "32px", lineHeight: "1.8" }}>
                Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans votre projet digital.
              </p>

              {/* Contact Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                {/* Email */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    <Mail size={20} color="#0EA5E9" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Email</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>contact@revyontech.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    <Phone size={20} color="#F97316" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Téléphone</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>+224 627330709</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    <MessageCircle size={20} color="#25D366" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>WhatsApp</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>+224 627330709</p>
                  </div>
                </div>

                {/* Location */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    <MapPin size={20} color="#F97316" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Localisation</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>Conakry, Guinée</p>
                  </div>
                </div>

                {/* Availability */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E2E8F0", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    <Clock size={20} color="#8B5CF6" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: "600", marginBottom: "4px" }}>Disponibilité</div>
                    <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "0.95rem" }}>Lun – Sam : 8h00 – 18h00</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <button
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  background: "#25D366",
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
            <div style={{ gridColumn: "span 2", background: "#fff", borderRadius: "16px", padding: "32px", border: "1px solid #E2E8F0" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0F172A", marginBottom: "8px" }}>
                Envoyez-nous un message
              </h3>
              <p style={{ color: "#0F172A", marginBottom: "24px", fontSize: "0.95rem" }}>
                Tous les champs marqués d'un <span style={{ color: "#F97316" }}>*</span> sont obligatoires.
              </p>

              {submitted ? (
                <div style={{ background: "#D1FAE5", border: "1px solid #6EE7B7", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
                  <CheckCircle2 size={40} color="#059669" style={{ margin: "0 auto 12px" }} />
                  <h4 style={{ color: "#065F46", fontWeight: "700", marginBottom: "4px" }}>Message envoyé !</h4>
                  <p style={{ color: "#047857" }}>Merci ! Notre équipe vous recontacterons très bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Error Messages */}
                  {errors.length > 0 && (
                    <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "12px", padding: "16px", display: "flex", gap: "12px" }}>
                      <AlertCircle size={20} color="#DC2626" style={{ flexShrink: 0 }} />
                      <div>
                        <h5 style={{ color: "#991B1B", fontWeight: "700", marginBottom: "4px" }}>Erreurs :</h5>
                        <ul style={{ margin: 0, paddingLeft: "20px", color: "#7F1D1D" }}>
                          {errors.map((error, i) => (
                            <li key={i}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Nom complet <span style={{ color: "#F97316" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom et prénom"
                        value={form.name}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px",
                          fontSize: "0.95rem",
                          fontFamily: "inherit",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Email <span style={{ color: "#F97316" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px",
                          fontSize: "0.95rem",
                          fontFamily: "inherit",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Téléphone <span style={{ color: "#F97316" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+224 ... ou 622 ... "
                        value={form.phone}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px",
                          fontSize: "0.95rem",
                          fontFamily: "inherit",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", color: "#0F172A", fontWeight: "600", marginBottom: "6px", fontSize: "0.9rem" }}>
                        Service <span style={{ color: "#F97316" }}>*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px",
                          fontSize: "0.95rem",
                          fontFamily: "inherit",
                          background: "#fff",
                          color: "#0F172A",
                          boxSizing: "border-box",
                          cursor: "pointer",
                        }}
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
                      Votre message <span style={{ color: "#F97316" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Décrivez votre projet, vos besoins, vos objectifs... (minimum 100 caractères)"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        resize: "vertical",
                        boxSizing: "border-box",
                      }}
                    />
                    <div style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "6px" }}>
                      {form.message.length} / 100 caractères minimum
                    </div>
                  </div>

                  {/* Honeypot field (hidden from users) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "14px 32px",
                      background: loading ? "#94A3B8" : "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
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
            <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "12px" }}>
              Questions fréquentes
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {[
              {
                q: "Quel est le délai moyen de réalisation ?",
                a: "En général, un site vitrine prend 1 à 2 semaines, une application mobile 4 à 8 semaines selon la complexité.",
              },
              {
                q: "Comment se déroule le paiement ?",
                a: "Nous pratiquons généralement un acompte de 50% au démarrage et 50% à la livraison. Modes de paiement flexibles.",
              },
              {
                q: "Proposez-vous un service de maintenance ?",
                a: "Oui, nous proposons des contrats de maintenance mensuelle pour assurer la sécurité et la performance de votre projet.",
              },
              {
                q: "Travaillez-vous avec des clients hors de Guinée ?",
                a: "Absolument ! Nous collaborons avec des clients dans toute l'Afrique de l'Ouest et la diaspora guinéenne.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#F8FAFC", borderRadius: "12px", padding: "20px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ color: "#0EA5E9", fontWeight: "700", marginBottom: "8px" }}>{item.q}</h3>
                <p style={{ color: "#0F172A", lineHeight: "1.7", fontSize: "0.95rem" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
