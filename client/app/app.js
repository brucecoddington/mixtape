define(function (require) {

  require('ngResource');
  require('bootstrap');

  var logger = require('logger'),
      _ = require('lodash'),
      angular = require('angular');
  
  return (function initialize () {

    logger.group("Bootstrap dependencies loaded. Starting bootstrap.");
    logger.group("Starting application.");    
    logger.group("Setup Angular");

    var app = angular.module('app', ['ngResource']);
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

    require('routes')();

    angular.bootstrap(document, ['app']);

    logger.info("Angular compiled and executed.");

    logger.groupEnd(); 
    logger.groupEnd(); 
    logger.groupEnd();
  
  }());

});