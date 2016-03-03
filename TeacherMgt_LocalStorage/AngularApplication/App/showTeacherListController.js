app.controller('showTeacherListController', ["$scope", "$http", "$location", "$localStorage", function ($scope, $http, $location, $localStorage) {

    $scope.teacherDetails = [];

    if ($localStorage.teacherdetailsList !== undefined) {
        $scope.teacherDetails = $localStorage.teacherdetailsList;
    }


//    ******Search By 1 column*********
    $scope.getFilter = function () {
        var filter = {};
        filter[$scope.filter] = $scope.query;
        return filter;
    };

    //    ******Search By 2 column*********
    $scope.search = function (row) {
        var temp = angular.lowercase($scope.query);
        return ((row.TeacherName.toString().indexOf(temp || '') !== -1 || row.Address.indexOf(temp || '') !== -1));
    };
} ]);
