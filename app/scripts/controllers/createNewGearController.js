'use strict';

(function createNewGearControllerIIFE() {

  var CreateNewGearController = function(createNewGearFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.newGearItem = {};
    vm.newGearItem.title = "";
    vm.newGearItem.description = "";
    vm.newGearItem.daily_cost = "";
    vm.newGearItem.image = "";
    vm.newGearItem.category = "default";

    this.createNewGear = function() {
      createNewGearFactory.createNewGear(vm.newGearItem)
        .success(function(data) {
          console.log('success adding new gear');
          console.log(data);
        })
        .error(function(data, status, headers, config) {
          console.log("Error creating new gear item");
        });
    };

    this.categoryOptions = createNewGearFactory.gearCategories;

  };

  CreateNewGearController.$inject = ['createNewGearFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('createNewGearController', CreateNewGearController);

})();
