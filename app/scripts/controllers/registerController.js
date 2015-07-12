'use strict';

(function registerControllerIIFE() {

  var RegisterController = function(appSettings, registerFactory) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.registerForm = {};
    vm.registerForm.first_name = "";
    vm.registerForm.last_name = "";
    vm.registerForm.email = "";
    vm.registerForm.password = "";
    vm.registerForm.city = "";
    vm.registerForm.state = "";
    vm.registerForm.zip = "";


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



  }; /* close for RegisterController */

  RegisterController.$inject = ['appSettings', 'registerFactory'];

  angular.module('ogreApp').controller('registerController', RegisterController);

})();
