---
name: seo-ia-visibility
description: >-
  Rendre un site web découvrable et correctement décrit par les moteurs de
  recherche ET les assistants IA (ChatGPT, Claude, Perplexity, Grok, Gemini).
  À utiliser quand un site — surtout une SPA rendue côté client (React / Vite /
  Vue, déployée sur Vercel/Netlify) — est invisible, absent ou mal résumé par
  les IA et les moteurs : met en place le pré-rendu SSG, les données
  structurées JSON-LD, le robots.txt pour crawlers IA, llms.txt, sitemap.xml,
  les balises meta, et les signaux de consensus hors-site. Déclencheurs :
  « le site n'apparaît pas sur Google/ChatGPT », « l'IA ne connaît pas mon
  entreprise », « référencement SEO/GEO/AEO », « visibilité IA », « SSG ».
---

# Visibilité SEO + IA (GEO / AEO)

Playbook reproductible pour qu'un site soit **lu, indexé et cité correctement**
par les moteurs de recherche classiques (Google, Bing) **et** par les IA
génératives (ChatGPT, Claude, Perplexity, Grok, Gemini). Éprouvé sur le site
Revyon Tech ; conçu pour être rejoué sur n'importe quel site (ex. Revyon School).

## L'insight central (à comprendre avant tout)

Une **SPA rendue côté client** (React/Vite/Vue sans SSR) sert un HTML quasi vide
(`<div id="root"></div>` + un bundle JS). Le contenu n'existe qu'**après**
exécution du JavaScript dans un navigateur.

- Les moteurs modernes (Googlebot) *peuvent* exécuter le JS, mais avec délai et
  budget limité.
- **La plupart des crawlers d'IA n'exécutent PAS le JavaScript** (GPTBot,
  ClaudeBot, PerplexityBot, Bytespider…). Ils lisent le HTML brut. Si le HTML
  brut est vide, **l'IA ne voit rien** — d'où « l'IA ne connaît pas mon site ».

➡️ **La correction la plus importante est le pré-rendu (SSG)** : générer, au
build, un `index.html` complet par page. Tout le reste (JSON-LD, robots, llms,
sitemap) amplifie un contenu qui doit d'abord être **présent dans le HTML brut**.

Pour vérifier si un site souffre de ce problème :
```bash
curl -sA "GPTBot" https://EXEMPLE.com/ | grep -c "<div id=\"root\"></div>"
# 1 et une page quasi vide  → CSR pur, invisible pour les IA → pré-rendu requis
```

## Les 3 acronymes

- **SEO** (Search Engine Optimization) — être trouvé sur Google/Bing.
- **GEO / AEO** (Generative / Answer Engine Optimization) — être **cité** par
  les IA quand un utilisateur pose une question. Repose sur : HTML brut lisible,
  données structurées, et **corroboration multi-sources** (le « signal de
  consensus » : une IA affirme un fait d'autant plus volontiers qu'il est
  confirmé à plusieurs endroits).

## Playbook — dans l'ordre

Faire les phases dans l'ordre : la phase 1 conditionne l'efficacité des autres.

### Phase 1 — Pré-rendu SSG (le socle)

Objectif : chaque route publique doit produire un `index.html` contenant le
HTML complet de la page, hydraté ensuite côté client (pas de re-montage).

Pour une app **React + Vite + react-router**, reproduire le montage éprouvé
(fichiers modèles dans `templates/`) :

1. `src/entry-server.tsx` → `renderToString(<StaticRouter location={url}>…)`.
   Voir `templates/entry-server.tsx`.
2. `src/main.tsx` → remplacer `createRoot(...).render` par **`hydrateRoot`** +
   `<BrowserRouter>`. Voir `templates/main.tsx`.
3. `prerender.mjs` à la racine → boucle sur les routes, injecte le HTML rendu +
   les meta par page dans `dist/index.html`, écrit `dist/<route>/index.html`.
   Voir `templates/prerender.mjs` (adapter `SITE_URL` et la table `pages`).
4. `package.json` → build en 3 temps :
   ```json
   "build": "vite build && vite build --ssr src/entry-server.tsx --outDir dist-server && node prerender.mjs"
   ```
5. Le composant racine `<App/>` doit être partageable entre `StaticRouter`
   (serveur) et `BrowserRouter` (client).

⚠️ **Pièges d'hydratation** : le HTML pré-rendu doit être identique au premier
rendu client, sinon React jette une erreur d'hydratation et remplace le contenu.
- Tout `useState` dont la valeur initiale finit dans le HTML doit démarrer à la
  **valeur finale**, pas à un placeholder. Ex. un compteur animé initialisé à
  `useState("0")` fige « 0 » dans le HTML brut (une IA lit « 0 clients ») —
  l'initialiser à la valeur réelle (`"100%"`), l'animation repart de 0 au
  montage client une fois visible.
- Pas d'accès `window`/`document` pendant le rendu (uniquement dans `useEffect`).

Autres stacks : Next.js/Nuxt/Astro/SvelteKit → activer le rendu statique/SSR
natif (`output: 'export'`, `prerender`, etc.). Le principe est identique :
**du contenu dans le HTML brut**.

### Phase 2 — Données structurées JSON-LD (le langage des machines)

Un bloc `<script type="application/ld+json">` dans le `<head>` (donc **invisible
pour les humains**, lu uniquement par les machines). Il décrit l'entité de façon
non ambiguë. Modèle complet et paramétrable : `templates/jsonld.html`.

Nœuds à inclure dans un `@graph` :
- **`Organization`** (+ un type précis : `ProfessionalService`,
  `EducationalOrganization` pour une école, `LocalBusiness`…) : `name`,
  `alternateName`, `url`, `logo`, `description`, `email`, `telephone`,
  `contactPoint[]`, `address` (`PostalAddress`), `geo`, `openingHours`,
  `areaServed`, `foundingDate`, `sameAs[]` (profils officiels), `hasOfferCatalog`
  (services / formations).
