app.controller('addDetailsController', ["$scope", "$http", "$location", "$localStorage","masterFactory", function ($scope, $http, $location, $localStorage, masterFactory) {
    $scope.Teacher = {};

    $scope.addDetails = function () {
        if ($localStorage.teacherdetailsList == undefined) {
            $localStorage.teacherdetailsList = [];
        }
        else {
            $scope.Teacher.Status = 'Incomplete';
            $localStorage.teacherdetailsList.push($scope.Teacher);
            $location.path('/ShowDetails');
        }
    }

    //State and District Cascading
    $scope.stateList = {};
    $scope.districtList = {};


    masterFactory.getStateList().success(function (response) {
        $scope.stateList = response;
    });

    $scope.getDistrictList = function (stateName) {
        masterFactory.getDistrictList(stateName).success(function (response) {
            $scope.Teacher.District = '';
            $scope.districtList = response;
        });
    };


} ]);
