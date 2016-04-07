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
        '$state',
        '$cordovaGeolocation',
        '$compile',
        '$ionicLoading',
        '$scope',
        '$timeout',
        '$log',
        'ionicMaterialInk',
        'ionicMaterialMotion'
    ];

    function MapCtrl($state, $cordovaGeolocation, $compile, $ionicLoading, $scope, $timeout, $log, ionicMaterialInk, ionicMaterialMotion) {

        var vm = this;


        var PublicProperties = {
            centerOnMe: _centerOnMe,
            clickTest: _clickTest
        };

        _.extend(vm, PublicProperties);

        init();

        function init() {
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
            $scope.$parent.setHeaderFab('right');

            
        }

        function _centerOnMe() {
                if (!$scope.map) {
                    return;
                }

                $scope.loading = $ionicLoading.show({
                    content: 'Getting current location...',
                    showBackdrop: true
                }).them(function() {
                    console.log('porra nenhuma');
                });

                navigator.geolocation.getCurrentPosition(function(pos) {
                    $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                    $scope.loading.hide();
                }, function(error) {
                    alert('Unable to get location: ' + error.message);
                });
            }

        $timeout(function() {
            ionicMaterialMotion.fadeSlideIn({
                selector: '.animate-fade-slide-in .item'
            });
        }, 200);

        // Activate ink for controller
        ionicMaterialInk.displayEffect();

        $scope.map = map;

        var myLatlng = new google.maps.LatLng(43.07493, -89.381388);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Uluru (Ayers Rock)'
        });
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
            content: compiled[0]
        });

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });


        google.maps.event.addDomListener(window, 'load');

        function _clickTest(){
            console.log('Clicado');
        }

    }
})();
