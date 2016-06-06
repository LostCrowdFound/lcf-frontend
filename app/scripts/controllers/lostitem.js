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

    vm.radiusChanged = function() {
      vm.radius = this.getRadius();
    };

    vm.centerChanged = function() {
        var pos = this.getCenter();

        vm.lon = pos.lng();
        vm.lat = pos.lat();
    };

    $scope.type = "";
    $scope.brand = "";
    $scope.name = "";

    $scope.items = [];


    $scope.search = function() {
        itemsService.searchItems($scope.type, $scope.brand, $scope.name, vm.lat, vm.lon, vm.radius)
        .then(function (resp) {
          $scope.items = resp.data;
        }); // TODO: err
    };
});
