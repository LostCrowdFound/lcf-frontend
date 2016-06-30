'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:ResolverequestCtrl
 * @description
 * # ResolverequestCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('ResolverequestCtrl', function ($routeParams, currUser, $location, itemsService, requestService) {

    var vm = this;

    if(!currUser.loggedIn()) {//|| currUser.userId()) {
      $location.path('/login');
    }

    console.log($routeParams.requestId);

    requestService.getRequest($routeParams.requestId)
      .then(function (request) {
        vm.request = request.data;
        console.log(vm.request);
        vm.item = itemsService.getItem(vm.request.itemId).then(function (item) {
          vm.item = item.data;
          console.log(vm.item);
          vm.type = vm.item.type;
          vm.brand = vm.item.brand;
          vm.name = vm.item.name;
          vm.owner = currUser.getUser().username;
        });
      }
    );

    vm.resolveRequest = function () {
      console.log('Trying to resolve request');
      requestService.resolveRequest($routeParams.requestId, currUser.getUser()._id)
        .then(function (res) {
          $location.path('/#');
        });
    }

    console.log(currUser.loggedIn());
    console.log(currUser.getUser()._id);
  });
