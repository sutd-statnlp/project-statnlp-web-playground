(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('MentionHypergraphController', MentionHypergraphController);

    MentionHypergraphController.$inject = ['$scope', '$state', 'MentionHypergraphService', 'NumberUtils', 'ColorUtils', 'DataUtils'];

    function MentionHypergraphController($scope, $state, MentionHypergraphService, NumberUtils, ColorUtils, DataUtils) {
        var vm = this;
        vm.isAnalyzing = false;
        vm.isSuccess = false;
        vm.result = '';
        vm.models = ['Small', 'Main'];
        vm.prediction = [];
        vm.analysis = {
            model: vm.models[0],
            text: 'Both the AMA and the Bush administration released reports this week saying out of control trial lawyers are driving doctors out of their practices all across the country .',
            penalty: 0.0
        };
        vm.submitAnalyze = submitAnalyze;

        function submitAnalyze() {
            vm.isAnalyzing = true;
            if (vm.analysis.model === vm.models[0]) {
                MentionHypergraphService.postAnalyzeBySmallModel({
                    text: vm.analysis.text,
                    penalty: vm.analysis.penalty
                }, onSuccess, onError);
            }else{
                MentionHypergraphService.postAnalyzeByMainModel({
                    text: vm.analysis.text,
                    penalty: vm.analysis.penalty
                }, onSuccess, onError);
            }

            function onSuccess(data) {
                vm.prediction = data;
                vm.result = DataUtils.parseTextToHtml(vm.prediction, vm.analysis.text);
                $('#result').html(vm.result);
                vm.isAnalyzing = false;
                vm.isSuccess = true;
            }
        }

        function onError(error) {
            console.error(error);
            vm.isSuccess = false;
            vm.isAnalyzing = false;
        }
    }
})();
