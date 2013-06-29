define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    var app, controller, scope;

    describe('nav.controller', function () {

        beforeEach (function () {
            app = angular.module("app", []);
            require('controllers/nav.controller')();
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

        it('should have a default selected property', function () {
            expect(scope.selected).to.be.equal('home');
        });

        it('should change the selected in scope', function() {
            scope.setSelected('newSelected');
            expect(scope.selected).to.be.equal('newSelected');
        });

        it('should determine which nav is selected', function () {
            scope.setSelected('newSelected');
            expect(scope.isSelected('home')).to.not.be.ok;
            expect(scope.isSelected('newSelected')).to.be.ok;
        });
    });
});