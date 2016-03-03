
studentapp.controller('cartorderItemsController', ["$scope", "$http", "$location", "$sessionStorage",  function ($scope, $http, $location, $sessionStorage) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.order = {};
    $scope.order.ItemPrice = '';
    $scope.order.Quantity = '';
    $scope.order.TotalAmount = '';
    $scope.itemList = [{ Item: "Mobile", Price: 10000 }, { Item: "Laptop", Price: 50000 }, { Item: "Computer", Price: 30000}];

    if ($sessionStorage.cart == undefined) {
        $sessionStorage.cart = [];
    }

    $scope.getItemPrice = function (item) {
        $scope.order.ItemPrice = '';
        $scope.order.Quantity = '';
        $scope.order.TotalAmount = '';
        for (var i = 0; i < $scope.itemList.length; i++) {
            if ($scope.itemList[i].Item == item) {
                $scope.order.ItemPrice = $scope.itemList[i].Price;
            }
        }
    };

    $scope.getTotalAmount = function (itemPrice, quantity) {
        $scope.order.TotalAmount = '';
        if (itemPrice > 0 && quantity > 0) {
            $scope.order.TotalAmount = itemPrice * quantity;
        }
    };

    $scope.addOrder = function () {
        $scope.order.OrderDateTime = new Date();
        $sessionStorage.cart.push($scope.order);
        $location.path("/Cart");
    };
} ]);
