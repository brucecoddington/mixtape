/*global define*/

define(function (require){

  var logger = require('logger');

  return function () {
    logger.group("Entering Filters module.");

    // example of registering a filter
    // require('filters/tweet.filter')();

    logger.groupEnd();
  };

});
