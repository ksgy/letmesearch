'use strict';

/**
 * @ngdoc function
 * @name letmesearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the letmesearchApp
 */
angular.module('letmesearchApp')
  .controller('MainCtrl', function ($scope, movieservice) {
    $scope.movies = [];
    movieservice.getMovies('know').then(function(movieList) {
      $scope.movies = movieList;
    })

  });
