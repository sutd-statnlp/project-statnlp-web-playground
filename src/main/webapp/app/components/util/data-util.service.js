(function () {
    'use strict';

    angular
        .module('visualApp')
        .factory('DataUtils', DataUtils);

    DataUtils.$inject = ['$window'];

    function DataUtils($window) {

        var service = {
            abbreviate: abbreviate,
            byteSize: byteSize,
            openFile: openFile,
            toBase64: toBase64,
            parseTextToHtml: parseTextToHtml
        };

        return service;

        function abbreviate(text) {
            if (!angular.isString(text)) {
                return '';
            }
            if (text.length < 30) {
                return text;
            }
            return text ? (text.substring(0, 15) + '...' + text.slice(-10)) : '';
        }

        function byteSize(base64String) {
            if (!angular.isString(base64String)) {
                return '';
            }

            function endsWith(suffix, str) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            }

            function paddingSize(base64String) {
                if (endsWith('==', base64String)) {
                    return 2;
                }
                if (endsWith('=', base64String)) {
                    return 1;
                }
                return 0;
            }

            function size(base64String) {
                return base64String.length / 4 * 3 - paddingSize(base64String);
            }

            function formatAsBytes(size) {
                return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
            }

            return formatAsBytes(size(base64String));
        }

        function openFile(type, data) {
            $window.open('data:' + type + ';base64,' + data, '_blank', 'height=300,width=400');
        }

        function toBase64(file, cb) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
                cb(base64Data);
            };
        }

        function parseTextToHtml(predictionArray,text) {
            var html = '';
            var words = text.split(' ');
            for (var i = 0; i < predictionArray.length; i++) {
                var item = predictionArray[i];
                words[item.start] = markFront(words[item.start], item.label.form);
                words[item.end - 1] = markEnd(words[item.end - 1]);
            }
            html = words[0];
            for (var j = 1; j < words.length; j++) {
                html += " " + words[j];
            }
            return html;
        }

        function markFront(text, label) {
            var openEle = "<mark data-entity=\"" + label + "\">"
            return openEle + text;
        }

        function markEnd(text) {
            return text + "</mark>";
        }
    }
})();
