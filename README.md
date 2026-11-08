# Revyon Tech — site web

Site officiel de Revyon Tech : **https://www.revyontech.com**

Ce fichier est la documentation unique du projet. Il remplace les anciens
`LISEZMOI.md`, `README_SETUP.md`, `DEPLOYMENT.md`, `GUIDE_TEST.md`,
`CHECKLIST_CONFORMITE.md`, `RESUME_TRAVAIL.md`, `HISTORIQUE_MODIFICATIONS.md`
et `ATTRIBUTIONS.md`, qui décrivaient une architecture abandonnée (serveur
Express, base MySQL, hébergement Railway/Render).

---

## 1. Architecture

```text
frontend/
  index.html            Gabarit : métadonnées, JSON-LD, Google Analytics
  src/
    main.tsx            Point d'entrée client
    entry-server.tsx    Rendu serveur, utilisé par le pré-rendu
    app/
      routes.tsx        Routes + gestion du défilement
      pages/            Accueil, À propos, Services, Réalisations, Contact, Confidentialité
      components/       Navbar, Footer, Logo, FloatingWhatsApp, ProductPreview
      data/products.ts  Les produits édités par Revyon Tech (source unique)
      hooks/            usePageMeta
      analytics.ts      Événements Google Analytics 4
    styles/             fonts.css · tailwind.css · theme.css
  public/               favicons, logo, og-image, robots.txt, sitemap.xml, llms.txt
  api/contact.js        Fonction serverless Vercel du formulaire de contact
  prerender.mjs         Pré-rendu (SSG) de chaque route après le build
  vercel.json           cleanUrls, en-têtes de sécurité, cache des assets
guidelines/             Consignes projet
```

**Il n'y a pas de serveur backend.** Toute l'API tient dans une fonction
serverless Vercel, `frontend/api/contact.js`, déployée sur le même domaine
que le site. Le front appelle donc toujours des chemins relatifs
(`/api/...`), et `API_URL` vaut volontairement `""` dans
`src/app/config.ts` : cela évite qu'une ancienne variable d'environnement
pointant vers un hébergeur disparu ne soit injectée dans le build.

**Stack** : React 18, TypeScript, Vite 6, React Router 7, Tailwind CSS 4,
lucide-react. Sept dépendances au total — toute dépendance ajoutée doit
être réellement importée.

---

## 2. Démarrage local

```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
```

La fonction de contact ne tourne pas avec `npm run dev` : en local, le
formulaire échoue et affiche son message de repli (contact par WhatsApp).
Pour la tester, utiliser `vercel dev` ou déployer une préversion.

---

## 3. Build et pré-rendu

```bash
cd frontend
npm run build        # build client + build SSR + pré-rendu
```

Le build enchaîne trois étapes : Vite construit le client, puis le bundle
SSR, puis `prerender.mjs` écrit un `index.html` complet par route. Chaque
page est donc lisible sans exécuter de JavaScript — par Google comme par
les robots d'IA.

> **À retenir.** Une route absente de la liste `pages` de `prerender.mjs`
> **renvoie 404 en production**. Il n'y a pas de repli SPA : la route
> existe côté client, mais le serveur ne sert aucun fichier pour elle.
> C'est exactement ce qui est arrivé à `/portfolio`.

### Ajouter une page : la liste complète

1. Créer le composant dans `src/app/pages/`
2. Déclarer la route dans `src/app/routes.tsx`
3. Appeler `usePageMeta(titre, description, chemin)` dans le composant
4. **Ajouter la route à `pages` dans `prerender.mjs`**
5. Ajouter l'URL à `public/sitemap.xml`
6. Ajouter l'entrée à `public/llms.txt`
7. Vérifier que `public/robots.txt` ne la bloque pas
8. Ajouter le lien dans `Navbar.tsx` et `Footer.tsx`

---

## 4. Déploiement

Vercel, avec **`frontend/` comme répertoire racine** du projet. C'est
`frontend/vercel.json` qui s'applique ; ne pas recréer de `vercel.json` à
la racine du dépôt, il prendrait le relais sans en-têtes de sécurité ni
cache des assets.

Chaque poussée sur `main` déclenche un déploiement. Les branches
obtiennent une préversion.

### Variables d'environnement (sur Vercel)

| Variable | Rôle | Défaut |
| --- | --- | --- |
| `SMTP_HOST` | Serveur SMTP | `smtp.zoho.com` |
| `SMTP_PORT` | Port SMTP | `587` |
| `SMTP_USER` | Identifiant SMTP | — |
| `SMTP_PASS` | Mot de passe SMTP | — |
| `SMTP_FROM` | Expéditeur affiché | `Revyon Tech <SMTP_USER>` |
| `CONTACT_EMAIL` | Destinataire des demandes | `contact@revyontech.com` |
| `CORS_ORIGIN` | Origines autorisées, séparées par des virgules | les deux domaines de production |

Sans `SMTP_USER` et `SMTP_PASS`, la fonction valide la soumission et
répond correctement, mais n'envoie aucun e-mail.

---

## 5. Formulaire de contact

`frontend/api/contact.js` reçoit la soumission, la valide, puis envoie deux
e-mails : la demande à Revyon Tech et un accusé de réception au visiteur.

Protections en place : liste blanche CORS, champ piège (honeypot),
limitation à 5 envois par IP et par quart d'heure, validation stricte des
champs et échappement HTML avant insertion dans l'e-mail.

> **Les demandes ne sont stockées nulle part.** Elles n'existent que dans
> la boîte e-mail. Si un envoi SMTP échoue, la demande est perdue sans
> trace. Prévoir un stockage dès que le volume le justifie.

---

