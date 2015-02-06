angular.module('myApp.sections')

    .controller('sectionOneCtrl', ['$scope', function ($scope) {
        console.log("LOADED SECTION ONE CTRL");
        $scope.my_var = "Eureka!";
    }]);