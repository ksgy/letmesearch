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
      templateUrl: 'views/movies.html',
      restrict: 'E',
      controller: 'MoviesCtrl as movies',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
