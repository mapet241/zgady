angular.module('mainApp').
    config(['$routeProvider', function config($routeProvider) {
            $routeProvider.
                when('/', {
                    template: '<main></main>'
                }).
                otherwise('/');
        }
    ]);