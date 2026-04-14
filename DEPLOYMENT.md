# 🚀 Guide de Déploiement - Revyon Tech

## Configuration Production

Avant le déploiement, assurez-vous de configurer les fichiers `.env` correctement.

### ⚙️ Backend (.env)

Copier `.env.example` en `.env` et remplir les valeurs réelles :

```bash
cp backend/.env.example backend/.env
```

#### Valeurs critiques à configurer :

```env
# Port du serveur (généralement 5000 en local, port défini par l'hébergeur en prod)
SERVER_PORT=5000
NODE_ENV=production

# Email - SMTP pour les notifications
SMTP_HOST=smtp.gmail.com       # Ou votre service SMTP
SMTP_PORT=587
SMTP_USER=revyontech@gmail.com # Votre email Gmail
SMTP_PASS=your-app-password    # App Password (pas le mot de passe Gmail)
SMTP_FROM=noreply@revyontech.com
CONTACT_EMAIL=revyontech@gmail.com  # Reçoit les messages du formulaire

# Base de données
DB_HOST=127.0.0.1             # Ou l'IP/host du serveur MySQL
DB_PORT=3306
DB_USER=root                  # Utilisateur MySQL
DB_PASSWORD=                  # Mot de passe MySQL
DB_NAME=revyontech

# Clé API Admin (générer une clé sécurisée)
ADMIN_API_KEY=your-secure-random-key-min-32-chars

# CORS - URL du frontend en production
CORS_ORIGIN=https://revyontech.com    # À adapter à votre domaine

# API URLs
API_URL=https://revyontech.com/api
CLIENT_URL=https://revyontech.com
```

### 🔑 Obtenir une Gmail App Password

1. Allez sur [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. L'authentification 2FA doit être activée
3. Sélectionnez "Mail" et "Windows Computer"
4. Générez une password
5. Copiez-collez dans `SMTP_PASS`

### 📦 Frontend (.env.production)

Vite utilise automatiquement ce fichier lors du build.

```env
VITE_API_URL=https://revyontech.com/api
```

**Note :** Remplacer `revyontech.com` par votre vrai domaine.

---

## 🔧 Installation et démarrage Local

### Backend

```bash
cd backend
npm install
npm start
```

Le serveur démarre sur `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'app démarre sur `http://localhost:5173`

### Tests

1. Ouvrir [http://localhost:5173](http://localhost:5173)
2. Tester chaque page
3. Remplir le formulaire de contact
4. Vérifier que vous recevez l'email sur `revyontech@gmail.com`

---

## 📁 Checklist Avant Déploiement

- [ ] Backend `.env` configuré avec vraies valeurs
- [ ] Frontend `.env.production` configuré
- [ ] Base de données MySQL créée et accessible
- [ ] SMTP configuré et testé
- [ ] Admin API Key générée et sécurisée
- [ ] CORS_ORIGIN pointant vers le bon domaine
- [ ] Certificat SSL/HTTPS prêt
- [ ] Tests locaux réussis

---

## 🌐 Déploiement sur Serveur

### 1. Installer Node.js et npm

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Cloner et installer le projet

```bash
git clone <votre-repo> /var/www/revyontech
cd /var/www/revyontech

# Backend
cd backend
npm install --production

# Frontend
cd ../frontend
npm install --production
npm run build  # Génère le dossier dist/
```

### 3. Configuration Nginx (reverse proxy)

```nginx
server {
    listen 443 ssl http2;
    server_name revyontech.com;

    ssl_certificate /etc/letsencrypt/live/revyontech.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/revyontech.com/privkey.pem;

    # Frontend (fichiers statiques)
    location / {
        root /var/www/revyontech/frontend/dist;
        try_files $uri /index.html;
    }

    # API Backend
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name revyontech.com;
    return 301 https://$server_name$request_uri;
}
```

### 4. Démarrer le Backend avec PM2

```bash
npm install -g pm2

cd /var/www/revyontech/backend

# Créer un fichier ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'revyontech-backend',
    script: './server.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
EOF

# Démarrer et sauvegarder
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 5. Renouvellement Certificat SSL

```bash
sudo certbot renew --dry-run  # Test
sudo certbot renew             # Réel (automatique tous les 90 jours)
```

---

## 📊 Surveillance

### Vérifier les logs du backend

```bash
pm2 logs revyontech-backend
```

### Vérifier la disponibilité

```bash
curl https://revyontech.com/api/health
# Doit retourner: {"status":"Server is running"}
```

---

## ❌ Troubleshooting

**Erreur: "Connection refused"**
- Vérifier que le backend démarre sans erreur
- Vérifier CORS_ORIGIN dans .env

**Erreur: "Cannot connect to database"**
- Vérifier MySQL est démarré
- Vérifier DB_HOST, DB_USER, DB_PASSWORD

**Emails ne sont pas envoyés**
- Vérifier SMTP_USER, SMTP_PASS sont corrects
- Vérifier Gmail App Password (pas le mot de passe directe)
- Checker les logs backend

---

## 📞 Support

Pour des problèmes, consultez les logs et utilisez la page Contact.

**Contact:** revyontech@gmail.com
**WhatsApp:** +224 627330709
