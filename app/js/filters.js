'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('niceRead', function() {
    return function(text) {
      return String(text).replace(/%7C/g, '\n')
    };
  });
