(function() {
    'use strict';

    angular
        .module('visualApp', [
            'ngResource',
            'ngAria',
            'ui.router',
            'ngMaterial',
            'oc.lazyLoad',
            'chart.js'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
