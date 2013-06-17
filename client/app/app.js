define(function (require) {

  var logger = require('logger'),
      _ = require('lodash'),
      angular = require('angular');
  
  return (function initialize () {

    logger.group("Bootstrap dependencies loaded. Starting bootstrap.");
    logger.group("Starting application.");    
    logger.group("Setup Angular");

    var app = angular.module('app');

    logger.debug("Application module and routes configured.");

    require('services/services')();
    require('directives/directives')();
    require('filters/filters')();

    require('controllers/controllers')();
    require('routes')();

    angular.bootstrap(document, ['app']);

    logger.info("Angular compiled and executed.");

    logger.groupEnd(); 
    logger.groupEnd(); 
    logger.groupEnd();
  
  }());

});