(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.route
     * @description
     * # config
     * Configuration of the app.route
     */
    angular
        .module('app.route', [])
        .config(config);

    config.$inject = [
        '$urlRouterProvider',
        '$stateProvider',
        '$ionicConfigProvider'
    ];

    function config($urlRouterProvider, $stateProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.maxCache(0);

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/menu.html',
                controller: 'app.AppCtrl',
                controllerAs: 'AppCtrl'
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'views/login.html',
                        controller: 'app.login.LoginCtrl',
                        controllerAs: 'LoginCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'views/profile.html',
                        controller: 'app.profile.ProfileCtrl',
                        controllerAs: 'ProfileCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900">' +
                            '<i class="icon ion-plus"></i>' +
                            '</button>',
                        controller: function($timeout) {

                            /*$timeout(function () {
                                document.getElementById('fab-profile').classList.toggle('on');
                            }, 800);*/
                        }
                    }
                }
            })
            .state('app.map', {
                url: '/map',
                views: {
                    'menuContent': {

                        templateUrl: 'views/map.html',
                        controller: 'app.map.MapCtrl',
                        controllerAs: 'MapCtrl'
                    },
                    'fabContent': {
                        template: '<button ng-click="MapCtrl.clickTest()" id="fab-profile" class="button button-fab button-fab-top-right button-calm-900"><i class="icon ion-location"></i></button>',
                        controller: 'app.map.MapCtrl',
                       
                        controller: function($timeout) {

                            $timeout(function() {
                                document.getElementById('fab-profile').classList.toggle('on');
                            }, 800);
                        },
                         controllerAs: 'MapCtrl'
                    }
                }
            })
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html'
            });

        $urlRouterProvider.otherwise('/app/login');
    }
})();
