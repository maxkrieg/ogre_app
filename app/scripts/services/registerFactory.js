'use strict';

(function registerFactoryIIFE() {

  // Create a customers factory
  var registerFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.authenticateUser = function(data) {
      return $http.post(this.appSettings.railsURI + '/login', data, {
        headers: undefined,
        processData: false
      });
    };

    return factory;
  };
  loginFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('loginFactory', loginFactory);
})();
