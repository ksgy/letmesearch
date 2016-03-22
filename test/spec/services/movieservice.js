'use strict';

describe('Service: movieservice', function () {

  // load the service's module
  beforeEach(module('letmesearchApp'));

  // instantiate service
  var movieservice;
  beforeEach(inject(function (_movieservice_) {
    movieservice = _movieservice_;
  }));

  it('should do something', function () {
    expect(!!movieservice).toBe(true);
  });

});
