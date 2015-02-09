'use strict';

angular.module('myApp.view1', ['ngRoute', 'restangular'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .factory('RepRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('https://www.googleapis.com');
        })
    })

    //.factory('VoteRestangular', function (Restangular) {
    //    return Restangular.withConfig(function (RestangularConfigurer) {
    //        RestangularConfigurer.setBaseUrl('https://www.googleapis.com');
    //    })
    //})
    //VoteRestangular

    .factory('Query', function(RepRestangular, $q) {

        var query = [];

        query.repQuery = function (queryString) {
            var deferred = $q.defer();
            RepRestangular.one('civicinfo/v2/representatives?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=' + queryString)
                .get()
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    alert("error " + error);
                    deferred.reject(error)
                });

            return deferred.promise;
        };

        //query.voteQuery = function (queryString) {
        //    var deferred = $q.defer();
        //    VoteRestangular.one('civicinfo/v2/representatives?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=' + queryString)
        //        .get()
        //        .then(function (data) {
        //            deferred.resolve(data);
        //        }, function (error) {
        //            alert("error " + error);
        //            deferred.reject(error)
        //        });
        //
        //    return deferred.promise;
        //};

        return query;
    })

    //.factory('TweetQuery', function($http, SwitchRestangular, $q, $scope) {
    //
    //})

    //.factory('RepQuery', function (Restangular, $q) {
    //    return function (queryString) {
    //        // create a promise object using $q
    //        var deferred = $q.defer();
    //        Restangular.one('civicinfo/v2/representatives?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=' + queryString)
    //            .get()
    //            .then(function (data) {
    //                // resolve the promise that you created
    //                deferred.resolve(data);
    //            }, function(data){
    //                deferred.reject(data);
    //            });
    //
    //        // return the empty promise, yet to be resolved
    //        return deferred.promise;
    //    }
    //})

    .controller('View1Ctrl', ['Query', '$scope', function (Query, $scope) {

        $scope.address = '';

        $scope.pushAddress = function(address) {

            Query.repQuery(address).then(function (data){
                $scope.officials = data.officials;
            }, function(error){
                //code
            });
        }

    }]);
