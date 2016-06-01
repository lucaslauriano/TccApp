(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.config
     * @description
     * # NameConfiguration
     * Configuration of the app.config
     */
    angular
        .module('app')
        .config(config);

    config.$inject = [
        '$urlRouterProvider',
        '$stateProvider',
        '$ionicConfigProvider'
    ];

    function config($urlRouterProvider, $stateProvider, $ionicConfigProvider) {
        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'app.AppCtrl',
                controllerAs: 'AppCtrl'
            })
            .state('app.schedulles', {
                url: '/schedulles',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/schedulles.html',
                        controller: 'app.schedulles.SchedullesCtrl',
                        controllerAs: 'SchedullesCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.schedulles-pinheiro', {
                url: '/pinheiro',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/pinheiro-centro.html',
                        controller: 'app.schedulles.PinheiroCtrl',
                        controllerAs: 'PinheiroCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.schedulles-prospera', {
                url: '/prospera',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/prospera-centro.html',
                        controller: 'app.schedulles.ProsperaCtrl',
                        controllerAs: 'ProsperaCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.schedulles-centro-pinheiro', {
                url: '/centro_pin',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/centro-pinheiro.html'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            
            .state('app.schedulles-centro-prospera', {
                url: '/centro-prospera',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/prospera-centro.html'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/register.html',
                        controller: 'app.login.SignupCtrl',
                        controllerAs: 'SignupCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.map', {
                url: '/map',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/map.html',
                        controller: 'app.map.MapCtrl',
                        controllerAs: 'MapCtrl'
                    },
                    'fabContent': ''
                }
            })
            .state('app.users', {
            url: '/users',
            views: {
                'menuContent': {
                    templateUrl: 'templates/user-list.html',
                    controller: 'app.users.UsersCtrl',
                    controllerAs: 'UsersCtrl',
                    resolve: {
                        usuario: function($q) {
                            return $q(function(resolve) {
                                resolve({});
                            });
                        }
                    }
                },
                'fabContent': {
                    template: ''
                }
            }
        })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
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
                        templateUrl: 'templates/profile.html',
                        controller: 'app.profile.ProfileCtrl',
                        controllerAs: 'ProfileCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');

    }
})();
