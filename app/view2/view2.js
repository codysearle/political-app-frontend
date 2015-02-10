'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', function ($scope) {
        $scope.name = "Orrin Hatch";
        $scope.party = "R";
        $scope.tweet = "Beautiful weather here in Utah, today.";
        $scope.vote = "Yes";
        $scope.bill = "H.B. 100";
        $scope.comment = "It is important to remember what the American people want in regards to this bill.";

    }]);