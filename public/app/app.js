'use strict';

angular.module('phonecatApp').
    config(['$locationProvider', '$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/phones', {
                    template: '<phone-list></phone-list>'
                }).
                when('/phones/:phoneId', {
                    template: '<phone-detail></phone-detail>'
                }).
                otherwise('/phones');
        }
    ]);

angular.module('phonecatApp', []).controller('MainController', function ($scope) {
    $scope.controllerOwner = {
        imie: 'Lukasz',
        nazwisko: 'Magierski'
    };

});


