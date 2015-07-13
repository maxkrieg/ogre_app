'use strict';

(function registerFactoryIIFE() {

  // Create a customers factory
  var registerFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.createUser = function(data) {
      return $http.post(this.appSettings.railsURI + '/register', data, {
        headers: undefined
      });
    };

    factory.stateOptions = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

    return factory;
  };
  registerFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('registerFactory', registerFactory);
})();
