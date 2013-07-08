var expect = chai.expect;
var app, scope, elm;

describe('clickableTitle.directive', function () {

    beforeEach (function () {
        app = angular.module("app", []);
        angular.mock.module('app');

        inject(function($rootScope, $compile){
            scope = $rootScope.$new();

            elm = angular.element('<clickable-title>Click this title.</clickable-title>');

            $compile(elm)(scope);
            scope.$digest();
        });
    });

    afterEach (function () {
        // make sure you clean up any test doubles
    });

    it('should exist', function () {
        expect(app.directive('ClickableTitle')).to.be.ok;
    });

    it('should add a h1 to the element', function() {
        var header = elm.find('h1');

        expect(header.text()).to.equal('Click this title.');
    });

});