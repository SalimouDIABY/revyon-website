# Revyon Tech - Site Web Officiel

Site web professionnel pour Revyon Tech - Votre partenaire technologique en Guinée.

## 🚀 Stack Technologique

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router

**Backend:**
- Node.js
- Express
- Cors
- Validator

**Services:**
- Google Analytics (à configurer)
- Sitemap & Robots.txt générés automatiquement

## 📋 Configuration

### 1. Variables d'environnement

Copie le fichier `.env.example` vers `.env`:

```bash
cp .env.example .env
```

Configure les valeurs selon ton environnement:
- `SERVER_PORT`: port du serveur backend (défaut: 5000)
- `CLIENT_URL`: URL du frontend pour CORS

### 2. Installation des dépendances

```bash
npm install
```

## 🏃 Démarrage du projet

### Mode développement (Frontend + Backend simultanément):

```bash
npm run dev:all
```

Cela démarre:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

### Ou séparément:

**Frontend seul:**
```bash
npm run dev
```

**Backend seul:**
```bash
npm run server
```

## 📁 Structure du projet

```
.
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── styles/
│   └── main.tsx
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── server.js          # Backend Node/Express
├── package.json
├── .env.example
└── vite.config.ts
```

## 📄 Conformité au Cahier des Charges

- ✅ **5 pages principales**: Accueil, À propos, Services, Portfolio, Contact
- ✅ **7 services détaillés**: Web, Logiciel, Design, Marketing, Multimedia, Formation, Matériel
- ✅ **Bouton WhatsApp flottant**: Visible sur toutes les pages
- ✅ **Formulaire de contact**: Validé et connecté au backend
- ✅ **Politique de confidentialité**: Accessible depuis le footer
- ✅ **SEO**: Métadonnées, robots.txt, sitemap.xml
- ✅ **Responsive design**: Mobile first, breakpoints multiples
- ✅ **API REST**: Endpoint POST /api/contact pour les soumissions

## 📧 Formulaire de Contact

Le formulaire envoie les données à: `POST http://localhost:5000/api/contact`

Champs validés:
- Nom (requis)
- Email (requis, validé)
- Téléphone (requis, format international)
- Service (requis)
- Message (requis, min 10 caractères)

## 🔒 Sécurité

- Validation côté client ET côté serveur
- Protection CORS
- Échappement des entrées utilisateur
- Validation des formats de données

## 🌐 Endpoints API

### Health Check
```
GET /api/health
```

### Soumettre un formulaire de contact
```
POST /api/contact
Content-Type: application/json

{
  "name": "Nom Prénom",
  "email": "email@example.com",
  "phone": "+224 622 123 456",
  "service": "web",
  "subject": "",
  "message": "Votre message..."
}
```

**Réponse (200 OK):**
```json
{
  "success": true,
  "message": "Votre message a été envoyé...",
  "id": 1234567890
}
```

**Erreur (400 Bad Request):**
```json
{
  "success": false,
  "errors": ["Le nom est obligatoire", "L'email est invalide"]
}
```

### Récupérer les messages de contact
```
GET /api/admin/contacts
Authorization: Bearer <ADMIN_API_KEY>
```

- Protégé par `ADMIN_API_KEY`
- Renvoie la liste des messages stockés dans MySQL
- Utilisé par la page admin de l'application: `/admin`

## 🛠️ Build pour la production

```bash
npm run build
```

Cela génère un dossier `dist/` optimisé avec le frontend compilé.

## 📞 Contact

**Email**: revyontech@gmail.com
**WhatsApp**: +224 627330709
**Adresse**: Conakry, Guinée

## 📝 License

Tous droits réservés © 2026 Revyon Tech
