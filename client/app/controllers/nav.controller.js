/*jshint laxcomma:true*/

define(function (require) {
    
  var logger = require('logger'),
    $ = require('jquery');

  return function () {
    logger.info('Registering NavController');

    require('angular').module('app').controller('NavController',
      [
        '$scope',
        function ($scope) {

          $scope.setSelected = function ($event) {
            if ($scope.selectedNavigation) {
              $($scope.selectedNavigation).removeClass('active');
            }

            var selected = $event.target;
            $(selected).addClass('active');
            $scope.selectedNavigation = selected;
          };

          (function selectHome() {
            var home = $('a.home');
            home.addClass('active');
            $scope.selectedNavigation = home;
          }());

        }
      ]
    );
  };
    
});