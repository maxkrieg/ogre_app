'use strict';
/* # ogreApp
 
 * Main module of the application.
 */

(function ogreAppIIFE() {
  var app = angular.module('ogreApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize', 'ngTouch']);

  app.config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.defaults.headers.common.Authorization = 'Token token=' + localStorage.getItem('token');
    }
  ]);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeController',
        controllerAs: 'welcomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerController',
        controllerAs: 'registerCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .when('/mygear', {
        templateUrl: 'views/mygear.html',
        controller: 'myGearController',
        controllerAs: 'myGearCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
