import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../config";

/**
 * Bouton WhatsApp flottant.
 *
 * Il n'apparaît qu'une fois le premier écran passé : posé en bas à droite
 * dès le chargement, il recouvrait le bouton « Démarrer un projet » du
 * héros sur mobile.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const message = encodeURIComponent(
    "Bonjour Revyon Tech, je souhaite en savoir plus sur vos services."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Revyon Tech via WhatsApp"
      title="Contacter via WhatsApp"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#128C7E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 3px 14px rgba(15,23,42,0.22)",
        zIndex: 40,
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s",
      }}
    >
      <MessageCircle size={24} color="#fff" strokeWidth={1.9} />
    </a>
  );
}
