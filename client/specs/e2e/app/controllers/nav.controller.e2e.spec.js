(function () {
    'use strict';

    describe('nav.controller', function () {

        beforeEach (function () {
            browser().navigateTo("/");
            sleep(0.5);
        });

        it('should have the nav controller in the app module', function () {
            var link = element('ul li a:first');

            expect(link).toBeTruthy();
        });
    });

}());