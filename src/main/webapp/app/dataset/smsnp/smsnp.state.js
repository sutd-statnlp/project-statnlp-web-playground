(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('smsnp', {
            parent: 'dataset',
            url: '/datatset/smsnp',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/dataset/smsnp/smsnp.html',
                    controller: 'SmsnpController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
