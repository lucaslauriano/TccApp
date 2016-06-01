(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.login.SignupCtrl:SignupCtrl
     * @description
     * # SignupCtrl
     * Controller of the app.login.SignupCtrl
     */

    angular
        .module('app.login')
        .controller('app.login.SignupCtrl', SignupCtrl);

    SignupCtrl.$inject = [
        '$scope',
        '$timeout',
        'ionicMaterialInk'
    ];

    function SignupCtrl($scope, $timeout, ionicMaterialInk) {
        //svar viewModel = this;

        init();

        function init() {

        }

        $scope.$parent.clearFabs();

        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);

        ionicMaterialInk.displayEffect();
        $scope.data = {};

        $scope.go = ''; 
        
        $scope.loginEmail = function() {
            Parse.User.logIn($scope.data.username, $scope.data.password, {
                success: function(user) {
                    $scope.go = 'app.profile'
                    console.log(user);
                    alert("success!");
                },
                error: function(user, error) {
                    
                    alert("error!");
                }
            });
        };


    }


})();
