'use strict';

(function mainControllerIIFE() {

  var MainController = function(appSettings, searchFactory) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.searchQuery = "";
    vm.userZip = "";
    vm.gearResults = [];
    vm.friendResults = [];

    // Get current user when they hit main search page
    function init() {
      searchFactory.getUser()
        .success(function(data) {
          console.log('success getting user');
          vm.userZip = data.zip;
        })
        .error(function(data, status, headers, config) {
          console.log("Error getting stuff from the remote api");
          alert("Error getting stuff from the remote api");
        });
    }
    init();

    // Search Gear
    this.searchGear = function() {
      vm.gearResults = [];
      vm.friendResults = [];
      searchFactory.searchGear(vm.searchQuery)
        .success(function(data) {
          console.log('success finding relevant gear');
          vm.gearResults = data;
        })
        .error(function() {
          console.log('error finding relevant gear');
        });
    };

    // Search Friends
    this.searchFriends = function() {
      vm.gearResults = [];
      vm.friendResults = [];
      searchFactory.searchFriends(vm.userZip, vm.searchQuery)
        .success(function(data) {
          console.log('success finding relevant meetups');
          vm.friendResults = data;
        })
        .error(function() {
          console.log('error finding relevant meetups');
        });
    };
  };

  MainController.$inject = ['appSettings', 'searchFactory'];

  angular.module('ogreApp').controller('mainController', MainController);

})();
