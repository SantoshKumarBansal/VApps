studentapp.controller('cartorderHistoryController', ["$scope", "$http", "$location","$sessionStorage", function ($scope, $http, $location, $sessionStorage) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.ordersList = [];

    $http.post("getOrderHistory", { id: $sessionStorage.loginInformation._id.$oid })
        .success(function (response) {
            $scope.ordersList = response[0].Orders;
        });
} ]);