adminapp.controller('studentReportController', ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "masterFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, masterFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.reportByStudent = [];

    masterFactory.getStudentList().then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.getBooksCountByStudent(response.data[i].LoginID, i);
            console.log(response.data[i].LoginID);
        }
    });

    $scope.getBooksCountByStudent = function (LoginID, i) {
        $http.post("getBooksCountByStudent", { loginID: LoginID })
        .then(function (response) {
            var temp = {};
            temp.LoginID = LoginID;
            temp.Count = response.data.length;
            $scope.reportByStudent[i] = temp;
        });
    };
} ]);
