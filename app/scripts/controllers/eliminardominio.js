'use strict';

/**
 * @ngdoc function
 * @name rulerApp.controller:EliminardominioCtrl
 * @description
 * # EliminardominioCtrl
 * Controller of the rulerApp
 */
angular.module('rulerApp')
  .controller('EliminardominioCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams)  {
    $scope.Id = $routeParams.Id;
    $scope.title = 'Dominios';
    $scope.message = 'Eliminar Dominio de Aplicación';

    $scope.load = function(Id){
      $http.get(api_path + 'dominio/'+Id)
      .then(function(response) {
          $scope.domain = response.data;
      });
    };

    $scope.delete = function(Id){
      $http.delete(api_path + 'dominio/'+Id)
      .then(function() {
          window.location.href = '#/dominios';
      });
    };

    $scope.cancel = function(){
      window.location.href = '#/dominios';
    };
  }]);
