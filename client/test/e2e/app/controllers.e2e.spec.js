(function () {
  'use strict';

  describe('App', function () {

    describe('Controllers', function () {

      describe('NavController', function () {

        beforeEach (function () {
          browser().navigateTo("/");
          sleep(0.5);
        });

        it('should tell us how many list items in the navbar', function () {
          var numberOfListItems = element('ul.nav li').count();
          expect(numberOfListItems).toBe(6);
        });

        it('should have the nav controller in the header', function () { 
          expect(element('.navbar[ng-controller]').text()).toBeDefined();
        });
      });

    });

  });

}());
