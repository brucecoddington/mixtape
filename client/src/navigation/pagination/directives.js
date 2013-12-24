(function () {
  'use strict';

  var logger = window.debug;

  logger.debug("Registering pagination.directives");

  angular.module('navigation.pagination.directives', [])

    .directive('mxPagination',[
      function () {
        return {
          replace: true,
          restrict: 'A',
          scope: {
            pagination: '=',
            requestPage: '='
          },
          templateUrl: 'assets/templates/navigation/pagination/pagination.html',
          controller: 'paginationController'
        };
      }]
    )

    .directive('mxPaginationItem',
      function () {
        return {
          replace: false,
          transclude: true,
          restrict: 'A',
          controller : 'paginationItemController',
          scope: {
            pagination: '=',
            pageNumber: '=',
            requestPage: '='
          },
          template: '<a ng-transclude></a>'
        };
      }
    );

}());
