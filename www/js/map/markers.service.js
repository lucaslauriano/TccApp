(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.map.MarkersService.factory:MarkersService
     * @description
     * # MarkersService
     * Factory of the app.map.MarkersService
     */
    angular
        .module('app.map')
        .factory('MarkersService', MarkersService);

    MarkersService.$inject = [];

    function MarkersService() {
    	
        var markers = new Firebase('https://tcc-ionic-app.firebaseio.com/data/station/');
        
        return {
            getListMarkers: function() {
                return $firebaseArray(markers);
            },
            getMarker: function(personId) {
                return $firebaseObject(ref.child('data/station').child(userId));
            }
        }
    }
})();
