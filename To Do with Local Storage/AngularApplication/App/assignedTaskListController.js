app.controller('assignedTaskListController', ["$scope", "$http", "$location", "$localStorage", function ($scope, $http, $location, $localStorage) {
    $scope.taskList = [];

    if ($localStorage.tasks != undefined) {
        $scope.taskList = $localStorage.tasks;
    }
    else {
        $http.get("../ToDoSync/getAllAssignedTaskList")
        .then(function (response) {
            $localStorage.tasks = [];
            $localStorage.tasks = response.data;
            console.log(response.data);
            $scope.taskList = $localStorage.tasks;
        });
    }

    $scope.editAssignedTask = function ($event) {
        $location.path("/EditAssignedTask/" + $event.target.attributes.id.value);
    };

    $scope.deleteAssignedTask = function ($event) {
        $localStorage.tasks[$event.target.attributes.id.value].IsDeleted = "Y";
        $scope.taskList = $localStorage.tasks;
        alert("Assigned Task Deleted Successfully.");
    };

    $scope.markAsCompleteAssignedTask = function ($event) {
        $localStorage.tasks[$event.target.attributes.id.value].Status = "Complete";
        $scope.taskList = $localStorage.tasks;
        alert("Assigned Task Marked as Completed Successfully.");
    };

    $scope.syncAssignedTaskList = function () {
        $http.post("../ToDoSync/syncAssignedTaskList", { tasks: angular.toJson($localStorage.tasks) })
        .then(function (response) {
            delete $localStorage.tasks;
            $scope.taskList = [];
            alert("Assigned Task List Synced Successfully.");
            $location.path("/AssignedTaskList/");
        });
    };

} ]);
