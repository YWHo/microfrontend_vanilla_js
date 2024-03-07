import * as echarts from "echarts";

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById("linechart-1"));

// Specify the configuration items and data for the chart
var option = {
  title: {
    text: "ECharts Line Chart Example",
  },
  tooltip: {},
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
