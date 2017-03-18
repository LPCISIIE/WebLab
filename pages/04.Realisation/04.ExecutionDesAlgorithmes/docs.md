---
title: Execution des algorithmes
taxonomy:
    category: docs
---

## Envoyer un algorithmes
L'exécution d'un algorithme procède en différentes étapes. Tout d'abord l'utilisateur doit rentrer un code JavaScript au format ECMAscript 5.1, le valider puis sélectionner un noeud esclave en indiquant le nombre d'itérations qu'il souhaite effectuer sur ce même algorithme.

## Déroulement
Suite à la première étape, le noeud maître va envoyer via socket.io les données rentrées par l'utilisateur au noeud esclave concerné. Ce dernier va alors créer un processus fils via la fonction fork() d'un script (`Slave/Controllers/AlgoChildProcess.js`) contenant tous les outils nécéssaires à l'exécution de l'algorithme. 

Pour exécuter l'algorithme, le processus fils va créer une machine virtuelle (librairie vm de node.js) puis y injecter le code JavaScript. 
Afin de lancer x fois l'algorithme comme l'utilisateur le souhaite, une boucle d'itérations correspondant au nombre de répétitions demandé sera placé autour de la méthode exécutant l'algorithme.

A chaque fin d'itération des données seront envoyées via un [tube](https://fr.wikipedia.org/wiki/Tube_(shell)) liant le processus père et fils, puis passant par le noeud maître jusqu'au client pour prévenir l'utilisateur de l'avancée de l'exécution du script.
Lors de la dernière itération, les données globales représentant l'ensemble de l'exécution de l'algorithme (toutes les itérations) seront envoyés au client permettant ainsi de faire des graphiques.

L'avantage du fork est de pouvoir prendre controle sur l'exécution globale du script, on pourra ainsi le stopper ou le mettre en pause via des signaux UNIX (fonctions n'existants pas dans les machines virtuelles de node)

![](diagram.jpg)


## Ciblage de variables et fonctionnement de la Sandbox

