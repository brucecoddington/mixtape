(function () {
  
	'use strict';

	var logger = window.debug;
	logger.group("Registering app module");

	var app = angular.module('app', [
    'app.directives', 
    'app.controllers',
    'ui.state'
  ]);

  logger.debug('Registering states for app module.');
  app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('main', {
        url: '/main', 
        controller: 'HomeController', 
        templateUrl: 'assets/templates/home/index.html',
        data: {
          title: 'Home',
          section: 'Main'
        }
      })

      .state('main.three', {
        url: '/three',
        controller: 'HomeController',
        templateUrl: 'assets/templates/three/index.html',
        data: {
          title: 'Page Three',
          section: 'Main'
        }
      })

      .state('main.four', {
        url: '/four',
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