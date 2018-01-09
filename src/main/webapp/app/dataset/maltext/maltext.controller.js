(function () {
    'use strict';

    angular
        .module('visualApp')
        .controller('MaltextController', MaltextController);

    MaltextController.$inject = ['$scope', '$state', '$mdDialog', '$window'];

    function MaltextController($scope, $state, $mdDialog, $window) {
        var vm = this;


        // JQuery

        $(document).ready(function () {

            drawTree("#tree1","content/data/maltext-data-1.tsv");
            drawTree("#tree2","content/data/maltext-data-2.tsv");

            function drawTree(chartId, dataFilePath) {
                var diameter = 960;
                var padding = 210;

                var tree = d3.layout.tree()
                    .size([360, diameter / 2 - padding])
                    .separation(function (a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

                var diagonal = d3.svg.diagonal.radial()
                    .projection(function (d) { return [d.y, d.x / 180 * Math.PI]; });

                var svg = d3.select(chartId).append("svg")
                    .attr("width", diameter)
                    .attr("height", diameter)
                    .append("g")
                    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

                d3.selection.prototype.moveToFront = function () {
                    return this.each(function () {
                        this.parentNode.appendChild(this);
                    });
                };

                d3.tsv(dataFilePath, function (files) {
                    var nested1 = processData(files);
                    treemap(nested1);

                });

                function processData(files) {
                    files.forEach(function (d) {
                        d.size = parseInt(d.size);
                        d.keys = d.file
                            .split("/");
                        d.keys.forEach(function (sect, i) {
                            d["section" + i] = sect;
                        });
                    });

                    return burrow(files);
                }

                function treemap(root) {
                    var nodes = tree.nodes(root),
                        links = tree.links(nodes);

                    var link = svg.selectAll(".link")
                        .data(links, function (d) { return d.source.name + "-" + d.target.name; })

                    link
                        .transition()
                        .delay(400)
                        .duration(600)
                        .attr("d", diagonal);

                    link
                        .enter().append("path")
                        .attr("class", "link")
                        .attr("d", diagonal)
                        .style("opacity", 0)
                        .transition()
                        .duration(300)
                        .delay(function (d, i) {
                            return 24 * i;
                        })
                        .style("opacity", 1);

                    link.exit()
                        .transition()
                        .duration(400)
                        .style("opacity", 0)
                        .delay(400)
                        .remove();

                    var node = svg.selectAll(".node")
                        .moveToFront()
                        .data(nodes, function (d) { return d.name + "-" + (d.parent ? d.parent.name : "root"); })

                    node.exit()
                        .transition()
                        .duration(400)
                        .style("opacity", 0)
                        .delay(400)
                        .remove();

                    node
                        .transition()
                        .delay(400)
                        .duration(800)
                        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

                    node.selectAll("text")
                        .transition()
                        .duration(800)
                        .attr("font-weight", null)
                        .attr("fill", "#555")
                        .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
                        .attr("transform", function (d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
                        .text(function (d) { return d.name; });

                    var g = node
                        .enter().append("g")
                        .attr("class", "node")
                        .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
                        .on("click", clickNode)
                        .on("mouseover", function (d) {
                            var thisNode = d3.select(this);

                            thisNode.select("text")
                                .attr("font-size", "18px")
                                .attr("font-weight", 'bold');

                            thisNode.select("circle")
                                .attr("r", "6");
                        })
                        .on("mouseout", function () {
                            // Remove the info text on mouse out.
                            var thisNode = d3.select(this);

                            thisNode.select("text")
                                .attr("font-size", "10px")
                                .attr("font-weight", 'normal');

                            thisNode.select("circle")
                                .attr("r", "3");
                        });

                    g.append("circle")
                        .attr("r", 3)
                        .style("opacity", 0)
                        .transition()
                        .duration(300)
                        .delay(function (d, i) {
                            return 24 * i;
                        })
                        .style("opacity", 1);

                    g.append("text")
                        .attr("dy", ".31em")
                        .attr("font-weight", "normal")
                        .attr("fill", "black")
                        .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
                        .attr("transform", function (d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
                        .text(function (d) { return d.name; })
                        .style("opacity", 0)
                        .transition()
                        .duration(300)
                        .delay(function (d, i) {
                            return 24 * i;
                        })
                        .style("opacity", 1);


                    // Toggle children on click.
                    function clickNode(d) {
                        if (d.children.length === 0) {
                            showText(d.parent.name, d.name);
                        }
                    }
                };

                d3.select(self.frameElement).style("height", diameter + "px");
            }
        });

        function showText(parentName, name) {
            var confirm = $mdDialog.confirm()
                .title('Parse content')
                .textContent(name)
                .targetEvent(null)
                .ok('Show')
                .cancel('Tree');

            $mdDialog.show(confirm).then(function () {
                var filePath = 'content/data/maltext/' + parentName + '/' + name;
                $state.go('textshow', {
                    'filePath': filePath
                });
            }, function () {
                var filePath = 'data/maltext/' + parentName + '/' + name;
                $window.open('/content/wordtree.html?path=' + filePath, '_self');
            });

        }
    }
})();
