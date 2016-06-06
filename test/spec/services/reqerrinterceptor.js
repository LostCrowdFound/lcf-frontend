'use strict';

describe('Service: reqErrInterceptor', function () {

  // load the service's module
  beforeEach(module('lostcrowdfoundApp'));

  // instantiate service
  var reqErrInterceptor;
  beforeEach(inject(function (_reqErrInterceptor_) {
    reqErrInterceptor = _reqErrInterceptor_;
  }));

  it('should do something', function () {
    expect(!!reqErrInterceptor).toBe(true);
  });

});
