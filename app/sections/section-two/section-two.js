angular.module('myApp.sections')

    .controller('sectionTwoCtrl', ['$scope', function ($scope) {
        console.log("LOADED SECTION TWO CTRL");
        $scope.my_other_var = "LOLS!";
    }]);