adminapp.controller('addBookController', ["$scope", "$http", "$location", "loginFactory", "$sessionStorage", function ($scope, $http, $location, loginFactory, $sessionStorage) {
    
  /*********Used to Redirect at Login Page********/
//    if (loginFactory.loginInformation == undefined) {
//        $location.path("/Login");
//    }


    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }
  
    /*********Used Check Box********/
    $scope.Book = {};
    $scope.BookTypeList = ["Fiction", "NonFiction"];
    $scope.BookTypeSelection = [];

    $scope.toggleBookType = function toggleBookType(bookType) {
        var idx = $scope.BookTypeSelection.indexOf(bookType);
        // is currently selected
        if (idx > -1) {
            $scope.BookTypeSelection.splice(idx, 1);
        }
        // is newly selected
        else {
            $scope.BookTypeSelection.push(bookType);
        }
    };
    
    $scope.addBook = function () {
        $scope.Book.BookType = $scope.BookTypeSelection;
        $http.post("Save", { Book: JSON.stringify($scope.Book) })
        .success(function (response) { $scope.Book = {}; });
    }
} ]); 