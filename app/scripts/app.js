'use strict';

/**
 * @ngdoc overview
 * @name lostcrowdfoundApp
 * @description
 * # lostcrowdfoundApp
 *
 * Main module of the application.
 */
var app = angular
  .module('lostcrowdfoundApp', [
    'ngMap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngToast',
    'ui.bootstrap'
  ]);

app.config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
      verticalPosition: 'top',
      horizontalPosition: 'center',
      maxNumber: 3
    });
  }]);

app.constant("BASEURL", "http://localhost:3000");
app.config(function ($routeProvider, $httpProvider) {
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
      .when('/logout', {
        templateUrl: 'views/main.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/contactOwner', {
        templateUrl: 'views/contactowner.html',
        controller: 'ContactownerCtrl',
        controllerAs: 'contactOwner'
      })
      .otherwise({
        redirectTo: '/'
      });

      $httpProvider.interceptors.push('reqErrInterceptor');
        //auth interceptor
      $httpProvider.interceptors.push('authInterceptor');
  });
