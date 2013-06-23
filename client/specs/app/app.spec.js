/*global define, describe, beforeEach, afterEach, it, xit, expect, spyOn, setFixtures, sandbox */
/*jslint nomen:false */

define(function(require) {
    'use strict';

    var expect = require('chai').expect;

    describe('Application', function () {

        beforeEach (function () {

        });

        afterEach (function () {
            // make sure you clean up any test doubles
        });

        it("Should be a passing spec." , function () {
            expect(true).to.be.ok;

            expect('hello').to.be.ok;

            console.log('hello');
        });
    });
});