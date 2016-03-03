app.controller('signInController',["$rootScope", "$scope", "$http", "$location", "$sessionStorage", "$filter", function ($rootScope, $scope, $http, $location, $sessionStorage, $filter) {
    
    if ($sessionStorage.loginInformation != undefined) {
        $location.path("/Home");
    }

    $scope.signIn = {};

    $scope.$watch('signIn.Name', function (val) {
        $scope.signIn.Name = $filter('uppercase')(val);
    }, true);

    $scope.saveSignInInformation = function () {
        $http.post("../Blog/isAlreadySignIn", { eMailID: $scope.signIn.EMailID })
        .success(function (response) {
            if (response == "Success") {
                $scope.signIn.Hobbies = $scope.hobbiesSelection;
                $scope.signIn.Orders = $scope.Orders;
                $http.post("../Blog/saveSignInInformation", { signIn: JSON.stringify($scope.signIn) })
                .success(function (response) {
                    $location.path("/Login");
                });
            }
            else {
                alert("You have already Sign In Using E-Mail ID : " + $scope.signIn.EMailID + ". Please Sign In using another E-Mail ID.");
            }
        });
    };
} ]);
