'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'Map', function($scope, Map) {
    $scope.map = Map;
    
    /* Add new place to map.locs */
    $scope.places = function(mode) {
      var place = {},
          latlong = $scope.newloc.split(',');
      place.latitude = latlong[0];
      place.longitude = latlong[1];
      mode.localeCompare('add') === 0 ? $scope.map.locs.push(place) :
                                        $scope.removePlace(place);
    };
    /* Remove place */
    $scope.removePlace = function(place) {
        for (var i=0;i<$scope.map.locs.length;i++) {
            if(place.latitude.localeCompare($scope.map.locs[i].latitude) === 0 &&
                place.longitude.localeCompare($scope.map.locs[i].longitude) === 0) {
                    $scope.map.locs.splice(i, 1);
            }
        }
    };
  }]);