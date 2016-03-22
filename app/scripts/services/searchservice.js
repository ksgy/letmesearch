'use strict';

/**
 * @ngdoc service
 * @name letmesearchApp.searchservice
 * @description
 * # searchservice
 * Service in the letmesearchApp.
 */
angular.module('letmesearchApp')
  .service('searchservice', function (movieservice) {

    var service = {
      search: search
    };

    function search(keyword) {
      movieservice.getMovies(keyword);
    }

    return service;
  });