- **Dirigeants** : `founder` + `employee[]` (chacun `Person` avec `name` +
  `jobTitle`). C'est ce qui permet à une IA de répondre « le DG de X est … »
  **sans** afficher les noms sur toutes les pages (ils restent visibles pour les
  humains uniquement sur la page « À propos »).
- **`WebSite`** (avec `publisher` → l'Organization).
- **`FAQPage`** : questions/réponses « Qu'est-ce que X ? », « Où est X ? »,
  « Quels services ? », « Comment contacter ? ». **Idéal pour le GEO** : les IA
  y puisent des réponses toutes faites.
- Pour une **école** : ajouter `Course` / `OfferCatalog` de formations, et
  éventuellement `EducationalOccupationalProgram`.

Règles : mêmes `@id` réutilisés pour lier les nœuds ; le JSON-LD doit rester
**cohérent avec le contenu visible** (ne jamais inventer) ; valider le résultat
(voir Vérification).

### Phase 3 — Fichiers de contrôle des crawlers

- **`public/robots.txt`** : autoriser explicitement les bots IA **et** de
  recherche, pointer le sitemap, masquer l'admin/API/pages non prêtes. Modèle :
  `templates/robots.txt`. Bots à autoriser : `OAI-SearchBot`, `ChatGPT-User`,
  `GPTBot`, `PerplexityBot`, `Perplexity-User`, `ClaudeBot`, `Claude-SearchBot`,
  `Claude-User`, `anthropic-ai`, `Google-Extended`, `Applebot(-Extended)`,
  `Bytespider`, `Meta-ExternalAgent`, `cohere-ai`, `Googlebot`, `Bingbot`.
- **`public/llms.txt`** : résumé Markdown de l'entité à destination des IA
  (description en une phrase, coordonnées, liste des pages avec liens). Modèle :
  `templates/llms.txt`.
- **`public/sitemap.xml`** : toutes les pages publiques (exclure les pages
  masquées). Modèle : `templates/sitemap.xml`.

### Phase 4 — Balises meta par page

Dans le `<head>` (le `prerender.mjs` les réécrit par route) : `<title>` unique
et descriptif, `meta description`, `link canonical`, Open Graph (`og:title/
description/image/url/type/site_name/locale`), Twitter Card, `og:image`
1200×630. Titres = « [Page] | [Marque] — [proposition de valeur + lieu] ».

### Phase 5 — Signaux de consensus hors-site (indispensable pour les personnes)

Les IA n'affirment un fait sensible (ex. **le nom d'un dirigeant**) que s'il est
**corroboré ailleurs**. Le code seul ne suffit pas. À mettre en place par le
client (le code ne peut pas le faire) :
- **LinkedIn** : page entreprise + profils des dirigeants mentionnant l'employeur
  et le titre. → une fois créés, ajouter les URLs dans `sameAs` (Organization) et
  en `sameAs` sur chaque `Person`.
- **Wikidata**, **Google Business Profile**, annuaires locaux, presse — avec un
  **NAP cohérent** (Name / Address / Phone identiques partout).
- ⏳ **Délai** : l'indexation et le recrawl des IA prennent des jours à semaines.
  Un déploiement correct n'est pas visible instantanément.

## Vérification (toujours, après build)

```bash
# 1. Le contenu est-il dans le HTML brut de chaque route pré-rendue ?
grep -o "UN_TEXTE_ATTENDU" dist/services/index.html

# 2. Le JSON-LD est-il valide ?
node -e 'const fs=require("fs");const m=fs.readFileSync("dist/index.html","utf8").match(/ld\+json">([\s\S]*?)<\/script>/);JSON.parse(m[1]);console.log("JSON-LD valide")'

# 3. Pas d'erreur d'hydratation : servir dist/ et ouvrir la console (aucune
#    "hydration mismatch"). Ex. npx serve dist puis charger chaque page.
```
Outils externes (côté client) : Google Rich Results Test, Schema.org Validator,
`site:domaine.com` sur Google, et tester une question réelle sur ChatGPT/Perplexity
en mode recherche web.

## Checklist de reproduction (pour Revyon School)

- [ ] Diagnostic : `curl -A GPTBot` → le HTML brut est-il vide ? (si oui → SSG)
- [ ] Phase 1 : SSG en place, chaque route génère son `index.html`, hydratation
      sans erreur, aucun `useState` placeholder figé dans le HTML.
- [ ] Phase 2 : JSON-LD `Organization`/`EducationalOrganization` + `WebSite` +
      `FAQPage` + `founder`/`employee`, cohérent avec le visible, validé.
- [ ] Phase 3 : `robots.txt` (bots IA), `llms.txt`, `sitemap.xml` (URLs réelles).
- [ ] Phase 4 : `<title>`/description/canonical/OG uniques par page.
- [ ] Phase 5 : LinkedIn + Wikidata + Google Business, NAP cohérent → URLs
      ajoutées au `sameAs`.
- [ ] Adapter tous les placeholders : domaine, nom, services→formations,
      coordonnées, dirigeants.

## Ce qui change pour une école (Revyon School)

- Type d'entité : `EducationalOrganization` (au lieu de `ProfessionalService`).
- `hasOfferCatalog` → **catalogue de formations/cours** (`Course`).
- FAQ orientée : « Quelles formations ? », « Tarifs / durée ? », « Comment
  s'inscrire ? », « Certifiante ? », « En ligne ou présentiel ? ».
- `llms.txt` : lister les programmes et la page d'inscription.
- Signaux hors-site : profils LinkedIn des formateurs, avis Google.
