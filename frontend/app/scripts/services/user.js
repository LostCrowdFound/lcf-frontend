'use strict';

(function(){

    angular.module('lostcrowdfoundApp')
        .service('currUser', currUserService);

    function currUserService(BASEURL, $http, auth) {

        this.register = register;
        this.login = login;
        this.loggedIn = auth.isAuthed;
        this.logout = auth.deleteToken;
        this.getUser = getUser;

        $scope.loggedIn = loggedIn;


        ////////////////

        function register(user, email, pass) {
            return $http.post(BASEURL + '/signup', {
                username: user,
                email: email,
                password: pass
            });
        }

        function login(user, pass) {
            return $http.post(BASEURL + '/login', {
                username: user,
                password: pass
            });
        }

        function getUser() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user : {};
        }
    }

})();
