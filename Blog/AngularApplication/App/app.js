var app = angular.module('app', ['ngRoute', 'ngStorage', 'ngMessages']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularApplication/View/Home.htm',
                controller: 'homeController'
            })
            .when('/Login', {
                templateUrl: '../AngularApplication/View/Login.htm',
                controller: 'loginController'
            })
            .when('/SignIn', {
                templateUrl: '../AngularApplication/View/SignIn.htm',
                controller: 'signInController'
            })
            .when('/LogOut', {
                templateUrl: '../AngularApplication/View/LogOut.htm',
                controller: 'logOutController'
            })
             .when('/PostAdministration', {
                 templateUrl: '../AngularApplication/View/PostAdministration.htm',
                 controller: 'postAdministrationController'
             })
            .when('/CreatePost', {
                templateUrl: '../AngularApplication/View/CreatePost.htm',
                controller: 'createPostController'
            })
            .when('/EditPost/:id', {
                templateUrl: '../AngularApplication/View/EditPost.htm',
                controller: 'editPostController'
            })
            .when('/AllPublishedPostList', {
                templateUrl: '../AngularApplication/View/AllPublishedPostList.htm',
                controller: 'allPublishedPostListController'
            })
            .when('/PostDetails/:id', {
                templateUrl: '../AngularApplication/View/PostDetails.htm',
                controller: 'postDetailsController'
            })
            .when('/AllPublishedPostList/:tag', {
                templateUrl: '../AngularApplication/View/AllPublishedPostList.htm',
                controller: 'allPublishedPostListController'
            })
			.otherwise({
			    redirectTo: '/'
			});
} ]);