$(document).ready(function(){
    
var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(26, 188, 156,0.5)",
            strokeColor: "rgba(26, 188, 156,0.5)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(34, 167, 240,0.5)",
            strokeColor: "rgba(34, 167, 240,0.5)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};


var data1 = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
var ctx1 = $("#myChart1").get(0).getContext("2d");




/* global Chart */
var chrt = new Chart(ctx).Bar(data,{}); //, options);
var myPieChart = new Chart(ctx1).Pie(data1,{});//options);

Chart.defaults.global.responsive = true;


});

		
