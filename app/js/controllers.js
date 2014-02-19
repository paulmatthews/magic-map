'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'Map', function($scope, Map) {
    $scope.map = Map;
    
  }])
  .controller('MyCtrl2', [function() {

  }]);