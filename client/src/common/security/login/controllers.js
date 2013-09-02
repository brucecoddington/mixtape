angular.module('security.login.form', [])

// The LoginFormController provides the behaviour behind a reusable form to allow users to authenticate.
.controller('LoginFormController', ['$scope', 'security', function($scope, security) {
  // The model for this form 
  $scope.user = {};

  // Any error message from failing to login
  $scope.authError = null;

  // The reason that we are being asked to login - for instance because we tried to access something to which we are not authorized
  // We could do something diffent for each reason here but to keep it simple...
  $scope.authReason = null;
  if ( security.getLoginReason() ) {
    $scope.authReason = ( security.isAuthenticated() ) ?
      "You are not authorized to perform this action." :
      "You must be logged in to complete your request.";
  }

  // Attempt to authenticate the user specified in the form's model
  $scope.login = function() {
    // Clear any previous security errors
    $scope.authError = null;

    // Try to login
    security.login($scope.user.username, $scope.user.password).then(function() {
      if ( !security.currentUser ) {
        // If we get here then the login failed due to bad credentials
        $scope.authError = "Invalid username and password combination.";
      }
    }, function(x) {
      // If we get here then there was a problem with the login request to the server
      $scope.authError = "Invalid username and password combination.";
    });
  };

  $scope.clearForm = function() {
    $scope.user = {};
  };

  $scope.cancelLogin = function() {
    security.cancelLogin();
  };
}]);
