var walkdir = require('walkdir'), 
  path = require('path'),
  locomotive = require('locomotive'),
  Controller = locomotive.Controller;

var ApplicationController = new Controller();

ApplicationController.index = function() {
  var controller = this;
  this.env = locomotive.express.settings.env;

  var emitter = walkdir.walk('client/src');

  var scripts = [];

  emitter.on('file', function (file, stat) {
    if (path.extname(file) === '.js') {
      scripts.push(file.substring([process.cwd(), 'client/'].join('/').length));
    }
  });

  emitter.on('end', function () {
    controller.render({
      applicationScripts : scripts 
    });
  });

};

module.exports = ApplicationController;
