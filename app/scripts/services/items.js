'use strict';

/**
 * @ngdoc service
 * @name lostcrowdfoundApp.searchItems
 * @description
 * # searchItems
 * Service in the lostcrowdfoundApp.
 */
 (function(){
    function itemService(BASEURL, $http) {
        this.searchItems = function(type, brand, name, lat, lon, radius, date) {
            return $http.get(BASEURL + '/api/items', {
                params: {
                    type: type,
                    brand: brand,
                    name: name,
                    lat: lat,
                    lon: lon,
                    radius: radius,
                    date: date
                }
            });
        };

        this.addItem = function(type, brand, name, userId, lat, lon, date) {
            $http.post(BASEURL + '/api/items', {
                type: type,
                brand: brand,
                name: name,
                userId: userId,
                lat: lat,
                lon: lon,
                date: date
            });
        };
    }

    angular.module('lostcrowdfoundApp').service('itemsService', itemService);
})();
