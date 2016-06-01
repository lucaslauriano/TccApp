(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.schedulles.PinheiroCtrl:PinheiroCtrl
     * @description
     * # PinheiroCtrl
     * Controller of the app.schedulles.PinheiroCtrl
     */

    angular
        .module('app.schedulles')
        .controller('app.schedulles.PinheiroCtrl', PinheiroCtrl);

    PinheiroCtrl.$inject = [
        '$injector',
        '$scope',
        '$timeout',
        'ionicMaterialInk',
        'ionicMaterialMotion'
    ];

    function PinheiroCtrl($injector, $scope, $timeout, ionicMaterialInk, ionicMaterialMotion) {
         var PinheiroService = $injector.get('app.schedulles.PinheiroService');

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

         $scope.domingo = PinheiroService.getDomingo();
/*         $scope.sabado = PinheiroService.getSabado();
         $scope.semana = PinheiroService.getSemana();
        */

    }
})();
