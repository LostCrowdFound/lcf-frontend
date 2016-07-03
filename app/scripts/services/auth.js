'use strict';

(function() {
    function authService($window) {
        var self = this;
        this.token = null;

        this.saveToken = function(t) {
            $window.localStorage.jwtToken = t;
        };

        this.getToken = function() {
            return $window.localStorage.jwtToken;
        };

        this.deleteToken = function() {
            $window.localStorage.removeItem('jwtToken');
        };

        this.parseJwt= function(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        };

        this.isAuthed = function() {
            var token = self.getToken();
            return !!token;
        };
    }

    angular.module('lostcrowdfoundApp')
        .service('auth', authService);

})();
