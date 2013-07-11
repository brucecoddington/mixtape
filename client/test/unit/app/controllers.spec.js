(function () {
  'use strict';

  var expect = chai.expect;
  var controller, scope;

  describe('App', function() {
   
      describe('Controllers', function() {
          
          beforeEach(module('app.controllers'));

          describe('HomeController', function() {
              it('should have the home controller in the app.controllers module',
                inject(function($rootScope, $controller) {
                    var scope = $rootScope.$new(),
                        controller = $controller("HomeController", {$scope: scope });
                    expect(controller).to.be.ok;
              }));
          });
   
          describe('NavController', function() {
              it('should have the nav controller in the app.controllers module',
                inject(function($rootScope, $controller) {
                    var scope = $rootScope.$new(),
                        controller = $controller("NavController", {$scope: scope });
                    expect(controller).to.be.ok;
              }));
          });
      });
  });
}());
