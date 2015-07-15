'use strict';

(function allGearFactoryIIFE() {

  var allGearFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    // Get all Gear
    factory.getAllGear = function() {
      return $http.get(this.appSettings.railsURI + '/allproducts', {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    // Get one gear item
    factory.getGearItem = function(gearId) {
      return $http.get(this.appSettings.railsURI + '/allproducts/' + gearId, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    return factory; /* Make this factory accessible */
  };

  allGearFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('allGearFactory', allGearFactory);
})();
