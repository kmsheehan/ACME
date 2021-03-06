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

function TestCtrl($scope) {
    $scope.eventData = [
        {
            "UtilityBillingZip4": "",
            "UtilityBillingZip": "76549",
            "UtilityBillingSt": "TX",
            "UtilityBillingCounty": "",
            "UtilityBillingCity": "KILLEEN",
            "UtilityBillingAddress2": "",
            "UtilityBillingAddress1": "4404 HANK DR",
            "UtilityBillingName": "ALICIA CURRY",
            "ServiceZip4": "",
            "ServiceZip": "76549",
            "ServiceState": "TX",
            "ServiceCity": "KILLEEN",
            "ServiceAddress2": "",
            "ServiceAddress1": "4404 HANK DR",
            "ServicePhoneExtension": "",
            "ServicePhone": "2542130226",
            "Email": "CURRY_ALICIA2005@YAHOO.COM",
            "SuffixName": "",
            "MiddleInit": "",
            "FirstName": "ALICIA",
            "LastName": "CURRY",
            "BusinessName": "",
            "ServiceEndDate": null,
            "ServiceStartDate": "2011-05-09T00:00:00.000Z",
            "AssignedToEmployeeNameLast": "Huning",
            "AssignedToEmployeeNameFirst": "Scot",
            "AssignedToEmployeeID": 127,
            "FollowUpDateTime": null,
            "NotificationDate": "2012-11-17T19:20:58.910Z",
            "AnnualConsumption": "32272",
            "DropStatusDate": "2012-11-18T04:08:12.077Z",
            "DropStatus": "Not Contacted",
            "DropStatusID": 72,
            "DropWorkID": 133821,
            "UnitAbbrev": "kWh",
            "UtilityAbbrev": "TXU",
            "UtilityState": "TX",
            "Commodity": "Electric",
            "Utility": "Oncor Electric Delivery Company",
            "UtilityCode": "10",
            "UtilityID": 10,
            "MasterCustomerID": 335962,
            "PremiseType": "Residential",
            "DropTypeName": "Drop",
            "DropTypeID": 2,
            "SaleDate": "2011-05-03T00:00:00.000Z",
            "AccountStatusDate": "2012-11-17T19:20:58.910Z",
            "AccountStatus": "Drop Accepted",
            "UtilityAccountNumber": "10443720009039915",
            "AccountID": 335869,
            "_id": "50c7ae606b25a2f41d000001",
            "__v": 0
        },
        {
            "UtilityBillingZip4": "",
            "UtilityBillingZip": "77407",
            "UtilityBillingSt": "TX",
            "UtilityBillingCounty": "",
            "UtilityBillingCity": "RICHMOND",
            "UtilityBillingAddress2": "",
            "UtilityBillingAddress1": "20919 CORDELL LANDING DR",
            "UtilityBillingName": null,
            "ServiceZip4": "",
            "ServiceZip": "77407",
            "ServiceState": "TX",
            "ServiceCity": "RICHMOND",
            "ServiceAddress2": "",
            "ServiceAddress1": "20919 CORDELL LANDING DR",
            "ServicePhoneExtension": "",
            "ServicePhone": "2818149352",
            "Email": "VANECRUZ@ME.COM",
            "SuffixName": "",
            "MiddleInit": "",
            "FirstName": "JOHANSEN",
            "LastName": "MEDINA",
            "BusinessName": "",
            "ServiceEndDate": null,
            "ServiceStartDate": "2012-08-14T00:00:00.000Z",
            "AssignedToEmployeeNameLast": "Dwyer",
            "AssignedToEmployeeNameFirst": "Ryan",
            "AssignedToEmployeeID": 484,
            "FollowUpDateTime": null,
            "NotificationDate": "2012-11-17T16:19:58.527Z",
            "AnnualConsumption": "28018",
            "DropStatusDate": "2012-11-18T04:08:12.077Z",
            "DropStatus": "Not Contacted",
            "DropStatusID": 72,
            "DropWorkID": 133823,
            "UnitAbbrev": "kWh",
            "UtilityAbbrev": "REL",
            "UtilityState": "TX",
            "Commodity": "Electric",
            "Utility": "Centerpoint Energy",
            "UtilityCode": "11",
            "UtilityID": 11,
            "MasterCustomerID": null,
            "PremiseType": "Residential",
            "DropTypeName": "Drop",
            "DropTypeID": 2,
            "SaleDate": "2012-08-08T00:00:00.000Z",
            "AccountStatusDate": "2012-11-17T16:19:58.527Z",
            "AccountStatus": "Drop Accepted",
            "UtilityAccountNumber": "1008901001900587510112",
            "AccountID": 550449,
            "_id": "50c7ae606b25a2f41d000002",
            "__v": 0
        },
        {
            "UtilityBillingZip4": "3358",
            "UtilityBillingZip": "76132",
            "UtilityBillingSt": "TX",
            "UtilityBillingCounty": "",
            "UtilityBillingCity": "FORT WORTH",
            "UtilityBillingAddress2": "",
            "UtilityBillingAddress1": "5337 SUNFISH DR APT 1102",
            "UtilityBillingName": "YING YU",
            "ServiceZip4": "3358",
            "ServiceZip": "76132",
            "ServiceState": "TX",
            "ServiceCity": "FORT WORTH",
            "ServiceAddress2": "",
            "ServiceAddress1": "5337 SUNFISH DR APT 1102",
            "ServicePhoneExtension": "",
            "ServicePhone": "9493948429",
            "Email": "YINGYU687@HOTMAIL.COM",
            "SuffixName": "SR.",
            "MiddleInit": "",
            "FirstName": "YING",
            "LastName": "YU",
            "BusinessName": "",
            "ServiceEndDate": null,
            "ServiceStartDate": "2011-10-28T00:00:00.000Z",
            "AssignedToEmployeeNameLast": "Carpenter",
            "AssignedToEmployeeNameFirst": "Michael",
            "AssignedToEmployeeID": 483,
            "FollowUpDateTime": null,
            "NotificationDate": "2012-11-17T14:18:58.097Z",
            "AnnualConsumption": "6660",
            "DropStatusDate": "2012-11-18T04:08:12.077Z",
            "DropStatus": "Not Contacted",
            "DropStatusID": 72,
            "DropWorkID": 133822,
            "UnitAbbrev": "kWh",
            "UtilityAbbrev": "TXU",
            "UtilityState": "TX",
            "Commodity": "Electric",
            "Utility": "Oncor Electric Delivery Company",
            "UtilityCode": "10",
            "UtilityID": 10,
            "MasterCustomerID": null,
            "PremiseType": "Residential",
            "DropTypeName": "Drop",
            "DropTypeID": 2,
            "SaleDate": "2011-10-24T00:00:00.000Z",
            "AccountStatusDate": "2012-11-17T14:18:58.097Z",
            "AccountStatus": "Drop Accepted",
            "UtilityAccountNumber": "10443720002039381",
            "AccountID": 417478,
            "_id": "50c7ae606b25a2f41d000003",
            "__v": 0
        }];
    $scope.myData = [{name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'eventData' };
};


