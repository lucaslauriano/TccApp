(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.schedulles.SchedullesCtrl:SchedullesCtrl
     * @description
     * # SchedullesCtrl
     * Controller of the app.schedulles.SchedullesCtrl
     */

    angular
        .module('app.schedulles')
        .controller('app.schedulles.SchedullesCtrl', SchedullesCtrl);

    SchedullesCtrl.$inject = [
        '$scope',
        '$timeout',
        'ionicMaterialInk',
        'ionicMaterialMotion'
    ];

    function SchedullesCtrl($scope, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        var viewModel = this;

        init();

        function init() {

        }
        
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab(false);

        // Activate ink for controller
        ionicMaterialInk.displayEffect();

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    }
})();
