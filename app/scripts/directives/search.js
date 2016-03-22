'use strict';

/**
 * @ngdoc directive
 * @name letmesearchApp.directive:search
 * @description
 * # search
 */
angular.module('letmesearchApp')
  .directive('search', function () {
    return {
      templateUrl: 'views/search.html',
      restrict: 'E',
      controller: 'SearchCtrl as search',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
