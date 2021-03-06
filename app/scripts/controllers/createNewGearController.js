'use strict';

(function createNewGearControllerIIFE() {

  var CreateNewGearController = function(createNewGearFactory, appSettings, $location, Upload) {

    var vm = this;
    vm.appSettings = appSettings;
    vm.newGearItem = {};
    vm.newGearItem.title = "";
    vm.newGearItem.description = "";
    vm.newGearItem.daily_cost = "";
    vm.newGearItem.category = "default";
    vm.imageMessage = function() {
      return !vm.newGearItem.image;
    };

    vm.createGearToast = function() {
      Materialize.toast('Gear being created, you will be redirected back to your gear page.', 3000);
    };

    vm.createNewGear = function() {
      var file = vm.newGearItem.image;
      createNewGearFactory.createNewGear(file, vm.newGearItem)
        .success(function() {
          console.log('successfully create new gear item!');
          $location.path('/mygear');
        })
        .error(function(data, status, headers, config) {
          console.log("error creating new gear item: " + status);
        });
    };

    vm.categoryOptions = createNewGearFactory.gearCategories;
  };

  CreateNewGearController.$inject = ['createNewGearFactory', 'appSettings', '$location', 'Upload'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('createNewGearController', CreateNewGearController);

})();
