'use strict'

angular.module('wildNoteApp')

    .component('affiche', {
        templateUrl: '/app/components/Affiche/affiche.html',
        controller: Affiche
    })

function Affiche($scope, $resource) {
    var tab = [];
    $resource("/users").get().$promise.then(function (R) {
        $resource("/notes").get().$promise.then(function (N) {
        
            for(let i = 0; i < R.users.length; i++){
                tab.push(new Array(R.users[i]));
                for(let l = 0; l < N.notes.length; l++){
                    if(R.users[i]._id == N.notes[l].userId){
                        tab[i].push(N.notes[l]);
                    }
                }
            }
            $scope.tabs = tab;
        })
    })
}

