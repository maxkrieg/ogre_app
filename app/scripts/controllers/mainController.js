'use strict';

(function mainControllerIIFE() {

  var MainController = function(appSettings, searchFactory, createNewGearFactory) {
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
    vm.searchGear = function() {
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
    vm.searchFriends = function() {
      vm.gearResults = [];
      vm.friendResults = [];
      searchFactory.searchFriends(vm.userZip, vm.searchQuery)
        .success(function(data) {
          console.log('success finding relevant meetups');
          data.forEach(function(group) {
            if (!group.group_photo) {
              group.group_photo = {};
              group.group_photo.photo_link = 'images/ogre1.png';
            }
          });
          vm.friendResults = data;
        })
        .error(function() {
          console.log('error finding relevant meetups');
        });
    };
  };

  MainController.$inject = ['appSettings', 'searchFactory', 'createNewGearFactory'];

  angular.module('ogreApp').controller('mainController', MainController);

})();
