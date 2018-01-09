(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('SidenavController', SidenavController);

    SidenavController.$inject = ['$scope', '$state'];

    function SidenavController($scope, $state) {
        var vm = this;

        vm.currentStage = $state.current.name;

        // JQuery
        $(document).ready(function () {
            var itemEle = $('md-list-item');

            itemEle.each(function () {
                var itemState = $(this).attr('data-state');
                if (vm.currentStage == itemState)
                    $(this).addClass('m-bg-list-item');
            });

            itemEle.click(function () {
                itemEle.removeClass('m-bg-list-item');
                $(this).addClass('m-bg-list-item');

            });
        });
    }
})();
