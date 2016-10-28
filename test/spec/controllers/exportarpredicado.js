'use strict';

describe('Controller: ExportarpredicadoCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerApp'));

  var ExportarpredicadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExportarpredicadoCtrl = $controller('ExportarpredicadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExportarpredicadoCtrl.awesomeThings.length).toBe(3);
  });
});
