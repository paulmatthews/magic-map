'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MapCtrl', ['$scope', 'Map', '$location',  function($scope, Map, $location) {
    $scope.map = Map;
    
    /* Remove place */
    $scope.removePlace = function(index) {
        $scope.map.locs.splice(index, 1);
    };
    $scope.addNew = function() {
      $location.path('/new');
    };
  }]).
  controller('NewCtrl', ['$scope', 'Map', '$location', function($scope, Map, $location){
    $scope.map = Map;
    $scope.add = function() {
      Map.locs.push({name: $scope.name,latitude: $scope.latitude,
                            longitude: $scope.longitude});
      $location.path('/home');
    };
  }]);