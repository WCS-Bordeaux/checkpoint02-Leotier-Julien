'use strict'

angular.module('wildNoteApp')

    .component('question', {
        templateUrl: '/app/components/question/question.html',
        controller: Question
    })

function Question($scope, $resource) {
    var tableau = [
        {
            question: "Pourquoi utiliser $resource dans angular plutôt que $http ?",
            response: '$resource integre directement les méthodes get, put, push ,delete et il permet de faire des requetes plus complexe que $http'
        },
        {
            question: "C'est quoi la différence entre front-end et back-end en fait ?",
            response: "font-end = côté client/ Back-end = côté serveur"
        },
        {
            question: "Pourquoi je peux pas utiliser document.getElementById dans NodeJS?",
            response: "On ne peut pas utiliser document.getElmentById dans node car c'est du côté serveur et nous n'avons pas de manipulation de Dom coté serveur"
        },
        {
            question: "Pourquoi c'est très grave d'utiliser document.getElementById dans AngularJS ?",
            response: "Car nous avons le controller et la scope qui s'occupe déja des manipulation de dom"
        },
        {
            question: "C'est quoi la différence entre NodeJS et Javascript ?",
            response: "Nodejs est un framework de javascript plus bas niveau pour comuniquer avec le serveur"
        },
        {
            question: "En quoi c'est utile d'utiliser npm ?",
            response: "npm est utile pour récupéré simplement des dépendance, ou pour passer son projet au autre utilisateur"
        },
        {
            question: "A quoi ça sert une base de donnée ? Et mongoDB ?",
            response: "Elle sert à rendre persitante les données, nous pouvons stocker des informations grace à la base de données, mongodb est une base de donnée de type no-sql c'est à dire non relationelle"
        },
        {
            question: " Est-il possible de faire des relations entre plusieurs collections ? Est-ce une bonne pratique ?",
            response: "Oui il est possible de faire du relationnel entre plusieur collection mais mongodb n'est pas fais pour ça , il faudras utiliser plus mysql si on n'a besoin de faire du relationelle"
        },
        {
            question: "C'est quoi un document dans mongoDB ? et une collection au final ?",
            response: "un document dans mongodb c'est un fichier qui contient les informations pour la collection, ce n'est pas la meme chose , la collection elle contient les fichier document"
        },
        {
            question: " Quelle serai la requête qui me permettrai d'aller chercher dans ma db 'toto' dans la collection 'tata' l'utilisateur ayant pour nom 'titi' ?",
            response: 'db.toto.find(tata : {username: titi})'
        },
        {
            question: " Est-il plus important de sécuriser le client ou le serveur ? Pourquoi ?",
            response: "les deux doivent être sécurisé car généralement des informations sensible sont sur un serveur et on peut y acceder via le client"
        },
        {
            question: "Pourquoi [1, 2, 3, () => 'boom'][Number(true) + 2]() === 'boom' ? Expliquez le plus précisément possible",
            response: "[Number(true) + 2] est l'index du tableau donc quand on fait [1, 2, 3 , () =>'boom'][Number(true) + 2] nous allons chercher le 3ème enplacement du tableau ce qui nous donne une function ()=>'boom' que nous executons deriere en faisant () ce qui nous return 'boom'"
        },
        {
            question: "Cite 3 directives angularjs",
            response: "ng-if, ng-repeat, ng-show"
        }
    ]
    console.log(tableau)

    $scope.tableaux = tableau;
}

