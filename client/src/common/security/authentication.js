angular.module('security.authentication', [])

.factory('authentication', function () {

  var authentication = {};
  
  authentication.authenticationObject = {
      authenticated : false
  };

  authentication.setAuthentication = function (user) {
    if (user) {
       authentication.authenticationObject = user;
       authentication.authenticationObject.authenticated = true;
    }

    return authentication.authenticationObject;
  };

  authentication.hasAuthorization = function (authorization) {
    var auth = _.find(authentication.authenticationObject.permissions, function(permission) {
      return permission === authorization;
    });

    return !!auth;
  };

  return authentication;
});