'use strict';

(function myRentalsControllerIIFE() {

  var MyRentalsController = function(myRentalsFactory, appSettings, $location, $route) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.myRentals = [];
    vm.showDeleteToast = function() {
      Materialize.toast('Rental Deleted', 2000);
    };
    vm.noRentals = function() {
      return vm.myRentals.length >= 1;
    };

    function init() {
      myRentalsFactory.getMyRentals()
        .success(function(data) {
          console.log('success getting my rentals');
          console.log(data);
          vm.myRentals = data;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting my gear from the remote api");
        });
    }
    init();
    vm.rentalStatusApproved = function(status) {
      return status === "approved";
    };

    // DELETE rental
    vm.deleteMyRental = function(rentalId, index) {
      myRentalsFactory.deleteMyRental(rentalId)
        .success(function() {
          console.log('success deleting rental');
          vm.myRentals.splice(index, 1);
          vm.showDeleteToast();
        })
        .error(function() {
          console.log('error deleting gear item');
        });
    };
  };

  MyRentalsController.$inject = ['myRentalsFactory', 'appSettings', '$location', '$route'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myRentalsController', MyRentalsController);

})();
