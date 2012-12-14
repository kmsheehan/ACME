angular.module('myApp',[]).
    controller("indexCtrl", ["$scope", "$http", "$log", function ($scope, $http, $log) {
        $http.get("/api/CustomerEvents").
            success(
            function (data, status, headers, config) {
                $scope.CustomerEvents = data;
            }).
            error(function (data, status, headers, config) {
                $log.error("error getting events : " + data);
            });
       
    }]);