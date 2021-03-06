'use strict';

describe('Directive: movies', function () {

  // load the directive's module
  beforeEach(module('letmesearchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movies></movies>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the movies directive');
  }));
});
