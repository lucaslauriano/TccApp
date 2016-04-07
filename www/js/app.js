(function() {
    'use strict';

    angular.module('app', [
        'ionic',
        'ionic-material',
        'ionMdInput',
        'ngCordova',
        'ng-mfb',
/*      'ngAnimate',*/
        'ngAria',
        'ngMaterial',
        'app.run',
        'app.route',
        'app.map',
        'app.login',
        'app.profile'
    ]);
})();

(function() {
    'use strict';

    angular
        .module('app.run', []);
})();

(function() {
    'use strict';

    angular
        .module('app.route', []);
})();

(function() {
    'use strict';

    angular
        .module('app.map', []);
})();

(function() {
    'use strict';

    angular
        .module('app.login', []);
})();

(function() {
    'use strict';

    angular
        .module('app.profile', []);
})();
