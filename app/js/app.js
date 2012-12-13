'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/listall', {
                templateUrl: 'partials/list.html',
                controller: EventListCtrl
            });
        $routeProvider.
            when('/events', {
                templateUrl: 'partials/page-list.html',
                controller: EventListCtrl
            });

        $routeProvider.otherwise({
                redirectTo: '/listall'
            });

        //$locationProvider.html5Mode(false);
    }]);

