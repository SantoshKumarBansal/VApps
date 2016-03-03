adminapp.controller('deleteBookController', ["$scope", "$http", "$location", "loginFactory", "$sessionStorage", function ($scope, $http, $location, loginFactory,$sessionStorage) {
    /*********Used to Redirect at Login Page********/
//    if (loginFactory.loginInformation == undefined) {
//        $location.path("/Login");
    //    }
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    /********************/
    $http.get("getBookList")
        .success(function (response) {
            $scope.BookList = response;
        });
    $scope.deleteBook = function ($event) {
        $http.post("deleteBook", { id: $event.target.attributes.id.value })
        .success(function (response) {

            $location.path("/ListBook");
        });
    };
} ]); 



