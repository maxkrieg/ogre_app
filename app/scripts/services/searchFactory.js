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
      return $http.get(this.appSettings.meetupURI + '&zip=' + userZip + '&text=' + searchParams, {
        headers: {
          Authorization: 'Token token=' + localStorage.getItem('token')
        }
      });
    };

    return factory; /* Make this factory accessible */
  };

  searchFactory.$inject = ['$http', 'appSettings'];

  angular.module('ogreApp').factory('searchFactory', searchFactory);
})();
