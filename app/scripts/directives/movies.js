'use strict';

/**
 * @ngdoc directive
 * @name letmesearchApp.directive:movies
 * @description
 * # movies
 */
angular.module('letmesearchApp')
  .directive('movies', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the movies directive');
      }
    };
  });
