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
            comments: [{
              date: new Date(),
              status: 'open',
              text: description,
              userId: userId,
            }],
            itemId: itemId,
          });
      };

      this.getRequest = function(requestId) {
          return $http.get(BASEURL + '/api/requests?_id=' + requestId, {
              params: {
                _id: requestId,
              }
          });
      };
    }

    angular.module('lostcrowdfoundApp').service('requestService', requestService);
})();
