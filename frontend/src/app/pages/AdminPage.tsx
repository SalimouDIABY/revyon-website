import { FormEvent, useState } from "react";
import { ShieldCheck, RefreshCcw, AlertTriangle, Mail, Phone, ClipboardList } from "lucide-react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export function AdminPage() {
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [apiKey, setApiKey] = useState("");
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = async (event?: FormEvent) => {
    event?.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Clé API invalide ou accès refusé.");
        setContacts([]);
        setAuthenticated(false);
      } else {
        setContacts(data.contacts || []);
        setAuthenticated(true);
      }
    } catch (fetchError) {
      console.error("Admin fetch error:", fetchError);
      setError("Impossible de joindre le serveur. Vérifiez que le backend est démarré.");
      setContacts([]);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setApiKey("");
    setContacts([]);
    setAuthenticated(false);
    setError("");
  };

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)", padding: "clamp(60px, 10vw, 100px) 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.12)", borderRadius: "999px", padding: "10px 18px", marginBottom: "20px" }}>
            <ShieldCheck size={20} color="#fff" />
            <span style={{ color: "#fff", fontWeight: 600 }}>Espace administrateur</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Gestion des messages reçus
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", maxWidth: "720px", margin: "0 auto", lineHeight: 1.75 }}>
            Saisissez votre clé d'administration pour consulter les soumissions de contact. Les messages sont récupérés depuis la base MySQL et sécurisés par token.
          </p>
        </div>
      </section>

      <section style={{ background: "#F8FAFC", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
            <div style={{ background: "#fff", borderRadius: "24px", padding: "32px", border: "1px solid #E2E8F0" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
                Authentification administrateur
              </h2>
              <p style={{ color: "#475569", marginBottom: "24px", lineHeight: 1.8 }}>
                Cette page permet de consulter les messages envoyés via le formulaire de contact. La clé d'administration reste confidentielle et ne doit pas être partagée.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
                <label style={{ display: "block", color: "#0F172A", fontWeight: 700, marginBottom: "8px" }}>
                  Clé API d'administration
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(event) => setApiKey(event.target.value)}
                  placeholder="Entrez votre clé secrète"
                  style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #CBD5E1", fontSize: "0.95rem", fontFamily: "inherit" }}
                />

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    disabled={loading || !apiKey}
                    style={{
                      padding: "14px 22px",
                      background: loading || !apiKey ? "#94A3B8" : "#0EA5E9",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      fontWeight: 700,
                      cursor: loading || !apiKey ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Chargement..." : "Connexion"}
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    style={{
                      padding: "14px 22px",
                      background: "#F1F5F9",
                      color: "#0F172A",
                      border: "1px solid #CBD5E1",
                      borderRadius: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Réinitialiser
                  </button>
                </div>

                {error && (
                  <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "12px", padding: "16px", color: "#B91C1C" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <AlertTriangle size={18} />
                      <strong>Erreur</strong>
                    </div>
                    <p style={{ margin: 0 }}>{error}</p>
                  </div>
                )}
              </form>
            </div>

            <div style={{ background: "#fff", borderRadius: "24px", padding: "32px", border: "1px solid #E2E8F0", minHeight: "260px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
                Dernières informations
              </h2>
              <div style={{ display: "grid", gap: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <ShieldCheck size={20} color="#0EA5E9" />
                  <p style={{ margin: 0, color: "#475569" }}>Accès protégé par Bearer token.</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <Mail size={20} color="#0F172A" />
                  <p style={{ margin: 0, color: "#475569" }}>Les messages sont stockés dans MySQL.</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <Phone size={20} color="#0F172A" />
                  <p style={{ margin: 0, color: "#475569" }}>Le backend doit être démarré pour récupérer les données.</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <ClipboardList size={20} color="#0F172A" />
                  <p style={{ margin: 0, color: "#475569" }}>Utilisez cette page uniquement en interne ou depuis un réseau sécurisé.</p>
                </div>
              </div>
            </div>
          </div>

          {authenticated && (
            <div style={{ marginTop: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "18px" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0F172A" }}>Messages reçus</h3>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 18px",
                    background: "#0EA5E9",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <RefreshCcw size={18} />
                  Actualiser
                </button>
              </div>

              {contacts.length === 0 ? (
                <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "16px", padding: "24px", color: "#1E40AF" }}>
                  Aucun message trouvé pour le moment.
                </div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
                    <thead>
                      <tr>
                        {['Date', 'Nom', 'Email', 'Téléphone', 'Service', 'Sujet', 'Message'].map((heading) => (
                          <th key={heading} style={{ textAlign: 'left', padding: '14px 16px', borderBottom: '2px solid #E2E8F0', color: '#0F172A' }}>{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <tr key={contact.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#475569' }}>{new Date(contact.created_at).toLocaleString('fr-FR')}</td>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#0F172A', fontWeight: 600 }}>{contact.name}</td>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#0F172A' }}>{contact.email}</td>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#0F172A' }}>{contact.phone}</td>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#0F172A' }}>{contact.service}</td>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#0F172A' }}>{contact.subject || '—'}</td>
                          <td style={{ padding: '14px 16px', verticalAlign: 'top', color: '#475569', whiteSpace: 'pre-wrap' }}>{contact.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
