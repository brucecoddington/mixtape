var locomotive = require('locomotive'),
  Controller = locomotive.Controller,
  security = require('../services/security');

var LogoutController = new Controller();

LogoutController.index = function() {
  return security.logout(this.req, this.res, this.next);
};

module.exports = LogoutController;
