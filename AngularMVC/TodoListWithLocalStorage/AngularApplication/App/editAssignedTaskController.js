app.controller('editAssignedTaskController', ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.task = {};

    if ($localStorage.tasks != undefined) {
        $scope.task = $localStorage.tasks[$routeParams.TaskID];
        $scope.task.DueDate = new Date($scope.task.DueDate);
    }

    $scope.editAssignedTask = function () {
        $localStorage.tasks[$routeParams.TaskID] = $scope.task;
        $location.path("/AssignedTaskList");
    };
} ]);
