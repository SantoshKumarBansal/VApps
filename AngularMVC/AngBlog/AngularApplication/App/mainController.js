app.controller('mainController', ["$rootScope", "$scope", "$http", "$location", "$sessionStorage", function ($rootScope, $scope, $http, $location, $sessionStorage) {
    $sessionStorage.welcome = "Welcome, Guest";
    $sessionStorage.menuType = "Guest";

    if ($sessionStorage.loginInformation != undefined) {
        $sessionStorage.welcome = "Welcome " + $sessionStorage.loginInformation.Name;
        $sessionStorage.menuType = $sessionStorage.loginInformation.UserType;
    }

    $rootScope.welcome = $sessionStorage.welcome;
    $rootScope.menuType = $sessionStorage.menuType;
} ]);
