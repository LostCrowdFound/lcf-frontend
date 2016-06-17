'use strict';

describe('Controller: ContactownerCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var ContactownerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactownerCtrl = $controller('ContactownerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactownerCtrl.awesomeThings.length).toBe(3);
  });
});
