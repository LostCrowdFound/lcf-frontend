'use strict';

/**
* @ngdoc function
* @name lostcrowdfoundApp.controller:LostitemCtrl
* @description
* # LostitemCtrl
* Controller of the lostcrowdfoundApp
*/
angular.module('lostcrowdfoundApp')
.controller('LostitemCtrl', function (NgMap, itemsService, ngToast, $location, currUser) {

  var map;
  var vm = this;

  NgMap.getMap().then(function(evtMap) {
    vm.map = evtMap;
  });

    vm.types = ['Smartphone'];
    vm.brands = ['Apple', 'Samsung', 'Microsoft'];
    vm.models = ['iPhone 5s', 'iPhone 6', 'iPhone 5c'];

    vm.showAd = false;


  vm.circleVisible = true;
  vm.markerVisible = false;
  vm.radius = 15000;
  vm.lat = 48.138370;
  vm.lon = 11.578553;
  vm.zoomToMarkers = false;

  var today = new Date();
  today.setHours(0,0,0,0);

  vm.dtOptions = {
    maxDate: today
  };

  vm.date = today;

  vm.radiusChanged = function() {
    if(this.getRadius() > 15000) {
      ngToast.create({
        className: 'danger',
        dismissOnClick: true,
        content: 'Radius too big!',
      });
      vm.radius = 1000;
      this.setRadius(vm.radius);
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
    $location.path('/contactFinder').search(
      {
        itemId: vm.item._id,
        userId: currUser.getUser()._id,
      }
    );
  }

  vm.showContact = function(e, item) {
    vm.item = item;
    console.log('Show Contact for marker: '+ item);
    vm.map.showInfoWindow('contact-iw', item._id);
  };

  vm.search = function() {
    console.log('Searching for items...');
    itemsService.searchItems(vm.typeSelection, vm.brandSelection, vm.modelSelection, vm.lat, vm.lon, vm.radius, vm.date)
    .then(function (itemPositions) {
      if(itemPositions.data.length === 0) {
        vm.circleVisible = true;
        vm.markerVisible = false;
        vm.showAd = true;
        ngToast.create({
          className: 'danger',
          dismissOnClick: true,
          content: 'No items found :(',
        });
      } else {
        vm.showAd = false;
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
