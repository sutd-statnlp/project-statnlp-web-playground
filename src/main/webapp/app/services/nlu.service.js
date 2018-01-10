(function () {
    'use strict';
    angular
        .module('visualApp')
        .factory('NluService', NluService);

    NluService.$inject = ['$resource'];

    function NluService($resource) {
        var resourceUrl = 'api/nlu/';

        return $resource(resourceUrl, {}, {
            'getSample': { method: 'GET', url: '/content/data/nlu/nlu-sample.json' }
        });
    }
})();
