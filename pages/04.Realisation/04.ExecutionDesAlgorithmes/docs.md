---
title: Execution des algorithmes
taxonomy:
    category: docs
---

## Envoyer un algorithmes
L'execution d'un algorithme procède en différentes étapes. Tout d'abord l'utilisateur doit rentrer un code JavaScript au format ECMAscript 5.1, le valider puis sélectionner un noeud esclave en indiquant le nombre d'itérations qu'il souhaite effectuer sur ce même algorithme.

## Déroulement
Suite à la première étape, le noeud maître va envoyer via socket.io les données rentrées par l'utilisateur au noeud esclave concerné. Ce dernier va alors créer un processus fils via la fonction fork() d'un script (`Slave/Controllers/AlgoChildProcess.js`) contenant tous les outils nécéssaires à l'exécution de l'algorithme. 
Pour exécuter l'algorithme, le processus fils va créer une machine virtuelle (librairie vm de node.js) puis y injecter le code JavaScript. Une boucle d'itérations demandé par l'utilisateur sera placé autour de l'exécution de l'algorithme afin de lancer x fois l'algorithme envoyé.

L'avantage du fork est de pouvoir prendre controle sur l'exécution globale du script, on pourra ainsi le stopper ou le mettre en pause via des signaux UNIX (fonctions n'existants pas dans les machines virtuelles de node)

![](diagram.jpg)


