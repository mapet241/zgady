angular.module('mainApp').factory('User', ['$resource', function($resource) {
    return $resource('auth/loggedin', {}, {
        query: {
            method: 'GET'
        }
    });
}]);