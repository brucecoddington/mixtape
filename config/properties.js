/*global module, require, console*/
/*jslint nomen: false*/
module.exports = function () {

  var properties = {
    appName: "angular-locomotive-bootstrap",
    logs : {
      folder : './logs',
      filename : 'output.log'
    },
    mongo: {
      db : 'angular-locomotive-bootstrap',
      host : '127.0.0.1',
      port : 27017
    },
    session : {
      secret : "d0853b30-3d95-11e2-a25f-0800200c9a66", // uuid hash
      maxAge : new Date(Date.now() + 300000),
      key : 'express.sid'
    }
  };

  return properties;
};