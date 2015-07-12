'use strict';

(function loginFactoryIIFE() {

  // Create a customers factory
  var loginFactory = function($http, appSettings) {
    var factory = {};
    // factory.appSettings = appSettings;

    // factory.authenticateUser = function() {
    //   return $http.post(this.appSettings.railsURI + '/login', {
    //     credentials: {
    //       email: $('#email').val(),
    //       password: $('#password').val()
    //     }
    //   }, {
    //     headers: undefined,
    //     processData: false
    //   });
    // };

    return factory;
  };
  loginFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('loginFactory', loginFactory);
})();
