(function () {
  'use strict';

  var logger = window.debug;
  logger.group('Registering security.login module');


  var app = angular.module('security.login', [
    'security.login.form', 
    'ui.state'
  ]);

  app.config(['$stateProvider', function ($stateProvider){

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'assets/templates/common/security/login/index.html',
        controller: 'LoginFormController',
        data: {
          title: "Please Login",
          section: ""
        }
      });

  }]);

  logger.debug('security.login module bootstrapped.');
  logger.groupEnd();

}());