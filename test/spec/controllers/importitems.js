'use strict';

describe('Controller: ImportitemsCtrl', function () {

  // load the controller's module
  beforeEach(module('lostcrowdfoundApp'));

  var ImportitemsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImportitemsCtrl = $controller('ImportitemsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImportitemsCtrl.awesomeThings.length).toBe(3);
  });
});
