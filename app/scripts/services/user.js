'use strict';

(function(){
    function currUserService(BASEURL, $http, auth) {
        this.loggedIn = auth.isAuthed;
        this.logout   = auth.deleteToken;
        this.userId = '';

        this.register = function(user, email, pass) {
            return $http.post(BASEURL + '/signup', {
                username: user,
                email: email,
                password: pass
            });
        };

        this.login = function(user, pass) {
            //var loginAnswer =
            return $http.post(BASEURL + '/login', {
                username: user,
                password: pass
            });
            //console.log('loginAnswer');
            //console.log(loginAnswer);
            //this.userId = loginAnswer.data.userId;
            //return loginAnswer;
        };

        this.getUser = function() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user : {};
        };
    }

    angular.module('lostcrowdfoundApp').service('currUser', currUserService);
})();
