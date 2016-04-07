(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name login.controller:LoginCtrl
     * @description
     * # LoginCtrl
     * Controller of the login
     */
    angular
        .module('app.login')
        .controller('app.login.LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$timeout', '$stateParams', 'ionicMaterialInk'];

    function LoginCtrl($scope, $timeout, $stateParams, ionicMaterialInk) {
        var viewModel = this;

        var PublicProperties = {};

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            
            $scope.$parent.clearFabs();

            $timeout(function() {
                $scope.$parent.hideHeader();
            }, 0);
            ionicMaterialInk.displayEffect();

        }



    }
})();
