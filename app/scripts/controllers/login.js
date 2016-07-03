'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
    .controller('LoginCtrl', function ($scope, currUser, $location, ngToast, $window) {
        $scope.username = '';
        $scope.password = '';

        $scope.login = function() {
            currUser.login($scope.username, $scope.password).then(function () {
              var redirect = $window.localStorage.redirect;
              console.log('LOGIN' + redirect);
              if(redirect !== '') {
                console.log('there is a redirect');
                $window.localStorage.removeItem('redirect');
                $location.path('/' + redirect);
              } else {
                $location.path('/');
              }
                ngToast.create({
                        className: 'success',
                        dismissOnClick: true,
                        content: 'Login successfull.',
                    });
            }, function (response) {
                if (response.status === 400 || response.status === 401) {
                    ngToast.create({
                        className: 'danger',
                        dismissOnClick: true,
                        content: 'Wrong username or password.',
                    });
                } else {
                    ngToast.create({
                        className: 'danger',
                        dismissOnClick: true,
                        content: 'An unknown error occured. please try again later.',
                    });
                }
            });
        };
    });
