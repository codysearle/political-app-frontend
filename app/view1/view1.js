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

    //.factory('VoterRestangular', function (Restangular) {
    //    return Restangular.withConfig(function (RestangularConfigurer) {
    //        RestangularConfigurer.setBaseUrl('https://www.googleapis.com');
    //    })
    //})
    //VoterRestangular(return this to factory header)

    .factory('ElectionRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('https://www.googleapis.com');
        })
    })


    .factory('Query', function (RepRestangular, $q, ElectionRestangular) {

        var query = [];

        query.repQuery = function (QueryString) {
            var deferred = $q.defer();
            RepRestangular.one('civicinfo/v2/representatives?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=' + QueryString)
                .get()
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    alert("error " + error);
                    deferred.reject(error)
                });

            return deferred.promise;
        };


        //query.voterQuery = function (queryString) {
        //    var deferred = $q.defer();
        //    VoterRestangular.one('civicinfo/v2/voterinfo?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=' + queryString)
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

        query.electionQuery = function (QueryString) {
            var deferred = $q.defer();
            ElectionRestangular.one('civicinfo/v2/elections?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=' + QueryString)
                .get()
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    alert("error " + error);
                    deferred.reject(error)
                });

            return deferred.promise;
        };

        return query;

    })


    .controller('View1Ctrl', ['Query', '$scope', function (Query, $scope) {

        $scope.address = '';

        $scope.pushAddress = function (address) {

            Query.repQuery(address).then(function (data) {
                $scope.offices = data.offices;
            }, function (error) {
                //code
            });
            Query.repQuery(address).then(function (data) {
                $scope.officials = data.officials;
            }, function (error) {
                //code
            });
            //Query.repQuery(address).then(function (data) {
            //    $scope.offices = data.offices;
            //}, function (error) {
            //    //code
            //});

            //Query.voterQuery(address).then(function (data){
            //    $scope.pollingLocations = data.pollingLocations;
            //}, function(error){
            //    //code
            //});

            //Query.electionQuery(address).then(function (data) {
            //    $scope.elections = data.elections;
            //}, function (error) {
            //    //code
            //});
        }

    }]);
