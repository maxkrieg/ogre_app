'use strict';

(function createNewGearFactoryIIFE() {


  var createNewGearFactory = function($http, appSettings, Upload) {
    var factory = {};
    factory.appSettings = appSettings;

    factory.createNewGear = function(file, data) {
      return Upload.upload({
        url: this.appSettings.railsURI + '/myproducts',
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        },
        method: 'POST',
        fields: {
          'product[title]': data.title,
          'product[description]': data.description,
          'product[daily_cost]': data.daily_cost,
          'product[category]': data.category
        },
        file: file,
        fileFormDataName: 'product[image]'
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

  createNewGearFactory.$inject = ['$http', 'appSettings', 'Upload'];

  angular.module('ogreApp').factory('createNewGearFactory', createNewGearFactory);
})();
