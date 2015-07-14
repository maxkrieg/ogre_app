'use strict';

(function createNewGearFactoryIIFE() {


  var createNewGearFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;



    // Create new gear item
    factory.createNewGear = function(data) {
      return $http.post(this.appSettings.railsURI + '/myproducts', data, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    // Gear category types array
    factory.gearCategories = [{
      id: "default",
      name: "Select a Category"
    }, {
      id: "Camping",
      name: "Camping",
      type: "Land"
    }, {
      id: "Hiking",
      name: "Hiking",
      type: "Land"
    }, {
      id: "Climbing",
      name: "Climbing",
      type: "Extreme"
    }, {
      id: "Skiing",
      name: "Skiing",
      type: "Winter"
    }, {
      id: "Snowboarding",
      name: "Snowboarding",
      type: "Winter"
    }, {
      id: "Snowshoeing",
      name: "Snowshoeing",
      type: "Winter"
    }, {
      id: "Rafting",
      name: "Rafting",
      type: "Water"
    }, {
      id: "Surfing",
      name: "Surfing",
      type: "Water"
    }, {
      id: "Paddleboarding",
      name: "Paddleboarding",
      type: "Water"
    }, {
      id: "Base Jumping",
      name: "Base Jumping",
      type: "Extreme"
    }, {
      id: "Spalunking",
      name: "Spalunking",
      type: "Extreme"
    }, {
      id: "Fishing",
      name: "Fishing",
      type: "Land"
    }, {
      id: "Wind Surfing",
      name: "Wind Surfing",
      type: "Water"
    }, {
      id: "Kayaking",
      name: "Kayaking",
      type: "Water"
    }, {
      id: "Canoeing",
      name: "Canoeing",
      type: "Water"
    }, {
      id: "Wakeboarding",
      name: "Wakeboarding",
      type: "Water"
    }, {
      id: "Water Skiing",
      name: "Water Skiing",
      type: "Water"
    }, {
      id: "Biking",
      name: "Biking",
      type: "Land"
    }, {
      id: "Other",
      name: "Other",
      type: "Other"
    }];

    return factory;
  };

  createNewGearFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('createNewGearFactory', createNewGearFactory);
})();
