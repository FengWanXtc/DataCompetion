"use strict";

var myChart = echarts.init(document.querySelector(".parallel .chart"));
var panel3_1_h2 = document.querySelector(".parallel h2");
var panel1_1_h2 = document.querySelector(".map h2");
var panel1_1_myChart = echarts.init(document.querySelector(".map .chart"));
var svg = d3.select('.parallel .chart');

function button_themerive2() {
  window.open("themeriver.html");
}

function button_worldcloud() {
  panel1_1_h2.innerHTML = "疫情词云";
  panel1_1_myChart.clear();
  wordcould();
}

function button_map() {
  panel1_1_h2.innerHTML = "30省份一季度GDP数据";
  panel1_1_myChart.clear();
  map();
}

function button_parallel() {
  panel3_1_h2.innerHTML = "行业影响平行坐标图";
  myChart.clear();
  parallel();
}

function button_rose() {
  panel3_1_h2.innerHTML = "疫情期间各行业19年12-20年5月的股市平均指数";
  myChart.clear();
  rose();
}

function button_compare() {
  panel3_1_h2.innerHTML = "19年2月份与20年2月份股市平均指数对比";
  myChart.clear();
  compare();
}