studentapp.controller('issuedBookController', ["$scope", "$http", "$location", "$sessionStorage", function ($scope, $http, $location, $sessionStorage) {

    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.IssuedBookList = {};

    $http.post('getIssuedBookList', { issuedTo: $sessionStorage.loginInformation.LoginID })
    .success(function (response) { $scope.IssuedBookList = response; });

} ]); 

