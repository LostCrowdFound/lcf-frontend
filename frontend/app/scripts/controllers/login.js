'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
    .controller("LoginCtrl", function ($scope, currUser) {
        $scope.username = '';
        $scope.password = '';
        $scope.errorText = '';

        $scope.login = login;

        function login() {
            currUser.login($scope.username, $scope.password).then(function () {
            }, function (response) {
                if (response.status == 400 || response.status == 401) {
                    $scope.errorText = "Wrong username or password.";
                } else {
                    $scope.errorText = "An unknown error occured. please try again later.";
                }
            });
        }
    });