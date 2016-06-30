'use strict';

(function(){
    function currUserService(BASEURL, $http, auth, $window) {
        this.loggedIn = auth.isAuthed;
        this.logout   = function() {
          this.deleteUserId();
          auth.deleteToken();
        }

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
            }).success(function (data) {
              //$window.localStorage.userId = data.userId;
            });
        };

        this.userId = function() {
            return $window.localStorage.userId;
        };

        this.deleteUserId = function() {
            $window.localStorage.removeItem('userId');
        };

        this.getUser = function() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user : {};
        };
    }

    angular.module('lostcrowdfoundApp').service('currUser', currUserService);
})();
