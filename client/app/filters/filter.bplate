/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.info('Registering FILTER');

    require('angular').module('app').filter('FILTER',
      [
        '$DEP',
        function ($DEP) {
          return function (){};
        }
      ]
    );
  };
});