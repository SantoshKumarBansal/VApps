app.controller('loginController',["$rootScope", "$scope", "$http", "$location", "$sessionStorage", function ($rootScope, $scope, $http, $location, $sessionStorage) {
    if ($sessionStorage.loginInformation != undefined) {
        $location.path("/Home");
    }

    $scope.login = {};

    $scope.validateLogin = function () {
        $http.post("../Blog/validateLogin", { login: JSON.stringify($scope.login) })
        .success(function (response) {
            if (response == "Error") {
                alert("Invalid E-Mail ID or Password.");
            }
            else {
                $sessionStorage.loginInformation = response;
                $location.path("/Home");
            }
        });
    };
} ]);
