# Kit de composants

Ce kit contient la structure HTML de composants d'interface (boutons, formulaires, onglets…), inspirée de [Oat UI](https://oat.ink). Les fichiers ne contiennent **ni classes ni styles** : c'est à vous de les mettre en forme.

## Organisation des fichiers

```
uikit/
├── index.html        ← page qui affiche tous les composants à la suite
├── components/       ← un fichier HTML par composant
├── css/styles.css    ← la feuille de style (vide au départ), chargée par toutes les pages
├── js/include.js     ← script qui insère les composants dans index.html
└── assets/           ← images
```

- Chaque fichier de `components/` peut s'ouvrir seul.
- `index.html` charge automatiquement le contenu de tous les fichiers de `components/`. Quand vous modifiez un composant, la modification apparaît aussi dans l'index.
- Les commentaires `<!-- ... -->` dans le HTML expliquent chaque composant et indiquent ses variantes (par exemple `<!-- Variante : danger -->`).

## Pourquoi il faut un serveur local

Si vous ouvrez `index.html` en double-cliquant dessus, les composants ne s'affichent pas : vous verrez le message « Impossible de charger… ».

Pour des raisons de sécurité, le navigateur interdit à une page ouverte directement depuis le disque (adresse qui commence par `file://`) de charger d'autres fichiers. Il faut donc ouvrir le projet via un **serveur local** (adresse qui commence par `http://`). L'extension Live Server de VS Code le fait en un clic.

> Les fichiers du dossier `components/` s'ouvrent normalement en double-cliquant dessus. Seule la page `index.html` a besoin du serveur local.

## Lancer Live Server dans VS Code

### 1. Installer l'extension (une seule fois)

1. Ouvrez VS Code.
2. Cliquez sur l'icône **Extensions** dans la barre de gauche (quatre petits carrés).
3. Recherchez **Live Server** et choisissez celle de **Ritwick Dey**.
4. Cliquez sur **Installer**.

### 2. Ouvrir le projet

Dans VS Code : **Fichier → Ouvrir le dossier…** et sélectionnez le dossier `uikit` (le dossier entier, pas un seul fichier).

### 3. Démarrer le serveur

Au choix :

- cliquez sur **Go Live** en bas à droite de la fenêtre VS Code ;
- ou faites un clic droit sur `index.html` dans l'explorateur de fichiers, puis **Open with Live Server**.

Le navigateur s'ouvre sur une adresse du type `http://127.0.0.1:5500/index.html`. La page se recharge toute seule à chaque fois que vous enregistrez un fichier.

### 4. Arrêter le serveur

Cliquez à nouveau sur le bouton en bas à droite (il affiche alors **Port : 5500**).

## Solution de secours (sans VS Code)

Si Node.js est installé sur votre ordinateur, ouvrez un terminal dans le dossier `uikit` et tapez :

```
npx serve
```

Puis ouvrez l'adresse affichée dans le terminal (généralement `http://localhost:3000`). Arrêtez le serveur avec <kbd>Ctrl</kbd> + <kbd>C</kbd>. Avec cette méthode, la page ne se recharge pas automatiquement : rafraîchissez-la vous-même.

## Où écrire son CSS

Écrivez vos styles dans `css/styles.css`. Ce fichier est déjà relié à toutes les pages : à `index.html` et à chaque fichier de `components/`.
