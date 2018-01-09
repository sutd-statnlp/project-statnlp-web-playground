(function () {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('textshow', {
            parent: 'visual',
            url: '/visual/textshow',
            data: {
                authorities: []
            },
            params: {
                filePath: ''
            },
            views: {
                'content@': {
                    templateUrl: 'app/visual/textshow/textshow.html',
                    controller: 'TextShowController',
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
