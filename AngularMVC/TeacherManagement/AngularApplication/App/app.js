var app = angular.module('app', ['ngRoute', 'ngStorage', 'ngMessages']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularApplication/View/Home.htm',
                controller: 'homeController'
            })
            .when('/AddDetails', {
                templateUrl: '../AngularApplication/View/AddDetails.htm',
                controller: 'addDetailsController'
            })
            .when('/EditDetails/:TeacherID', {
                templateUrl: '../AngularApplication/View/EditDetails.htm',
                controller: 'editDetailsController'
            })
            .when('/ShowDetails', {
                templateUrl: '../AngularApplication/View/ShowDetails.htm',
                controller: 'showDetailsController'
            })
             .when('/ShowTeacherList', {
                 templateUrl: '../AngularApplication/View/ShowTeacherList.htm',
                 controller: 'showTeacherListController'
             })

			.otherwise({
			    redirectTo: '/'
			});
} ]);