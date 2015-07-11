'use strict';

(function mainControllerIIFE() {

  var MainController = function(appSettings) {
    var vm = this;
    vm.appSettings = appSettings;

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

  MainController.$inject = ['appSettings'];

  angular.module('ogreApp').controller('mainController', MainController);

})();
