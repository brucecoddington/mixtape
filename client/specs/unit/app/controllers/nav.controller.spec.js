var expect = chai.expect;
var app, controller, scope;

describe('nav.controller', function () {

    beforeEach (function () {
        app = angular.module("app", []);
        angular.mock.module('app');

        inject(function($rootScope, $controller){
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

    it('should have the angular strap directives', function () {
        expect(angular.module('$strap.directives').directive('bsDropdown')).to.be.ok;
    });
});