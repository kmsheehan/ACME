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
//        $routeProvider.
//            when('/', {
//                templateUrl: 'partials/home.html'
//            });
        $routeProvider.
            when('/display', {
                templateUrl: 'partials/display.html',
                controller: DisplayCtrl
            });

        $routeProvider.
            when('/add', {
                templateUrl: 'partials/addEvent.html',
                controller: AddEventCtrl
            });
        $routeProvider.
            when('/edit/:rowid', {
                templateUrl: 'partials/editEvent.html',
                controller: EditEventCtrl
            });
        $routeProvider.
            when('/delete/:rowid', {
                templateUrl: 'partials/display.html',
                controller: DeleteEventCtrl
            });
        $routeProvider.
            when('/queue', {
                templateUrl: 'partials/queue.html'

            });
        $routeProvider.
            when('/socket', {
                templateUrl: 'partials/project-list.html',
                controller: ProjectsCtrl

            });
//        $routeProvider.
//            when('/', {
//                templateUrl: 'partials/report-list.html',
//                controller: ReportsCtrl
//
//            });

        $routeProvider.
            when('/', {
                templateUrl: 'partials/gen-pop.html',
                controller: GenPopCtrl

            });

        $routeProvider.otherwise({
                redirectTo: '/listall'
            });

        $locationProvider.html5Mode(false);

    }]);

