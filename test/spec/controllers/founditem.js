'use strict';

describe('Controller: FounditemCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var FounditemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FounditemCtrl = $controller('FounditemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FounditemCtrl.awesomeThings.length).toBe(3);
  });
});
