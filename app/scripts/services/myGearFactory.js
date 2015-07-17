'use strict';

(function myGearFactoryIIFE() {

  var myGearFactory = function($http, appSettings, Upload) {
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

    // Edit one gear item // OLD
    // factory.editMyGearItem = function(gearId, data) {
    //   return $http.put(this.appSettings.railsURI + '/myproducts/' + gearId, data, {
    //     headers: {
    //       Authorization: 'Token token=' + localStorage.getItem('token')
    //     }
    //   });
    // };

    // Edit one gear item // NEW
    factory.editMyGearItem = function(file, gearId, data) {
      return Upload.upload({
        url: this.appSettings.railsURI + '/myproducts/' + gearId,
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        },
        method: 'PUT',
        fields: {
          'product[title]': data.title,
          'product[description]': data.description,
          'product[daily_cost]': data.daily_cost,
          'product[category]': data.category
        },
        file: file,
        fileFormDataName: 'product[image]'
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

  myGearFactory.$inject = ['$http', 'appSettings', 'Upload'];

  angular.module('ogreApp').factory('myGearFactory', myGearFactory);
})();
