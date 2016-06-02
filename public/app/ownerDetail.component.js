function OwnerDetailController($http) {
    var self = this;

    $http.get('auth/loggedin').then(function(response) {
        self.users = response.data.displayName;
    });
}

angular.module('phonecatApp').component('ownerDetail', {
    templateUrl: '/app/ownerDetails.html',
    controller: OwnerDetailController,
    bindings: {
        owner: '<'
    }
});