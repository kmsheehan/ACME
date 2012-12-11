'use strict';

angular.module('myApp', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

/* Controllers */

function IndexCtrl($scope, $http) {
    //alert('index controller..');
    $http.get('/api/CustomerEvents').
        success(function (data, status, headers, config) {
            $scope.CustomerEvents = data.CustomerEvents;
            console.log($scope.CustomerEvents);
        });
}

function AddEventCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.submitEvent = function () {
        $http.post('/api/CustomerEvent', $scope.form).
            success(function (data) {
                $location.path('/');
            });
    };
}

function ReadEventCtrl($scope, $http, $routeParams) {
    $http.get('/api/CustomerEvent/' + $routeParams.id).
        success(function (data) {
            $scope.CustomerEvent = data.Event;
        });
}

function EditEventCtrl($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/CustomerEvent/' + $routeParams.id).
        success(function (data) {
            $scope.form = data.Event;
        });

    $scope.editEvent = function () {
        $http.put('/api/CustomerEvent/' + $routeParams.id, $scope.form).
            success(function (data) {
                $location.url('/readEvent/' + $routeParams.id);
            });
    };
}

function DeleteEventCtrl($scope, $http, $location, $routeParams) {
    $http.get('/api/CustomerEvent/' + $routeParams.id).
        success(function (data) {
            $scope.CustomerEvent = data.Event;
        });

    $scope.deleteEvent = function () {
        $http.delete('/api/CustomerEvent/' + $routeParams.id).
            success(function (data) {
                $location.url('/');
            });
    };

    $scope.home = function () {
        $location.url('/');
    };
}
