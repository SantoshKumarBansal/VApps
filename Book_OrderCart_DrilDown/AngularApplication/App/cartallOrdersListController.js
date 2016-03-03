adminapp.controller('cartallOrdersListController',["$scope", "$http", "$location", "$sessionStorage", function ($scope, $http, $location, $sessionStorage) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.getUsersList = {};

    $http.get("getAllOrderList")
        .success(function (response) {
            $scope.getUsersList = response;
        });
} ]);
