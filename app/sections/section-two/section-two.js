angular.module('myApp.sections')

    .controller('sectionTwoCtrl', ['$scope', function ($scope) {
        console.log("LOADED SECTION TWO CTRL");
        $scope.username = "Orrin Hatch"
        $scope.vote = "Yes";
        $scope.voting = function () {
            $scope.voted = $scope.senatorname + ":" + $scope.vote;
        };

    }]);