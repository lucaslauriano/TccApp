(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.directive:directive
     * @description
     * # directive
     * directive of the app
     */
    angular
        .module('app.map')
        .directive('app.map.MapDirective', MapDirective);

    function MapDirective() {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {

                var zValue = scope.$eval(attrs.zoom);
                var lat = scope.$eval(attrs.lat);
                var lng = scope.$eval(attrs.lng);


                var myLatlng = new google.maps.LatLng(lat, lng),
                    mapOptions = {
                        zoom: zValue,
                        center: myLatlng
                    },
                    map = new google.maps.Map(element[0], mapOptions),
                    marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        draggable: true
                    });
            }
        }
    }
})();
