'use strict';

/**
 * @ngdoc overview
 * @name rulerApp
 * @description
 * # rulerApp
 *
 * Main module of the application.
 */
var api_path = 'http://localhost:8080/rulerApi/v1/';

angular
  .module('rulerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dominios', {
        templateUrl: 'views/dominios.html',
        controller: 'DominiosCtrl',
        controllerAs: 'dominios'
      })
      .when('/predicados', {
        templateUrl: 'views/predicados.html',
        controller: 'PredicadosCtrl',
        controllerAs: 'predicados'
      })
      .when('/agregarDominio', {
        templateUrl: 'views/agregardominio.html',
        controller: 'AgregardominioCtrl',
        controllerAs: 'agregarDominio'
      })
      .when('/editarDominio', {
        templateUrl: 'views/editardominio.html',
        controller: 'EditardominioCtrl',
        controllerAs: 'editarDominio'
      })
      .when('/editarDominio/:Id', {
        templateUrl: 'views/editardominio.html',
        controller: 'EditardominioCtrl',
        controllerAs: 'editarDominio'
      })
      .when('/eliminarDominio', {
        templateUrl: 'views/eliminardominio.html',
        controller: 'EliminardominioCtrl',
        controllerAs: 'eliminarDominio'
      })
      .when('/eliminarDominio/:Id', {
        templateUrl: 'views/eliminardominio.html',
        controller: 'EliminardominioCtrl',
        controllerAs: 'eliminarDominio'
      })
      .when('/agregarPredicado', {
        templateUrl: 'views/agregarpredicado.html',
        controller: 'AgregarpredicadoCtrl',
        controllerAs: 'agregarPredicado'
      })
      .when('/editarPredicado', {
        templateUrl: 'views/editarpredicado.html',
        controller: 'EditarpredicadoCtrl',
        controllerAs: 'editarPredicado'
      })
      .when('/editarPredicado/:Id', {
        templateUrl: 'views/editarpredicado.html',
        controller: 'EditarpredicadoCtrl',
        controllerAs: 'editarPredicado'
      })
      .when('/eliminarPredicado', {
        templateUrl: 'views/eliminarpredicado.html',
        controller: 'EliminarpredicadoCtrl',
        controllerAs: 'eliminarPredicado'
      })
      .when('/eliminarPredicado/:Id', {
        templateUrl: 'views/eliminarpredicado.html',
        controller: 'EliminarpredicadoCtrl',
        controllerAs: 'eliminarPredicado'
      })
      .when('/exportarPredicado', {
        templateUrl: 'views/exportarpredicado.html',
        controller: 'ExportarpredicadoCtrl',
        controllerAs: 'exportarPredicado'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('parserMenu', function($scope, $http) {
  $scope.menu = [{"id": "0", "text": "Inicio", "url": "",
                  "subopciones": [{ "text": "Inicio", "url": "/#/home" },
                                  { "text": "Acerca de", "url": "/#/about" }]
              },{"id": "1", "text": "Dominios", "url": "",
                              "subopciones": [{ "text": "Listar", "url": "/#/dominios" },
                                              { "text": "Agregar", "url": "/#/agregarDominio" }]
                          },
              {"id": "2", "text": "Predicados", "url": "",
                  "subopciones": [{ "text": "Listar", "url": "/#/predicados" },
                                  { "text": "Agregar", "url": "/#/agregarPredicado" }]
              }];

});
