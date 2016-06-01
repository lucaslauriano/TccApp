(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name profile.controller:app.profile.ProfileCtrl
     * @description
     * # app.profile.ProfileCtrl
     * Controller of the profile
     */
    angular
        .module('app.profile')
        .controller('app.profile.ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$scope','$stateParams', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk'];

    function ProfileCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
        var viewModel = this;
        //content

        init();

        function init() {

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
       
    }
})();
