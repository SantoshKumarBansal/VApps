adminapp.controller('editBookController', ["$scope", "$http", "$location", "dataFactory","$sessionStorage", function ($scope, $http, $location, dataFactory,$sessionStorage) {
   
    $http.post("getBook", { id: dataFactory.objectID })
        .success(function (response) {
            $scope.Book = response[0];
            $scope.Book.BookPurcahseDate = new Date($scope.Book.BookPurcahseDate);
        });

    $scope.editBook = function () {
        $scope.Book._id = { "$oid": dataFactory.objectID };
        $http.post("editBook", { Book: JSON.stringify($scope.Book) })
    .success(function (response) {
        $location.path("/UpdateBook");
    });
    };
} ]); 



