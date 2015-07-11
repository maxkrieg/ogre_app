'use strict';

(function welcomeControllerIIFE() {

  var WelcomeController = function(appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.title = "Welcome bitches";

    // function init() {
    //   mainFactory.getStuff()
    //     .success(function(cstuff) {
    //       vm.stuff = stuff;
    //     })
    //     .error(function(data, status, headers, config) {
    //       console.log("Error getting stuff from the remote api");
    //       alert("Error getting stuff from the remote api");
    //     });
    // }
    // init();
  };

  WelcomeController.$inject = ['appSettings'];

  angular.module('ogreApp').controller('welcomeController', WelcomeController);

})();
