'use strict';

describe('Controller: DismissrequestCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var DismissrequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DismissrequestCtrl = $controller('DismissrequestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DismissrequestCtrl.awesomeThings.length).toBe(3);
  });
});
