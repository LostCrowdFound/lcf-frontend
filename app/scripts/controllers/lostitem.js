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
  var vm = this;

  NgMap.getMap().then(function(evtMap) {
    vm.map = evtMap;
  });

  vm.types = [];
  vm.brands = [];
  vm.models = [];

  vm.itemInfos = null;
  vm.brandInfos = null;

  itemsService.getItemInfo().then(function (itemInfos) {
    vm.itemInfos = itemInfos.data;
    var tempTypes = [];
    for(var i = 0; i < vm.itemInfos.length; i++) {
      tempTypes.push(vm.itemInfos[i].type);
    }
    vm.types = tempTypes;
  });

  vm.updateBrand = function () {
    vm.models = [];
    vm.brands = [];
    for (var i = 0; i < vm.itemInfos.length; i++) {
      if (vm.itemInfos[i].type === vm.typeSelection) {
        var tempBrands = [];
        for(var j = 0; j < vm.itemInfos[i].brands.length; j++) {
          tempBrands.push(vm.itemInfos[i].brands[j].brand);
        }
        vm.brands = tempBrands;
        vm.brandInfos = vm.itemInfos[i].brands;
      }
    }
  };

  vm.updateName = function () {
    for (var i = 0; i < vm.brandInfos.length; i++) {
      if (vm.brandInfos[i].brand === vm.brandSelection) {
        vm.models = vm.brandInfos[i].models;
        return;
      }
    }
  };

  vm.showAd = false;
  vm.circleVisible = true;
  vm.markerVisible = false;
  vm.radius = 1000;
  vm.lat = 48.138370;
  vm.lon = 11.578553;
  vm.zoomToMarkers = false;

  vm.typeDisabled = false;
  vm.brandDisabled = false;
  vm.nameDisabled = false;

  var today = new Date();
  today.setHours(0,0,0,0);

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
  };

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
        vm.typeDisabled = true;
        vm.brandDisabled = true;
        vm.nameDisabled = true;
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
