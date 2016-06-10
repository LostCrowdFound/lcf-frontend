'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:LostitemCtrl
 * @description
 * # LostitemCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('LostitemCtrl', function (NgMap, itemsService, ngToast) {

    var map;
    var vm = this;

    NgMap.getMap().then(function(evtMap) {
        map = evtMap;
    });

    vm.radius = 1000;
    vm.lat = 48.138370;
    vm.lon = 11.578553;

    var today = new Date();

    vm.dtOptions = {
      maxDate: today
    };

    vm.date = today;

    vm.radiusChanged = function() {
      vm.radius = this.getRadius();
    };

    vm.centerChanged = function() {
        var pos = this.getCenter();

        vm.lon = pos.lng();
        vm.lat = pos.lat();
    };

    vm.type = "";
    vm.brand = "";
    vm.name = "";

    vm.items = [];


    vm.search = function() {
        itemsService.searchItems(vm.type, vm.brand, vm.name, vm.lat, vm.lon, vm.radius, vm.date)
        .then(function (resp) {
          vm.items = resp.data;
        }); // TODO: err
    };
});
