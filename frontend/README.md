# Frontend - Revyon Tech

Application React/Vite pour le site web de Revyon Tech.

## 📦 Installation

```bash
cd frontend
npm install
```

## 🚀 Démarrage en développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173` ou `http://localhost:5174` (si 5173 est utilisé).

## 🏗️ Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

## 📋 Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/       # Composants réutilisables
│   │   ├── pages/           # Pages principales
│   │   └── routes.tsx       # Configuration des routes
│   ├── assets/              # Images, vidéos
│   ├── styles/              # CSS global, Tailwind
│   └── main.tsx             # Entrée principale
├── public/                  # Assets statiques
├── index.html              # Index HTML
├── vite.config.ts          # Configuration Vite
└── postcss.config.mjs       # Configuration PostCSS
```

## 🔗 API

Le frontend communique avec le backend sur `http://localhost:5000`.

L'URL de l'API peut être configurée via la variable d'environnement `VITE_API_URL` dans un fichier `.env` du frontend:

```
VITE_API_URL=http://localhost:5000
```

## 📱 Pages disponibles

- `/` - Accueil
- `/a-propos` - À propos
- `/services` - Services
- `/portfolio` - Portfolio
- `/contact` - Formulaire de contact
- `/admin` - Espace administrateur
- `/politique-confidentialite` - Politique de confidentialité
