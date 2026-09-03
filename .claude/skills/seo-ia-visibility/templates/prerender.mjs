// Pré-rendu (SSG) — exécuté APRÈS les builds Vite (client + serveur).
// Pour chaque route, génère un dist/<route>/index.html contenant le HTML
// complet de la page, lisible sans exécuter de JavaScript (crawlers IA :
// GPTBot, ClaudeBot, PerplexityBot… + moteurs classiques).
//
// À adapter : SITE_URL et la table `pages` (title + description par route).
// Le build correspondant (package.json) :
//   "build": "vite build && vite build --ssr src/entry-server.tsx --outDir dist-server && node prerender.mjs"
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");
const SITE_URL = "{{SITE_URL}}";

const { render } = await import(
  path.join(__dirname, "dist-server", "entry-server.js")
);

// Titre + description par route (alignés sur le <head> côté client).
// N'inclure QUE les routes publiques (exclure les pages masquées).
const pages = {
  "/": {
    title: "{{TITRE_ACCUEIL}}",
    description: "{{DESC_ACCUEIL}}",
  },
  "/a-propos": {
    title: "{{TITRE_APROPOS}}",
    description: "{{DESC_APROPOS}}",
  },
  "/services": {
    title: "{{TITRE_SERVICES}}",
    description: "{{DESC_SERVICES}}",
  },
  "/contact": {
    title: "{{TITRE_CONTACT}}",
    description: "{{DESC_CONTACT}}",
  },
  "/politique-confidentialite": {
    title: "{{TITRE_LEGAL}}",
    description: "{{DESC_LEGAL}}",
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
