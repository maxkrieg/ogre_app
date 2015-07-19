'use strict';

(function registerControllerIIFE() {

  var RegisterController = function(appSettings, registerFactory, $location) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.regForm = {};
    vm.regForm.first_name = "";
    vm.regForm.last_name = "";
    vm.regForm.email = "";
    vm.regForm.password = "";
    vm.confirmPassword = "";
    vm.regForm.city = "";
    vm.regForm.state = "";
    vm.regForm.zip = "";

    vm.createUser = function() {
      registerFactory.createUser({
        user: vm.regForm
      })
        .success(function(data, status) {
          console.log("success creating user");
          $location.path('/login');
        })
        .error(function(data, status, headers, config) {
          console.log("Error creating user");
          alert("error creating new user");
        });
    };

    vm.passwordVerify = function() {
      return vm.regForm.password === vm.confirmPassword;
    };

    vm.stateOptions = registerFactory.stateOptions;


  }; /* close for RegisterController */

  RegisterController.$inject = ['appSettings', 'registerFactory', '$location'];

  angular.module('ogreApp').controller('registerController', RegisterController);

})();
