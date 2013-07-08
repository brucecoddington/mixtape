var expect = chai.expect;
var appl, controller, scope;

describe('nav.controller', function () {

    describe('controller actions', function () {
        beforeEach (function () {
            appl = angular.mock.module('app', []);

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
    
    describe('angular strap exists', function () {
        var strap;

        beforeEach(function () {
            strap = angular.mock.module('$strap.directives');
        });

        it('should have the angular strap directives', function () {
            expect(strap.directive('bsDropdown')).to.be.ok;
        });    
    });
    
});