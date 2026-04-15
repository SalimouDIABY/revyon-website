# 🚀 Déploiement - Revyon Tech

## ✅ Solution Finale : Vercel + Render (100% Gratuit)

### Architecture
- **Frontend** : Vercel (gratuit)
- **Backend** : Render (gratuit, 750h/mois)
- **Base de données** : MySQL sur Render (gratuit)

### Avantages
- ✅ 100% gratuit
- ✅ MySQL natif (code existant compatible)
- ✅ Pas de sommeil avec cron job
- ✅ Déploiement simple

---

## 📋 GUIDE COMPLET - Étape par étape

### PARTIE 1 : RENDER (Backend + MySQL)

#### Étape 1.1 : Créer compte Render
1. Aller sur [render.com](https://render.com)
2. **Sign up** avec GitHub
3. Autoriser Render à accéder à ton repo
4. Sélectionner `SalimouDIABY/revyon-website`

#### Étape 1.2 : Créer la base de données MySQL
1. Dans Render Dashboard → **New +** → **MySQL**
2. **Name** : `revyontech-mysql`
3. **Database** : `revyontech`
4. **Region** : Choisir EU-West (ou proche de toi)
5. **Plan** : **Free** (gratuit)
6. **Create Database**

**Attendre 2-3 minutes** la création.

#### Étape 1.3 : Créer le service Web (Backend)
1. **New +** → **Web Service**
2. Sélectionner ton repo `revyon-website`
3. **Name** : `revyontech-backend`
4. **Environment** : `Node`
5. **Region** : Même région que MySQL
6. **Branch** : `main`
7. **Root Directory** : `backend/`
8. **Build Command** : `npm install`
9. **Start Command** : `npm start`

#### Étape 1.4 : Variables d'environnement
1. Dans le service Web → **Environment**
2. **Add Environment Variable** (une par une) :

```
NODE_ENV=production
DB_HOST=[Copier depuis MySQL dashboard]
DB_PORT=3306
DB_USER=[Copier depuis MySQL dashboard]
DB_PASSWORD=[Copier depuis MySQL dashboard]
DB_NAME=revyontech
ADMIN_API_KEY=revyon-tech-admin-secure-2024-xyz123
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=contact@revyontech.com
SMTP_PASS=jrB9 5cEb 1fgN
SMTP_FROM=Revyon Tech <contact@revyontech.com>
CONTACT_EMAIL=revyontech@gmail.com
```

#### Étape 1.5 : Deployer
1. **Create Web Service**
2. Attendre 5-10 minutes le build
3. Vérifier les logs (pas d'erreur)
4. Copier l'URL générée (ex: `https://revyontech-backend.onrender.com`)

---

### PARTIE 2 : VERCEL (Frontend)

#### Étape 2.1 : Créer compte Vercel
1. Aller sur [vercel.com](https://vercel.com)
2. **Sign Up** avec GitHub
3. Autoriser Vercel

#### Étape 2.2 : Importer le projet
1. **Add New...** → **Project**
2. Sélectionner `SalimouDIABY/revyon-website`
3. **Configure Project** :
   - **Root Directory** : `frontend/`
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

#### Étape 2.3 : Variable d'environnement
1. **Environment Variables** :
   - **Name** : `VITE_API_URL`
   - **Value** : URL du backend Render (ex: `https://revyontech-backend.onrender.com`)
2. **Add**

#### Étape 2.4 : Deployer
1. **Deploy**
2. Attendre 2-3 minutes
3. Vérifier que le site charge correctement

---

### PARTIE 3 : DOMAINE

#### Étape 3.1 : Ajouter domaine dans Vercel
1. Dans Vercel → ton projet → **Settings** → **Domains**
2. **Add** : `revyontech.com`
3. Copier les **DNS records** affichés

#### Étape 3.2 : Configurer DNS Namecheap
1. Namecheap → **Domain List** → `revyontech.com`
2. **Manage** → **Advanced DNS**
3. Ajouter les records DNS de Vercel

#### Étape 3.3 : Attendre propagation
- 5-30 minutes
- Tester sur [dnschecker.org](https://dnschecker.org)

---

### PARTIE 4 : KEEP-ALIVE (ANTI-SOMMEIL)

#### Étape 4.1 : UptimeRobot (GRATUIT)
1. [uptimerobot.com](https://uptimerobot.com) → **Sign Up**
2. **Add New Monitor** :
   - **URL** : `https://revyontech-backend.onrender.com/api/ping`
   - **Monitoring Interval** : `10 minutes`
   - **Monitor Type** : `HTTP(s)`
3. **Save**

**Résultat** : Backend actif 24/7 !

---

### PARTIE 5 : TESTS

#### Étape 5.1 : Tester le backend
```bash
curl https://revyontech-backend.onrender.com/api/health
```

#### Étape 5.2 : Tester le frontend
1. Aller sur `https://revyontech.com`
2. Tester formulaire de contact
3. Vérifier email reçu

---

## 📊 Ressources Gratuites

| Service | Limite | Utilisation |
|---------|--------|-------------|
| **Render Web** | 750h/mois | Backend |
| **Render MySQL** | 256MB | Base de données |
| **Vercel** | 100GB/mois | Frontend |
| **UptimeRobot** | 50 monitors | Keep-alive |

---

## ⚡ Temps Total : 30-45 minutes

### Checklist :
- [ ] Compte Render créé
- [ ] Base MySQL créée
- [ ] Service Web déployé
- [ ] Variables d'environnement
- [ ] Compte Vercel créé
- [ ] Frontend déployé
- [ ] VITE_API_URL configuré
- [ ] Domaine configuré
- [ ] UptimeRobot configuré
- [ ] Tests réussis

---

## 🆘 Dépannage

| Problème | Solution |
|----------|----------|
| Build échoue | Vérifier logs Render |
| DB connection | Vérifier DB_HOST, DB_USER... |
| Emails ne marchent pas | Vérifier SMTP_PASS |
| Domaine ne pointe pas | Attendre DNS propagation |
| Backend dort | Vérifier UptimeRobot actif |

---

## 💰 Coûts si dépassement

- **Render** : $7/mois après 750h
- **Vercel** : Gratuit illimité
- **UptimeRobot** : $5/mois après 50 monitors

**Prêt à commencer ?** 🚀

---

## 📋 PROCÉDURE EXACTE - Étape par étape

### PARTIE 1 : RAILWAY (Backend + Base de données)

#### Étape 1.1 : Créer un compte Railway
1. Ouvrir https://railway.app
2. Cliquer "Start Free"
3. Choisir "Sign up with GitHub"
4. Autoriser Railway à accéder à ton GitHub
5. Sélectionner `SalimouDIABY/revyon-website`
6. Confirmer les autorisations

**Explication** : Railway aura besoin d'accéder à ton repo pour le déployer automatiquement.

#### Étape 1.2 : Deploy le backend
1. Une fois connecté, cliquer "New Project"
2. Sélectionner "Deploy from GitHub"
3. Choisir ton repo `revyon-website`
4. Railway détecte automatiquement le dossier `backend/`
5. Cliquer "Deploy Now"

**Explication** : Railway lit le `package.json` du backend et la commande `npm start` pour lancer le serveur.

**Attendre 2-3 minutes** le build et le déploiement.

#### Étape 1.3 : Configurer les variables d'environnement
1. Dans Railway, aller dans le projet → onglet "Variables"
2. Ajouter **chaque variable** une par une :

```
SERVER_PORT=5000
NODE_ENV=production
ADMIN_API_KEY=revyon-tech-admin-secure-2024-xyz123
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=contact@revyontech.com
SMTP_PASS=jrB9 5cEb 1fgN
SMTP_FROM=Revyon Tech <contact@revyontech.com>
CONTACT_EMAIL=revyontech@gmail.com
```

**Explication** :
- `SMTP_PASS` = ton mot de passe Zoho (maintenant sécurisé dans Railway, pas dans le code)
- `ADMIN_API_KEY` = clé secrète pour accéder aux endpoints admin
- `NODE_ENV=production` = dit à Express qu'on est en production

#### Étape 1.4 : Railway ajoute automatiquement
Railway crée une base de données MySQL gratuite. Il ajoute automatiquement ces variables :
```
MYSQLHOST=...
MYSQLPORT=...
MYSQLUSER=...
MYSQLPASSWORD=...
MYSQLDATABASE=...
```

**Vérifier dans les "Variables"** que toutes ces variables sont présentes.

#### Étape 1.5 : Copier l'URL du backend
1. Dans Railway, aller à "Deployments"
2. Cliquer sur le déploiement actif (vert)
3. Copier l'URL générée (ex: `https://revyontech-backend.up.railway.app`)

**Explication** : Cette URL sera utilisée dans Vercel pour que le frontend sache où appeler le backend.

---

### PARTIE 2 : VERCEL (Frontend)

#### Étape 2.1 : Créer un compte Vercel
1. Ouvrir https://vercel.com
2. Cliquer "Sign Up"
3. Choisir "Continue with GitHub"
4. Autoriser Vercel à accéder à ton GitHub

**Explication** : Vercel va déployer le frontend depuis GitHub automatiquement.

#### Étape 2.2 : Importer le projet
1. Une fois connecté, cliquer "Add New..." → "Project"
2. Sélectionner `SalimouDIABY/revyon-website`
3. Cliquer "Import"

**Explication** : Vercel va scanner le repo et déterminer le type de projet.

#### Étape 2.3 : Configurer le projet
1. **Root Directory** : Indiquer `frontend/`
2. **Framework** : Vercel détecte automatiquement (Vite)
3. Cliquer "Continue"

**Explication** : Cela dit à Vercel de builder depuis le dossier `frontend/` et non la racine.

#### Étape 2.4 : Ajouter la variable d'environnement
1. Avant de cliquer "Deploy", voir section "Environment Variables"
2. Ajouter :
   - **Name** : `VITE_API_URL`
   - **Value** : URL du backend Railway (ex: `https://revyontech-backend.up.railway.app`)
3. Cliquer "Deploy"

**Explication** : Cette variable dit au frontend React où trouver le backend API.

**Attendre 2-3 minutes** le build et le déploiement.

#### Étape 2.5 : Vérifier le déploiement
1. Dans Vercel, tu verras un message "Production"
2. Cliquer sur l'URL générée (ex: `https://revyontech.vercel.app`)
3. Tester que le site charge correctement

**Explication** : C'est l'URL temporaire du site. On la remplacera par `revyontech.com` ensuite.

---

### PARTIE 3 : CONFIGURATION DU DOMAINE

#### Étape 3.1 : Ajouter le domaine dans Vercel
1. Dans Vercel, dans ton projet → "Settings" → "Domains"
2. Ajouter un domaine personnalisé
3. Taper `revyontech.com`
4. Cliquer "Add"

**Explication** : Vercel va te donner des DNS records à pointer vers leur serveur.

#### Étape 3.2 : Configurer les DNS dans Namecheap
1. Aller sur https://www.namecheap.com
2. Se connecter
3. "Domain List" → Cliquer sur `revyontech.com`
4. "Manage" → onglet "Advanced DNS"
5. Ajouter les DNS records que **Vercel a générés** pour toi

**Explication** : Tu fais pointer ton domaine Namecheap vers les serveurs Vercel.

#### Étape 3.3 : Attendre la propagation
1. Cela peut prendre 5-30 minutes
2. Une fois que Vercel confirme, ta site sera accessible sur `revyontech.com`

**Explication** : Les serveurs DNS du monde entier ont besoin de mettre à jour leurs records.

---

### PARTIE 4 : TEST COMPLET

#### Étape 4.1 : Tester le site
1. Aller sur `https://revyontech.com`
2. Tester chaque page : Accueil, À propos, Services, Portfolio, Contact
3. Tester le formulaire de contact :
   - Remplir : Nom, Email, Téléphone, Service, Message
   - Cliquer "Envoyer"
   - Vérifier un email arrive sur `contact@revyontech.com`

**Explication** : Cela teste que :
- Le frontend charge depuis Vercel
- Le backend répond depuis Railway
- La base de données fonctionne
- L'email avec Zoho fonctionne

#### Étape 4.2 : Vérifier les logs en cas d'erreur
**Si le formulaire ne marche pas** :

**Dans Railway** :
- Aller dans "Deployments"
- Cliquer sur le déploiement
- Voir les "Logs" pour les erreurs du backend

**Dans Vercel** :
- Aller dans "Deployments"  
- Cliquer sur le build
- Voir les "Logs"

**Explication** : Les logs te disent s'il y a une erreur SQL, SMTP, ou de configuration.

---

## 🔐 Variables d'environnement visibles

**Railway (Backend)** :
```
SERVER_PORT=5000
NODE_ENV=production
ADMIN_API_KEY=revyon-tech-admin-secure-2024-xyz123
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=contact@revyontech.com
SMTP_PASS=jrB9 5cEb 1fgN
SMTP_FROM=Revyon Tech <contact@revyontech.com>
CONTACT_EMAIL=revyontech@gmail.com
MYSQLHOST=${{ auto-généré }}
MYSQLPORT=${{ auto-généré }}
MYSQLUSER=${{ auto-généré }}
MYSQLPASSWORD=${{ auto-généré }}
MYSQLDATABASE=${{ auto-généré }}
```

**Vercel (Frontend)** :
```
VITE_API_URL=https://revyontech-backend.up.railway.app
```

---

## 🛌 Solutions Anti-Sommeil (Keep-Alive)

### Problème
Sur Render, Railway Hobby, etc., le backend dort après 15-24 minutes d'inactivité, causant un délai de 10-30 secondes au réveil.

### ✅ Solutions Implémentées

#### **Solution 1 : Ping Automatique Frontend** (Activé)
- ✅ **Service intégré** dans le frontend
- ✅ **Ping toutes les 10 minutes** automatiquement
- ✅ **Transparent** pour l'utilisateur
- ✅ **Démarre automatiquement** au chargement du site

**Comment ça marche :**
1. Quand un visiteur ouvre le site, le service démarre
2. Toutes les 10 minutes, ping automatique vers `/api/ping`
3. Le backend reste actif tant qu'il y a des visiteurs

#### **Solution 2 : Cron Job Externe** (Recommandé en complément)

##### **Option A : UptimeRobot (Gratuit)**
1. Aller sur [uptimerobot.com](https://uptimerobot.com)
2. Créer un compte gratuit
3. Ajouter un monitor :
   - **URL** : `https://votre-backend-url/api/ping`
   - **Type** : HTTP(s)
   - **Interval** : 10 minutes
   - **Keyword monitoring** : `alive`

##### **Option B : Cron-Job.org (Gratuit)**
1. Aller sur [cron-job.org](https://cron-job.org)
2. Créer un job :
   - **URL** : `https://votre-backend-url/api/ping`
   - **Méthode** : GET
   - **Fréquence** : Toutes les 10 minutes

##### **Option C : GitHub Actions (Gratuit)**
Créer `.github/workflows/keep-alive.yml` :
```yaml
name: Keep Backend Alive
on:
  schedule:
    - cron: '*/10 * * * *'  # Toutes les 10 minutes
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping backend
        run: curl -f https://votre-backend-url/api/ping
```

#### **Solution 3 : Service de Monitoring Payant**
- **New Relic** : $0.10/GB (monitoring avancé)
- **DataDog** : Freemium avec limites
- **Pingdom** : À partir de $10/mois

---

## 🔧 Endpoints Disponibles

### `/api/health` - Health Check Public
```json
{
  "status": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "environment": "production",
  "uptime": 3600,
  "memory": {...}
}
```

### `/api/ping` - Keep Alive (pour cron jobs)
```json
{
  "status": "alive",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "message": "Service is active - ping successful"
}
```

---

## 📊 Stratégie Recommandée

### **Pour Démarrage (Gratuit)** :
1. ✅ **Frontend ping** (activé automatiquement)
2. ✅ **UptimeRobot** (monitor + keep-alive gratuit)

### **Pour Croissance** :
1. ✅ **Cron-job.org** (plus fiable)
2. ✅ **GitHub Actions** (intégré au repo)

### **Pour Production** :
1. ✅ **Service de monitoring payant**
2. ✅ **Railway Pro/Teams** (pas de sommeil)

---

## ⚡ Performance

- **Ping automatique** : 10 minutes = équilibre optimal
- **Premier visiteur** : ~2-5 secondes de réveil (acceptable)
- **Visiteurs suivants** : Instantané pendant 10 minutes
- **Consommation** : Négligeable (< 0.1% CPU)

---

## 🧪 Test du Keep-Alive

### **Test Manuel** :
```bash
curl https://votre-backend-url/api/ping
# Doit retourner: {"status":"alive",...}
```

### **Test Automatique** :
1. Ouvrir le site dans un navigateur
2. Laisser l'onglet ouvert
3. Vérifier les logs du navigateur (F12 → Console)
4. Voir : "Backend ping successful: [timestamp]"

---

## 💡 Conseils

- **Frontend ping** : Garde actif pendant les visites
- **Cron externe** : Garde actif 24/7 même sans visiteur
- **Combinaison** : Les deux pour maximum fiabilité
- **Monitoring** : UptimeRobot donne aussi des alertes de downtime

