(function () {

  var logger = window.debug;

  logger.debug("Loading common module.");

  var app = angular.module('common', [
    'common.routing.directives',
    'common.formatting.filters',
    'common.hammer.directives',
    'security'
  ]);

  logger.debug("Common module loaded.");

}());
