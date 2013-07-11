var express = require('express');

module.exports = function() {
  this.set('port', 8880);

  this.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  // Serve static content
  this.use(express.static(__dirname + "/../../client/dist/angular-locomotive-bootstrap-debug"));

  this.use(function (req, res) {
    res.send(404);
  });
}