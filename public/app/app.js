'use strict';

var mainApp = angular.module('phonecatApp', []);

mainApp.controller('MainController', function ($scope) {
    $scope.controllerOwner = 'Lukasz';
});

//     .
//     config(['$locationProvider', '$routeProvider',
//         function config($routeProvider) {
//             $routeProvider.
//                 when('/phones', {
//                     template: '<phone-list></phone-list>'
//                 }).
//                 when('/phones/:phoneId', {
//                     template: '<phone-detail></phone-detail>'
//                 }).
//                 otherwise('/phones');
//         }
//     ]);
//
// angular.module('phonecatApp', []).controller('MainController', function ($scope) {
//     $scope.controllerOwner = {
//         imie: 'Lukasz',
//         nazwisko: 'Magierski'
//     };
//
// });


