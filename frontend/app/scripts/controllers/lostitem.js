'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:LostitemCtrl
 * @description
 * # LostitemCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('LostitemCtrl', function ($scope, NgMap, itemsService) {

  	NgMap.getMap().then(function(map) {
      map = map;
  	});

  	$scope.type = "";
  	$scope.brand = "";
  	$scope.name = "";

    $scope.search = search;

    $scope.items = [];


  	function search() {
  		itemsService.searchItems($scope.type, $scope.brand, $scope.name)
        .then(function (response) {
          $scope.items = response.data;
        }, function (response) {

        });
  	}
});
