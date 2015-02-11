angular.module('myApp.sections')

    .directive('thisTest', function () {
        return {
            //require: '^ngModel',
            templateUrl: 'view2/view2.html'
        }; // Reroute templateUrl
    }); // Directive
    //
    //.directive('testOne', function () {
    //    return {
    //        templateUrl: 'section-one.html'
    //    };
    //});

    // Added a comment!