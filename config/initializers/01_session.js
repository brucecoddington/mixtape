/*global module, require, console*/
/*jslint nomen: false*/

var express = require('express');

// Module to create the `Redis` persisted sessions. 
module.exports = function () {

  console.log('Establishing session');

  // Create the `Redis` client and initialize the session store. 
  var RedisStore = require('connect-redis')(express),
    redisClient = require('redis').createClient(),
    properties = require('../properties')();

  var sessionStore = global.sessionStore = new RedisStore({client: redisClient});
  
  var session = global.session = express.session({
    store: sessionStore,
    secret: properties.session.secret,
    maxAge: properties.session.maxAge,
    key: properties.session.key
  });

  this.use(session);
};