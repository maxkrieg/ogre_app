'use strict';
/* # ogreApp
 
 * Main module of the application.
 */

(function ogreAppIIFE() {
  var app = angular.module('ogreApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize', 'ngTouch']);

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
        controllerAs: 'regCtrl'
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
      .when('/mygearrentals/:gear_id', {
        templateUrl: 'views/mygearrentals.html',
        controller: 'myGearRentalsController',
        controllerAs: 'myGearRentalsCtrl'
      })
      .when('/createnewgear', {
        templateUrl: 'views/createnewgear.html',
        controller: 'createNewGearController',
        controllerAs: 'createNewGearCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
