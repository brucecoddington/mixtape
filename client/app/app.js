var logger = window.debug;

logger.group("Starting application.");    
logger.group("Setup Angular");

var app = angular.module('app', ['app.directives', 'app.controllers']);

logger.group("Loading Routes");

app.config(['$routeProvider', function ($routeProvider){

  $routeProvider
    .when('/', {controller: 'HomeController', templateUrl: 'assets/templates/home/index.html'})
    .when('/three', {controller: 'HomeController', templateUrl: 'assets/templates/three/index.html'})
    .when('/four', {controller: 'HomeController', templateUrl: 'assets/templates/four/index.html'})
    .otherwise({title: "Ummm...there is nothing more to show, yet.", templateUrl: 'assets/templates/main.html'});

}]);

logger.groupEnd();

logger.debug("Application module and routes configured.");
 
logger.groupEnd(); 
logger.groupEnd();
