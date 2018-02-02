(function() {
    'use strict';

    angular
        .module('visualApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('mention-hypergraph', {
            parent: 'prediction',
            url: '/prediction/mention-hypergraph',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/prediction/mention-hypergraph/mention-hypergraph.html',
                    controller: 'MentionHypergraphController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
