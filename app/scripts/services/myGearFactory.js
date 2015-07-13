'use strict';

(function myGearFactoryIIFE() {

  // Create a customers factory
  var myGearFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.getMyGear = function() {
      // allow access to the list of customers
      return $http.get(this.appSettings.railsURI + '/myproducts', {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    factory.getProduct = function(productId) {
      return $http.get(this.appSettings.railsURI + '/myproducts/' + productId);
    };
    return factory;
  };

  myGearFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('myGearFactory', myGearFactory);
})();
