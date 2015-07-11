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
