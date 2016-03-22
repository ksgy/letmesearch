'use strict';

/**
 * @ngdoc function
 * @name letmesearchApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the letmesearchApp
 */
angular.module('letmesearchApp')
  .controller('MoviesCtrl', function ($scope, movieservice) {

    // stuck here for more than an hour:
    // this should update moviesList when movieservice.getMovies() changes moviesList, but it's not updating.
    // if a change on searchservice calls $scope.$apply() new values applied to the scope, list appears
    this.moviesList = movieservice.moviesList;

  });
