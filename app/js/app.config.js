'use strict';

angular.
    module('atoEacademy').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/home', {
                template: '<home-component></home-component>'
            }).
            when('/categories', {
                template: '<categories-component></categories-component>'
            }).
            when('/mylearning', {
                template: '<mylearning-component></mylearning-component>'
            }).
            when('/achivements', {
                template: '<achivements-component></achivements-component>'
            }).
            otherwise('/home');
        }
    ]);