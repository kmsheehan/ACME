'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngGrid']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/listall', {
                templateUrl: 'partials/list.html',
                controller: EventListCtrl
            });
        $routeProvider.
            when('/events', {
                templateUrl: 'partials/page-list.html',
                controller: EventGridCtrl
            });
        $routeProvider.
            when('/test', {
                templateUrl: 'test.html',
                controller: TestCtrl
            });

        $routeProvider.otherwise({
                redirectTo: '/listall'
            });

        $locationProvider.html5Mode(false);

    }]);

