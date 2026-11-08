# Revyon Tech

Site web de Revyon Tech — https://www.revyontech.com

## Structure

```text
frontend/           Application React + Vite + TypeScript (tout le site)
  src/app/pages/      Pages : accueil, à propos, services, réalisations, contact, confidentialité
  src/app/data/       Données des produits édités par Revyon Tech
  api/contact.js      Fonction serverless Vercel du formulaire de contact
  prerender.mjs       Pré-rendu (SSG) de chaque route après le build
guidelines/         Consignes projet
```

Il n'y a **pas de serveur backend**. L'API se limite à une fonction serverless
Vercel, `frontend/api/contact.js`, déployée sur le même domaine que le site :
le front appelle donc toujours des chemins relatifs (`/api/...`).

## Développement

```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
cd frontend
npm run build        # build client + build SSR + pré-rendu
```

Le build produit `dist/`, avec un `index.html` complet par route. **Toute
nouvelle route doit être ajoutée à la liste `pages` de `prerender.mjs`** :
sans cela elle renvoie 404 en production, car il n'y a pas de repli SPA.

## Déploiement

Vercel, avec `frontend/` comme répertoire racine du projet. La configuration
(`cleanUrls`, en-têtes de sécurité, cache des assets) vit dans
`frontend/vercel.json`.

## Variables d'environnement (fonction de contact)

| Variable | Rôle |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Envoi des e-mails |
| `SMTP_FROM`, `CONTACT_EMAIL` | Expéditeur et destinataire |
| `CORS_ORIGIN` | Origines autorisées, séparées par des virgules |

Sans configuration SMTP, la fonction valide la soumission sans envoyer d'e-mail.

## Couleurs

Le texte et les fonds porteurs de texte utilisent le bleu profond `#0C4A6E`
(9,46:1 sur blanc). Le bleu clair `#0EA5E9` ne doit plus servir qu'à des
aplats décoratifs : en texte il ne donne que 2,77:1, sous le seuil WCAG AA.
