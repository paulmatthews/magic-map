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
  })
  .filter('mapUrl', function() {
      return function(e) {
          var str = "";
          for (var i=0;i<e.length;i++) {
              str+=e[i].latitude + ',' + e[i].longitude + '%7C';
          }
          return str;
      };
  });
