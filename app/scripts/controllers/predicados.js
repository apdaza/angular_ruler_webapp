'use strict';

/**
 * @ngdoc function
 * @name rulerApp.controller:PredicadosCtrl
 * @description
 * # PredicadosCtrl
 * Controller of the rulerApp
 */
angular.module('rulerApp')
  .controller('PredicadosCtrl', function ($scope, $http) {
    $scope.title = 'Predicados';
    $scope.message = 'Listado de Predicados de Aplicación';

    $http.get(api_path + 'predicado?limit=0')
    .then(function(response) {
        $scope.data = response.data;
    });
  });
