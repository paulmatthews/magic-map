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
        name: '',
        latitude: '30.3253793',
        longitude: '-81.654263'
      },
      {
        name: '',
        latitude: '30.3353793',
        longitude: '-81.634263'
      },
      {
        name: '',
        latitude: '30.3253593',
        longitude: '-81.64263'
      },
      {
        name: 'Everbank Stadium, Jacksonville, FL',
        latitude: '33.3353793',
        longitude: '-80.634263'
      },
      {
        name: 'University of North Florida',
        latitude: '30.3253593',
        longitude: '-81.64263'
      }
    ];
    
    return Map;
  })
  ;
