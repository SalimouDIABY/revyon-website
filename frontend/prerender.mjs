// Pré-rendu (SSG) — exécuté après les builds Vite (client + serveur).
// Pour chaque route, génère un index.html contenant le HTML complet de la
// page, afin que le contenu soit lisible sans exécuter de JavaScript
// (robots d'IA : GPTBot, ClaudeBot, PerplexityBot… + moteurs classiques).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");
const SITE_URL = "https://www.revyontech.com";

const { render } = await import(
  path.join(__dirname, "dist-server", "entry-server.js")
);

// Titre + description par route (alignés sur usePageMeta côté client).
const pages = {
  "/": {
    title:
      "Revyon Tech — Entreprise informatique en Guinée | Développement web, logiciels & digital",
    description:
      "Revyon Tech, entreprise informatique à Conakry : création de sites web, développement de logiciels et d'applications mobiles, marketing digital, maintenance et matériel informatique en Guinée.",
  },
  "/a-propos": {
    title: "À propos | Revyon Tech — Société informatique en Guinée",
    description:
      "Découvrez Revyon Tech, entreprise technologique guinéenne spécialisée en développement web, logiciels, applications mobiles et transformation digitale à Conakry.",
  },
  "/services": {
    title:
      "Nos services | Création de sites web, logiciels et marketing digital en Guinée — Revyon Tech",
    description:
      "Création de sites web professionnels, développement de logiciels et applications mobiles, design graphique, marketing digital, formation et matériel informatique en Guinée.",
  },
  "/portfolio": {
    title: "Portfolio | Nos réalisations web et logicielles — Revyon Tech",
    description:
      "Découvrez les projets réalisés par Revyon Tech : sites web, applications et solutions digitales pour des entreprises en Guinée et en Afrique de l'Ouest.",
  },
  "/contact": {
    title: "Contact | Revyon Tech — Entreprise informatique à Conakry, Guinée",
    description:
      "Contactez Revyon Tech pour votre projet web, logiciel ou marketing digital en Guinée. Réponse en moins de 24h. Téléphone et WhatsApp : +224 627 33 07 09.",
  },
  "/politique-confidentialite": {
    title: "Politique de confidentialité | Revyon Tech",
    description:
      "Politique de confidentialité de Revyon Tech : collecte, utilisation et protection de vos données personnelles.",
  },
};

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setMetaContent(html, selectorAttr, selectorValue, content) {
  const safe = escapeHtml(content);
  const re = new RegExp(
    `(<meta\\s+${selectorAttr}="${selectorValue}"\\s+content=")[^"]*(")`
  );
  return html.replace(re, `$1${safe}$2`);
}

let count = 0;
for (const [route, meta] of Object.entries(pages)) {
  const appHtml = await render(route);
  const canonical = `${SITE_URL}${route}`;

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`
  );
  html = setMetaContent(html, "name", "description", meta.description);
  html = setMetaContent(html, "property", "og:title", meta.title);
  html = setMetaContent(html, "property", "og:description", meta.description);
  html = setMetaContent(html, "property", "og:url", canonical);
  html = setMetaContent(html, "name", "twitter:title", meta.title);
  html = setMetaContent(html, "name", "twitter:description", meta.description);
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${canonical}$2`
  );

  const outDir = route === "/" ? distDir : path.join(distDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
  count++;
  console.log(`pré-rendu : ${route} -> ${path.relative(distDir, path.join(outDir, "index.html"))}`);
}

console.log(`\n✓ ${count} pages pré-rendues dans dist/`);
