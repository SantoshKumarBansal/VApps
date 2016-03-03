app.directive("compareTo", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ctrl) {
            ctrl.$validators.compareTo = function (val) {
                return val == scope.otherModelValue;
            };
        }
    };
});
