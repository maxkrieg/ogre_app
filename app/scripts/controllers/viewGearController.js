'use strict';

(function viewGearControllerIIFE() {

  var ViewGearController = function($routeParams, allGearFactory, appSettings, $location) {

    // Getting gear id from route
    var gearId = $routeParams.gear_id;
    var vm = this;
    vm.appSettings = appSettings;

    vm.newRental = {};
    vm.gearItem = {};


    // GET request when hitting this route, gets gear item for view
    function init() {
      // Search for the gear by id
      allGearFactory.getGearItem(gearId)
        .success(function(data) {
          vm.gearItem = data;
          console.log('success getting this gear and its rentals from remote api');
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting a this gear and its rentals from the remote api");
        });
    }
    init();

    vm.totalCost = function(startDate, endDate) {
      var start = Date.parse(startDate);
      var end = Date.parse(endDate);
      var numDays = Math.floor(end - start) / 86400000;
      var cost = numDays * vm.gearItem.daily_cost;
      vm.newRental.total_cost = cost;
      return cost;
    };



    // Math.floor(( Date.parse(str2) - Date.parse(str1) ) / 86400000);
    var startDateParsed = function() {
      // return Date.parse(vm.newRental.start_date);
      return new Date(vm.newRental.start_date).toLocaleDateString();
    };

    var endDateParsed = function() {
      // return Date.parse(vm.newRental.start_date);
      return new Date(vm.newRental.end_date).toLocaleDateString();
    };

  };

  // Prevent the minifier from breaking dependency injection.
  ViewGearController.$inject = ['$routeParams', 'allGearFactory', 'appSettings', 'createNewGearFactory', '$location'];

  // The Controller is part of the module.
  angular.module('ogreApp').controller('viewGearController', ViewGearController);

})();
