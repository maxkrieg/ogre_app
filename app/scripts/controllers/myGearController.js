'use strict';

(function myGearControllerIIFE() {

  var MyGearController = function(myGearFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.myGear = [];

    function init() {
      myGearFactory.getMyGear()
        .success(function(data) {
          console.log('success getting my gear');
          console.log(data);
          vm.myGear = data;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting my gear from the remote api");
          // alert("Error getting my gear from the remote api");
        });
    }
    init();

  };

  MyGearController.$inject = ['myGearFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myGearController', MyGearController);

})();
