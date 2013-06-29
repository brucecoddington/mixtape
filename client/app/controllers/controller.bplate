/*global define*/

define(function (require) {
    
  var logger = require('logger');

  return function () {
    logger.info('Registering CONTROLLER');

    require('angular').module('app').controller('CONTROLLER',
      [
        '$scope',
        function ($scope){
            $scope.messages = {
              two: "TWO booyaa!"
            };

            $scope.alert = function (msg) {
              window.alert('clicked' + msg +'!');
            };
        }
      ]
    );
  };
    
});