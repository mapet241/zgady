angular.module('mainApp').factory('Questions', ['$resource', function($resource) {
    return $resource('api/questions', {}, {
        query: {
            method: 'GET'
        }
    });
}]);