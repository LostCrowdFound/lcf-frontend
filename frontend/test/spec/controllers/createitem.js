'use strict';

describe('Controller: CreateitemCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var CreateitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateitemCtrl = $controller('CreateitemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateitemCtrl.awesomeThings.length).toBe(3);
  });
});
