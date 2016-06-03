function UserDetailController(User) {
    var self = this;

    User.get({}, function(data) {
        self.loggedInUser = data.displayName;
    });

}

angular.module('mainApp').component('login', {
    templateUrl: '/app/components/login-component/login.template.html',
    controller: ['User', UserDetailController]
});