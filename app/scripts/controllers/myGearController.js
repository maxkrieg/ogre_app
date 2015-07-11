'use strict';

(function myGearControllerIIFE() {

  var MyGearController = function(myGearFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    // vm.sortBy = "name";
    // vm.reverse = false;
    // All the gear
    vm.myGear = [];

    vm.title = "This title is coming from the controller!";

    // Init the gear from the myGearFactory
    // Get all the customers from the backend
    function init() {
      myGearFactory.getMyGear()
        .success(function(myGear) {
          vm.myGear = myGear;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting my gear from the remote api");
          // alert("Error getting my gear from the remote api");
        });
    }
    init();


    vm.doSort = function(propName) {
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

  };

  MyGearController.$inject = ['myGearFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myGearController', MyGearController);

})();
