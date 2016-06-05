'use strict';

describe('Service: searchItems', function () {

  // load the service's module
  beforeEach(module('lostcrowdfoundApp'));

  // instantiate service
  var searchItems;
  beforeEach(inject(function (_searchItems_) {
    searchItems = _searchItems_;
  }));

  it('should do something', function () {
    expect(!!searchItems).toBe(true);
  });

});
