(function () {
  
	'use strict';

	var logger = window.debug;
	logger.group("Registering app module");

	var app = angular.module('app', [
    'app.directives', 
    'app.controllers',
    'common',
    'ui.state'
  ]);

  logger.debug('Registering states for app module.');
  app.config([
    '$stateProvider', 
    'securityAuthorizationProvider',
    function ($stateProvider, securityAuthorizationProvider) {
      
      $stateProvider
        .state('main', {
          url: '/',
          controller: 'HomeController',
          templateUrl: 'assets/templates/common/main-page.html',
          data: {
            title: 'Home',
            section: 'Main'
          },
          resolve: {
            authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
          }
        })

        .state('main.two', {
          url: 'two',
          controller: 'HomeController',
          templateUrl: 'assets/templates/two/index.html',
          data: {
            title: 'Page Two',
            section: 'Nothing Selected'
          }
        })

        .state('main.two.one', {
          url: '/one',
          controller: 'HomeController',
          templateUrl: 'assets/templates/two/index.html',
          data: {
            title: 'Page Two',
            section: 'Selection Result',
            selection: 'Selection One'
          }
        })

        .state('main.two.two', {
          url: '/two',
          controller: 'HomeController',
          templateUrl: 'assets/templates/two/index.html',
          data: {
            title: 'Page Two',
            section: 'Selection Result',
            selection: 'Selection Two'
          }
        })

        .state('main.three', {
          url: 'three',
          controller: 'HomeController',
          templateUrl: 'assets/templates/three/index.html',
          data: {
            title: 'Page Three',
            section: 'Main'
          }
        })

        .state('main.four', {
          url: 'four',
          controller: 'HomeController',
          templateUrl: 'assets/templates/four/index.html',
          data: {
            title: 'Page Four',
            section: 'Main'
          }
        });
  }]);

	logger.debug("App module bootstrapped.");
	logger.groupEnd(); 

}());