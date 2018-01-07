(function () {
    'use strict';

    angular
        .module('demoApp')
        .config(httpConfig);

    httpConfig.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function httpConfig($urlRouterProvider, $urlMatcherFactoryProvider) {

        $urlRouterProvider.otherwise('/');

        $urlMatcherFactoryProvider.type('boolean', {
            name: 'boolean',
            decode: function (val) { return val === true || val === 'true'; },
            encode: function (val) { return val ? 1 : 0; },
            equals: function (a, b) { return this.is(a) && a === b; },
            is: function (val) { return [true, false, 0, 1].indexOf(val) >= 0; },
            pattern: /bool|true|0|1/
        });
    }
})();
