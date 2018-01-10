(function () {
    'use strict';

    angular
        .module('visualApp')
        .factory('ColorUtils', ColorUtils);

    ColorUtils.$inject = [];

    function ColorUtils() {

        var service = {
            getColorFromText: getColorFromText
        };

        return service;

        function getColorFromText(text) {
            var colors = {
                'Person': '#E91E63',
                'GeographicFeature': '#607D8B',
                'Location':'#2196F3',
                'Company': '#4CAF50',
                'Facility': '#8BC34A',
                'Broadcaster': '#FF9800',
                'Quantity': '#795548'
            };
            return colors[text];
        }

    }

})();
