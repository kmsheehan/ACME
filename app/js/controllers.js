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

function TestCtrl1($scope, $http) {
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
    };

};

function DisplayCtrl($scope, $http) {
    $scope.EventsList;
    $scope.mySelections = [];
    $scope.retrieveCustomerEvents = function(){
        $http.get('https://api.mongolab.com/api/1/databases/energyplussampledb/collections/'+'CustomerEvents'+'?apiKey=50d2bd43e4b0ae804758cbd0').
            success(function(data){
                $scope.EventsList = data;
                $scope.myData = data;
            })
    }
$scope.retrieveCustomerEvents();
    $scope.gridOptions = {
        data: 'myData',
        columnDefs: [{field: 'AccountID', displayName: 'Account ID'},{field: 'FirstName', displayName: 'First Name'},{field: 'LastName', displayName: 'Last Name'},
                     {field: 'ServiceState', displayName: 'State'},{field: 'ServicePhone', displayName: 'Phone'},{field: 'Commodity', displayName: 'Commodity'},
                     {field: 'PremiseType', displayName: 'Premise Type'},{field: 'ServiceStartDate.$date', displayName: 'Service Date'},{field: 'UtilityAccountNumber', displayName: 'Utility Account Number'},
            {field: 'AssignedToEmployeeNameFirst', displayName: 'Assigned To'},{field: 'AnnualConsumption', displayName: 'Annual kWh'},{field: 'AccountStatus', displayName: 'Status'},
            {field: 'DropStatusDate.$date', displayName: 'Status Date'},{field: 'DropStatus', displayName: 'Contact Status'},{field: 'DropStatusDate.$date', displayName: 'Contact Status Date'}] ,
        selectedItems: $scope.mySelections,
        multiSelect: false

    };

}

function AddEventCtrl($scope, $http,$location) {

    $scope.onSubmit = function(){
        var ServiceStartDate = {$date: $scope.ServiceStartDate};
        var DropStatusDate = {$date: $scope.DropStatusDate};
        var data = {AccountID:$scope.AccountID,FirstName:$scope.FirstName,LastName:$scope.LastName,
            ServiceState:$scope.ServiceState,ServicePhone:$scope.ServicePhone,Commodity:$scope.Commodity,
            PremiseType:$scope.PremiseType,ServiceStartDate:ServiceStartDate,UtilityAccountNumber:$scope.UtilityAccountNumber,
            AssignedToEmployeeNameFirst:$scope.AssignedToEmployeeNameFirst,AnnualConsumption:$scope.AnnualConsumption,AccountStatus:$scope.AccountStatus,
            DropStatusDate:DropStatusDate,DropStatus:$scope.DropStatus
        }
        var url = 'https://api.mongolab.com/api/1/databases/energyplussampledb/collections/CustomerEvents?apiKey=50d2bd43e4b0ae804758cbd0';
        $http.post(url,data);
        $location.path("/display");
    };
}

function EditEventCtrl($scope, $http, $location,$routeParams){

        $http.get('https://api.mongolab.com/api/1/databases/energyplussampledb/collections/CustomerEvents/'+$routeParams.rowid +'?apiKey=50d2bd43e4b0ae804758cbd0').
            success(function(data){
                 alert(" in success " + data)
                $scope.event = data;
                alert(" in event " + $scope.event)
            })

    $scope.onSubmit = function(){
        var data = $scope.event;
        var url = 'https://api.mongolab.com/api/1/databases/energyplussampledb/collections/CustomerEvents/'+$routeParams.rowid +'?apiKey=50d2bd43e4b0ae804758cbd0';
        $http.post(url,data);
        $location.path("/display");

    }


}

function DeleteEventCtrl($scope, $http, $location,$routeParams){

    $scope.deleteEvent = function(){
        $http.delete('https://api.mongolab.com/api/1/databases/energyplussampledb/collections/CustomerEvents/'+$routeParams.rowid +'?apiKey=50d2bd43e4b0ae804758cbd0').
            success(function(data){
                alert(" in success " + data)
                $scope.result = data;
                alert(" in event " + $scope.result)
            })
    }


    $scope.deleteEvent();

    $location.path("/display");

}


function queueController($scope,$http){

    $scope.submit = function(){

        var data = $scope.message;
        var url = '/post-message';
        $http.post(url).
            success(function(){
                alert(" in success ");
            })

    }

    $scope.retrieve = function(){
        $http.post('/get-message').
            success(function(data){
                alert(" in get success " + data.sentMessage);
                $scope.sentMessage = data.sentMessage;
            })
    }


}

function ProjectsCtrl($scope){
    alert(" in controller");
    var socket = io.connect();
    socket.on('change', function(obj) {
        alert(" ddd "+ obj )
        $scope.projects = obj;
        $scope.$apply();
    });

    $scope.change = function() {
        alert(" in change")  ;
        socket.emit('change', $scope.projects);
    };

    $scope.addProject = function() {
        alert(" in add")
        $scope.projects.push({text:$scope.projectText, done:false});
        $scope.projectText = '';
        socket.emit('change', $scope.projects);
    };


}
