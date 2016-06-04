'use strict';

describe('Controller: LostitemCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var LostitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LostitemCtrl = $controller('LostitemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LostitemCtrl.awesomeThings.length).toBe(3);
  });
});
