'use strict';

(function myGearFactoryIIFE() {

  // Create a customers factory
  var myGearFactory = function($http) {
    var factory = {};

    factory.getMyGear = function() {
      // allow access to the list of customers
      return $http.get('http://localhost:3000/customers');
    };

    factory.getCustomer = function(customerId) {
      return $http.get('http://localhost:3000/customers/' + customerId);
    };
    return factory;
  };

  myGearFactory.$inject = ['$http'];

  angular.module('ogreApp').factory('myGearFactory', myGearFactory);
})();
