var locomotive = require('locomotive'),
  Controller = locomotive.Controller,
  security = require('../services/security');

var LoginController = new Controller();

LoginController.index = function() {
  return security.login(this.req, this.res, this.next);
};

LoginController.currentUser = function () {
  return security.sendCurrentUser(this.req, this.res, this.next);
};

module.exports = LoginController;
