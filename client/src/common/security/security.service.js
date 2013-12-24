(function () {
  'use strict';

  var logger = window.debug;

  angular.module('common.security.service', [
    'common.security.login.controllers', // Contains the login form template and controller
    'common.security.authorization',     // Provides the permissions analysis
    'common.security.context'            // Service that holds the user and authentication
  ])

    .factory('security', 
      function(securityContext, authorization) {

        // The public API of the service
        var service = {

          // Information about the current user
          currentUser: function () {
            return securityContext.user;
          },

          isAuthenticated : function () {
            return securityContext.authenticated;
          },

          // Does the current user have the authorization?
          hasAuthorization: function(permission) {
            return !!(securityContext.user && authorization.hasAuthorization(permission));
          }
        };

        return service;
    });

}());
