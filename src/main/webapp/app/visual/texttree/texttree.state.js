(function () {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('texttree', {
            parent: 'visual',
            url: '/visual/texttree',
            data: {
                authorities: []
            },
            params: {
                filePath: ''
            },
            views: {
                'content@': {
                    templateUrl: 'app/visual/texttree/texttree.html',
                    controller: 'TextTreeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                filePath: ['$stateParams', function ($stateParams) {
                    return $stateParams.filePath;
                }]
            }
        });
    }
})();
