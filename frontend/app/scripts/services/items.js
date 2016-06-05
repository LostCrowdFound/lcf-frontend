'use strict';

/**
 * @ngdoc service
 * @name lostcrowdfoundApp.searchItems
 * @description
 * # searchItems
 * Service in the lostcrowdfoundApp.
 */
 (function(){

  angular.module('lostcrowdfoundApp')
    .service('itemsService', itemService);// function (BASEURL, $http) {

      function itemService(BASEURL, $http) {

        this.searchItems = searchItems;
        this.addItem = addItem;

        function searchItems (type, brand, name, lat, lon, radius) {
        	return $http.get(BASEURL + '/api/items', {
            	params: {
                    type: type,
                    brand: brand,
                    name: name,
                    lat: lat,
                    lon: lon,
                    radius: radius
        		}
        	});
        }

        function addItem (type, brand, name, email, lat,lon) {
          $http.post(BASEURL + '/api/items', {
            type: type,
            brand: brand,
            name: name,
            email: email,
            lat: lat,
            lon: lon
          });
    	  }
      }    
})();