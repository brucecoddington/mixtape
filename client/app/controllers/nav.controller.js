define(function (require) {
    
  var logger = require('logger'),
      $ = require('jquery');

  return function () {
    logger.info('Registering NavController');

    require('angular').module('app').controller('NavController',
      [
        '$scope',
        function ($scope) {

          $scope.selected = 'home';

          $scope.setSelected = function (selected) {
            $scope.selected = selected;
          };

          $scope.isSelected = function (test) {
            if (test === 'option') {
              return test === $scope.selected.slice(0, 6);
            }

            return $scope.selected === test;
          };
        }
      ]
    );
  };
    
});