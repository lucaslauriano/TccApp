(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name app.core
     * @description
     * # app.core
     * description
     * Carrega dependencias da Aplicação
     */

    angular
        .module('app.core', [
            'ionic',
            'ionic-material',
            'ionMdInput',
            'firebase', 
            'ng-mfb',
            'ngCordova'
        ]);
})();
