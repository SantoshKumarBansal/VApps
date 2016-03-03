adminapp.controller('updateBookController', ["$scope", "$http", "$location", "dataFactory", "loginFactory","$sessionStorage", function ($scope, $http, $location, dataFactory, loginFactory,$sessionStorage)
 {

     /*********Used to Redirect at Login Page********/
//     if (loginFactory.loginInformation == undefined) {
//         $location.path("/Login");
     //     }
     if ($sessionStorage.loginInformation == undefined) {
         $location.path("/Login");
     }

     /********************/

    $http.get("getBookList")
        .success(function (response) {
            $scope.BookList = response;
        });
    $scope.updateBook = function ($event) {
       dataFactory.objectID = $event.target.attributes.id.value;
        $location.path("/EditBook");
        };
} ]); 



