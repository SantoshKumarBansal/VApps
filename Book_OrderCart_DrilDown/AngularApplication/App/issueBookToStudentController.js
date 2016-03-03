adminapp.controller('issueBookToStudentController', ["$scope", "$http", "$location", "dataFactory", "$sessionStorage", function ($scope, $http, $location, dataFactory, $sessionStorage) {

    $scope.studentList = {};
    $scope.Book = {};

    $http.post('getUsersListByUserType', { userType: 'student' })
    .success(function (response) { $scope.studentList = response; });


    $scope.issueBook = function () {
        $scope.Book.issuedDateTime = new Date();
        $http.post("issueBook", { id: dataFactory.objectID,Book: JSON.stringify($scope.Book) })
    .success(function (response) {
         alert("Book Issued Successfuly");
        $location.path("/IssueBook");
    });
    };
} ]);



