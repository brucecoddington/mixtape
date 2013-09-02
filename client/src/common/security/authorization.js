angular.module('security.authorization', ['security.service'])

// This service provides guard methods to protect application states.
// You can add them as resolves to states to require authorization levels
// before allowing a state change to complete
.provider('securityAuthorization', {

  requireAdminUser: ['securityAuthorization', function(securityAuthorization) {
    return securityAuthorization.requireAdminUser();
  }],

  requireAuthenticatedUser: ['securityAuthorization', function(securityAuthorization) {
    return securityAuthorization.requireAuthenticatedUser();
  }],

  requireAuthorizedUser: ['securityAuthorization', function(securityAuthorization) {
    return securityAuthorization.requireAuthenticatedUser();
  }],

  $get: ['security', 'securityRetryQueue', function(security, queue) {
    var service = {

      // Require that there is an authenticated user
      // (use this in a state resolve to prevent non-authenticated users from entering that state)
      requireAuthenticatedUser: function(state) {
        var promise = security.requestCurrentUser().then(function(userInfo) {
          if ( !security.isAuthenticated() ) {
            return queue.pushRetryFn('unauthenticated-client', service.requireAuthenticatedUser, state);
          }
        });
        return promise;
      },

      // Require that there is an administrator logged in
      // (use this in a state resolve to prevent non-administrators from entering that state)
      requireAdminUser: function(state) {
        var promise = security.requestCurrentUser().then(function(userInfo) {
          if ( !security.isAdmin() ) {
            return queue.pushRetryFn('unauthorized-client', service.requireAdminUser, state);
          }
        });
        return promise;
      }, 

      requireAuthorizedUser: function (authorization, state) {
        var promise = security.requestCurrentUser().then(function(userInfo) {
          if (!security.hasAuthorization(authorization)) {
            return queue.pushRetryFn('unauthorized-client', service.requireAuthorizedUser, state);
          }
        });
        return promise;
      }

    };

    return service;
  }]
});