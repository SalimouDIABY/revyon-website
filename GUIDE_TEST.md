# 🧪 GUIDE DE TEST DU SITE REVYON TECH

## 📋 Avant de commencer

Assurez-vous que vous avez:
- ✅ Node.js installé (npm install réussi)
- ✅ Tous les fichiers du projet dans `c:\Silicon Guinea\site de revyon tech`
- ✅ Port 5173 et 5000 disponibles

---

## 🚀 DÉMARRAGE RAPIDE

### Option 1 : Lancer les deux serveurs simultanément (RECOMMANDÉ)

```bash
npm run dev:all
```

Cela démarrera:
- **Frontend**: http://localhost:5173 (Vite + React)
- **Backend**: http://localhost:5000 (Express API)

### Option 2 : Lancer les serveurs séparément

**Terminal 1 - Frontend:**
```bash
npm run dev
```
→ Frontend sur http://localhost:5173

**Terminal 2 - Backend:**
```bash
npm run server
```
→ Backend sur http://localhost:5000

---

## ✅ CHECKLIST DE TEST

### 1️⃣ PAGE ACCUEIL (http://localhost:5173)

- [ ] Hero banner visible avec titre principal
- [ ] Deux boutons CTA fonctionnels (orange + blanc)
- [ ] Section avec 4 chiffres clés (animation de compteur ?)
- [ ] Grille de 4 services présentés
- [ ] Bouton "Voir tous les services" fonctionne
- [ ] Section "Pourquoi choisir Revyon Tech"
- [ ] Section témoignages visible
- [ ] Pied de page avec tous les liens
- [ ] **Layout responsif sur mobile** (réduire la fenêtre à 375px)
- [ ] **Logo cliquable** = retour accueil
- [ ] **Menu hamburger sur mobile** (fonctionne ?)
- [ ] **Bouton WhatsApp vert** en bas à droite flottant

### 2️⃣ NAVBAR (Vérifier sur chaque page)

- [ ] Logo cliquable renvoyant à l'accueil
- [ ] Liens: Accueil | À Propos | Services | Portfolio | Contact
- [ ] Page active soulignée ou mise en évidence
- [ ] Bouton "Demander un devis" orange
- [ ] **Sticky** (reste visible lors du scroll)
- [ ] Menu hamburger sur mobile
- [ ] Tous les liens de navigation fonctionnent

### 3️⃣ PAGE À PROPOS (http://localhost:5173/a-propos)

- [ ] Section "Notre histoire" avec texte + image
- [ ] Section "Mission et Vision" (deux blocs)
- [ ] Section "Nos valeurs" en grille
- [ ] Section "Notre équipe" (5 personnes au minimum)
- [ ] Hover sur les cartes de l'équipe (élévation)
- [ ] Bouton CTA en bas
- [ ] **Responsive** sur mobile

### 4️⃣ PAGE SERVICES (http://localhost:5173/services)

- [ ] **Tous les 7 services listés:**
  1. Création de sites web professionnels
  2. Développement de logiciels et applications
  3. Design graphique et identité visuelle
  4. Marketing digital et communication
  5. Production multimedia et vidéo IA
  6. Formation et accompagnement numérique
  7. Vente de matériel informatique

- [ ] Chaque service affiche:
  - [ ] Icône distincte
  - [ ] Titre clair
  - [ ] Tagline percutante
  - [ ] Problème résolu
  - [ ] "Ce qui est inclus" (liste)
  - [ ] Bouton "Demander un devis" ou lien

- [ ] Section "Processus de travail" (6 étapes)
- [ ] **Responsif** sur mobile

### 5️⃣ PAGE PORTFOLIO (http://localhost:5173/portfolio)

- [ ] Section introduction
- [ ] Filtres par catégories (Tous / Sites Web / Logos / Applications / Videos)
- [ ] Grille de projets
- [ ] Clic sur un projet → détail visible
- [ ] Section témoignages
- [ ] Bouton CTA
- [ ] **Responsif** sur mobile

### 6️⃣ PAGE CONTACT (http://localhost:5173/contact) - TEST IMPORTANT

#### Test du formulaire

**Champs présents:**
- [ ] Champ "Nom" (requis)
- [ ] Champ "Email" (requis)
- [ ] Champ "Téléphone" (requis)
- [ ] Dropdown "Service" (requis)
- [ ] Zone "Message" (requis)
- [ ] Bouton "Envoyer le message"

**Test de validation (client-side):**

1. Clic "Envoyer" sans remplir → Erreur affichée
2. Email invalide (ex: "test123") → Erreur: "Email invalide"
3. Remplis tous les champs correctement → Pas d'erreur client
4. Les 7 services disponibles dans le dropdown ✅

**Test de soumission (API-side):**

```
Test de remplissage du formulaire:
- Nom: "Jean Dupont"
- Email: "jean@example.com"
- Téléphone: "+224656123456"
- Service: "Création de sites web professionnels"
- Message: "Je souhaite un devis pour un site de e-commerce"

Résultat attendu:
✅ Message de succès vert affiché
✅ Formulaire vidé après 5 secondes
✅ Pas d'erreur 500
```

**Tests d'erreurs (serveur):**

```
1. Email invalide (ex: "invalid-email"):
   ✅ Messagé d'erreur retourné (400 Bad Request)

2. Message trop court (ex: "Bonjour"):
   ✅ Erreur: "Le message doit contenir au moins 10 caractères"

3. Email vide:
   ✅ Erreur: "Email requis"

4. Service vide:
   ✅ Erreur: "Service requis" (sélectionner: "non spécifié")
```

#### Vérifications supplémentaires

