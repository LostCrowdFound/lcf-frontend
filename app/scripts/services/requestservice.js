'use strict';

/**
 * @ngdoc service
 * @name lostcrowdfoundApp.requestService
 * @description
 * # requestService
 * Service in the lostcrowdfoundApp.
 */
 (function(){
    function requestService(BASEURL, $http) {
      this.addRequest = function(description, userId, itemId) {
        return $http.post(BASEURL + '/api/requests', {
          date: new Date(),
          text: description,
          userId: userId,
          itemId: itemId,
          status: 'open',
        });
      };

      this.getRequest = function(requestId) {
        return $http.get(BASEURL + '/api/requests/' + requestId, {
        });
      };

      this.resolveRequest = function(requestId, userId) {
        return $http.post(BASEURL + '/api/requests/resolve/' + requestId, {
          userId: userId,
        });
      }

      this.dismissRequest = function(requestId, userId) {
        return $http.post(BASEURL + '/api/requests/dismiss/' + requestId, {
          userId: userId,
        });
      }
    }

    angular.module('lostcrowdfoundApp').service('requestService', requestService);
})();
