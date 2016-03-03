adminapp.controller('issueBookController', ["$scope", "$http", "$location", "dataFactory", "$sessionStorage", function ($scope, $http, $location, dataFactory, $sessionStorage) {

    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $http.get("getBookList")
        .success(function (response) {
            $scope.BookList = response;
        });

    $scope.issueBook = function ($event) {
        dataFactory.objectID = $event.target.attributes.id.value;
        $location.path("/IssueBooktoStudent");
    };   
} ]); 



