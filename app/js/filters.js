'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('mapUrl', function() {
      return function(e) {
          var str = "";
          for (var i=0;i<e.length;i++) {
              str += typeof e[i].name === 'undefined' ||
                e[i].name.localeCompare('') === 0  ? 
                e[i].latitude + ',' + e[i].longitude + '%7C' :
                e[i].name + '%7C';
          }
          str = str.replace(/ /g, '%20C');
          return str.replace(/%7C$/, '');
      };
  });
