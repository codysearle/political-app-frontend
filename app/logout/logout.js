/**
 * Created by nicky on 2/13/15.
 */


'use strict';

angular.module('myApp.logout', ['ngRoute', 'ngCookies'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logout', {
            templateUrl: 'logout/logout.html',
            controller: 'LogoutCtrl'
        });
    }])


    .controller('LogoutCtrl', function ($scope, Restangular, $cookieStore, $http, $location) {

            $scope.performLogout = function () {

                $cookieStore.remove('djangotoken');
                $location.path('/logout-confirm');
            };
        });