'use strict';

(function searchFactoryIIFE() {

  var searchFactory = function($http, appSettings) {
    var factory = {};
    factory.appSettings = appSettings;

    // Get User
    factory.getUser = function() {
      return $http.get(this.appSettings.railsURI + '/getuser', {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    // Search Gear
    factory.searchGear = function(searchParams) {
      return $http.get(this.appSettings.railsURI + '/searchproducts?title=' + searchParams, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    // Search Meetup
    factory.searchFriends = function(userZip, searchParams) {
      return $http.get(this.appSettings.railsURI + '/searchmeetup/?radius=25&page=25&zip=' + userZip + '&text=' + searchParams);
    };

    return factory;
  };

  searchFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('searchFactory', searchFactory);
})();
