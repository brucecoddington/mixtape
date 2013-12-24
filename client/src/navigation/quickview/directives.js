(function () {
  'use strict';

  var logger = window.debug;

  logger.debug("Registering quickview.directives");

  angular.module('navigation.quickview.directives', ['common.formatting.filters'])
    .directive('quickview',
      function () {
        return {
          replace: true,
          restrict: 'A',
          controller : 'QuickviewController',
          scope: true,
          templateUrl: 'assets/templates/navigation/quickview/quickview.html'
        };
    })

    .directive('quickviewNav',
      function () {
        return {
          replace: true,
          restrict: 'A',
          controller : 'QuickviewNavController',
          scope: true,
          templateUrl: 'assets/templates/navigation/quickview/quickviewNav.html'
        };
    });

}());
