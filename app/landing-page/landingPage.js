'use strict';

angular.module('myApp.landingPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing-page', {
    templateUrl: 'landing-page/landing-page.html',
    controller: 'LandingPageCtrl'
  });
}])




.controller('LandingPageCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
   }
}])

.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 100;   // always scroll by 50 extra pixels
}]);