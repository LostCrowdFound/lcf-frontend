'use strict';

describe('Controller: RequestadCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var RequestadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestadCtrl = $controller('RequestadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RequestadCtrl.awesomeThings.length).toBe(3);
  });
});
