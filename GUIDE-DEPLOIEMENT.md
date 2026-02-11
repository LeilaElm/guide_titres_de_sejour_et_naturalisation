# 📖 Guide de Déploiement - Étape par Étape

## 🎯 Méthode 1 : Interface GitHub (Recommandée pour débutants)

### Étape 1 : Créer le repository
1. Allez sur https://github.com/new
2. Remplissez :
   - **Repository name** : `guide-titre-sejour` (ou autre nom de votre choix)
   - **Description** : "Guide interactif des titres de séjour en France"
   - Cochez **Public**
   - ⚠️ NE PAS cocher "Add a README file"
3. Cliquez sur **Create repository**

### Étape 2 : Uploader les fichiers
1. Sur la page du repository, cliquez sur **uploading an existing file**
2. Glissez-déposez ces 4 fichiers :
   - ✅ `index.html`
   - ✅ `guide-titre-sejour.jsx`
   - ✅ `README.md`
   - ✅ `.gitignore`
3. Dans "Commit changes", écrivez : `Initial commit`
4. Cliquez sur **Commit changes**

### Étape 3 : Activer GitHub Pages
1. Cliquez sur **Settings** (⚙️) en haut du repository
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **Source** :
   - Branch : Sélectionnez `main`
   - Folder : Laissez `/ (root)`
4. Cliquez sur **Save**
5. 🎉 Attendez 1-2 minutes

### Étape 4 : Accéder à votre site
Votre guide sera disponible à :
```
https://VOTRE-USERNAME.github.io/guide-titre-sejour/
```

Exemple : Si votre username est `marie123`, l'URL sera :
```
https://marie123.github.io/guide-titre-sejour/
```

---

## 💻 Méthode 2 : Ligne de commande (Pour utilisateurs avancés)

### Prérequis
- Git installé sur votre ordinateur
- Compte GitHub

### Étape 1 : Créer le repository sur GitHub
1. Allez sur https://github.com/new
2. Créez le repository `guide-titre-sejour` (Public)
3. ⚠️ NE PAS initialiser avec README

### Étape 2 : Déployer avec le script
```bash
# Dans le dossier contenant les fichiers
./deploy.sh
```

Ou manuellement :
```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit"

# Configurer la remote (remplacez VOTRE-USERNAME)
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/guide-titre-sejour.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages
Suivez l'étape 3 de la Méthode 1

---

## 🧪 Tester localement avant de déployer

### Option A : Python (le plus simple)
```bash
# Dans le dossier contenant les fichiers
python3 -m http.server 8000
```
Puis ouvrez : http://localhost:8000

### Option B : Node.js
```bash
npx serve .
```

### Option C : VS Code Live Server
1. Installez l'extension "Live Server"
2. Clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

---

## 🔄 Mettre à jour le guide

### Via l'interface GitHub
1. Allez sur votre repository
2. Cliquez sur le fichier à modifier
3. Cliquez sur l'icône crayon (✏️)
4. Faites vos modifications
5. Cliquez sur "Commit changes"
6. ⏱️ Attendez 1-2 minutes pour que les changements soient visibles

### Via Git
```bash
# Modifier les fichiers localement
# Puis :
git add .
git commit -m "Description de vos modifications"
git push
```

---

## ❓ Problèmes courants

### Le site affiche une page blanche
- ✅ Vérifiez que `index.html` est bien à la racine
- ✅ Attendez 2-3 minutes après l'activation de Pages
- ✅ Videz le cache de votre navigateur (Ctrl+F5)

### Le site affiche "404"
- ✅ Vérifiez que GitHub Pages est activé dans Settings > Pages
- ✅ L'URL doit être : `username.github.io/nom-du-repo/`

### Les modifications ne s'affichent pas
- ✅ Attendez 1-2 minutes après chaque commit
- ✅ Videz le cache (Ctrl+Shift+R ou Cmd+Shift+R)
- ✅ Vérifiez l'onglet "Actions" pour voir si le déploiement est terminé

---

## 🎨 Personnaliser le guide

### Modifier les couleurs
Éditez `guide-titre-sejour.jsx`, cherchez les classes comme :
- `from-blue-500` → Changez la couleur
- `bg-gradient-to-br` → Modifiez le dégradé

### Ajouter une langue
1. Ajoutez la langue dans `languages`
2. Ajoutez les traductions dans `translations`
3. Ajoutez les documents dans `documentsData`
4. Ajoutez les critères dans `eligibilityData`

### Modifier le contenu
- Documents : `documentsData`
- Critères : `eligibilityData`
- Changements de statut : `statusChangeData`

---

## 📞 Besoin d'aide ?

1. **Documentation GitHub Pages** : https://docs.github.com/pages
2. **Support GitHub** : https://support.github.com
3. **Tutoriels vidéo** : Recherchez "GitHub Pages tutorial" sur YouTube

---

## ✅ Checklist de déploiement

- [ ] Repository créé sur GitHub
- [ ] Fichiers uploadés (index.html, guide-titre-sejour.jsx, README.md)
- [ ] GitHub Pages activé (Settings > Pages > main branch)
- [ ] Attendu 2 minutes
- [ ] Site accessible à username.github.io/nom-repo
- [ ] Testé sur mobile et desktop
- [ ] Partagé le lien ! 🎉

---

**Bonne chance avec votre déploiement ! 🚀**
