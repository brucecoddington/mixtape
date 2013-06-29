define(function(require) {
    'use strict';

    var expect = require('chai').expect;

    var app, controller, scope;

    return (function () {

        describe('nav.controller', function () {

            beforeEach (function () {
                console.log("here we go!!");
                browser().navigateTo("http://localhost:8080");
                sleep(0.5);
            });

            afterEach (function () {
                // make sure you clean up any test doubles
            });

            it('should have the nav controller in the app module', function () {
                // var link = element('a[href=#/three');

                // link.click();
                // expect(link.getClass()).to.be.equal('selected');

                console.log('hello');
            });
        });
    }());
});