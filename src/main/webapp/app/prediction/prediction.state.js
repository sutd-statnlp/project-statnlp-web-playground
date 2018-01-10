(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('prediction', {
            parent: 'app',
            abstract: true
        });
    }
})();
