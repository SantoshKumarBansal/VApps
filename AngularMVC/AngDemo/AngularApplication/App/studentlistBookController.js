studentapp.controller('studentlistBookController', ["$scope", "$http", "$location", function ($scope, $http, $location) {
    /*********Used to Filter in column(Ascending / Descending ********/
    $scope.orderByMe = function (Books) {
        $scope.myOrderBy = Books;
        $scope.bb = !$scope.bb;
    }
    /*********Used to Redirect at Login Page********/
    //    if (loginFactory.loginInformation == undefined) {
    //        $location.path("/Login");
    //    }

//    if ($sessionStorage.loginInformation == undefined) {
//        $location.path("/Login");
//    }

    /********************/
    $http.get("getBookList")
        .success(function (response) {
            $scope.BookList = response;
        });
} ]); 

