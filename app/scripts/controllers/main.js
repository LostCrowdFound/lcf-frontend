'use strict';

/**
* @ngdoc function
* @name lostcrowdfoundApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the lostcrowdfoundApp
*/
angular.module('lostcrowdfoundApp')
.controller('MainCtrl', function ($scope, currUser, ngToast, $location, $window) {

  $scope.isActive = function (viewLocation) {
    if (viewLocation.length > 1) {
      return $location.path().startsWith(viewLocation);
    }
    return $location.path() === viewLocation;
  };

  $scope.user = null;

  $scope.$watch(function() {
    return currUser.loggedIn();
  }, function(loggedIn) {
    $scope.loggedIn = loggedIn;
    if (!!loggedIn && !$scope.user) {
      $scope.user = currUser.getUser();
    }
  });

  $scope.logout = function() {
    currUser.logout();
    ngToast.create({
      className: 'success',
      dismissOnClick: true,
      content: 'Logout successfull.',
    });
  };

  $scope.searchForItem = function() {
    if($scope.loggedIn) {
      $location.path('/lostItem');
    } else {
      $window.localStorage.redirect = 'lostItem';
      $location.path('/login');
      ngToast.create({
        className: 'danger',
        dismissOnClick: true,
        content: 'You need to log in first!',
      });
    }
  };

  $scope.addFoundItem = function() {
    if($scope.loggedIn) {
      $location.path('/foundItem');
    } else {
      $window.localStorage.redirect = 'foundItem';
      $location.path('/login');
      ngToast.create({
        className: 'danger',
        dismissOnClick: true,
        content: 'You need to log in first!',
      });
    }
  };
});
