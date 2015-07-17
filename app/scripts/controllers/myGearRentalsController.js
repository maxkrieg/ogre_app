'use strict';

(function myGearRentalsControllerIIFE() {

  var MyGearRentalsController = function($routeParams, myGearFactory, appSettings, createNewGearFactory, myGearRentalFactory, $location, $route) {

    // Getting gear id from route
    var gearId = $routeParams.gear_id;
    var vm = this;
    vm.appSettings = appSettings;
    vm.myGearItem = {};
    // vm.showSavedMessage = false;
    vm.showStatusToast = function() {
      Materialize.toast('Status Updated!', 2000);
    };

    vm.showEditGearToast = function() {
      Materialize.toast('Gear Updated!', 2000);
    };

    vm.noRentals = function() {
      console.log(vm.myGearItem.rentals);
      return vm.myGearItem.rentals.length >= 1;
    };


    // GET request when hitting this route, gets gear item for view
    function init() {
      // Search for the gear by id
      myGearFactory.getMyGearItem(gearId)
        .success(function(data) {
          vm.myGearItem = data;
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

    // PUT request to edit a gear item // NEW
    this.editMyGearItem = function() {
      var file = vm.myGearItem.image;
      myGearFactory.editMyGearItem(file, gearId, vm.myGearItem)
        .success(function() {
          console.log('success updating item');
          $route.reload();
        })
        .error(function(data, status, headers, config) {
          console.log("error updating item: " + status);
        });
    };

    // DELETE request to delete a gear item
    this.deleteMyGearItem = function() {
      myGearFactory.deleteMyGearItem(gearId)
        .success(function() {
          console.log('success deleting gear item');
          $location.path('/mygear');
        })
        .error(function() {
          console.log('error deleting gear item');
        });
    };
    // PUT request to edit status of one of rentals for gear item
    this.editMyGearRental = function(rentalData, rentalId) {
      myGearRentalFactory.editMyGearRental(gearId, rentalId, rentalData)
        .success(function() {
          console.log('success updating rental on my product');
          vm.showSavedMessage = true;
        })
        .error(function() {
          console.log('error updating rental on my product, but you were so close');
        });
    };

    // Pulling in category options from createNewGearFactory
    this.categoryOptions = createNewGearFactory.gearCategories;

  };

  // Prevent the minifier from breaking dependency injection.
  MyGearRentalsController.$inject = ['$routeParams', 'myGearFactory', 'appSettings', 'createNewGearFactory', 'myGearRentalFactory', '$location', '$route'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myGearRentalsController', MyGearRentalsController);

})();
