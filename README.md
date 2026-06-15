# 🏠 Notre Nouvel Appart' — Shanghai

Site de visite virtuelle de notre appartement à Shanghai, pour que les enfants puissent découvrir la maison depuis n'importe où !

## 🚀 Mise en ligne sur GitHub Pages

### 1. Créer un repository GitHub

Sur [github.com](https://github.com) → **New repository**
- Nom : `notre-appart` (ou ce que vous voulez)
- Visibilité : **Public** (requis pour GitHub Pages gratuit)

### 2. Pousser les fichiers

```bash
cd nouveau-appart
git init
git add .
git commit -m "Premier appart à Shanghai 🏠"
git remote add origin https://github.com/VOTRE-USERNAME/notre-appart.git
git push -u origin main
```

### 3. Activer GitHub Pages

Settings → Pages → Source : **Deploy from a branch** → Branch : **main** → **/ (root)** → Save

### 4. Partager l'URL

Votre site sera disponible à :
```
https://VOTRE-USERNAME.github.io/notre-appart
```

---

## 📁 Structure

```
nouveau-appart/
├── index.html       ← Page principale (visite guidée)
└── images/
    ├── img01.jpg    ← Vue cuisine depuis salon
    ├── img02.jpg    ← Chambre principale
    ...              ← (20 photos au total)
    └── img20.jpg    ← Coiffeuse entrée
```

## ✨ Fonctionnalités

- 🗺️ Navigation par pièce (sticky)
- 🖼️ Lightbox avec clavier (← → Échap)
- 📱 Responsive mobile
- 🔍 Chasse aux trésors pour les enfants
- 🚀 Lazy loading pour rapidité

