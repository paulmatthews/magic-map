'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'Map', function($scope, Map) {
    $scope.map = Map;
    $scope.addPlace = function() {
      var place = {},
          latlong = document.getElementById('place').value.split(',');
      place.latitude = latlong[0];
      place.longitude = latlong[1];
      $scope.map.locs.push(place);
    }
  }])
  .controller('MyCtrl2', [function() {

  }]);