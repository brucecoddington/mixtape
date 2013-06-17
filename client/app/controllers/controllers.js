/*global define*/ 

define(function (require){

  var logger = require('logger');

  return function () {
    logger.group("Registering controllers.");

    require('controllers/nav.controller')();
    require('controllers/home.controller')();

    logger.groupEnd();
  };
});