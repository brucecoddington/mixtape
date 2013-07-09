var expect = chai.expect;
var controller, scope;

describe('nav.controller', function () {

    describe('controller actions', function () {
        beforeEach (function () {
            angular.mock.module('app', []);

            angular.mock.inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller('NavController', {
                    $scope: scope
                }); 
            });
        });

        afterEach (function () {
            // make sure you clean up any test doubles
        });

        it('should have the nav controller in the app module', function () {
            expect(controller).to.be.ok;
        });    
    });
    
});