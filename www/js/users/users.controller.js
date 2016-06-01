(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.users:UsersCtrl
     * @description
     * # UsersCtrl
     * Modal Controller de app.users
     */

    angular
        .module('app.users')
        .controller('app.users.UsersCtrl', UsersCtrl);

    UsersCtrl.$inject = [
        '$injector',
        '$scope',
        '$rootScope',
        '$timeout',
        'ionicMaterialInk',
        'ionicMaterialMotion'
    ];

    function UsersCtrl($injector, $scope, $rootScope, $timeout, ionicMaterialInk, ionicMaterialMotion) {

        var UsersService = $injector.get('app.users.UsersService');

        init();

        function init() {
            // Set Ink
            ionicMaterialInk.displayEffect();

            // Set Motion
            $timeout(function() {
                ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });
            }, 300);

            $timeout(function() {
                ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);
        $scope.users = UsersService.getList();
        }



    }
})();
