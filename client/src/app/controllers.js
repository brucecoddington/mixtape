(function () {
  'use strict';

  var logger = window.debug;

  angular.module('app.controllers', [])
    .controller('HomeController', [
      '$scope',
      function ($scope){
         
      }
    ])
    .controller('NavController', [
      '$scope',
      function ($scope) {

        $scope.dropdown = [
          {
            "text": 'option1',
            "href": '#/option1'
          },

          {
            "text": 'option2',
            "href": '#/option2'
          }
        ];
      }
    ]);

    logger.debug('Registered app.HomeController');

}());