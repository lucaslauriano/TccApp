(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.login.LoginCtrl:LoginCtrl
     * @description
     * # LoginCtrl
     * Controller of the app.login.LoginCtrl
     */

    angular
        .module('app.login')
        .controller('app.login.LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = [
        '$scope',
        '$timeout',
        'ionicMaterialInk'
    ];

    function LoginCtrl($scope, $timeout, ionicMaterialInk) {
        //svar viewModel = this;

        init();

        function init() {

        }

        $scope.$parent.clearFabs();

        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);

        ionicMaterialInk.displayEffect();

        $scope.users = {};



        $scope.loginEmail = function() {

            var ref = new Firebase("https://tcc-ionic-app.firebaseio.com/");

            ref.authWithPassword({
                email: $scope.users.email,
                password: $scope.users.password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });

        };

    }


})();
