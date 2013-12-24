(function () {
  'use strict';

  var logger = window.debug;

  angular.module('navigation.quickview.controllers', ['common.routing.directives'])

    .controller('QuickviewController', 
      function (quickviewSharedEventService, $scope){

        $scope.open = false;

        //Triggered from the quicknav service
        $scope.$on('quickview.activate', function() {
          $scope.open = true;
          $scope.view = quickviewSharedEventService.getView();
        });

        //Triggered from the quicknav service
        $scope.$on('quickview.deactivate', function() {
          $scope.open = false;
        });

        $scope.closeQuickNav = function() {
          quickviewSharedEventService.deactivate();
        };
         
    })

    .controller('QuickviewNavController', 
      function ($scope, $location, quickviewSharedEventService){
        $scope.closeQuickView = function() {
          quickviewSharedEventService.deactivate();
        };

        $scope.viewMore = function(item) {
          var currentView = quickviewSharedEventService.getView();
          $location.path(['system', currentView].join('/'));
          quickviewSharedEventService.deactivate();
        };
    });

    logger.debug('Registered quickview.QuickviewController');

}());
