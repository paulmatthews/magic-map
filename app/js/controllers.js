'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MapCtrl', ['$scope', 'Map',  function($scope, Map) {
    $scope.map = Map;
    
    /* Remove place */
    $scope.removePlace = function(index) {
        $scope.map.locs.splice(index, 1);
    };
    $scope.add = function() {
      Map.locs.push({name: $scope.name,latitude: '',
                            longitude: ''});
      $scope.name = '';
    };
  }]);