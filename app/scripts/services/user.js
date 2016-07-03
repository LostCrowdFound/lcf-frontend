'use strict';

(function(){
    function CurrUserService(BASEURL, $http, auth) {
        this.loggedIn = auth.isAuthed;
        this.logout   = auth.deleteToken;

        this.register = function(user, email, pass) {
            return $http.post(BASEURL + '/signup', {
                username: user,
                email: email,
                password: pass
            });
        };

        this.login = function(user, pass) {
            return $http.post(BASEURL + '/login', {
                username: user,
                password: pass
            });
        };

        this.getUser = function() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user : {};
        };
    }

    angular.module('lostcrowdfoundApp').service('currUser', CurrUserService);
})();
