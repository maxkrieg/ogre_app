'use strict';

(function loginControllerIIFE() {

  var LoginController = function(appSettings, loginFactory, $location) {
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
          console.log("success logging in");
          $location.path('/main');
        })
        .error(function(data, status, headers, config) {
          console.log("Error logging in");
          alert("error logging in");
        });
    };



  }; /* close for LoginController */



  LoginController.$inject = ['appSettings', 'loginFactory', '$location'];

  angular.module('ogreApp').controller('loginController', LoginController);

})();
