logger.info('Registering NavController');

angular.module('app').controller('NavController',
  [
    '$scope',
    function ($scope) {

      $scope.dropdown = [
        {
          "text": 'option1',
          "href": '#/option1'
        },

        {
          "text": 'option2',
          "href": '#/option2'
        }
      ];
    }
  ]
);