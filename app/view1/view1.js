'use strict';

angular.module('myApp.view1', ['ngRoute', 'restangular'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .directive('ngSparkline', function () {
        return {
            restrict: 'A',
            require: '^ngModel',
            template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>'
        }
    })


    .factory('RepRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('https://www.googleapis.com');
        })
    })

    .factory('TweetRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('https://congress.api.sunlightfoundation.com');
        })
    })


    .factory('ElectionRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('https://www.googleapis.com');
        })
    })


    .factory('Query', function (RepRestangular, $q, ElectionRestangular) {

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

        query.electionQuery = function () {
            var deferred = $q.defer();
            ElectionRestangular.one('civicinfo/v2/elections?key=AIzaSyD-HPE_alWclw0dk45SVc87VhH1FJT-j5o&address=Provo%20UT')
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

    .factory('Tweet', function (TweetRestangular, $q) {

        var tweet = [];

        tweet.repTweet = function (queryString) {
            var deferred = $q.defer();
            TweetRestangular.one('legislators?apikey=91ccd95b48094ed6801f4fb39113f0f2' + queryString)
                .get()
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    alert("error " + error);
                    deferred.reject(error)
                });

            return deferred.promise;
        };

        return tweet;
    })

    .controller('View1Ctrl', ['Query','Tweet', '$scope', function (Query, Tweet, $scope) {

        $scope.address = '';

        $scope.pushAddress = function (address) {

            Query.repQuery(address).then(function (data) {
                $scope.officials = data.officials;
            }, function (error) {
                //code
            });

            Query.electionQuery(address).then(function (data) {
                $scope.elections = data.elections;
            }, function (error) {
                //code
            });
        }


    }]);
