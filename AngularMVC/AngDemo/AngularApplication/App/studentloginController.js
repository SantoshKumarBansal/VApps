studentapp.controller('studentloginController', ["$scope", "$http", "$location", "$sessionStorage", function ($scope, $http, $location,  $sessionStorage) {
    $scope.login = {};

    $scope.validateLogin = function () {
        $http.post("validateLogin", { login: JSON.stringify($scope.login) })
        .success(function (response) {
            if (response == "Error") {
                alert("Invalid Login ID or Password.");
            }
            else {
                $sessionStorage.loginInformation = response;
                if ($sessionStorage.loginInformation.UserType == 'admin') {
                    $location.path("/AddBook");
                }
                else {
                    $location.path("/ListBook");
                }
            }
        });
    };
} ]);