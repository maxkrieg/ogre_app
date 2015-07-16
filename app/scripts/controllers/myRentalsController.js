'use strict';

(function myRentalsControllerIIFE() {

  var MyRentalsController = function(myRentalsFactory, appSettings, $location) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.myRentals = [];
    vm.showDeleteToast = function() {
      Materialize.toast('Rental Deleted', 2000);
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
          // alert("Error getting my gear from the remote api");
        });
    }
    init();
    this.rentalStatusApproved = function(status) {
      return status === "approved";
    };

    // DELETE rental
    this.deleteMyRental = function(rentalId) {
      myRentalsFactory.deleteMyRental(rentalId)
        .success(function() {
          console.log('success deleting rental');
          $location.path('/myrentals');
        })
        .error(function() {
          console.log('error deleting gear item');
        });
    };
  };

  MyRentalsController.$inject = ['myRentalsFactory', 'appSettings', '$location'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myRentalsController', MyRentalsController);

})();
