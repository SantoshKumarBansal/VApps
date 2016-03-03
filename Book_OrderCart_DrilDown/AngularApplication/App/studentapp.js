var studentapp = angular.module('studentapp', ['ngRoute', 'ngStorage']);

studentapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
            .when('/ListBook', {
                templateUrl: '../AngularApplication/view/ListBook.htm',
                controller: 'studentlistBookController'
            })
             .when('/StudentLogin', {
                 templateUrl: '../AngularApplication/view/StudentLogin.htm',
                 controller: 'studentloginController'
             })
              .when('/IssuedBook', {
                  templateUrl: '../AngularApplication/view/StudentIssuedBook.htm',
                  controller: 'issuedBookController'
              })
              //---------------------------CART APPLICATION-----------------

                .when('/CartOrderItems', {
                    templateUrl: '../AngularApplication/view/CartOrderItems.htm',
                    controller: 'cartorderItemsController'
                })
                .when('/CartEditOrder/:OrderID', {
                    templateUrl: '../AngularApplication/view/CartEditOrder.htm',
                    controller: 'carteditOrderController'
                })
                .when('/Cart', {
                    templateUrl: '../AngularApplication/view/Cart.htm',
                    controller: 'cartController'
                })
                .when('/CartOrderHistory', {
                    templateUrl: '../AngularApplication/view/CartOrderHistory.htm',
                    controller: 'cartorderHistoryController'
                })

			.otherwise({
			    redirectTo: '/'
			});
} ]);