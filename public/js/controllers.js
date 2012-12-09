'use strict';

angular.module('myApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

/* Controllers */

function IndexCtrl($scope, $http) {
  alert('index controller..');
  $http.get('/api/Events').
    success(function(data, status, headers, config) {
      $scope.Events = data.Events;
      console.log($scope.Events);
    });
}

function AddEventCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitEvent = function () {
    $http.post('/api/Event', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function ReadEventCtrl($scope, $http, $routeParams) {
  $http.get('/api/Event/' + $routeParams.id).
    success(function(data) {
      $scope.Event = data.Event;
    });
}

function EditEventCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/Event/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.Event;
    });

  $scope.editEvent = function () {
    $http.put('/api/Event/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readEvent/' + $routeParams.id);
      });
  };
}

function DeleteEventCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/Event/' + $routeParams.id).
    success(function(data) {
      $scope.Event = data.Event;
    });

  $scope.deleteEvent = function () {
    $http.delete('/api/Event/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}
