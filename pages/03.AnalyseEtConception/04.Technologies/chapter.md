---
title: Quelle technologies ?
taxonomy:
    category: docs
---

## Technologies utilisées
Pour développer ce projet nous avons utilisé diverses libraries allant du front-end jusqu'au watcher de JavaScript.

### NPM

NodeJS dispose d'une large communauté qui partage ses modules au travers du gestionnaire de paquet [NPM](https://www.npmjs.com/). Il permet ainsi de télécharger rapidement un module mais aussi ses différentes dépendances.

On commencera par initialiser npm via la commande `$ npm init`, ce qui aura pour effet de créer un fichier package.json qui permettra de suivre les modules à importer. Une fois notre projet initialisé il est possible de télécharger un module simplement via la commande 
```bash
$ npm install --save <nomDuModule>
```

Outre cet aspect de dépendances, NPM permet également de pré-définir des scripts d'exécution du type:
```bash
$ npm run monScript
```

Ce script est déclaré dans le fichier [package.json](https://github.com/TPCISIIE/WebLab/blob/master/package.json) crée précédemment sous la forme suivante:
```
  "scripts": {
    "monScript": "echo \"Exécution de mon script !\" && exit 1"
  },
```
