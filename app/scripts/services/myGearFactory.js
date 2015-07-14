'use strict';

(function myGearFactoryIIFE() {

  var myGearFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    // Get all Gear
    factory.getMyGear = function() {
      return $http.get(this.appSettings.railsURI + '/myproducts', {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };
    // Get one gear item
    factory.getMyGearItem = function(gearId) {
      return $http.get(this.appSettings.railsURI + '/myproducts/' + gearId, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };
    // Edit one gear item
    factory.editMyGearItem = function(gearId, data) {
      return $http.put(this.appSettings.railsURI + '/myproducts/' + gearId, data, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };
    // Delete one gear item
    factory.deleteMyGearItem = function(gearId) {
      return $http.delete(this.appSettings.railsURI + '/myproducts/' + gearId, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    return factory; /* Make this factory accessible */
  };

  myGearFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('myGearFactory', myGearFactory);
})();
