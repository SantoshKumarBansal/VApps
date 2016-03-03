/********Used for Dropdown Master Fill(like State and District**********/
adminapp.factory('masterFactory', ['$http', function ($http) {
    var masterFactory = {};
    var baseurl = "../AngularMVC/";

    masterFactory.getStudentList = function () {
        return $http.post("getUsersListByUserType", {userType:'student'}).success(function (response) { return response; });
    };

    return masterFactory;
} ]);


/********Used for Edit**********/
adminapp.factory('dataFactory', ['$http', function ($http) {
    var objectID = {};
    return objectID;
} ]);



/********Used for Login**********/
adminapp.factory('loginFactory', ['$http', function ($http) {
    var loginInformation = {};
    return loginInformation;
} ]);
