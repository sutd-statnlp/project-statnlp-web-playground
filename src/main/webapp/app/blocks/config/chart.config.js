(function () {
    'use strict';

    angular
        .module('visualApp')
        .config(ChartJsConfig);

    ChartJsConfig.$inject = ['ChartJsProvider'];

    function ChartJsConfig(ChartJsProvider) {
        ChartJsProvider.setOptions({
            colors: ['#2196F3', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        });
        // Configure all line charts
        ChartJsProvider.setOptions('line', {
            showLines: false
        });

    }
})();
