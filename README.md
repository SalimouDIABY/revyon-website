
# Revyon Tech

Site web et API pour Revyon Tech, avec un frontend Vite/React et un backend Express.js.

## 📌 Présentation

Ce dépôt contient :
- `frontend/` : application client Vite + React + TypeScript
- `backend/` : API Express.js pour la gestion des contacts et l’envoi d’e-mails

## 🚀 Installation

### Frontend
```bash
cd frontend
npm install
```

### Backend
```bash
cd backend
npm install
```

## ▶️ Démarrage

### Lancer le frontend
```bash
cd frontend
npm run dev
```

### Lancer le backend
```bash
cd backend
npm start
```

Le frontend tourne généralement sur `http://localhost:5173` et le backend sur `http://localhost:5000`.

## ⚙️ Configuration

Copiez le fichier `.env.example` dans `backend/.env` puis adaptez les valeurs :
```bash
cd backend
copy .env.example .env
```

Principales variables à définir :
- `SERVER_PORT` : port du backend
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` : configuration MySQL
- `ADMIN_API_KEY` : clé pour accéder aux endpoints admin
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL` : configuration email
- `CORS_ORIGIN` : URL du frontend autorisé

## 📂 Structure du dépôt

```text
frontend/      # Application frontend React + Vite
backend/       # API Express.js et configuration serveur
guidelines/    # Documentation et consignes projet
```

## 💡 Notes

- Le backend peut basculer en stockage mémoire si MySQL n’est pas disponible.
- Utilise une adresse e-mail valide ou un service SMTP de test pour l’envoi des messages de contact.

## 🧪 Tests locaux

1. Démarre d’abord le backend
2. Démarre ensuite le frontend
3. Vérifie que le formulaire de contact fonctionne et que les requêtes vers `/api/contact` passent
  