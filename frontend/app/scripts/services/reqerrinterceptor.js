'use strict';

/**
 * @ngdoc service
 * @name lostcrowdfoundApp.reqErrInterceptor
 * @description
 * # reqErrInterceptor
 * Factory in the lostcrowdfoundApp.
 */
(function () {
    function reqErrInterceptor(BASEURL, $injector, $q) {
        function responseError(rej) {
            if ([-1, 404].indexOf(rej.status) !== -1) {
                showAlert({title: 'Connection Error', msg: 'Could not reach the server. Try again later'});
            } else {
                showAlert({title: 'Unknown Error', msg: 'Unknown error. Try again later'});
            }

            return $q.reject(rej);
        }

        function showAlert(opt) {
            //inject manually to resolve circular dependency error
            var $mdDialog = $injector.get('$mdDialog');
            var alert = $mdDialog.alert({
                title: opt.title,
                textContent: opt.msg,
                ok: 'Close'
            });

            $mdDialog.show(alert);
        }

        return {
            responseError: responseError
        };
    }

    angular.module('lostcrowdfoundApp').factory("reqErrInterceptor", reqErrInterceptor);
})();
