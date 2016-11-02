/**
 * Created by Cody on 11/1/16.
 */


angular.module('myApp.logoutConfirm', ['ngRoute', 'ngCookies'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logout-confirm', {
            templateUrl: 'logout-confirm/logout-confirm.html'
        });
    }])
