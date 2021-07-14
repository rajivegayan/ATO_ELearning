'use strict';

angular.
    module('atoEacademy').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/home', {
                template: '<home-component></home-component>'
            }).
            otherwise('/home');
        }
    ]);