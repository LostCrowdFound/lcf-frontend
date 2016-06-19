'use strict';

/**
 * @ngdoc service
 * @name lostcrowdfoundApp.reqErrInterceptor
 * @description
 * # reqErrInterceptor
 * Factory in the lostcrowdfoundApp.
 */
(function () {
    function reqErrInterceptor(BASEURL, $injector, $q, ngToast) {
        function responseError(rej) {
            if ([-1, 404].indexOf(rej.status) !== -1) {
                ngToast.create({
                    className: 'danger',
                    dismissOnClick: true,
                    content: 'Could not reach the server. Try again later.',
                });
            }

            return $q.reject(rej);
        }

        return {
            responseError: responseError
        };
    }

    angular.module('lostcrowdfoundApp').factory('reqErrInterceptor', reqErrInterceptor);
})();
