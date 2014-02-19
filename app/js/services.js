'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .factory('Map', function() {
    var Map = {};
    Map.locs = [
      {
        latitude: '30.3253793',
        longitude: '-81.654263'
      },
      {
        latitude: '30.3353793',
        longitude: '-81.634263'
      },
      {
        latitude: '30.3253593',
        longitude: '-81.64263'
      }
    ];
    Map.markers = mkrs();
    
    function mkrs() {
      var m = "";
      for (var i=0;i<Map.locs.length;i++) {
        m = m + Map.locs[i].latitude + ',' + Map.locs[i].longitude + '%7C';
      }
      return m;
    };
    
    return Map;
  })
  ;
