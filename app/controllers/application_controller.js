var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ApplicationController = new Controller();

ApplicationController.index = function() {
  this.env = locomotive.express.settings.env
  this.render();
}

module.exports = ApplicationController;