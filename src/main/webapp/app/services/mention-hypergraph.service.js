(function () {
    'use strict';
    angular
        .module('visualApp')
        .factory('MentionHypergraphService', MentionHypergraphService);

    MentionHypergraphService.$inject = ['$resource'];

    function MentionHypergraphService($resource) {
        var resourceUrl = 'http://localhost:8000';

        return $resource(resourceUrl, {}, {
            'postAnalyzeBySmallModel': { method: 'POST', url: resourceUrl + '/api/analyze/small',isArray:true },
            'postAnalyzeByMainModel': { method: 'POST', url: resourceUrl + '/api/analyze/main', isArray:true }
        });
    }
})();
