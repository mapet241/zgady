var mainApp = angular.module('mainApp');

mainApp.controller('UsersController', ['User', function UsersController(User) {
    var self = this;

    User.get({}, function(data) {
        self.loggedUser = data.displayName;
    });

    this.isLoggedIn = function() {
        if (self.loggedUser) {
            return true;
        }
        return false;
    };

}]);