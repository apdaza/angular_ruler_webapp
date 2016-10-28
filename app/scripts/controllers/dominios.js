'use strict';

/**
 * @ngdoc function
 * @name rulerApp.controller:DominiosCtrl
 * @description
 * # DominiosCtrl
 * Controller of the rulerApp
 */
angular.module('rulerApp')
  .controller('DominiosCtrl', function ($scope, $http) {
    $scope.title = 'Dominios';
    $scope.message = 'Listado de Dominios de Aplicación';

    $http.get(api_path + 'dominio?limit=0')
    .then(function(response) {
        $scope.data = response.data;
    });
  });
