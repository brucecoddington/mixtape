/*global module, require, console*/
/*jslint nomen: false*/

// This module connects the `mongoose` ORM to the `Mongo` DB. 
module.exports = function () {

  console.log('Establishing connection to MongoDB');

  // Pretty cool that this is all that's needed to connect to the Mongo DB. 
  var properties = require('../properties'),
    mongoose = require('mongoose'),
    dbAddress = ['mongodb:/', properties.mongo.host, properties.mongo.db].join('/');

  mongoose.connect(dbAddress);
};