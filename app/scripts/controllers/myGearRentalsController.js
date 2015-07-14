'use strict';

(function myGearRentalsControllerIIFE() {

  var MyGearRentalsController = function($routeParams, myGearFactory, appSettings, createNewGearFactory, myGearRentalFactory, $location) {

    // Getting gear id from route
    var gearId = $routeParams.gear_id;
    var vm = this;
    vm.appSettings = appSettings;
    vm.myGearRentals = {};

    // Getting the gear item to display when router is hit
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

    // To Display the other status option on each rental
    this.otherStatusOption = function(currentStatus) {
      if (currentStatus === "pending") {
        return "approved";
      } else if (currentStatus === "approved") {
        return "pending";
      }
    };

    // PUT request to edit a gear item
    this.editMyGearItem = function() {
      myGearFactory.editMyGearItem(gearId, {
        product: vm.myGearRentals
      })
        .success(function() {
          console.log('success updating item');
        })
        .error(function() {
          console.log('error updating item');
        });
    };

    this.editMyGearRental = function(rentalData, rentalId) {
      console.log('rental data: ' + rentalData);
      console.log('rental id: ' + rentalId);
      myGearRentalFactory.editMyGearRental(gearId, rentalId, rentalData)
        .success(function() {
          console.log('success updating rental on my product');
        })
        .error(function() {
          console.log('error updating rental on my product, but you were so close');
        });
    };

    // Pulling in the sport category options from the createNewGearFactory
    this.categoryOptions = createNewGearFactory.gearCategories;

  };

  // Prevent the minifier from breaking dependency injection.
  MyGearRentalsController.$inject = ['$routeParams', 'myGearFactory', 'appSettings', 'createNewGearFactory', 'myGearRentalFactory', '$location'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myGearRentalsController', MyGearRentalsController);

})();
