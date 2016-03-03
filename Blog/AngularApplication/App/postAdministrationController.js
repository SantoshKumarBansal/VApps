app.controller('postAdministrationController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", function ($rootScope, $scope, $http, $location, $sessionStorage) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.posts = {};

    $http.post("../Blog/getPostList", { postedByEMailID: $sessionStorage.loginInformation.EMailID })
        .then(function (response) {
            $scope.posts = response.data;
        });

    $scope.editPost = function ($event) {
        $location.path("/EditPost/" + $event.target.attributes.id.value);
    };

    $scope.deletePost = function ($event) {
        $http.post("../Blog/deletePost", { id: $event.target.attributes.id.value })
        .then(function (response) {
            $http.post("../Blog/getPostList", { postedByEMailID: $sessionStorage.loginInformation.EMailID })
        .then(function (response) {
            $scope.posts = response.data;
        });
            alert("Post Deleted Successfully.");
        });
    };

    $scope.publishPost = function ($event) {
        $http.post("../Blog/publishPost", { id: $event.target.attributes.id.value })
        .then(function (response) {
            $http.post("../Blog/getPostList", { postedByEMailID: $sessionStorage.loginInformation.EMailID })
        .then(function (response) {
            $scope.posts = response.data;
        });
            alert("Post Published Successfully.");
        });
    };
} ]);
