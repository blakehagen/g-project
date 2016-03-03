angular.module('repApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './templates/repTmpl.html',
            controller: 'repCtrl'
        })

    $urlRouterProvider
        .otherwise('/');

});