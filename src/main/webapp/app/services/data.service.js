(function () {
    'use strict';
    angular
        .module('visualApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$resource'];

    function DataService($resource) {
        var resourceUrl = 'api/data/';

        return $resource(resourceUrl, {}, {
            'getSmsnp': { method: 'GET', isArray: true, url: '/content/data/smsnp-data.json' }
        });
    }
})();
