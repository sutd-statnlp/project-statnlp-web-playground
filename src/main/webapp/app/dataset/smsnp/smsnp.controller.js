(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('SmsnpController', SmsnpController);

    SmsnpController.$inject = ['$scope', '$state','$timeout'];

    function SmsnpController($scope, $state,$timeout) {
        var vm = this;

        vm.isLoading = true;    

        $timeout(function () {
            vm.isLoading = false;
        }, 2000);
    }
})();
