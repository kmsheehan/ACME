'use strict';

/* Controllers */

function EventListCtrl($scope, $http) {
    alert(" in EventListCtrl");
    $http.get('/api/CustomerEvents').
        success(function (data) {
            alert(" in success");
            $scope.CustomerEvents = data.CustomerEvents;
            $scope.epweb_endpoint = 'http://epweb-dev';
        }).
    error(function(){
            alert(" in error");
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

function TestCtrl($scope, $http) {
alert(" in cntrl ");

    $scope.getDBData = function () {
        $http.get('/api/CustomerEvents').
            success(function (events) {
                alert("events " +events)
                $scope.myData = events;

            });
    };
    $scope.getDBData();
    $scope.gridOptions = {
        data: 'myData'
//        columnDefs: [{field: 'AccountID', displayName: 'Account ID'},{field: 'FirstName', displayName: 'First Name'},{field: 'LastName', displayName: 'Last Name'},
//                     {field: 'ServiceState', displayName: 'State'},{field: 'ServicePhone', displayName: 'Phone'},{field: 'Commodity', displayName: 'Commodity'},
//                     {field: 'PremiseType', displayName: 'Premise Type'},{field: 'ServiceStartDate', displayName: 'Service Date'},{field: 'UtilityAccountNumber', displayName: 'Utility Account Number'},
//            {field: 'AnnualConsumption', displayName: 'Annual kWh'},{field: 'AccountStatus', displayName: 'Status'},
//            {field: 'DropStatusDate', displayName: 'Status Date'},{field: 'DropStatus', displayName: 'Contact Status'},{field: 'DropStatusDate', displayName: 'Contact Status Date'}]
//
    };

};


