'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
    .controller('LoginCtrl', function ($scope, currUser, $location, ngToast) {
        $scope.username = '';
        $scope.password = '';

        $scope.login = function() {
            currUser.login($scope.username, $scope.password).then(function () {
                $location.path('/#');
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
