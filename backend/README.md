# Backend - Revyon Tech

Serveur Express.js pour l'API de Revyon Tech.

## 📦 Installation

```bash
cd backend
npm install
```

## 🚀 Démarrage

```bash
npm start
```

ou en mode développement :

```bash
npm run dev
```

Le serveur sera accessible sur `http://localhost:5000`.

## ⚙️ Configuration

Créez un fichier `.env` basé sur `.env.example` :

```bash
cp .env.example .env
```

### Variables d'environnement essentielles

```env
# Serveur
SERVER_PORT=5000
NODE_ENV=development

# MySQL Database
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=revyontech

# Admin API Key
ADMIN_API_KEY=votre-clé-secrète

# Email SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@revyontech.com

# URLs
CORS_ORIGIN=http://localhost:5173
```

## 📊 API Endpoints

### Health Check
```
GET /api/health
```

### Soumettre un message de contact
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
  "message": "Votre message a été envoyé avec succès...",
  "id": 1234567890
}
```

### Récupérer les messages (Admin)
```
GET /api/admin/contacts
Authorization: Bearer <ADMIN_API_KEY>
```

Retourne la liste de tous les messages stockés en base de données.

## 🗄️ Base de données

### Initialisation MySQL

1. Installez MySQL localement si ce n'est pas fait.
2. Vérifiez que MySQL est accessible sur `127.0.0.1:3306`.
3. Le serveur créera automatiquement la base `revyontech` et la table `contacts`.

### Alternative : SQLite (pour développement)

Pour utiliser SQLite au lieu de MySQL en développement, modifiez `server.js`.

### Mode développement

Si MySQL n'est pas disponible, le backend bascule automatiquement en stockage en mémoire (idéal pour le développement local).

## 📧 Email

### Configuration Gmail

1. Créez une [App Password](https://myaccount.google.com/apppasswords) si vous avez l'authentification à 2 facteurs.
2. Dans `.env`, mettez à jour :
   ```env
   SMTP_USER=votre-email@gmail.com
   SMTP_PASS=votre-app-password
   ```

### Alternative : Mailtrap

Pour tester les emails en développement, utilisez [Mailtrap](https://mailtrap.io).

## 🔒 Sécurité

- Validation côté serveur avec `validator.js`
- Échappement des entrées utilisateur
- Protection CORS
- Authentification admin par Bearer token
- Préparation des requêtes SQL (protection contre SQL injection)

## 📁 Structure

```
backend/
├── server.js             # Application Express
├── db-schema.sql         # Schéma MySQL
├── .env                  # Variables d'environnement (secret)
├── .env.example          # Template pour .env
└── package.json          # Dépendances
```

## 🐛 Troubleshooting

### "MySQL not available"
- Vérifiez que MySQL est installé et en cours d'exécution.
- Le backend bascule automatiquement en stockage en mémoire.

### "SMTP error: Greeting never received"
- Vérifiez vos identifiants SMTP.
- Vérifiez la connectivité réseau vers le serveur SMTP.

### "CORS error"
- Vérifiez que `CORS_ORIGIN` dans `.env` correspond à l'URL du frontend.
