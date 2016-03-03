app.controller('showDetailsController', ["$scope", "$http", "$location", "$localStorage","$routeParams", function ($scope, $http, $location, $localStorage,$routeParams) {

    $scope.teacherDetails = [];

    if ($localStorage.teacherdetailsList !== undefined) {
        $scope.teacherDetails = $localStorage.teacherdetailsList;
    }

    $scope.editTeacherDetails = function ($event) {
        $location.path("/EditDetails/" + $event.target.attributes.id.value);
    };

    $scope.deleteTeacherDetails = function ($event) {
        $localStorage.teacherdetailsList.splice($event.target.attributes.id.value, 1);
        //$scope.teacherDetails = $localStorage.teacherDetailsList;
        alert("Assigned Task Deleted Successfully.");
    };

    $scope.markAsComplete = function ($event) {
        $localStorage.teacherdetailsList[$event.target.attributes.id.value].Status = "Complete";
        //$scope.teacherDetails = $localStorage.teacherDetailsList;
        alert("Assigned Task Marked as Completed Successfully.");
    };


    $scope.syncTeacherDetails = function () {
        $http.post("../TeacherManagement/syncTeacherDetails", { teacherDetails: angular.toJson($localStorage.teacherdetailsList) })
        .then(function (response) {
            delete $localStorage.teacherdetailsList;
            $scope.teacherDetails = [];
            alert("Teacher Details Synced Successfully.");
            $location.path("/ShowDetails");
        });
    };
} ]);
