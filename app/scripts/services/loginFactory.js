'use strict';

(function loginFactoryIIFE() {

  // Create a customers factory
  var loginFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.authenticateUser = function(data) {
      return $http.post(this.appSettings.railsURI + '/login', data, {
        processData: false
      });
    };

    return factory;
  };
  loginFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('loginFactory', loginFactory);
})();
