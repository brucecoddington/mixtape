/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.group("Registering directives.");

    // example of registering a directive
    // require('directives/tweet.directive')();

    logger.groupEnd();
  };
});
