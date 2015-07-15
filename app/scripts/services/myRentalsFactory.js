'use strict';

(function myRentalsFactoryIIFE() {

  var myRentalsFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    // Get all Rentals
    factory.getMyRentals = function() {
      return $http.get(this.appSettings.railsURI + '/myrentals', {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };
    // Get one rental
    factory.getMyRental = function(rentalId) {
      return $http.get(this.appSettings.railsURI + '/myrentals/' + rentalId, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };
    // Edit one rental
    factory.editMyRental = function(rentalId, data) {
      return $http.put(this.appSettings.railsURI + '/myrentals/' + rentalId, data, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };
    // Delete one rental
    factory.deleteMyRental = function(rentalId) {
      return $http.delete(this.appSettings.railsURI + '/myrentals/' + rentalId, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    // Create one rental
    factory.createRental = function(gearId, data) {
      return $http.post(this.appSettings.railsURI + '/allproducts/' + gearId + '/allproductrentals', data, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    return factory; /* Make this factory accessible */
  };

  myRentalsFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('myRentalsFactory', myRentalsFactory);
})();
