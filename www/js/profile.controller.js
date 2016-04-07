(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name profile.controller:app.profile.ProfileCtrl
     * @description
     * # app.profile.ProfileCtrl
     * Controller of the profile
     */
    angular
        .module('app.profile')
        .controller('app.profile.ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$scope','$stateParams', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk'];

    function ProfileCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
        var viewModel = this;
        //content

        init();

        function init() {

            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = false;
            $scope.$parent.setExpanded(false);
            $scope.$parent.setHeaderFab(false);

            // Set Motion
            $timeout(function() {
                ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });
            }, 300);

            $timeout(function() {
                ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);

            // Set Ink
            ionicMaterialInk.displayEffect();

        }
        /*
                viewModel.isExpanded = false;

                function setHeaderFab(location) {
                    var hasHeaderFabLeft = false;
                    var hasHeaderFabRight = false;

                    switch (location) {
                        case 'left':
                            hasHeaderFabLeft = true;
                            break;
                        case 'right':
                            hasHeaderFabRight = true;
                            break;
                    }

                    viewModel.hasHeaderFabLeft = hasHeaderFabLeft;
                    viewModel.hasHeaderFabRight = hasHeaderFabRight;
                }

                function hideNavBar() {
                    document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
                }

                function showNavBar() {
                    document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
                }

                function noHeader() {
                    var content = document.getElementsByTagName('ion-content');
                    for (var i = 0; i < content.length; i++) {
                        if (content[i].classList.contains('has-header')) {
                            content[i].classList.toggle('has-header');
                        }
                    }
                }

                function clearFabs() {
                    var fabs = document.getElementsByClassName('button-fab');
                    if (fabs.length && fabs.length > 1) {
                        fabs[0].remove();
                    }
                }

                function setExpanded(bool) {
                    viewModel.isExpanded = bool;
                }


                // Set Motion
                $timeout(function() {
                    ionicMaterialMotion.slideUp({
                        selector: '.slide-up'
                    });
                }, 300);

                $timeout(function() {
                    ionicMaterialMotion.fadeSlideInRight({
                        startVelocity: 3000
                    });
                }, 700);

                // Set Ink
                ionicMaterialInk.displayEffect();*/
    }
})();
