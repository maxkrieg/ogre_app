'use strict';

(function loginControllerIIFE() {

  var LoginController = function(appSettings, loginFactory) {
    this.appSettings = appSettings;
    this.loginForm = {};
    this.loginForm.email = "";
    this.loginForm.password = "";


    // this.authenticateUser = function() {
    //   loginFactory.authenticateUser()
    //     .success(function(data, status) {
    //       localStorage.setItem('token', data.token);
    //       localStorage.getItem('token');
    //     })
    //     .error(function(data, status, headers, config) {
    //       console.log("Error logging in");
    //       alert("Error logging in");
    //     });
    // };

  };



  LoginController.$inject = ['appSettings', 'loginFactory'];

  angular.module('ogreApp').controller('loginController', LoginController);

})();
