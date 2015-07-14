'use strict';

(function myGearRentalFactoryIIFE() {

  var myGearRentalFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    // Edit one rental on the gear item
    factory.editMyGearRental = function(gearId, rentalId, data) {
      return $http.put(this.appSettings.railsURI + '/myproducts/' + gearId + '/myproductrentals/' + rentalId, data, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    return factory;
  };

  myGearRentalFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('myGearRentalFactory', myGearRentalFactory);
})();
