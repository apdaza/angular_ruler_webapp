'use strict';

/**
 * @ngdoc function
 * @name rulerApp.controller:AgregardominioCtrl
 * @description
 * # AgregardominioCtrl
 * Controller of the rulerApp
 */
angular.module('rulerApp')
  .controller('AgregardominioCtrl', function ($scope, $http) {
    $scope.title = 'Dominios';
  $scope.message = 'Agregar Dominio de Aplicación';

  $scope.add = function(){
    if($scope.domain.name == null){
      return;
    }
    if($scope.domain.description == null){
      return;
    }
    var data = {
        Nombre: $scope.domain.name,
        Descripcion: $scope.domain.description
    };
    $http.post(api_path + 'dominio',data);
    window.location.href = '#/dominios';
  };

  $scope.cancel = function(){
    window.location.href = '#/dominios';
  };
  });
