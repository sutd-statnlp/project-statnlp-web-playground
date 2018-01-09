(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('TextShowController', TextShowController);

    TextShowController.$inject = ['$scope', '$state', '$timeout', '$ocLazyLoad', 'filePath'];

    function TextShowController($scope, $state, $timeout, $ocLazyLoad, filePath) {
        var vm = this;
        vm.isLoading = true;

        $timeout(function () {
            vm.isLoading = false;
        }, 4000);

        // Jquery
        $(document).ready(function () {

            // CloudJS
            $ocLazyLoad.load('content/js/wordcloud.min.js').then(onSuccess, onError);

            function loadText(path) {
                $.get(path, function (data) {
                    if (data != null)
                        parseText(data);
                }, 'text');
            }

            function onSuccess() {
                // load function
                loadText(filePath);
            }

            function onError(error) {
                console.error(error);
            }
        });

        
    }
})();
