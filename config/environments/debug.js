var express = require('express');

module.exports = function() {
  this.set('port', 3003);

  this.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  // Serve static content
  this.use(express.static(__dirname + "/../../client/dist/d3-control-ui-debug"));

  this.use(function (req, res) {
    res.send(404);
  });
}
