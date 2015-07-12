'use strict';

(function loginControllerIIFE() {

  var LoginController = function(appSettings, loginFactory) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.loginForm = {};
    vm.loginForm.email = "";
    vm.loginForm.password = "";


    this.authenticateUser = function() {
      console.log(vm.loginForm);

      loginFactory.authenticateUser({
        credentials: vm.loginForm
      })
        .success(function(data, status) {
          localStorage.setItem('token', data.token);
          localStorage.getItem('token');
          console.log("success");
        })
        .error(function(data, status, headers, config) {
          console.log("Error logging in");
          alert("Error logging in");
        });
    };



  }; /* close for LoginController */



  LoginController.$inject = ['appSettings', 'loginFactory'];

  angular.module('ogreApp').controller('loginController', LoginController);

})();
