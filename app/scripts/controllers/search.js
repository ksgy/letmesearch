'use strict';

/**
 * @ngdoc function
 * @name letmesearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the letmesearchApp
 */
angular.module('letmesearchApp')
  .controller('SearchCtrl', function (searchservice) {
    this.search = searchservice.search;
  });
