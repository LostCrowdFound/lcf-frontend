'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:LostitemCtrl
 * @description
 * # LostitemCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('LostitemCtrl', function ($scope, NgMap, itemsService, ngToast) {

    var map;
    var vm = this;

    NgMap.getMap().then(function(evtMap) {
      map = evtMap;
    });

    vm.radius = 1000;
    vm.lat = 48.138370;
    vm.lon = 11.578553;

    vm.area = function(event) {
      var pos = this.getPosition();

      vm.lon = pos.lng();
      vm.lat = pos.lat();

      ngToast.create({
        className: 'success',
        dismissOnClick: true,
        content: 'Successfully added your item to our database!',
      });
    }


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
