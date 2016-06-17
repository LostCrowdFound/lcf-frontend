'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:FounditemCtrl
 * @description
 * # FounditemCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('FounditemCtrl', function (NgMap, itemsService, $location, ngToast) {

    var map;
    var vm = this;

  	NgMap.getMap().then(function(evtMap) {
      map = evtMap;
  	});

    vm.types = ['Smartphone'];
    vm.brands = ['Apple', 'Samsung', 'Microsoft'];
    vm.models = ['iPhone 5s', 'iPhone 6', 'iPhone 5c'];


/*    $scope.brandSelectionVisible = true;
    $scope.nameSelectionVisible = true;

    $scope.type = '';

    $scope.getBrands = function() {
      switch(type) {
        case 'Smartphone':
          return ['Apple, Samsung, Microsoft'];
          break;
        default:
          $scope.brandSelectionVisible = false;
          $scope.nameSelectionVisible = false;
      }
    }*/

/*    $scope.getNames = function() {
      switch(brandSelection) {
        case 'Apple':
          $scope.names = ['iPhone 5s, iPhone 6, iPhone 5c'];
          break;
        case 'Samsung':
          $scope.names = ['Galaxy S5, Galaxy S6'];
          break;
        case 'Microsoft':
          $scope.names = ['Lumia 930,  Lumia 930 XL'];
          break;
      }
    }
    */
    var today = new Date();

    vm.dtOptions = {
      maxDate: today
    };

    vm.date = today;

  	vm.name = '';
  	vm.email = '';

    vm.lat = 48.138370;
    vm.lon = 11.578553;

    vm.pos = function() {
      var pos = this.getPosition();

      vm.lon = pos.lng();
      vm.lat = pos.lat();
    };

    vm.addItem = function() {
  		itemsService.addItem(vm.typeSelection, vm.brandSelection, vm.modelSelection, vm.email, vm.lat, vm.lon, vm.date);
      $location.path('/#');
      ngToast.create({
        className: 'success',
        dismissOnClick: true,
        content: 'Successfully added your item to our database!',
      });
    };

});
