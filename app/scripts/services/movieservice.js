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

    var service = {
      getMovies: getMovies
    };

    function getMovies(querystring){

      theMovieDb.common.api_key = settings.API_KEY;

      var deferred = $q.defer();
      theMovieDb.search.getMovie({"query": querystring}, function(d) {
        deferred.resolve(d);
      }, function(e) {
        deferred.reject(d);
      });

      return deferred.promise;

    }

    return service

  });
