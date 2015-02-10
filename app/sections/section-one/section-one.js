angular.module('myApp.sections')

    .controller('sectionOneCtrl', ['$scope', function ($scope) {
        $scope.name = "Barack Obama";
        $scope.party = "D";
        $scope.tweet = "Check out my Vox interview.";
        $scope.vote = "Did Not Vote";
        $scope.bill = "H.B. 100";
        $scope.comment = "I am here to make a speech!";

    }]);