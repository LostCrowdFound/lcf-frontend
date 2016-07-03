'use strict';

/**
 * @ngdoc service
 * @name lostcrowdfoundApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the lostcrowdfoundApp.
 */
(function(){

    function authInterceptor(BASEURL, auth) {

        function request(cfg){
            // automatically attach Authorization header
            if(cfg.url.indexOf(BASEURL) === 0 && auth.isAuthed()) {
                var token = auth.getToken();
                cfg.headers.Authorization = 'JWT ' + token;
            }

            return cfg;

        }

        function response(resp){

            // If a token was sent back, save it
            if(!!resp && resp.config.url.indexOf(BASEURL) === 0 && resp.data.token) {
                auth.saveToken(resp.data.token);
            }

            return resp;

        }

        return {
            request: request,
            response: response
        };
    }

    angular.module('lostcrowdfoundApp')
        .factory('authInterceptor', authInterceptor);

})();
