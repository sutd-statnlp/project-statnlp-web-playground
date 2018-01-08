(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'sidenav': {
                    templateUrl: 'app/layouts/sidenav.html',
                    controller: 'SidenavController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
