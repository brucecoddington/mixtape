(function () {
  'use strict';

  var logger = window.debug;

  angular.module('common.form.controllers', []).
    controller('FormController', 
      function ($scope, $routeParams){
         $scope.params = $routeParams;
      }
    );

    logger.debug('Registered common.form.controllers');

}());