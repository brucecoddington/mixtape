define(function (require) {

  var logger = require('logger');

  return function () {
    logger.group("Entering Service module.");

    // example of registering a service
    // require('services/tweet.service')();

    logger.groupEnd();    
  };
});