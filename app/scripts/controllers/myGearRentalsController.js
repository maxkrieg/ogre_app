'use strict';

(function myGearRentalsControllerIIFE() {

  var MyGearRentalsController = function($routeParams, myGearFactory, appSettings) {

    var gearId = $routeParams.gear_id;
    var vm = this;
    vm.appSettings = appSettings;
    vm.myGearRentals = [];

    function init() {
      // Search for the gear by id
      myGearFactory.getMyGearItem(gearId)
        .success(function(data) {
          vm.myGearRentals = data;
          console.log('success getting this gears rentals from remote api');
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting a this gear's rentals from the remote api");
        });
    }
    init();
  };

  // Prevent the minifier from breaking dependency injection.
  MyGearRentalsController.$inject = ['$routeParams', 'myGearFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myGearRentalsController', MyGearRentalsController);

})();
