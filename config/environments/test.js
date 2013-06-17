var express = require('express');

module.exports = function() {
  app.set('port', 8888);

  // Serve static content
  app.use(express.static(__dirname + "/../../client"));

  // Serve the mocha test runner as the root of the namespace
  app.get("/", function (req, res) {
    res.render('spec-runner');
  });    

  this.use(function (req, res) {
    res.send(404);
  });
}