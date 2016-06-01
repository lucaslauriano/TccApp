(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name profile.controller:ProfileCtrl
     * @description
     * # ProfileCtrl
     * Controller of the profile
     */
    angular
        .module('app.profile')
        .controller('app.profile.ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = [
        '$scope',
        '$timeout', 
        '$stateParams', 
        'ionicMaterialInk', 
        'ionicMaterialMotion'
    ];

    function ProfileCtrl($scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion) {
        var viewModel = this;

        var PublicProperties = {};

        _.extend(viewModel, PublicProperties);

        init();

        function init() {

        }

        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

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

        // Set Ink
        ionicMaterialInk.displayEffect();
    }
})();
