'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:FounditemCtrl
 * @description
 * # FounditemCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('FounditemCtrl', function (NgMap, itemsService, $location, ngToast, currUser) {

    var map;
    var vm = this;

  	NgMap.getMap().then(function(evtMap) {
      map = evtMap;
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
          console.log(vm.brandInfos);
        }
      }
    };

    vm.updateName = function () {
      for (var i = 0; i < vm.brandInfos.length; i++) {
        if (vm.brandInfos[i].brand === vm.brandSelection) {
          vm.models = vm.brandInfos[i].models;
          console.log(vm.brandInfos);
          return;
        }
      }
    };

    var today = new Date();
    today.setHours(0,0,0,0);

    vm.dtOptions = {
      maxDate: today
    };

    vm.date = today;

  	vm.name = '';

    vm.lat = 48.138370;
    vm.lon = 11.578553;

    vm.pos = function() {
      var pos = this.getPosition();

      vm.lon = pos.lng();
      vm.lat = pos.lat();
    };

    vm.addItem = function() {
  		itemsService.addItem(vm.typeSelection, vm.brandSelection, vm.modelSelection, currUser.getUser()._id, vm.lat, vm.lon, vm.date);
      $location.path('/#');
      ngToast.create({
        className: 'success',
        dismissOnClick: true,
        content: 'Successfully added your item to our database!',
      });
    };

});
