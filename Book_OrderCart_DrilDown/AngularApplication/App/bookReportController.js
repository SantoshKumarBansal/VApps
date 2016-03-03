adminapp.controller('bookReportController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", "$routeParams", function ($rootScope, $scope, $http, $location, $sessionStorage, $routeParams) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.IssuedBookList = [];

    $http.post('getIssuedBookList', { issuedTo: $routeParams.LoginID })
    .success(function (response) { $scope.IssuedBookList = response; });

} ]);
