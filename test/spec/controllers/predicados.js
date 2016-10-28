'use strict';

describe('Controller: PredicadosCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerApp'));

  var PredicadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PredicadosCtrl = $controller('PredicadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PredicadosCtrl.awesomeThings.length).toBe(3);
  });
});
