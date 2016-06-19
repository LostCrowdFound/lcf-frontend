'use strict';

describe('Controller: ResolverequestCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var ResolverequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResolverequestCtrl = $controller('ResolverequestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResolverequestCtrl.awesomeThings.length).toBe(3);
  });
});
