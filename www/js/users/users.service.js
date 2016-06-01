(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.users.factory:NameFactory
     * @description
     * # NameFactory
     * Factory of the app.users
     */
    angular
        .module('app.users')
        .factory('app.users.UsersService', UsersService);

    UsersService.$inject = [
        '$firebaseArray',
        '$firebaseObject'
    ];

    function UsersService($firebaseArray, $firebaseObject) {
        
    	var ref = new Firebase('https://tcc-ionic-app.firebaseio.com/data/users');
        
        return {
            getList: function() {
                return $firebaseArray(ref);
            },
            get: function(personId) {
                return $firebaseObject(ref.child('data/users').child(userId));
            }
        }
    }
})();
