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
        success(function (data) {
            $scope.CustomerEvents = data.CustomerEvents;
            $scope.gridOptions = { data : 'CustomerEvents' };// $scope.myData is also acceptable but will not update properly. OK to use the object if you don't care about updating the data in the grid.
        });
}

function ReadEventCtrl($scope, $http, $routeParams) {
    $http.get('/api/CustomerEvent/' + $routeParams.id).
        success(function (data) {
            $scope.CustomerEvent = data.Event;
        });
}

