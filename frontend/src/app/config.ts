// L'API tourne en fonction serverless Vercel, co-déployée avec le site sur
// le même domaine. On appelle donc toujours des chemins relatifs (/api/...).
// Pas de dépendance à VITE_API_URL : ça évite qu'une ancienne variable
// d'environnement (ex. URL Railway morte) ne soit injectée dans le build.
export const API_URL = "";

export const SITE_URL = "https://www.revyontech.com";
export const WHATSAPP_NUMBER = "224627330709";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
