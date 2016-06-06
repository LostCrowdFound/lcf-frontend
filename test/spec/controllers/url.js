'use strict';

describe('Controller: UrlCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var UrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UrlCtrl = $controller('UrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UrlCtrl.awesomeThings.length).toBe(3);
  });
});
