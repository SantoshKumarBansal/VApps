app.controller('assignTaskController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", function ($rootScope, $scope, $http, $location, $sessionStorage) {

    //********Save Data*********
    $scope.task = {};
    $scope.assignTask = function () {
        $scope.task.Status = 'Incomplete';
        $http.post("../Home/SaveTodoList", { task: JSON.stringify($scope.task) })
        .success(function (response) { $scope.task = {}; }); alert('Task Added Successfuly!!');
        $scope.getTaskList();
    }

    //********Get Data*********
    $scope.getTaskList = function () {
        $http.get("../Home/getTaskList")
        .success(function (response) {
            $scope.TaskList = response;
        });
    }
    $scope.getTaskList();

    //********Get Task Data for Edit*********
    $scope.getTaskListforEdit = function ($event) {
        $http.post("../Home/getTaskListforEdit", { taskId: $event.target.attributes.id.value })
        .success(function (response) {
            $scope.task = angular.fromJson(response[0]);
            $scope.task.taskDate = new Date($scope.task.taskDate);
        });
    };

    //********Get Task for Delete*********
    $scope.getTaskListforDelete = function ($event) {
        $http.post("../Home/getTaskListforDelete", { taskId: $event.target.attributes.id.value })
        alert("Order Deleted Successfully.");
        $scope.getTaskList();
    };

    //********Mark as Complete*********
    $scope.markAsCompleteAssignedTask = function ($event) {
        $http.post("../Home/markAsCompleteAssignedTask", { taskId: $event.target.attributes.id.value, Status: 'Complete'})
        alert("Assigned Task Marked as Completed Successfully.");
    };

    $scope.getTaskList();
} ]);
