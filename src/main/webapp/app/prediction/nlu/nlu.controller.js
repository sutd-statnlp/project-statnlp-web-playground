(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('NluController', NluController);

    NluController.$inject = ['$scope', '$state', 'NluService', 'NumberUtils', 'ColorUtils'];

    function NluController($scope, $state, NluService, NumberUtils, ColorUtils) {
        var vm = this;
        vm.isAnalyzing = true;
        vm.text = 'In the rugged Colorado Desert of California, there lies buried a treasure ship sailed there hundreds of years ago by either Viking or Spanish explorers. Some say this is legend; others insist it is fact. A few have even claimed to have seen the ship, its wooden remains poking through the sand like the skeleton of a prehistoric beast. Among those who say they’ve come close to the ship is small-town librarian Myrtle Botts. In 1933, she was hiking with her husband in the Anza-Borrego Desert, not far from the border with Mexico. It was early March, so the desert would have been in bloom, its washed-out yellows and grays beaten back by the riotous invasion of wildflowers.';
        vm.submitAnalyze = submitAnalyze;
        vm.emotionChart = defaultChart();
        vm.keywordChart = defaultChart();
        vm.categoryChart = defaultChart();
        vm.entityChart = defaultChart();

        function defaultChart() {
            return {
                labels: [],
                data: [],
                series: [],
                colors: []
            };
        }

        function resetCharts() {
            vm.emotionChart = defaultChart();
            vm.keywordChart = defaultChart();
            vm.categoryChart = defaultChart();
            vm.entityChart = defaultChart();
        }


        function submitAnalyze() {
            resetCharts();

            NluService.getSample({}, onSuccess, onError);

            function onSuccess(data) {
                loadEmotionChart(data.emotion);
                loadKeywordChart(data.keywords);
                loadCategoryChart(data.categories);
                loadEntityChart(data.entities);
                vm.isAnalyzing = false;
            }

            function onError(error) {
                console.log(error);
            }
        }

        function loadEmotionChart(emotionData) {
            var emotion = emotionData.document.emotion;
            vm.emotionChart.labels = ['sadness', 'joy', 'fear', 'disgust', 'anger'];
            vm.emotionChart.data = [
                NumberUtils.convertSmallNumberToPercent(emotion.sadness),
                NumberUtils.convertSmallNumberToPercent(emotion.joy),
                NumberUtils.convertSmallNumberToPercent(emotion.fear),
                NumberUtils.convertSmallNumberToPercent(emotion.disgust),
                NumberUtils.convertSmallNumberToPercent(emotion.anger)
            ];
        }

        function loadKeywordChart(keywords) {
            for (var i = 0; i < keywords.length; i++) {
                var word = keywords[i];
                word.relevance = NumberUtils.convertSmallNumberToPercent(word.relevance);
                vm.keywordChart.labels.push(word.text);
                vm.keywordChart.data.push(word.relevance);
            }
        }
        function loadCategoryChart(categories) {
            for (var i = 0; i < categories.length; i++) {
                var item = categories[i];
                item.score = NumberUtils.convertSmallNumberToPercent(item.score);
                vm.categoryChart.labels.push(item.label);
                vm.categoryChart.data.push(item.score);
            }
        }
        function loadEntityChart(entities) {
            for (var i = 0; i < entities.length; i++) {
                var item = entities[i];
                item.relevance = NumberUtils.convertSmallNumberToPercent(item.relevance);
                vm.entityChart.labels.push(item.text + ' - ' + item.type);
                vm.entityChart.data.push(item.relevance);
                vm.entityChart.colors.push(ColorUtils.getColorFromText(item.type));
            }
        }

    }
})();
