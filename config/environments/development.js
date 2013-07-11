var express = require('express');

module.exports = function () {

  console.log('in development config');

  this.set('port', 8080);

  this.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  // Server static content
  this.use(express.static(__dirname + "/../../client"));
  this.use('/assets/css', express.static(__dirname + "/../../client/dist/assets/css"));

  this.use(function (req, res) {
    res.send(404);
  });
}