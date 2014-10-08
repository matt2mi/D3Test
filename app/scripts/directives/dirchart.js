var dirchart = function ($parse) {
    //explicitly creating a directive definition variable this may look verbose but is good for clarification purposes
    //in real life you'd want to simply return the object {...}
    var directiveDefinitionObject = {
        //We restrict its use to an element as usually  <bars-chart> is semantically more understandable
        restrict: 'E',

        //this is important, we don't want to overwrite our directive declaration in the HTML mark-up
        replace: false,

        //our data source would be an array passed thru chart-data attribute
        scope: {data: '=data'},

        link: function (scope, element, attrs) {
            //in D3, any selection[0] contains the group selection[0][0] is the DOM node but we won't need that this time
            var chart = d3.select(element[0]);

            //to our original directive markup bars-chart we add a div with out chart stling and bind each data entry to the chart
            chart.append("div").attr("class", "chart")
                .selectAll('div')
                .data(scope.data).enter().append("div")
                .transition().ease("elastic")
                .style("width", function(d) { return d + "%"; })
                .text(function(d) { return d + "%"; });

            //a little of magic: setting it's width based
            //on the data value (d)
            //and text all with a smooth transition
        }
    };

    return directiveDefinitionObject;
};

var dir2chart = function($parse) {
    var directiveDefinitionObject = {

        restrict: 'E',
        replace: false,
        //scope: {data: '=data'},

        link: function (scope, element, attrs) {
            var data = [
                {"x":190,"y":34,"r":20,"color":"#FDAE6B","name":"cercle 1"},
                {"x":150,"y":89,"r":39,"color":"#FDD0A2","name":"cercle 2"},
                {"x":267,"y":234,"r":38,"color":"#A1D99B","name":"cercle 3"},
                {"x":100,"y":34,"r":29,"color":"#31A354","name":"cercle 4"},
                {"x":87,"y":89,"r":21,"color":"#3182BD","name":"cercle 5"},
                {"x":160,"y":248,"r":25,"color":"#FD8D3C","name":"cercle 6"},
                {"x":78,"y":150,"r":35,"color":"#A1D99B","name":"cercle 7"},
                {"x":345,"y":156,"r":32,"color":"#9ECAE1","name":"cercle 8"},
                {"x":233,"y":117,"r":24,"color":"#C6DBEF","name":"cercle 9"}
            ];

            var svg = d3.select("body").append("svg");

            var nodes = svg.selectAll(".node")
               .data(data)
               .enter()
               .append("g")
               .attr("class","node")
               .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });


            nodes.append("circle")
               .attr("r", function(d) {return d.r})
               .style("fill",function(d){return d.color;})

            nodes.append("text")
               .attr("dy", ".3em")
               .style("text-anchor", "middle")
               .text(function(d) { return d.name; });
        }
    };

    return directiveDefinitionObject;
};

angular.module('services').directive('dirchart', dirchart).directive('dir2chart', dir2chart);