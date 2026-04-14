# 🚀 Déploiement - Revyon Tech

## ✅ Solution Recommandée : Railway + Vercel

### Architecture
- **Frontend** : Vercel (gratuit)
- **Backend + DB** : Railway Hobby (gratuit)

### Avantages
- ✅ Plus simple à configurer
- ✅ Base de données incluse dans Railway
- ✅ Moins de services à gérer
- ✅ 100% gratuit

### Limitations acceptables
- ⚠️ Railway : 512MB RAM, sommeil après 24h d'inactivité (réveil au premier visiteur)
- ⚠️ Vercel : 100GB bandwidth/mois (suffisant pour démarrage)

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

## ✅ Checklist de validation

- [ ] Compte Railway créé et backend déployé
- [ ] Variables d'environnement Railway ajoutées
- [ ] URL du backend Railway copiée
- [ ] Compte Vercel créé
- [ ] Frontend importé dans Vercel
- [ ] Variable `VITE_API_URL` ajoutée dans Vercel
- [ ] Frontend déployé avec succès
- [ ] Domaine `revyontech.com` ajouté dans Vercel
- [ ] DNS Namecheap pointés vers Vercel
- [ ] Site accessible sur `revyontech.com`
- [ ] Formulaire de contact testé et email reçu

---

## 🆘 Dépannage rapide

| Problème | Solution |
|----------|----------|
| "Cannot connect to API" | Vérifier `VITE_API_URL` dans Vercel → Redéployer |
| Erreur CORS | Vérifier que Railway est accessible (check URL) |
| Emails ne s'envoient pas | Vérifier `SMTP_PASS` et `SMTP_USER` dans Railway logs |
| Domaine ne pointe pas | Attendre la propagation DNS (5-30 min) |
| Railway s'endort | Normal en Hobby gratuit. Visite le site pour réveiller |

---

## 💡 Prochaines étapes (optionnel)

Une fois en production :

1. **Monitoring** : Ajouter Sentry pour suivre les erreurs
2. **Analytics** : Ajouter Google Analytics
3. **Upgrade payant** : Railway $5/mois si le site grandit

