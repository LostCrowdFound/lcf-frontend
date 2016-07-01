'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:ResolverequestCtrl
 * @description
 * # ResolverequestCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('ResolverequestCtrl', function ($routeParams, currUser, $location, itemsService, requestService, ngToast) {

    var vm = this;

    if(!currUser.loggedIn()) {
      $location.path('#/login');
      ngToast.create({
        className: 'danger',
        dismissOnClick: true,
        content: 'You need to log in first!',
      });
    }

    requestService.getRequest($routeParams.requestId)
      .then(function (request) {
        vm.request = request.data;
        console.log(vm.request);
        if(vm.request.status === 'resolved') {
          $location.path('/#');
          ngToast.create({
            className: 'danger',
            dismissOnClick: true,
            content: 'Request already resolved!',
          });
        }
        itemsService.getItem(vm.request.itemId).then(function (item) {
          vm.item = item.data;
          var currUserId = currUser.getUser()._id;
          if (!(currUserId === vm.item.userId)) {
            $location.path('#/login');
            ngToast.create({
              className: 'danger',
              dismissOnClick: true,
              content: 'Permission denied! Wrong user!',
            });
          }
          vm.type = vm.item.type;
          vm.brand = vm.item.brand;
          vm.name = vm.item.name;
          vm.owner = currUser.getUser().username;
        });
      });

    vm.resolveRequest = function () {
      requestService.resolveRequest($routeParams.requestId, currUser.getUser()._id)
        .then(function () {
          ngToast.create({
            className: 'success',
            dismissOnClick: true,
            content: 'Great! Request resolved!',
          });
          $location.path('/#');
        }, function (response) {
          if (response.status === 403) {
            ngToast.create({
              className: 'danger',
              dismissOnClick: true,
              content: 'Permission denied! Wrong user!',
            });
          }
        });
    }
  });
