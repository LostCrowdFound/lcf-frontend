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
        console.log(BASEURL + '/api/requests/' + requestId);
        return $http.get(BASEURL + '/api/requests/' + requestId, {
        });
      };

      this.resolveRequest = function(requestId, userId) {
        console.log('Resolving request in service');
        console.log('RequestId: ' + requestId);
        console.log('userid: ' + userId);

        return $http.post(BASEURL + '/api/requests/resolve/' + requestId, {
          userId: userId,
        });
      }
    }

    angular.module('lostcrowdfoundApp').service('requestService', requestService);
})();
