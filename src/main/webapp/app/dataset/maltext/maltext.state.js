(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('maltext', {
            parent: 'dataset',
            url: '/datatset/maltext',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/dataset/maltext/maltext.html',
                    controller: 'MaltextController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
