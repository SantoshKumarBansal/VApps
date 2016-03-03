var adminapp = angular.module('adminapp', ['ngRoute','ngStorage']);

adminapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
            .when('/Login', {
                templateUrl: '../AngularApplication/View/Login.htm',
                controller: 'loginController'
            })
			.when('/AddBook', {
			    templateUrl: '../AngularApplication/View/AddBook.htm',
			    controller: 'addBookController'
			})
            .when('/UpdateBook', {
                templateUrl: '../AngularApplication/view/UpdateBook.htm',
                controller: 'updateBookController'
            })
            .when('/DeleteBook', {
                templateUrl: '../AngularApplication/view/DeleteBook.htm',
                controller: 'deleteBookController'
            })
            .when('/ListBook', {
                templateUrl: '../AngularApplication/view/ListBook.htm',
                controller: 'listBookController'
            })
             .when('/EditBook', {
                 templateUrl: '../AngularApplication/view/EditBook.htm',
                 controller: 'editBookController'
             })
              .when('/IssueBook', {
                  templateUrl: '../AngularApplication/view/IssueBook.htm',
                  controller: 'issueBookController'
              })
               .when('/IssueBooktoStudent', {
                   templateUrl: '../AngularApplication/view/IssueBooktoStudent.htm',
                   controller: 'issueBookToStudentController'
               })
//-------------Drill Down Report APPLICATION---------------------
               .when('/StudentReport', {
                   templateUrl: '../AngularApplication/view/StudentReport.htm',
                   controller: 'studentReportController'
               })
                .when('/BookReport/:LoginID', {
                    templateUrl: '../AngularApplication/view/BookReport.htm',
                    controller: 'bookReportController'
                })
//-------------CART APPLICATION---------------------
               .when('/CartAllOrdersList', {
                   templateUrl: '../AngularApplication/view/CartAllOrdersList.htm',
                   controller: 'cartallOrdersListController'
               })
			.otherwise({
			    redirectTo: '/'
			});
} ]);