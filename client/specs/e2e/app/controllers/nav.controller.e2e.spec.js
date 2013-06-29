(function () {
    'use strict';

    describe('nav.controller', function () {

        beforeEach (function () {
            browser().navigateTo("/");
            sleep(0.5);
        });

        it('should tell us how many list items in the navbar', function () {
            var numberOfListItems = element('ul.nav li').count();
            expect(numberOfListItems).toBe(5);
        });

        it('should have the nav controller in the header', function () { 
            expect(element('.container-fluid[ng-controller]').text()).toBeDefined();
        });

        it('should have the nav button three', function () {
            expect(element('#link-three a').attr('href')).toMatch('#/three');
        });

        it('should change the url when the link three is clicked', function() {
            element('#link-three a').click();
            expect(browser().location().url()).toMatch('/three');
        });
    });

}());