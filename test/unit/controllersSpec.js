describe('Testing a controller', function() {

    beforeEach(module("myApp"));

    var ctrl, scope, httpMock;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpMock = $httpBackend;
        
        scope = $rootScope.$new();

        httpMock.when('GET', '/api/Events').
          respond([{name: 'name1'}, {'name': 'name2'}]);

        ctrl = $controller("indexCtrl", {
            $scope: scope
        });
        httpMock.flush();
    }));

    it('check for the length of the response', function() {
        expect(scope.Events[0].name.length).toBe(5);
    });
    it('Is it matching with the test', function() {
        expect(scope.Events[0].name).toMatch("name1");
    });
    it('should equal the exxpected text', function() {
        expect(scope.Events[0].name).toEqual("name1");
    });
    it('should be equal to expected text', function() {
        expect(scope.Events[0].name).toBe("name1");
    });
    

    afterEach(function() {
        httpMock.verifyNoOutstandingExpectation();
        httpMock.verifyNoOutstandingRequest();
    });

});
