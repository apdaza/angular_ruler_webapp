'use strict';

/**
 * @ngdoc function
 * @name rulerApp.controller:EditarpredicadoCtrl
 * @description
 * # EditarpredicadoCtrl
 * Controller of the rulerApp
 */
angular.module('rulerApp')
  .controller('EditarpredicadoCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.title = 'Predicados';
    $scope.message = 'Editar Predicados de Aplicación';

  $scope.load = function(id){
    $http.get(api_path + 'predicado/'+id)
    .then(function(response) {
        $scope.predicado = response.data;
    });
  };

  $http.get(api_path + 'dominio?limit=0')
  .then(function(response) {
      $scope.dominios = response.data;
  });

  $http.get(api_path + 'tipo_predicado/?limit=0')
  .then(function(response) {
      $scope.tipos = response.data;
  });

  $scope.edit = function(id){
    if($scope.predicado.Nombre === null){
      return;
    }
    if($scope.predicado.Descripcion === null){
      return;
    }
    var data = {
        Dominio: {Id: $scope.predicado.Dominio.Id},
        Nombre: $scope.predicado.Nombre,
        Descripcion: $scope.predicado.Descripcion,
        TipoPredicado: {Id: $scope.predicado.TipoPredicado.Id}
    };
    $http.put(api_path + 'predicado/'+id,data);
    window.location.href = '#/predicados';
    //$location.url('/#/predicados');
  };

  $scope.cancel = function(){
    window.location.href = '#/predicados';
  };
}]);
