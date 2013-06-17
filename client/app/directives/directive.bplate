/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.info('Registering DIRECTIVE');

    require('angular').module('app').directive('DIRECTIVE', 
      [
        '$DEPS',
        function ($DEPS) {
          var link = function (scope, element, attrs, controller) {

          };

          return {
            link: link,
            replace: true,
            require: '???',
            restrict: 'E',
            scope: {},
            templateUrl: 'assets/templates/template.html',
            transclude: true
          };
        }
      ]
    );

  };
});