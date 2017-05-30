'use strict';

var app = angular.module("wildNoteApp", ["ui.router", "ngResource"])
    .config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/",
                component: "home"
            },
            {
                name: "question",
                url: "/",
                component: "question"
            },
        ];
        $urlRouterProvider.otherwise("/"); // Page par défaut
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

    });