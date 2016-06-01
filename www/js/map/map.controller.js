(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name map.controller:NameController
     * @description
     * # NameController
     * Controller of the map
     */
    angular
        .module('app.map')
        .controller('app.map.MapCtrl', MapCtrl);

    MapCtrl.$inject = [
        '$scope',
        '$state',
        '$cordovaGeolocation',
        '$compile',
        '$ionicLoading',
        '$timeout',
        '$ionicPlatform',
        'ionicMaterialInk',
        'ionicMaterialMotion'
    ];

    function MapCtrl($scope, $state, $cordovaGeolocation, $compile, $ionicLoading, $timeout, $ionicPlatform, ionicMaterialInk, ionicMaterialMotion) {

        var options = { timeout: 10000, enableHighAccuracy: true };

        $scope.markers = [];
        $scope.infoWindow = [];
        init();

        function init() {

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

            $timeout(function() {
                /*ionicMaterialMotion.fadeSlideInRight();*/
            }, 300);
        }

        var station = [{

                lat: 52.238983,
                long: -0.888509
            }, {

                lat: 52.238168,
                long: -52.238168
            },

        ];
        $ionicPlatform.ready(function() {
            $ionicLoading.show({
                template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Buscando Localização!',
                duration: 100000
            });

            var options = { timeout: 10000, enableHighAccuracy: true };


            $cordovaGeolocation.getCurrentPosition(options).then(function(position) {

                /* var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);*/
                var latLng1 = { lat: -28.6801912, lng: -49.3752004 };
                var latLng2 = { lat: -28.679956, lng: -49.3751578 };
                /*                  var lat = position.coords.latitude;
                                    var long = position.coords.longitude;
                                    console.log("Current Latitude and Longitude",lat,long)
                                    var myLatlng = new google.maps.LatLng(lat, long);
                            */
                var latLng = { lat: -28.6834084, lng: -49.3775828 };

                var mapOptions = {
                    center: latLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer({
                    suppressMarkers: true
                });

                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                $scope.map = map;
                $ionicLoading.hide();
                directionsDisplay.setMap($scope.map);
                google.maps.event.addListenerOnce($scope.map, 'idle', function() {


                    //----------------------------------------------------------------------
                    var marker0 = new google.maps.Marker({
                        map: $scope.map,
                        icon: {url: 'img/person.png'},
                        animation: google.maps.Animation.DROP,
                        position: latLng
                    });

                    var image = {url:'img/person.png'}

                    $scope.markers.push(marker0);

                    var infoWindow0 = new google.maps.InfoWindow({
                        content: '<div>Voce está aqui</div>'
                    });

                    google.maps.event.addListener(marker0, 'click', function() {
                        infoWindow0.open($scope.map, marker0);
                    });


            /*        //----------------------------------------------------------------------
                    var marker1 = new google.maps.Marker({
                        map: $scope.map,
                        title: 'Quaishudui',
                        icon: {url: 'img/bus-stop.png'},
                        position: { lat: -28.6813171, lng: -49.3786339 }
                    });
                   

                    var infoWindow1 = new google.maps.InfoWindow({
                        content: '<div class="has-subheader infowindow " >' +
                                    ' <div class="list animate-fade-slide-in-right">' +
                                    ' <a class="item infowindow waves-effect waves-button waves-dark in done infowindow" style="transition-delay: 0.51s;">' +
                                    ' <h2>Ponto 10</h2>' +
                                    ' <small>Dos Bombeiros</small>' +
                                    ' <p>5min caminhada</p>' +
                                    ' </a>' +
                                    ' <a class="item infowindow waves-effect waves-button waves-dark in infowindow" style="transition-delay: 0.59s;">' +
                                    '<h3>Pinheiro/Centro</h3>' +
                                    '<p>Partidas</p>' +
                                    '<p><h5>15:00 - 15:05 - 15:10</h5></p>' +
                                    '</a>' +
                                    '</div>' +
                            '</div>'

                    });

                    google.maps.event.addListener(marker1, 'click', function() {
                        infoWindow1.open($scope.map, marker1);
                    });

                    //----------------------------------------------------------------------

                    var marker2 = new google.maps.Marker({
                        map: $scope.map,
                        animation: google.maps.Animation.DROP,
                        clickable: true,
                        icon: {url: 'img/bus-stop.png'},
                        position: { lat: -28.6801814, lng: -49.3751769 }

                    });
                    $scope.markers.push(marker2);

                    var infoWindow2 = new google.maps.InfoWindow({
                        content: '<div class="has-subheader infowindow">' +
                            ' <div class="list animate-fade-slide-in-right">' +
                            ' <a class="item infowindow waves-effect waves-button waves-dark in done infowindow" style="transition-delay: 0.51s;">' +
                            ' <h2>Ponto 11</h2>' +
                            ' <p>5min caminhada</p>' +
                            ' </a>' +
                            ' <a class="item infowindow waves-effect waves-button waves-dark in infowindow" style="transition-delay: 0.59s;">' +
                            '<h3>Pinheiro/Centro</h3>' +
                            '<p>Partidas</p>' +
                            '<p><h5>15:00 - 15:05 - 15:10</h5></p>' +
                            '</a>' +
                            '</div>' +
                            '</div>'
                    });

                    google.maps.event.addListener(marker2, 'click', function() {
                        infoWindow2.open($scope.map, marker2);
                    });*/
                    //----------------------------------------------------------------------

                   /* $scope.directions = {
                        origin:  { lat: -28.6834084, lng: -49.3775828 },
                        destination: { lat: -28.6813171, lng: -49.3786339 },
                        showList: false
                    }*/

                        var request = {
                            origin: $scope.directions.origin,
                            destination: $scope.directions.destination,
                            travelMode: google.maps.DirectionsTravelMode.WALKING
                        };

                        directionsService.route(request, function(response, status) {
                            if (status === google.maps.DirectionsStatus.OK) {
                                directionsDisplay.setDirections(response);
                                directionsDisplay.setMap($scope.map.control.getGMap());
                                var step = 1;
                              var infowindow2 = new google.maps.InfoWindow();
                              infowindow2.setContent(response.routes[0].legs[0].steps[step].distance.text + "<br>" + 
                                response.routes[0].legs[0].steps[step].duration.text + " ");
                              infowindow2.setPosition(response.routes[0].legs[0].steps[step].end_location);
                              infowindow2.open( $scope.map);
                            } else {
                                alert('Google route unsuccesfull!');
                            }
                        });
                });

            }, function(error) {
                $ionicLoading.hide();
                console.log(error);
            });
        });
    }
})();
