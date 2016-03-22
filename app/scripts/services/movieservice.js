'use strict';

/**
 * @ngdoc service
 * @name letmesearchApp.movieservice
 * @description
 * # movieservice
 * Service in the letmesearchApp.
 */
angular.module('letmesearchApp')
  .service('movieservice', function ($q, settings) {

    var movies = [];
    var service = {
      getMovies: getMovies,
      moviesList: moviesList
    };

    function getMovies(querystring){

      theMovieDb.common.api_key = settings.API_KEY;

      theMovieDb.search.getMovie({"query": querystring}, function(d) {
        // TODO check if not JSON
        movies = JSON.parse(d).results;
        // TODO pagination
      }, function(e) {
        // TODO error handling
        movies = [];
      });


    }

    function moviesList(){
      return movies
    }

    return service

  });
