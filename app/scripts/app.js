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

app.constant('BASEURL', 'http://localhost:3000');
app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        //controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/lostItem', {
        templateUrl: 'views/lostitem.html',
        //controller: 'LostitemCtrl',
        controllerAs: 'lostItem'
      })
      .when('/foundItem', {
        templateUrl: 'views/founditem.html',
        //controller: 'FounditemCtrl',
        controllerAs: 'foundItem'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        //controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        //controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/logout', {
        templateUrl: 'views/main.html',
        //controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/contactFinder', {
        templateUrl: 'views/contactfinder.html',
        //controller: 'ContactfinderCtrl',
        controllerAs: 'contactFinder'
      })
      .when('/resolveRequest/:requestId', {
        templateUrl: 'views/resolverequest.html',
        //controller: 'ResolverequestCtrl',
        controllerAs: 'resolveRequest'
      })
      .when('/dismissRequest/:requestId', {
        templateUrl: 'views/dismissrequest.html',
        //controller: 'DismissrequestCtrl',
        controllerAs: 'dismissRequest'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/contact/importItems', {
        templateUrl: 'views/importitems.html',
        controller: 'ImportitemsCtrl',
        controllerAs: 'importItems'
      })
      .when('/contact/requestAd', {
        templateUrl: 'views/requestad.html',
        controller: 'RequestadCtrl',
        controllerAs: 'requestAd'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('reqErrInterceptor');
      //auth interceptor
    $httpProvider.interceptors.push('authInterceptor');
  });
