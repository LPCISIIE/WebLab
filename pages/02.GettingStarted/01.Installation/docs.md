---
title: Obtenir WEBLab
taxonomy:
    category: docs
---

# Installation

L'installation de Weblab nécessite d'installer **npm** en premier lieu,
le gestionnaire de paquets officiel de Node.js, il est possible de l'obtenir
à cette [adresse](https://www.npmjs.com/).

Une fois npm installé, allez à la racine du projet et ouvrez une fenêtre de commande, pour y
entrer la ligne suivante :
```bash
$ npm install
```

npm va s'occuper d'installer tous les paquets nécessaires au bon fonctionnement de WebLab, une fois
que tous les paquets sont installés, vous pouvez d'ore et déjà utiliser l'application.

# Premier lancement

Avant d'accéder à l'application WebLab, il est nécessaire de créer des noeuds : des noeuds maîtres et des noeuds esclaves.

Les noeuds esclaves sont ceux qui éxecutent les algorithmes, et crééent les données de résultat.
Les noeuds maîtres, quand à eux, sont ceux qui donnent des ordres aux noeuds esclaves, par l'intermediaire de l'utilisateur, il communiquent avec eux afin de lancer les algorithmes, récuperer les données de résultat, etc...

Pour lancer un noeud maître, on utilise la commande suivante : 
```bash
$ npm run master
```

Pour lancer un noeud esclave, on utilise cette commande :
```bash
$ npm run slave
```

Il faut impérativement un seul noeud maître et au moins un noeud esclave pour pouvoir utiliser les fonctionnalité de l'application.
