define(function(require) {
    'use strict';

    var expect = require('chai').expect;
    var angular = require('angular');
    var mocks = require('ngMocks');

    require('ngStrap');

    var app, scope, elm;

    describe('clickableTitle.directive', function () {

        beforeEach (function () {
            app = angular.module("app", []);
            require('directives/clickable.title.directive')();
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
            console.log(header.toJSON);

            expect(header.text()).to.equal('Click this title.');
        });

    });
});