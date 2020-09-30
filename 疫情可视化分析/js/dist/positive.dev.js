"use strict";

//var myChart = echarts.init(document.getElementById("main"));
function positive() {
  var option = {
    title: {
      text: '',
      textStyle: {
        align: 'center',
        color: '#fff',
        fontSize: 20
      },
      top: '1%',
      left: 'center'
    },
    color: ["#315C94", "#497FB6", "#6F8FCF", "#7AA0BB", "#9FBEDD"],
    backgroundColor: 'rgba(105, 105, 105, 0.5)',
    textStyle: {
      color: '#fff'
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          type: 'dashed',
          width: 2,
          color: '#4B941A'
        },
        animation: true
      }
    },
    legend: {
      show: false,
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      left: 'right'
    },
    grid: {
      show: false
    },
    yAxis: {
      data: ['少', '基本不变', '多'],
      axisLabel: {
        show: true,
        formatter: function formatter(value) {
          return value.split("").join("\n");
        },
        textStyle: {
          color: '#c3dbff',
          //更改坐标轴文字颜色
          fontSize: 20 //更改坐标轴文字大小

        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#555']
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: ['white']
        }
      }
    },
    xAxis: {
      data: ['开心', '快乐', '兴奋'],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#c3dbff',
          //更改坐标轴文字颜色
          fontSize: 20 //更改坐标轴文字大小

        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white'
        }
      }
    },
    series: [{
      name: 'a',
      type: 'scatter',
      symbol: 'circle',
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      symbolSize: function symbolSize(data) {
        return Math.sqrt(data[2]) * 1;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function formatter(param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: 'red'
        }
      },
      data: [['开心', '少', 5150], ['快乐', '少', 5130], ['兴奋', '少', 2190]]
    }, {
      name: 'c',
      type: 'scatter',
      symbol: 'circle',
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      symbolSize: function symbolSize(data) {
        return Math.sqrt(data[2]) * 1;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function formatter(param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: '#FFFF00'
        }
      },
      data: [['开心', '基本不变', 4480], ['快乐', '基本不变', 4540], ['兴奋', '基本不变', 4540]]
    }, {
      name: 'd',
      type: 'scatter',
      symbol: 'circle',
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      symbolSize: function symbolSize(data) {
        return Math.sqrt(data[2]) * 1;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function formatter(param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: '#00FFFF'
        }
      },
      data: [['开心', '多', 350], ['快乐', '多', 340], ['兴奋', '多', 280]]
    }]
  };
  myChart_Panel2_2.setOption(option);
}