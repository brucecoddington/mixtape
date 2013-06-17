/*global module, require, sessionStore, logger*/
/*jslint nomen: false*/

// This module initializes the web socket communication and 
// associates the socket to the user session. 
module.exports = function (server) {

  // Setup the redis store for socket io
  var RedisStore = require('socket.io/lib/stores/redis'),
    redis = require('socket.io/node_modules/redis'),
    
    // Setup socketio
    sio = require('socket.io'),
    socketio = sio.listen(server),
    properties = require('../properties')(),
    cookieParser = require('express').cookieParser(properties.session.secret);

  function findCookie (handshake) {
    var key = properties.session.key;
      return (handshake.secureCookies && handshake.secureCookies[key]) ||
      (handshake.signedCookies && handshake.signedCookies[key]) ||
      (handshake.cookies && handshake.cookies[key]);
  }

  function resolve (parseErr, storeErr, session) {
    if (parseErr) return parseErr;
    if (!storeErr && !session) return { error: 'could not look up session by key: '+ properties.session.key};
    return storeErr;
  }

  // ### Socket.io configuration
  socketio.configure(function () {
    
    // Set the `Redis` store up for publishing and subscribing to events via the cluster.  
    socketio.set('store', new RedisStore({
      redisPub : redis.createClient(),
      redisSub : redis.createClient(),
      redisClient : redis.createClient()
    }));

    // Set up the authorization handshake for all new socket connections.
    // This authorization happens to all namespaces as well.  
    // Note: This would be a good candidate for a promise/chaining library. 
    socketio.set('authorization', function (handshakeData, callback) {

      // Parse the session cookies from the handshake. 
      cookieParser(handshakeData, {}, function (parseErr) {

        // If the cookies are successfully parsed, find the session cookie. 
        var cookie = findCookie(handshakeData);

        // Get the session keyed by the cookie from the session store. 
        sessionStore.get(cookie, function (storeErr, session){
          
          // If there are errors, reslove the error type and log it. 
          var err = resolve(parseErr, storeErr, session);
          if (err) {
            logger.error('Cookie error: ' + JSON.stringify(err));
          }

          // Set the socket's session to the matching session from the session store. 
          handshakeData.session = session;

          // Execute the authorization callback. 
          // The callback gets any errors that occur during authorization as the first argument. 
          // The second argument is whether or not the handshake was authenticated. 
          callback(err, session && session.authenticated);
        });
      });
    });

    //socketio.set('logger', logger);
  });

  return socketio;
};

