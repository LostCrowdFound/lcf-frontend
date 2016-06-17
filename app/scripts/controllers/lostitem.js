'use strict';

/**
* @ngdoc function
* @name lostcrowdfoundApp.controller:LostitemCtrl
* @description
* # LostitemCtrl
* Controller of the lostcrowdfoundApp
*/
angular.module('lostcrowdfoundApp')
.controller('LostitemCtrl', function (NgMap, itemsService, ngToast, $location) {

  var map;
  var vm = this;

  NgMap.getMap().then(function(evtMap) {
    vm.map = evtMap;
  });
  vm.circleVisible = true;
  vm.markerVisible = false;
  vm.radius = 1000;
  vm.lat = 48.138370;
  vm.lon = 11.578553;
  vm.zoomToMarkers = false;

  var today = new Date();

  vm.dtOptions = {
    maxDate: today
  };

  vm.date = today;

  vm.radiusChanged = function() {
    if(this.getRadius() > 1000) {
      ngToast.create({
        className: 'danger',
        dismissOnClick: true,
        content: 'Radius too big!',
      });
      vm.radius = 1000;
    } else {
      vm.radius = this.getRadius();
    }
  };

  vm.centerChanged = function() {
    var pos = this.getCenter();

    vm.lon = pos.lng();
    vm.lat = pos.lat();
  };

  vm.type = '';
  vm.brand = '';
  vm.name = '';

  vm.items = [];

  vm.contactFinder = function () {
    $location.path('/contactFinder');//.search({ id: vm.item._id });
  }

  vm.showContact = function(e, item) {
    vm.item = item;
    console.log('Show Contact for marker: '+ item);
    vm.map.showInfoWindow('contact-iw', item._id);
  };

  vm.search = function() {
    console.log('Searching for items...');
    itemsService.searchItems(vm.type, vm.brand, vm.name, vm.lat, vm.lon, vm.radius, vm.date)
    .then(function (itemPositions) {
      if(itemPositions.data.length === 0) {
        vm.circleVisible = true;
        vm.markerVisible = false;
        ngToast.create({
          className: 'danger',
          dismissOnClick: true,
          content: 'No items found :(',
        });
      } else {
        vm.markerVisible = true;
        vm.circleVisible = false;
        ngToast.create({
          className: 'success',
          dismissOnClick: true,
          content: 'We found: ' + itemPositions.data.length + ' items!',
        });
      }
      vm.items = itemPositions.data;
      vm.zoomToMarkers = true;
    }); // TODO: err
  };
});
