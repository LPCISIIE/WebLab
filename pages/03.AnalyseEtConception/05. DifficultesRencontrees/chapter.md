---
title: Difficultés rencontrées
taxonomy:
    category: docs
---

## node.js, une nouvelle technologie
Au cours de la conception du projet nous avons rencontré quelques difficultés, la première fût logiquement l'appréhension de node.js (technologie non vue en cours) : son architecture, le concept de l’asynchronisme, etc… pour y faire face nous nous sommes souvent rendus sur l’API node.js: une documentation bien fournie et facile à comprendre, nous avons également regardé des projets open-source sur github (tel que le célèbre Hackathon Starter) qui a pu nous guider sur les bonnes méthodes d’une architecture d’application node. 
Après la lecture de plusieurs documents nous avons également trouvé des frameworks et autres librairies permettant de nous aider dans notre projet.

## La communication entre applications
Le deuxième problème rencontré lors de ce projet a été la manière de faire communiquer deux applications node (un noeud maître et un noeud esclave dans notre cas), le problème fût résolu grâce à la découverte de la librairie socket.io, s’appuyant sur un concept déjà vu lors de nos années universitaires précédentes: le patron de conception Observateur.

## Une vision du projet
Suite à cela le partage des tâches n’a pas été très simple au début: chacun des membres avait une idée bien précise de l’application et voulait travailler sur une fonctionnalité spécifique, après discussions nous avons accordé des concessions et finalement partagé la même vision du projet grâce aux nombreux entretiens effectués avec notre tuteur.

## Le cross-platform
Notre dernier problème rencontré a été le fonctionnement de node.js sur les 3 principaux OS (Windows, macOS, Linux). <br>
En effet l’application WebLab utilise des fonctions systèmes tel que la création et la suppression de processus fils et chaque système d’exploitation réagissait d’une manière différente, il a fallu beaucoup de patience et de recherches pour résoudre ces problèmes.


## Conclusion
Au final les mises au point (effectuées lors des rendez-vous avec notre tuteur) nous ont souvent aidé et guidé dans la progression de notre projet.

![](img.jpeg)