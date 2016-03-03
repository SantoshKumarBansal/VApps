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
            .when('/TaskList', {
                templateUrl: '../AngularApplication/View/TaskList.htm',
                controller: 'taskListController'
            })
			.otherwise({
			    redirectTo: '/'
			});
} ]);