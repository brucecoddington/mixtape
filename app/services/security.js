var express = require('express'),
  passport = require('passport');

var security = {
  authenticationRequired: function(req, res, next) {
    console.log('authRequired');
    if (req.isAuthenticated()) {
      next();
    } else {
      var user = req.user ? req.user.withoutPassword() : null;
      res.json(401, user);
    }
  },

  adminRequired: function(req, res, next) {
    console.log('adminRequired');
    if (req.user && req.user.admin ) {
      next();
    } else {
      var user = req.user ? req.user.withoutPassword() : null;
      res.json(401, user);
    }
  },

  sendCurrentUser: function(req, res, next) {
    console.log('Sending current user: ' + req.user);
    console.log('req.session : ' + req.session);
    var user = req.user ? req.user.withoutPassword() : null;
    res.json(200, user);
  },

  login: function(req, res, next) {

    var handleAuth = function (err, user, info) {
      if (err) { 
        return next(err); 
      }

      if (!user) { 
        return res.json({authenticated: false, user: null, permissions: []}); 
      }

      req.login(user, function(loginErr) {
        if ( loginErr ) { return next(loginErr); }

        return res.json({authenticated: true, permissions: [], user: user.withoutPassword()});
      });
    };

    return passport.authenticate('local', handleAuth)(req, res, next);
  },

  logout: function(req, res, next) {
    req.logout();
    res.send(204);
  }
};

module.exports = security;