'use strict';

(function createNewGearFactoryIIFE() {


  var createNewGearFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    // Gear category types array
    factory.gearCategories = [];

    // Create new gear item
    factory.createNewGear = function(data) {
      return $http.post(this.appSettings.railsURI + '/myproducts', data, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    return factory;
  };

  createNewGearFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('createNewGearFactory', createNewGearFactory);
})();
