(function() {
    'use strict';
    /**
     * @ngdoc overview
     * @name app
     * @description
     * # app
     *
     * description
     */
    angular
        .module('app', [
            'app.core',
            'app.routes',
            'app.run',
            'app.login',
            'app.profile',
            'app.schedulles',
            'app.map',
            'app.users'

        ]);
})();

(function() {
    angular
        .module('app.core', []);
})();


(function() {
    angular
        .module('app.routes', []);
})();

(function() {
    angular
        .module('app.run', []);
})();

(function() {
    angular
        .module('app.login', []);
})();

(function() {
    angular
        .module('app.profile', []);
})();

(function() {
    angular
        .module('app.schedulles', []);
})();

(function() {
    'use strict';

    angular
        .module('app.map', []);
})();


(function() {
    'use strict';

    angular
        .module('app.users', []);
})();