- [ ] Infos de contact affichées:
  - [ ] Email cliquable (mailto:)
  - [ ] Téléphone cliquable (tel:)
  - [ ] Lien WhatsApp direct
  - [ ] Adresse avec lieu exacte
  - [ ] Horaires d'ouverture
- [ ] Bouton WhatsApp orange en bas (lien direct)
- [ ] **Responsive** sur mobile

### 7️⃣ PAGE POLITIQUE DE CONFIDENTIALITÉ (http://localhost:5173/politique-confidentialite)

- [ ] Page chargeable
- [ ] Accessible via lien dans le footer
- [ ] Contenu complet (10 sections minimum)
- [ ] Sections:
  - [ ] Introduction
  - [ ] Collecte de données
  - [ ] Utilisation des données
  - [ ] Partage des données
  - [ ] Durée de conservation
  - [ ] Sécurité
  - [ ] Droits des utilisateurs
  - [ ] Cookies
  - [ ] Modifications de la politique
  - [ ] Contact
- [ ] Lien de contact dans la page

### 8️⃣ FOOTER (Vérifier sur chaque page)

- [ ] Logo Revyon Tech présent
- [ ] Liens vers 5 pages principales
- [ ] Lien "Politique de confidentialité"
- [ ] Email cliquable
- [ ] Téléphone cliquable
- [ ] Adresse affichée
- [ ] Icônes réseaux sociaux
- [ ] Année correcte dans copyright (© 2026 Revyon Tech)
- [ ] Fond bleu (ou couleur thématique)

### 9️⃣ BOUTON WHATSAPP FLOTTANT

- [ ] Visible sur TOUTES les pages
- [ ] Positionné en bas à droite (fixe)
- [ ] Icône WhatsApp verte
- [ ] Cliquable (ouvre WhatsApp Web ou app)
- [ ] Message pré-rempli: "Bonjour Revyon Tech, je souhaite en savoir plus sur vos services."
- [ ] Animation hover (plus grand ou changement couleur)
- [ ] Pas de rechargement page lors du clic

### 🔟 TEST RESPONSIVE (tester sur chaque page)

**Dimensions à tester:**
- [ ] **Mobile**: 375px (iPhone)
- [ ] **Tablette**: 768px (iPad)
- [ ] **Desktop**: 1024px+ (Ordinateur)

**Vérifications:**
- [ ] Pas de défilement horizontal
- [ ] Texte lisible sans zoom
- [ ] Boutons cliquables facilement (min 44px)
- [ ] Images adaptées (pas trop grandes/petites)
- [ ] Menu hamburger sur mobile
- [ ] Colonnes adaptées (2 ou 3 colonnes → 1 colonne mobile)

---

## 🔍 TEST DE L'API BACKEND

### Vérifier que le serveur tournanturn:

```bash
curl http://localhost:5000/api/health
```

Réponse attendue:
```json
{
  "status": "Server is running"
}
```

### Test de soumission via curl

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+224656123456",
    "service": "Création de sites web professionnels",
    "message": "Ceci est un message de test pour vérifier l\'API"
  }'
```

Réponse attendue:
```json
{
  "message": "Message reçu. Nous vous répondrons dans les 24 heures.",
  "id": 1
}
```

### Récupérer les messages reçus

```bash
curl http://localhost:5000/api/admin/contacts
```

Réponse: Liste de tous les messages reçus

---

## 🚨 DIAGNOSTIQUE - Si quelque chose ne fonctionne pas

### Le frontend ne se lance pas
```bash
# Réinstaller les dépendances frontend
npm install

# Vérifier que le port 5173 est libre
netstat -ano | findstr :5173

# Relancer
npm run dev
```

### Le backend ne se lance pas
```bash
# Vérifier la syntaxe de server.js
node server.js

# Vérifier que le port 5000 est libre
netstat -ano | findstr :5000
```

### Le formulaire n'envoie pas
1. Vérifier la console du navigateur (F12)
2. Vérifier les onglets Network, voir erreur détaillée
3. Vérifier que le backend tourne sur http://localhost:5000
4. Vérifier les logs dans le terminal du backend

### Les styles ne s'affichent pas
```bash
# Réinstaller Tailwind
npm install

# Rebuilder
npm run dev
```

---

## 📊 CHECKLIST DE CONFORMITÉ - AVANT MISE EN LIGNE

Avant de mettre le site en production, assurez-vous:

- [ ] ✅ Tous les tests ci-dessus réussis
- [ ] ✅ Aucune erreur console (F12)
- [ ] ✅ Aucune erreur réseau (Network tab)
- [ ] ✅ Tous les liens internes fonctionnent
- [ ] ✅ Tous les liens externes fonctionnent
- [ ] ✅ Formulaire envoie les données au backend
- [ ] ✅ Site responsive sur mobile
- [ ] ✅ Favicon visible dans l'onglet
- [ ] ✅ Titre de la page correct dans title
- [ ] ✅ Meta description présente
- [ ] ✅ OpenGraph tags correctes (pour partage réseaux)

---

## 📞 APRÈS LA MISE EN LIGNE

Une fois le site en production:

1. [ ] Soumettre au Google Search Console
2. [ ] Soumettre au Bing Webmaster Tools
3. [ ] Attendre 1-2 semaines pour l'indexation
4. [ ] Vérifier le classement sur Google (recherche: "revyon tech conakry")
5. [ ] Configurer Google Analytics
6. [ ] Tester les formulaires quotidiennement
7. [ ] Vérifier les logs de serveur régulièrement

---

**Date: Novembre 2026**
**Auteur: GitHub Copilot**
**Statut: Prêt pour test et déploiement** ✅
