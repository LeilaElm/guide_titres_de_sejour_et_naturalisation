# Guide Interactif des Titres de Séjour en France 2026

Guide complet et multilingue pour le renouvellement des titres de séjour et les changements de statut en France, avec les dernières mises à jour de 2026.

## 🌟 Fonctionnalités

- **7 types de titres de séjour** : Étudiant, Salarié, Pluriannuel, Vie Privée et Familiale, Résident, Travailleur Temporaire, Naturalisation
- **Traduction en 6 langues** : Français, Anglais, Arabe, Espagnol, Chinois, Portugais
- **Critères d'éligibilité** détaillés pour chaque titre
- **Documents requis** (communs et spécifiques)
- **4 parcours de changement de statut** avec critères et documents
- **Téléchargement** des listes en format texte
- **Informations 2026** : Examen civique obligatoire, niveaux de français A2/B1/B2
- **100% HTML/CSS/JavaScript** : Aucune dépendance, déploiement ultra-simple

## 🚀 Déploiement sur GitHub Pages (SUPER FACILE !)

### Option 1 : Via l'interface GitHub (le plus simple)

1. **Créer un nouveau repository sur GitHub**
   - Allez sur https://github.com/new
   - Nommez votre repository (ex: `guide-titre-sejour`)
   - Cochez "Public"
   - Cliquez sur "Create repository"

2. **Uploader les fichiers**
   - Cliquez sur "uploading an existing file"
   - Glissez-déposez ces 3 fichiers :
     - `index.html` ⭐
     - `styles.css` ⭐
     - `app.js` ⭐
     - `README.md` (optionnel)
   - Cliquez sur "Commit changes"

3. **Activer GitHub Pages**
   - Allez dans Settings (Paramètres) de votre repository
   - Cliquez sur "Pages" dans le menu de gauche
   - Sous "Source", sélectionnez "main" branch
   - Cliquez sur "Save"
   - Votre site sera disponible à : `https://votre-username.github.io/guide-titre-sejour/`

### Option 2 : Via Git en ligne de commande

```bash
# Initialisez un repository Git local
git init
git add index.html styles.css app.js README.md
git commit -m "Premier commit - Guide titres de séjour"

# Créez un repository sur GitHub puis :
git remote add origin https://github.com/VOTRE-USERNAME/guide-titre-sejour.git
git branch -M main
git push -u origin main

# Activez GitHub Pages dans les Settings du repository
```

## 📱 Tester localement

Pour visualiser le guide localement avant de le déployer :

1. **Option simple (serveur HTTP Python)**
   ```bash
   # Dans le dossier contenant les fichiers
   python3 -m http.server 8000
   # Puis ouvrez : http://localhost:8000
   ```

2. **Option avec Live Server (VS Code)**
   - Installez l'extension "Live Server"
   - Clic droit sur `index.html` > "Open with Live Server"

## 🎨 Personnalisation

Le guide utilise :
- **HTML/CSS/JavaScript pur** : Aucune dépendance externe
- **Google Fonts** pour les polices (Outfit, Space Mono)
- **CSS moderne** avec gradients et animations

Vous pouvez modifier :
- Les couleurs dans `styles.css` (variables CSS)
- Les traductions dans `app.js` (objet `translations`)
- Les documents dans `app.js` (fonctions `getSpecificDocs`, etc.)
- Les critères dans `app.js` (fonction `getEligibility`)

## 📋 Structure des fichiers

```
.
├── index.html      # Page HTML principale
├── styles.css      # Feuille de styles CSS
├── app.js          # Logique JavaScript et données
└── README.md       # Ce fichier
```

**IMPORTANT** : Les 3 fichiers (index.html, styles.css, app.js) doivent être dans le même dossier !

## 🔄 Mises à jour

Pour mettre à jour le guide après déploiement :
1. Modifiez les fichiers localement
2. Commitez les changements : `git commit -am "Description des modifications"`
3. Poussez vers GitHub : `git push`
4. GitHub Pages se mettra à jour automatiquement (peut prendre 1-2 minutes)

## 📞 Support

Ce guide est basé sur les informations officielles de :
- Service-public.gouv.fr
- Ministère de l'Intérieur
- ANEF (Administration Numérique pour les Étrangers en France)

**Dernière mise à jour** : Février 2026

## ⚖️ Licence

Ce projet est open source et disponible sous licence MIT.
