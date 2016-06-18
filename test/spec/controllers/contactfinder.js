'use strict';

describe('Controller: ContactfinderCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var ContactfinderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactfinderCtrl = $controller('ContactfinderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactfinderCtrl.awesomeThings.length).toBe(3);
  });
});
