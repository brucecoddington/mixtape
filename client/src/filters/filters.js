(function () {
  
  'use strict';

  var logger = window.debug;
  logger.group("Registering filters module");

  var app = angular.module('filters', []);

  logger.debug("Filters module bootstrapped.");
  logger.groupEnd(); 

}());