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

    requestService.getRequest($routeParams.requestId)
      .then(function (request) {
        vm.request = request;
        vm.item = itemsService.getItem(vm.request.itemId).then(function (item) {
          vm.item = item;
          vm.type = item.type;
          vm.brand = item.brand;
          vm.name = item.name;
        });
      }
    );

    console.log(currUser.loggedIn());
    console.log(currUser.userId());
  });
