'use strict';

/**
 * @ngdoc function
 * @name rulerApp.controller:AgregarpredicadoCtrl
 * @description
 * # AgregarpredicadoCtrl
 * Controller of the rulerApp
 */
angular.module('rulerApp')
  .controller('AgregarpredicadoCtrl', function ($scope, $http) {
    $scope.title = 'Predicados';
    $scope.message = 'Agregar Predicados de Aplicación';

    $http.get(api_path + 'dominio?limit=0')
    .then(function(response) {
      $scope.dominios = response.data;
    });

    $http.get(api_path + 'tipo_predicado/?limit=0')
    .then(function(response) {
      $scope.tipos = response.data;
    });

    $scope.add = function(){
    if($scope.predicado.name === null){
      return;
    }
    if($scope.predicado.description === null){
      return;
    }
    var data = {
        Dominio: {Id: $scope.predicado.dominio.id},
        Nombre: $scope.predicado.name,
        Descripcion: $scope.predicado.description,
        TipoPredicado: {Id: $scope.predicado.tipopredicado.id}
    };
    $http.post(api_path + 'predicado',data);
    window.location.href = '#/predicados';

  };

  $scope.cancel = function(){
    window.location.href = '#/predicados';
  };
  });
