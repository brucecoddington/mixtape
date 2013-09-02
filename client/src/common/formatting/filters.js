(function () {
  
  'use strict';

  var logger = window.debug;
  logger.group("Registering common.formatting.filters module");

  var app = angular.module('common.formatting.filters', [])

    .filter('momentFromNow', function() {
      return function(dateString) {
        return moment(new Date(dateString)).fromNow(true);
      };
    })

    .filter('momentFromNowAgo', function() {
      return function(dateString) {
        return moment(new Date(dateString)).fromNow();
      };
    })

    .filter('momentDateWithoutTime', function() {
      return function(dateString) {
        return moment(new Date(dateString)).format("M/D/YYYY");
      };
    })

    .filter('momentCalendar', function() {
      return function(dateString) {
        return moment(new Date(dateString)).calendar();
      };
    });

  logger.debug("common.formatting.filters module bootstrapped.");
  logger.groupEnd(); 

}());
