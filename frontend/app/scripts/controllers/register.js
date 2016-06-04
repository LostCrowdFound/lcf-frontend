'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
    .controller("RegisterCtrl", function ($scope, currUser) {
        $scope.username = '';
        $scope.email = '';
        $scope.password = '';
        $scope.errorText = '';

        $scope.register = register;

        function register() {
        	console.log("Register user");
            currUser.register($scope.username, $scope.email, $scope.password).then(function () {
            }, function (response) {
                debugger;
                if (response.status == 400 || response.status == 401) {
                    $scope.errorText = "An unknown error occured. please try again later.";
                }
                if (response.status == 500) {
                	$scope.errorText = "Registration unsuccessfull. User already exists!";
                }
            });
        }
    });

