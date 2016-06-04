'use strict';

/**
 * @ngdoc overview
 * @name lostcrowdfoundApp
 * @description
 * # lostcrowdfoundApp
 *
 * Main module of the application.
 */
angular
  .module('lostcrowdfoundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant("BASEURL", "http://localhost:3000")
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/lostItem', {
        templateUrl: 'views/lostitem.html',
        controller: 'LostitemCtrl',
        controllerAs: 'lostItem'
      })
      .when('/foundItem', {
        templateUrl: 'views/founditem.html',
        controller: 'FounditemCtrl',
        controllerAs: 'foundItem'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
