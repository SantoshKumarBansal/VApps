adminapp.controller('loginController', ["$scope", "$http", "$location", "loginFactory", "$sessionStorage", function ($scope, $http, $location, loginFactory, $sessionStorage) {
    $scope.login = {};

    $scope.validateLogin = function () {
        $http.post("validateLogin", { login: JSON.stringify($scope.login) })
        .success(function (response) {
            if (response == "Error") {
                alert("Invalid Login ID or Password.");
            }
            else {
                $sessionStorage.loginInformation = response;
                $location.path("/AddBook");
            }
        });
    };
} ]);