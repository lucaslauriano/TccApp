(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.schedulles.ProsperaCtrl:ProsperaCtrl
     * @description
     * # ProsperaCtrl
     * Controller of the app.schedulles.ProsperaCtrl
     */

    angular
        .module('app.schedulles')
        .controller('app.schedulles.ProsperaCtrl', ProsperaCtrl);

    ProsperaCtrl.$inject = [
        '$injector',
        '$scope',
        '$timeout',
        'ionicMaterialInk',
        'ionicMaterialMotion'
    ];

    function ProsperaCtrl($injector, $scope, $timeout, ionicMaterialInk, ionicMaterialMotion) {
         var ProsperaService = $injector.get('app.schedulles.ProsperaService');

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

         $scope.domingo = ProsperaService.getDomingo();
/*         $scope.sabado = PinheiroService.getSabado();
         $scope.semana = PinheiroService.getSemana();
        */

    }
})();
