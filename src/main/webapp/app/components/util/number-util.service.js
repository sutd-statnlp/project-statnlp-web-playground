(function () {
    'use strict';

    angular
        .module('visualApp')
        .factory('NumberUtils', NumberUtils);

    NumberUtils.$inject = [];

    function NumberUtils() {

        var service = {
            convertSmallNumberToPercent: convertSmallNumberToPercent
        };

        return service;

        function convertSmallNumberToPercent(number) {
            return (number * 100).toFixed(2);
        }

    }

})();
