'use strict';

(function viewGearControllerIIFE() {

  var ViewGearController = function($routeParams, myGearFactory, appSettings, $location) {

    // Getting gear id from route
    var gearId = $routeParams.gear_id;
    var vm = this;
    vm.appSettings = appSettings;
    vm.newRental = {};
    vm.gearItem = {};

    // GET request when hitting this route, gets gear item for view
    function init() {
      // Search for the gear by id
      myGearFactory.getMyGearItem(gearId)
        .success(function(data) {
          vm.gearItem = data;
          console.log('success getting this gear and its rentals from remote api');
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting a this gear and its rentals from the remote api");
        });
    }
    init();

  };

  // Prevent the minifier from breaking dependency injection.
  ViewGearController.$inject = ['$routeParams', 'myGearFactory', 'appSettings', 'createNewGearFactory', '$location'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('viewGearController', ViewGearController);

})();
