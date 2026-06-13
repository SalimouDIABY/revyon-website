// L'API tourne en fonction serverless Vercel, sur le même domaine que le site.
// On appelle donc des chemins relatifs (/api/...). VITE_API_URL permet de
// pointer ailleurs en développement local si besoin.
export const API_URL = import.meta.env.VITE_API_URL || "";

export const SITE_URL = "https://www.revyontech.com";
export const WHATSAPP_NUMBER = "224627330709";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
