app.controller('assignTaskController', ["$scope", "$http", "$location", "$localStorage", function ($scope, $http, $location, $localStorage) {
    $scope.task = {};

    if ($localStorage.tasks == undefined) {
        $http.get("../ToDoSync/getAllAssignedTaskList")
        .then(function (response) {
            $localStorage.tasks = [];
            $localStorage.tasks = response.data;
            console.log(response.data);
            $scope.taskList = $localStorage.tasks;
        });
    }

    $scope.assignTask = function () {
        $scope.task.Status = "Incomplete";
        $scope.task.IsDeleted = "N";
        $localStorage.tasks.push($scope.task);
        $location.path("/AssignedTaskList");
    };
} ]);
