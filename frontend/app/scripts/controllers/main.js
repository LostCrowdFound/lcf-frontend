'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('MainCtrl', function ($scope, currUser, ngToast, $location) {
    
    $scope.user = null;

    $scope.logout = logout;

    $scope.searchForItem = searchForItem;

    $scope.$watch(function(){
                    return currUser.loggedIn();
                }, function(loggedIn){
                    $scope.loggedIn = loggedIn;
                    if (loggedIn && !$scope.user) {
                        $scope.user = currUser.getUser();
                    }
                });

    function logout() {
    	currUser.logout();
        ngToast.create({
            className: 'success',
            dismissOnClick: true,
            content: 'Logout successfull.',
        });
    }

    function searchForItem() {
        if($scope.loggedIn) {
            $location.path('/lostItem');
        } else {
            $location.path('/login');
            ngToast.create({
                className: 'danger',
                dismissOnClick: true,
                content: 'You need to log in first!',
            });
        }

    }
  });
