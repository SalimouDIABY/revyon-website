import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function PrivacyPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)", padding: "clamp(50px, 10vw, 100px) 0", minHeight: "40vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Politique de <span style={{ color: "#F97316" }}>Confidentialité</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: "#fff", padding: "clamp(40px, 8vw, 80px) 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" style={{ lineHeight: "1.8", color: "#0F172A" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            1. Introduction
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Revyon Tech (« nous », « notre ») respecte votre confidentialité et s'engage à protéger vos données personnelles. 
            Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations 
            lorsque vous visitez notre site web revyontech.com (« Site »).
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            2. Informations que nous collectons
          </h2>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#334155", marginBottom: "8px", marginTop: "16px" }}>
            2.1 Informations que vous nous fournissez
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Lorsque vous utilisez notre formulaire de contact, vous pouvez nous fournir :
          </p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li>Nom complet</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Le service auquel vous vous intéressez</li>
            <li>Votre message ou description de projet</li>
          </ul>

          <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#334155", marginBottom: "8px", marginTop: "16px" }}>
            2.2 Données collectées automatiquement
          </h3>
          <p style={{ marginBottom: "16px" }}>
            Nous utilisons Google Analytics pour mesurer le trafic et le comportement des utilisateurs sur le Site. 
            Les données collectées incluent l'adresse IP, le type de navigateur, le système d'exploitation, et les pages visitées.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            3. Utilisation de vos données
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Nous utilisons les données collectées pour :
          </p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li>Répondre à vos demandes de contact</li>
            <li>Vous envoyer des devis et propositions commerciales</li>
            <li>Améliorer l'expérience utilisateur sur le Site</li>
            <li>Analyser les performances du Site via Google Analytics</li>
            <li>Respecter les obligations légales applicables</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            4. Partage de vos données
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Vos données ne seront jamais vendues ou partagées avec des tiers, sauf si requis par la loi. 
            Les données de votre formulaire de contact sont stockées exclusivement sur nos serveurs 
            et accessibles uniquement aux membres autorisés de l'équipe Revyon Tech.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            5. Durée de conservation
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Les données collectées via le formulaire de contact sont conservées pour une durée maximale de 24 mois. 
            Après cette période, elles sont automatiquement supprimées ou anonymisées. Vous pouvez demander la suppression 
            à tout moment en nous contactant à revyontech@gmail.com.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            6. Sécurité
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Nous utilisons le protocole HTTPS et le chiffrement SSL pour protéger toutes les données en transit. 
            Les données sont stockées sur des serveurs sécurisés avec accès restreint. 
            Bien que nous prenions des mesures de sécurité appropriées, aucun système n'est 100% sécurisé.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            7. Vos droits
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Vous avez le droit de :
          </p>
          <ul style={{ marginBottom: "16px", paddingLeft: "24px" }}>
            <li>Accéder à vos données personnelles</li>
            <li>Demander la correction de vos données</li>
            <li>Demander la suppression de vos données</li>
            <li>Porter vos données à un autre service</li>
            <li>Vous opposer au traitement de vos données</li>
          </ul>
          <p style={{ marginBottom: "16px" }}>
            Pour exercer ces droits, envoyez un email à revyontech@gmail.com.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            8. Cookies
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Notre Site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur 
            pour refuser les cookies, bien que cela puisse affecter certaines fonctionnalités du Site.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            9. Modifications de cette Politique
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Nous pouvons mettre à jour cette Politique de Confidentialité à tout moment. Les modifications seront 
            publiées sur cette page avec la date de mise à jour. L'utilisation continue du Site après les modifications 
            constitue votre acceptation de la version mise à jour.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0EA5E9", marginBottom: "16px", marginTop: "32px" }}>
            10. Nous contacter
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité, 
            veuillez nous contacter :
          </p>
          <div style={{ background: "#E0F2FE", padding: "20px", borderRadius: "12px", marginBottom: "32px" }}>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Email :</strong> revyontech@gmail.com
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Adresse :</strong> Conakry, Guinée
            </p>
            <p style={{ margin: "0" }}>
              <strong>WhatsApp :</strong> +224 627330709
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", padding: "40px 24px", borderRadius: "16px", textAlign: "center", marginTop: "48px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
              Des questions sur vos données ?
            </h3>
            <p style={{ color: "#BAE6FD", marginBottom: "20px", lineHeight: "1.6" }}>
              Nous sommes ici pour vous aider. Contactez-nous à tout moment.
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#fff",
                color: "#0284C7",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
