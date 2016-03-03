app.controller('postDetailsController',["$rootScope", "$scope", "$http", "$location", "$sessionStorage", "$routeParams", function ($rootScope, $scope, $http, $location, $sessionStorage, $routeParams) {
    $scope.post = {};
    $scope.comments = {};
    $scope.isAlreadyLiked = false;
    $scope.isAlreadyRead = false;
    $scope.isShowCommentBlock = false;

    $http.post("../Blog/getPost", { id: $routeParams.id })
        .success(function (response) {
            $scope.post = response[0];
        });

    if ($sessionStorage.postLiked == undefined) {
        $sessionStorage.postLiked = [];
    }
    else {
        for (var i in $sessionStorage.postLiked) {
            if ($sessionStorage.postLiked[i] == $routeParams.id) {
                $scope.isAlreadyLiked = true;
            }
        }
    }

    if ($sessionStorage.postRead == undefined) {
        $sessionStorage.postRead = [];
    }
    else {
        for (var i in $sessionStorage.postRead) {
            if ($sessionStorage.postRead[i] == $routeParams.id) {
                $scope.isAlreadyRead = true;
            }
        }
    }

    if (!$scope.isAlreadyRead) {
        $scope.isAlreadyRead = true;
        $sessionStorage.postRead.push($routeParams.id);
        $http.post("../Blog/readPost", { id: $routeParams.id })
    }

    $scope.likePost = function () {
        $scope.isAlreadyLiked = true;
        $sessionStorage.postLiked.push($routeParams.id);
        $http.post("../Blog/likePost", { id: $routeParams.id })
        .then(function (response) {
            $http.post("../Blog/getPost", { id: $routeParams.id })
                        .success(function (response) {
                            $scope.post = response[0];
                        });
        });
    };

    $scope.unlikePost = function () {
        $scope.isAlreadyLiked = false;
        for (var i in $sessionStorage.postLiked) {
            if ($sessionStorage.postLiked[i] == $routeParams.id) {
                $sessionStorage.postLiked.splice(i, 1);
            }
        }
        $http.post("../Blog/unlikePost", { id: $routeParams.id })
        .then(function (response) {
            $http.post("../Blog/getPost", { id: $routeParams.id })
                        .success(function (response) {
                            $scope.post = response[0];
                        });
        });
    };

    $scope.showCommentBlock = function () {
        $scope.isShowCommentBlock = true;
    };

    $scope.saveComment = function () {
        $scope.comments.CommentedDateTime = new Date().toLocaleString();
        var temp = [];
        temp.push($scope.comments);
        $http.post("../Blog/saveComment", { id: $routeParams.id, comments: angular.toJson(temp) })
        .then(function (response) {
            $scope.isShowCommentBlock = false;
            $http.post("../Blog/getPost", { id: $routeParams.id })
                        .success(function (response) {
                            $scope.post = response[0];
                        });
        });
    };
} ]);
