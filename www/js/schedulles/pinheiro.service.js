(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.schedulles.factory:NameFactory
     * @description
     * # NameFactory
     * Factory of the app.schedulles
     */
    angular
        .module('app.schedulles')
        .factory('app.schedulles.ProsperaService', ProsperaService);

    ProsperaService.$inject = [
        '$firebaseArray',
        '$firebaseObject'
    ];

    function ProsperaService($firebaseArray, $firebaseObject) {

        var ref = new Firebase('https://tcc-ionic-app.firebaseio.com/data/hora_prospera_centro/');

        return {
            getDomingo: function() {
               ref.on("value", function(snapshot) {
                   return snapshot.val();
                }, function(errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
            }
        };
    }

})();
