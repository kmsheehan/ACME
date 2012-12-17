'use strict';

/* Controllers */

function EventListCtrl($scope, $http) {
    $http.get('/api/CustomerEvents').
        success(function (data) {
            $scope.CustomerEvents = data.CustomerEvents;
            $scope.epweb_endpoint = 'http://epweb-dev';
        });

}

function EventGridCtrl($scope, $http) {
    $http.get('/api/CustomerEvents').
        success(function (events) {
            $scope.CustomerEvents = events.CustomerEvents;
            $scope.gridOptions = { data: 'CustomerEvents' };
        });
}

function ReadEventCtrl($scope, $http, $routeParams) {
    $http.get('/api/CustomerEvent/' + $routeParams.id).
        success(function (data) {
            $scope.CustomerEvent = data.Event;
        });
}

