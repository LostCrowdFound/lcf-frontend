'use strict';

/**
* @ngdoc function
* @name lostcrowdfoundApp.controller:RegisterCtrl
* @description
* # RegisterCtrl
* Controller of the lostcrowdfoundApp
*/
angular.module('lostcrowdfoundApp')
.controller('RegisterCtrl', function ($scope, currUser, ngToast, $location) {
  $scope.username = '';
  $scope.email = '';
  $scope.password = '';

  $scope.register = function() {
    console.log('Register user');
    currUser.register($scope.username, $scope.email, $scope.password).then(function () {
      ngToast.create({
        className: 'success',
        dismissOnClick: true,
        content: 'Registration successfull.',
      });
      $location.path('/login');
    }, function (response) {
      if (response.status === 400 || response.status === 500) {
        ngToast.create({
          className: 'danger',
          dismissOnClick: true,
          content: 'An unknown error occured. please try again later.',
        });
      }
      if (response.status === 401) {
        ngToast.create({
          className: 'danger',
          dismissOnClick: true,
          content: 'Registration unsuccessfull. Username already taken!',
        });
      }
    });
  };
});
