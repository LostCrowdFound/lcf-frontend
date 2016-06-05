'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:FounditemCtrl
 * @description
 * # FounditemCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('FounditemCtrl', function ($scope, NgMap, itemsService, $location, ngToast) {

    var map;
    var vm = this;

  	NgMap.getMap().then(function(evtMap) {
      map = evtMap;
  	});

  	$scope.type = "";
  	$scope.brand = "";
  	$scope.name = "";
  	$scope.email = "";

    vm.lat = 48.138370;
    vm.lon = 11.578553;

    vm.pos = function(event) {
      var pos = this.getPosition();

      vm.lon = pos.lng();
      vm.lat = pos.lat();
    }

    $scope.addItem = addItem;

    function addItem () {
  		itemsService.addItem($scope.type, $scope.brand, $scope.name, $scope.email, vm.lat, vm.lon);
      $location.path("/#");
      ngToast.create({
        className: 'success',
        dismissOnClick: true,
        content: 'Successfully added your item to our database!',
      });
    }

});
