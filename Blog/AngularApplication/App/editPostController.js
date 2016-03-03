app.controller('editPostController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", "$routeParams", function ($rootScope, $scope, $http, $location, $sessionStorage, $routeParams) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.post = {};

    $http.post("../Blog/getPost", { id: $routeParams.id })
        .success(function (response) {
            $scope.post = response[0];
            $scope.post.Tags = $scope.post.Tags.toString();
        });

    $scope.editPost = function () {
        $scope.post._id = { "$oid": $routeParams.id };
        $scope.post.Tags = $scope.post.Tags.split(',');
        $scope.post.ModifiedDateTime = new Date().toLocaleString();
        $http.post("../Blog/editPost", { post: JSON.stringify($scope.post) })
        .then(function (response) {
            $location.path("/PostAdministration");
        });
    };
} ]);
