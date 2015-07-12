'use strict';

(function loginControllerIIFE() {

  var LoginController = function(appSettings, loginFactory) {
    this.appSettings = appSettings;

    this.loginForm.getEmail = function(emailInput) {
      if (emailInput.$valid) {
        return emailInput;
      } else {
        alert('email invalid');
      }
    };

    this.loginForm.getPassword = function(passwordInput) {
      if (passwordInput.$valid) {
        return passwordInput;
      } else {
        alert('password invalid');
      }
    };


    this.authenticateUser = function() {
      loginFactory.authenticateUser()
        .success(function(data, status) {
          localStorage.setItem('token', data.token);
          localStorage.getItem('token');
        })
        .error(function(data, status, headers, config) {
          console.log("Error logging in");
          alert("Error logging in");
        });
    };

  };



  LoginController.$inject = ['appSettings', 'loginFactory'];

  angular.module('ogreApp').controller('loginController', LoginController);

})();
