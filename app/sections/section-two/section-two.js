angular.module('myApp.sections')

    .controller('sectionTwoCtrl', ['$scope', function ($scope) {
        $scope.name = "Peter Anderson";
        $scope.party = "?";
        $scope.tweet = "Coding is awesome!";
        $scope.vote = "Did Not Vote";
        $scope.bill = "H.B. 100";
        $scope.comment = "I don't work in politics. I honestly don't know why I am here.";

    }]);