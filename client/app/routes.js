define(function (require) {

  var logger = require('logger');

  return function () {
      logger.group("Loading Routes");

      require('angular').module('app').config(['$routeProvider', function ($routeProvider){

        $routeProvider
          .when('/', {controller: 'HomeController', templateUrl: 'assets/templates/home/index.html'})
          .when('/three', {controller: 'HomeController', templateUrl: 'assets/templates/three/index.html'})
          .when('/four', {controller: 'HomeController', templateUrl: 'assets/templates/four/index.html'})
          .otherwise({title: "Ummm...there is nothing more to show, yet.", templateUrl: 'assets/templates/main.html'});

      }]);

      logger.groupEnd();
  };

});