(function () {
  
  'use strict';

  var logger = window.debug;
  logger.group("Registering services module");

  var app = angular.module('services', []);

  logger.debug("Services module bootstrapped.");
  logger.groupEnd(); 

}());