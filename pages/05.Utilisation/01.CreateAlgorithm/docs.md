---
title: Ecrire un algorithme
taxonomy:
    category: docs
---


## Bon usage de l'écriture d'un algorithme
Comme précisé dans le chapitre précédent, l'application WebLab supporte uniquement du code JavaScript allant jusqu'à la version 5.1 d'**EcmaScript** oubliez donc les variables de types ` let ` et fonctions fléchées du type:
```javascript
([param] [, param]) => {
    // Do something...
}
```

L'application n'est pour l'instant pas protégée contre les attaques connues de types fork bomb ou boucles infinies.

### Syntaxe

*Input* : Cette syntaxe sert à préciser quelles variables doivent conserver leurs valeurs entre les itérations.
Il est possible d'initialiser une valeur input de la sorte : 

```javascript
//#input:variableName=firstValueAtFirstIteration

// Do something...

var webLab = maFonction(variableName) 
```

*Output* : Cette syntaxe sert à définir quelles variables seront utilisées pour l'affichage de statistiques, il est possible de les initialiser de la manière suivante :

```javascript
//#output:variableName
var variableName = 42;
```

### Exemple 
Plusieurs exemples sont disponibles dans dossier [`WebLab/AlgoSample`](https://github.com/TPCISIIE/WebLab/tree/master/AlgoSample)
Voici un algorithme représentant les fonctions mathématiques sinus et cosinus : 

```javascript
//#input:sin=0
//#input:cos=0
//#input:i=0
//#output:sin
//#output:cos

sin=Math.sin(i)
cos=Math.cos(i)
i=Number(i)+0.4
```
