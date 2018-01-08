(function () {
    'use strict';

    angular
        .module('visualApp')
        .config(themeConfig);

    themeConfig.$inject = ['$mdThemingProvider'];

    function themeConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('pink');
        
    }
})();
