'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('ContactCtrl', function (currUser, $location, $window, ngToast) {
    var vm = this;

    vm.requestAd = function () {
      if(currUser.loggedIn()) {
        $location.path('/requestAd');
      } else {
        $window.localStorage.redirect = 'requestAd';
        $location.path('/login');
        ngToast.create({
          className: 'danger',
          dismissOnClick: true,
          content: 'You need to log in first!',
        });
      }
    };

    vm.importItems = function () {
      if(currUser.loggedIn()) {
        $location.path('/importItems');
      } else {
        $window.localStorage.redirect = 'importItems';
        $location.path('/login');
        ngToast.create({
          className: 'danger',
          dismissOnClick: true,
          content: 'You need to log in first!',
        });
      }
    };
  });
