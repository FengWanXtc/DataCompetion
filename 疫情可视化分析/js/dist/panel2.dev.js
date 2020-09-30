"use strict";

var myChart = echarts.init(document.querySelector(".parallel .chart"));

function button_parallel() {
  myChart.clear();
  parallel();
}

function button_rose() {
  myChart.clear();
  rose();
}

function button_compare() {
  myChart.clear();
  compare();
}