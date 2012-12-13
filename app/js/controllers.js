'use strict';

/* Controllers */

function EventListCtrl($scope, $http) {
    $http.get('/api/CustomerEvents').
        success(function (data) {
            $scope.CustomerEvents = data.CustomerEvents;
            //console.log($scope.CustomerEvents);
        });

}

function ReadEventCtrl($scope, $http, $routeParams) {
    $http.get('/api/CustomerEvent/' + $routeParams.id).
        success(function (data) {
            $scope.CustomerEvent = data.Event;
        });
}