## 6. Règles de design

### Couleurs

Le bleu clair de la marque, `#0EA5E9`, ne donne que **2,77:1** contre du
blanc : il est sous le seuil WCAG AA (4,5:1 pour du texte courant, 3:1
pour un grand titre) et devient illisible sur un téléphone en plein
soleil. Il est désormais réservé aux **aplats décoratifs**.

| Usage | Couleur | Contraste |
| --- | --- | --- |
| Texte, titres, fonds porteurs de texte | `#0C4A6E` | 9,46:1 sur blanc |
| Fin des dégradés de héros | `#0E7490` | 5,36:1 avec du blanc |
| Fin des dégradés de boutons bleus | `#075985` | 7,56:1 avec du blanc |
| Boutons orange | `#C2410C` → `#9A3412` | 5,18:1 et 7,31:1 |
| Texte sur badge bleu clair | `#075985` sur `#E0F2FE` | 6,59:1 |
| Accent clair sur fond sombre | `#FDBA74`, `#BAE6FD`, `#E0F2FE` | 3,18:1 à 4,67:1 |
| Palette secondaire | `#6D28D9` `#047857` `#BE185D` `#4338CA` `#B45309` `#0E7490` | ≥ 4,79:1 |

**Piège à connaître** : un même mot d'accent n'a pas la même couleur selon
son fond. Sur fond clair il faut la version sombre (`#C2410C`), sur le
héros sombre la version claire (`#FDBA74`). Inverser les deux donne 1,03:1.

Après toute modification de couleur, relancer l'audit décrit en section 7.

### Mise en page

Les styles sont écrits en style en ligne, Tailwind ne servant que pour la
grille et les points de rupture. Aucun élément décoratif ne doit créer de
défilement horizontal : `theme.css` pose un `overflow-x: hidden` de
sécurité, mais la cause est à corriger à la source.

---

## 7. Vérifications avant mise en ligne

```bash
cd frontend && npm run build
npx serve dist -l 4173      # sans -s : ce drapeau sert l'accueil pour TOUTES les routes
```

Puis, sur les six pages, en 390 px et en 1440 px :

- [ ] Chaque route renvoie son propre titre (pas celui de l'accueil)
- [ ] Aucune erreur dans la console du navigateur
- [ ] `document.documentElement.scrollWidth` ne dépasse pas `clientWidth`
- [ ] Les liens « Devis gratuit » défilent jusqu'au formulaire
- [ ] Le formulaire affiche ses erreurs de validation et son message de succès
- [ ] Le bouton WhatsApp flottant ouvre la bonne conversation
- [ ] Les liens du pied de page restent visibles au survol
- [ ] Les liens externes vers les trois produits s'ouvrent correctement
- [ ] Contraste : aucun texte sous 4,5:1 (3:1 pour les grands titres)

Un audit de contraste automatisé parcourt chaque nœud de texte et compare
la couleur rendue à son fond effectif ; il reste un faux positif connu, le
mot en dégradé du titre d'accueil (`background-clip: text`), dont le rendu
réel est lisible.

---

## 8. Référencement

- **Pré-rendu** : chaque page existe en HTML complet, sans JavaScript.
- **`public/robots.txt`** : autorise explicitement les robots d'IA
  (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot…) et bloque `/api`.
- **`public/sitemap.xml`** : les six pages publiques.
- **`public/llms.txt`** : résumé de l'entreprise et des produits pour les
  assistants IA.
- **JSON-LD** dans `index.html` : `Organization` / `ProfessionalService`,
  un nœud `SoftwareApplication` par produit, `WebSite` et `FAQPage`.

Tenir ces cinq éléments cohérents entre eux : une page ajoutée à
`prerender.mjs` mais absente du sitemap ne sera pas découverte.

---

## 9. Produits édités par Revyon Tech

| Produit | Domaine | Objet |
| --- | --- | --- |
| Revyon School | revyonschool.com | Gestion scolaire, du préscolaire à la terminale |
| Revyon Gestock | revyongestock.com | Stock, ventes, achats, trésorerie |
| MarkaGest | markagest.com | Markaz et écoles coraniques, suivi du hifz |

Ils sont décrits dans `src/app/data/products.ts`, source unique utilisée
par l'accueil, la page Réalisations, le pied de page et le JSON-LD.
Modifier ce fichier met tout à jour d'un coup.

---

## 10. Historique

- **2024** — Création de Revyon Tech, première version du site.
- **Mi-2026** — Passage à Vite + pré-rendu, abandon du serveur Express et
  de MySQL au profit d'une seule fonction serverless. Travail SEO :
  robots.txt pour les IA, llms.txt, JSON-LD, sitemap.
- **Novembre 2026** — Ajout des trois produits et de la page Réalisations ;
  ajout de LinkedIn ; mise aux normes de contraste WCAG AA ; Inter
  auto-hébergée ; suppression du backend, de la page admin et de
  53 dépendances inutilisées ; fusion de la documentation dans ce fichier.

---

## 11. Attributions

Photographies : [Unsplash](https://unsplash.com), sous
[licence Unsplash](https://unsplash.com/license).

Le projet a été initialisé à partir d'un export Figma Make incluant des
composants [shadcn/ui](https://ui.shadcn.com/) sous licence MIT. Ces
composants n'étaient pas utilisés et ont été retirés en novembre 2026.

---

## 12. Contact

- contact@revyontech.com
- +224 627 33 07 09 · +224 613 05 99 38 (WhatsApp)
- Conakry, Guinée
- [LinkedIn](https://www.linkedin.com/company/revyon-tech/) · [Facebook](https://www.facebook.com/share/198dU1h9Gz/)
