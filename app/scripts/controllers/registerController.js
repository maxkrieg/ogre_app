'use strict';

(function registerControllerIIFE() {

  var RegisterController = function(appSettings, registerFactory) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.registerForm = {};
    vm.registerForm.email = "";
    vm.registerForm.password = "";


    this.createUser = function() {
      console.log(vm.registerForm);

      registerFactory.createUser({
        credentials: vm.loginForm
      })
        .success(function(data, status) {
          console.log("success");
        })
        .error(function(data, status, headers, config) {
          console.log("Error logging in");
          alert("Error logging in");
        });
    };



  }; /* close for LoginController */



  RegisterController.$inject = ['appSettings', 'registerFactory'];

  angular.module('ogreApp').controller('registerController', RegisterController);

})();
