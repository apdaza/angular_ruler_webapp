'use strict';

describe('Controller: DominiosCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerApp'));

  var DominiosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DominiosCtrl = $controller('DominiosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DominiosCtrl.awesomeThings.length).toBe(3);
  });
});
