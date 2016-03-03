app.factory('masterFactory', ['$http', function ($http) {
    var masterFactory = {};
    
    masterFactory.getStateList = function () {
        return $http.get("../TeacherManagement/getStateList").success(function (response) { return response; });
    };

    masterFactory.getDistrictList = function (stateName) {
        return $http.post("../TeacherManagement/getDistrictList", { stateName: stateName }).success(function (response) { return response; });
    };

    return masterFactory;
} ]);