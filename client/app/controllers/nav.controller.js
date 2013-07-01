define(function (require) {
    
  var logger = require('logger'),
      $ = require('jquery');

  return function () {
    logger.info('Registering NavController');

    require('angular').module('app').controller('NavController',
      [
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
      ]
    );
  };
    
});