(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('SmsnpController', SmsnpController);

    SmsnpController.$inject = ['$scope', '$state'];

    function SmsnpController($scope, $state) {
        var vm = this;


        /*
            One-time initialization
        */
        $(document).ready(function () {

            var parcoords = d3.parcoords()("#chart1")
                .alpha(0.4)
                .mode("queue") // progressive rendering
                .height(600)
                .margin({
                    top: 36,
                    left: 0,
                    right: 0,
                    bottom: 16
                });


            // load csv file and create the chart
            d3.csv('/content/data/smsnp-data.csv', function (data) {
                // slickgrid needs each data element to have an id
                data.forEach(function (d, i) { d.id = d.id || i; });

                var colorgen = d3.scale.ordinal()
                    .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c",
                        "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00",
                        "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]);

                var color = function (d) { return colorgen(d.year + d.month); };

                parcoords
                    .data(data)
                    .hideAxis(["text","user_country","user_userID","collector","method"])
                    .color(color)
                    .render()
                    .reorderable()
                    .brushMode("1D-axes");
            });

            function downloadPng() {

                var callback = function (canvas) {
                    // Download the image
                    var download = document.createElement("a");
                    download.href = canvas.toDataURL("image/png");
                    download.download = "smsnp-visual-data.png";
                    download.click();
                };
                parcoords.mergeParcoords(callback);
            }

            $("#save_as_png").click(function () { downloadPng(); });
        });

    }
})();
