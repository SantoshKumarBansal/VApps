adminapp.controller('listBookController', ["$scope", "$http", "$location", "loginFactory", "$sessionStorage", "$filter", function ($scope, $http, $location, loginFactory, $sessionStorage, $filter) {
    
    /*********Used to Filter in column(Ascending / Descending ********/
    $scope.orderByMe = function (Books) {
        $scope.myOrderBy = Books;
        $scope.bb = !$scope.bb;
    }
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


        /*********Filter By 1 Column***********/
        $scope.getFilter = function () {
            var filter = {};
            filter[$scope.filter] = $scope.query;
            return filter;
        };
} ]); 

