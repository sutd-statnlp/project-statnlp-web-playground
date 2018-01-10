(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('nlu', {
            parent: 'prediction',
            url: '/prediction/nlu',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/prediction/nlu/nlu.html',
                    controller: 'NluController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
