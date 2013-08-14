(function () {

  var logger = window.debug;

  logger.group("Starting application.");    
  logger.group("Setup Main module.");

  var app = angular.module('main', [
    'app', 
    'services', 
    'filters', 
    '$strap.directives',
    'ui.state'
  ]);

  app.value('$strapConfig', {
    datepicker: {
      language: 'en',
      format: 'M d, yyyy'
    }
  });

  logger.group("Loading Routes");

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
  }])
  
  .run(['$state', '$rootScope', '$stateParams', function ($state, $rootScope, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

  logger.groupEnd();

  logger.debug("Main module and routes configured.");
   
  logger.groupEnd(); 
  logger.groupEnd();

}());