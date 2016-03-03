app.controller('editDetailsController', ["$scope", "$http", "$location", "$localStorage", "$routeParams", "masterFactory", function ($scope, $http, $location, $localStorage, $routeParams, masterFactory) {
    $scope.Teacher = {};
//    $scope.stateList = {};
//    $scope.districtList = {};

    if ($localStorage.teacherdetailsList != undefined) {
        $scope.Teacher = $localStorage.teacherdetailsList[$routeParams.TeacherID];
        $scope.Teacher.JoiningDate = new Date($scope.Teacher.JoiningDate);
    }

//    masterFactory.getStateList().success(function (response) {
//        $scope.stateList = response;
//    });

//    $scope.getDistrictList = function (stateName) {
//        masterFactory.getDistrictList(stateName).success(function (response) {
//            $scope.Teacher.District = '';
//            $scope.districtList = response;
//        });
//    };

    $scope.editDetails = function () {
        $localStorage.teacherdetailsList[$routeParams.TeacherID] = $scope.Teacher;
        $location.path("/ShowDetails");
    };

} ]);
