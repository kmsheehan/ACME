describe('Testing a controller', function() {

    beforeEach(module("myApp"));

    var ctrl, scope, httpMock;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpMock = $httpBackend;
        // création d'un nouveau scope
        scope = $rootScope.$new();

        httpMock.when('GET', '/api/Events').
          respond([{name: 'name1'}, {'name': 'name3'}]);

        ctrl = $controller("indexCtrl", {
            $scope: scope
        });
        httpMock.flush();
    }));

    it('should return list of events', function() {
        expect(scope.Events[0].name).toMatch("name1");
    });
    it('should return list of events', function() {
        expect(scope.Events[0].name).toMatch("name1");
    });
    it('should return list of events', function() {
        expect(scope.Events[0].name).toMatch("name1");
    });
    it('should return list of events', function() {
        expect(scope.Events[0].name).toMatch("name1");
    });
    

    afterEach(function() {
        httpMock.verifyNoOutstandingExpectation();
        httpMock.verifyNoOutstandingRequest();
    });

});
