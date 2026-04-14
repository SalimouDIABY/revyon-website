import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phoneNumber = "+224627330709";
  const message = encodeURIComponent(
    "Bonjour Revyon Tech, je souhaite en savoir plus sur vos services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Contacter via WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
        zIndex: 40,
        transition: "all 0.3s ease",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.6)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)";
      }}
    >
      <MessageCircle size={28} color="white" strokeWidth={1.5} />
    </a>
  );
}
