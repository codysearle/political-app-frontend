angular.module('myApp.sections')

    .directive('testTwo', function () {
        return {
            //require: '^ngModel',
            templateUrl: 'section-one.html'
        }; // Reroute templateUrl
    }); // Directive