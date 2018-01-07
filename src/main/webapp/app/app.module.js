(function() {
    'use strict';

    angular
        .module('demoApp', [
            'ngResource',
            'ngAria',
            'ui.router',
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
