var express = require('express');

module.exports = function() {
  this.set('port', 3033);
  console.log('Setting port to 3033');

  // Serve static content
  this.use(express.static(__dirname + "/../../client/dist/angular-locomotive-bootstrap"));

  this.use(function (req, res) {
    res.send(404);
  });
}
