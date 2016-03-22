'use strict';

describe('Service: searchservice', function () {

  // load the service's module
  beforeEach(module('letmesearchApp'));

  // instantiate service
  var searchservice;
  beforeEach(inject(function (_searchservice_) {
    searchservice = _searchservice_;
  }));

  it('should do something', function () {
    expect(!!searchservice).toBe(true);
  });

});
