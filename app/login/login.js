/**
 * Created by nicky on 2/12/15.
 */

'use strict';

angular.module('myApp.login', ['ngRoute', 'ngCookies'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', function ($scope, Restangular, $cookieStore, $http, $location) {

            $scope.performLogin = function () {
                var user_data = {
                    "username": $scope.username,
                    "password": $scope.password
                };

                $http.post("http://localhost:8004/api-token-auth/", user_data)
                    .success(function (response) {
                        $cookieStore.put('djangotoken', response.token);
                        //$http.defaults.headers.common['Authorization'] = 'Token ' + response.token;
                        //authService.loginConfirmed();
                        $location.path('/landing-page');
                    });
            };
        })
