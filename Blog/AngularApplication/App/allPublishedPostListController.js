app.controller('allPublishedPostListController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", "$routeParams", function ($rootScope, $scope, $http, $location, $sessionStorage, $routeParams) {
    $scope.posts = {};

    if ($routeParams.tag == undefined) {
        $http.post("../Blog/getAllPublishedPostList")
        .then(function (response) {
            $scope.posts = response.data;
        });
    }
    else {
        $http.post("../Blog/getAllPublishedPostListByTag", { tag: $routeParams.tag })
        .then(function (response) {
            $scope.posts = response.data;
        });
    }
} ]);
