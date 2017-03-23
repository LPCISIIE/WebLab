---
title: Étude de l'existant
taxonomy:
    category: docs
---

## 1. Exécution des algorithmes
http://codepen.io: Cette application à pour but de tester du code HTML CSS JavaScript directement sur un éditeur en ligne. On pourrait donc exécuter un algorithme en javascript qui ressortirait les résultats en HTML dans cette application. La limite de codepen est le fait qu’il n’y a pas la possibilité de faire de vrais tests d’IA : le site interprète directement le code et ne retourne pas de statistiques, de plus on ne peut injecter qu’un algorithme à la fois.

https://visualgo.net/sssp: Ce site permet de voir en temps réel ce qu’un algorithme effectue pour des structures. L'exécution prends la forme d’un graphique en temps réel. On peut changer les paramètres de l’algorithme pré-rentré dans le site mais pas le code en lui même.  

http://raffinat.perso.univ-pau.fr/plurialgo/gwt/index.html: cette application permet d’éxecuter des algorithmes dans les languages de type python algobox ou carmetal. Les données ne sont pas en temps réel et ne permettent pas de faire de statistiques..

## 2. Calculs statistiques sur les sorties
Malgré de nombreuses recherches, aucun site trouvé ne correspondait à l’exploitation des résultats d’un algorithme.

## 3. Applications partagées 
Il existe de nombreuses applications assez connues et utilisées qui utilise l’aspect partagé et asynchrone que notre application devra posséder, on peut citer quelques exemples que nous avons vus :

[Paypal](https://www.paypal.com): Paypal, le célèbre service de paiement en ligne utilise la technologie Node.js sur son application afin de pouvoir gérer les appels asynchrones effectués aux serveurs (notamment pour le paiement).

[Ebay](https://www.ebay.com): Même entreprise que l’exemple précédent, Ebay, utilise également la technologie Node.js afin de garantir des connexions directes et partagées avec leurs serveurs, tout en minimisant un maximum le temps afin d’en faire une application le plus “en temps réel” possible (ce qui est logique, puisque Ebay propose un système d’enchère, il est donc primordial que les acheteurs sachent sans délais quand une enchère est mise à jour).

*Mention honorable : Linkedin, Yahoo (RIP), Mozilla, Netflix, Über, Groupon, GoDaddy*
