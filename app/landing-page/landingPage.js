'use strict';

angular.module('myApp.landingPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing-page', {
    templateUrl: 'landing-page/landing-page.html',
    controller: 'LandingPageCtrl'
  });
}])

.controller('LandingPageCtrl', [function() {

}]);