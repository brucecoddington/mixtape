define(function (require) {

  var logger = require('logger'),
      angular = require('angular');
  
  return (function initialize () {

    logger.group("Bootstrap dependencies loaded. Starting bootstrap.");
    logger.group("Starting application.");    
    logger.group("Setup Angular");

    var app = angular.module('app', ['ngResource']);

    require('routes')();
    logger.debug("Application module and routes configured.");

    // ----------- Services ---------------
    logger.group("Registering Services.");

    // example of registering a service
    // require('services/tweet.service')();

    logger.groupEnd(); 

    // ----------- Directives ---------------
    logger.group("Registering directives.");

    // example of registering a directive
    // require('directives/tweet.directive')();

    logger.groupEnd();
    
    // ----------- Filters ---------------
    logger.group("Registering Filters.");

    // example of registering a filter
    // require('filters/tweet.filter')();

    logger.groupEnd();

    // ----------- Controllers ---------------
    logger.group("Registering controllers.");

      require('controllers/nav.controller')();
      require('controllers/home.controller')();

    logger.groupEnd();

    angular.bootstrap(document, ['app', '$strap.directives']);

    // these next couple of lines are for the scenario runner
    // It needs the ng-app attribute to kick off the e2e tests.
    var html = document.getElementsByTagName('html')[0];
    html.setAttribute('ng-app', 'app');
    html.dataset.ngApp = 'app';

    logger.info("Angular compiled and executed.");

    logger.groupEnd(); 
    logger.groupEnd(); 
    logger.groupEnd();
  
  }());

});