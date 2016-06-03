function UserDetailController(Questions) {
    var self = this;

    Questions.get({}, function(data) {
        self.questions = data.data;
    });

    this.isCollapsed = function(question) {
        if (!('isCollapsed' in question)) {
            question.isCollapsed = true;
        }
        return question.isCollapsed;
    }

}

angular.module('mainApp').component('main', {
    templateUrl: '/app/components/main-component/main.template.html',
    controller: ['Questions', UserDetailController]
});