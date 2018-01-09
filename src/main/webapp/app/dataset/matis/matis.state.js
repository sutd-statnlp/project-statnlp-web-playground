(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('matis', {
            parent: 'dataset',
            url: '/datatset/matis',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/dataset/matis/matis.html',
                    controller: 'MatisController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
