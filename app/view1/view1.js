'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .factory('Query', function ($http, Restangular, $q) {
        var query = [];

        query.repQuery = function (queryString) {
            var deferred = $q.defer();
            Restangular.one('civicinfo/v2/representatives?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&' + queryString)
                .get()
                .then(function (repInfo) {
                    console.log(repInfo);
                    deferred.resolve(repInfo);
                }, function (error) {
                    alert("error " + error);
                    deferred.reject(error)
                });

            return deferred.promise;
        };
        return query;
    })

    //.factory('TweetQuery', function($http, SwitchRestangular, $q, $scope) {
    //
    //})

    .controller('View1Ctrl', ['Query', function (Query) {
        var query = Query.repQuery("variable").then(function (data) {
            $scope.reps = data;
        }, function (error) {
            //code
        })
    }]);