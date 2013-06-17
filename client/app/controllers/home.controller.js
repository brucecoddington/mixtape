/*global define*/
/*jshint laxcomma:true*/

define(function (require) {
    
  var logger = require('logger');

  return function () {
    logger.info('Registering HomeController');

    require('angular').module('app').controller('HomeController',
      [
        '$scope',

        function ($scope){
           
        }
      ]
    );
  };
    
});