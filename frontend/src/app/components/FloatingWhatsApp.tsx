import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "../config";

/**
 * Bouton WhatsApp flottant.
 *
 * Vert officiel #25D366 et glyphe WhatsApp : c'est une marque, elle doit
 * être reconnue d'un coup d'oeil. Il n'apparaît qu'une fois le premier
 * écran passé, car posé dès le chargement il recouvrait le bouton d'appel
 * du héros sur mobile.
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
      aria-label="Écrire à Revyon Tech sur WhatsApp"
      title="Écrire sur WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25D366",
        border: "2px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 20px rgba(15,23,42,0.26)",
        zIndex: 40,
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s",
      }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true" focusable="false">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.803 12.797a12.75 12.75 0 0 0 1.71 6.397L3.2 28.8l6.57-1.72a12.79 12.79 0 0 0 6.23 1.587h.005c7.057 0 12.797-5.74 12.8-12.797a12.72 12.72 0 0 0-3.747-9.053A12.72 12.72 0 0 0 16.004 3.2Zm0 23.19h-.004a10.63 10.63 0 0 1-5.414-1.482l-.388-.23-4.028 1.056 1.075-3.927-.253-.403a10.6 10.6 0 0 1-1.625-5.667c.002-5.866 4.775-10.638 10.64-10.638a10.57 10.57 0 0 1 7.521 3.12 10.57 10.57 0 0 1 3.113 7.526c-.003 5.866-4.775 10.638-10.637 10.638Zm5.834-7.968c-.32-.16-1.891-.933-2.184-1.04-.293-.107-.506-.16-.72.16-.212.32-.825 1.04-1.012 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.498-2.571-1.587-.95-.848-1.592-1.895-1.779-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.255 3.443 5.464 4.828.763.33 1.359.527 1.823.674.766.244 1.463.21 2.014.127.614-.092 1.891-.773 2.158-1.52.266-.746.266-1.386.186-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
    </a>
  );
}
