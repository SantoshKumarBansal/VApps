app.controller('createPostController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", function ($rootScope, $scope, $http, $location, $sessionStorage) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.post = {};

    $scope.createPost = function () {
        $scope.post.Tags = $scope.post.Tags.split(',');
        $scope.post.PostedByName = $sessionStorage.loginInformation.Name;
        $scope.post.PostedByEMailID = $sessionStorage.loginInformation.EMailID;
        $scope.post.IsPublished = "false";
        $scope.post.Reads = 0;
        $scope.post.Likes = 0;
        $scope.post.CreatedDateTime = new Date().toLocaleString();
        $scope.post.ModifiedDateTime = new Date().toLocaleString();
        $http.post("../Blog/createPost", { post: JSON.stringify($scope.post) })
        .then(function (response) {
            $location.path("/PostAdministration");
        });
    };
} ]);
