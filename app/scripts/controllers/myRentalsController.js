'use strict';

(function myRentalsControllerIIFE() {

  var MyRentalsController = function(myRentalsFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.myRentals = [];

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
      return status == "approved";
    };
  };

  MyRentalsController.$inject = ['myRentalsFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('myRentalsController', MyRentalsController);

})();
