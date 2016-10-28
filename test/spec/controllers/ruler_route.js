'use strict';

describe('Controller: RulerRouteCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerApp'));

  var RulerRouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RulerRouteCtrl = $controller('RulerRouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RulerRouteCtrl.awesomeThings.length).toBe(3);
  });
});
