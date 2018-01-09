(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('TextTreeController', TextTreeController);

    TextTreeController.$inject = ['$scope', '$state', '$timeout', '$ocLazyLoad','filePath'];

    function TextTreeController($scope, $state, $timeout,$ocLazyLoad, filePath) {
        var vm = this;
        vm.isLoading = true;

        $timeout(function () {
            vm.isLoading = false;
        }, 4000);

        // Jquery
        $(document).ready(function () {

            // wordtree
            $ocLazyLoad.load('content/js/wordtree.min.js').then(onSuccess, onError);

            function loadText(path) {
                if (path != null) {
                    $.get(path, function (data) {
                        if (data != null) {
                            $('#paste').text(data);
                            $('#paste-go').click();
                        }
                    }, 'text');
                }
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
