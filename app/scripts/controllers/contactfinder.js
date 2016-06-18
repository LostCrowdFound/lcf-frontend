'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:ContactfinderCtrl
 * @description
 * # ContactfinderCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('ContactfinderCtrl', function (requestService, $location, ngToast) {

    var vm = this;

    vm.params = $location.search();

    vm.description = '';

    vm.createRequest = function () {
      requestService.addRequest(vm.description, 'test', vm.params.itemId)
      .then(function () {
        $location.path('/#');
        ngToast.create({
          className: 'success',
          dismissOnClick: true,
          content: 'Request successfully created!',
        });
      });
    }
  });
