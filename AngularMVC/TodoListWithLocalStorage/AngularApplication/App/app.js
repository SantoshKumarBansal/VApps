var app = angular.module('app', ['ngRoute', 'ngStorage', 'ngMessages']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularApplication/View/Home.htm',
                controller: 'homeController'
            })
            .when('/AssignTask', {
                templateUrl: '../AngularApplication/View/AssignTask.htm',
                controller: 'assignTaskController'
            })
            .when('/EditAssignedTask/:TaskID', {
                templateUrl: '../AngularApplication/View/EditAssignedTask.htm',
                controller: 'editAssignedTaskController'
            })
            .when('/AssignedTaskList', {
                templateUrl: '../AngularApplication/View/AssignedTaskList.htm',
                controller: 'assignedTaskListController'
            })

			.otherwise({
			    redirectTo: '/'
			});
} ]);