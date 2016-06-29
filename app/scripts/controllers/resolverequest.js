'use strict';

/**
 * @ngdoc function
 * @name lostcrowdfoundApp.controller:ResolverequestCtrl
 * @description
 * # ResolverequestCtrl
 * Controller of the lostcrowdfoundApp
 */
angular.module('lostcrowdfoundApp')
  .controller('ResolverequestCtrl', function ($routeParams) {
    var vm = this;
    vm.requestId = $routeParams.requestId;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
