"use strict";

(function () {
  map();
})();

function map() {
  var name_title = "";
  var subname = '';
  var nameColor = " rgb(55, 75, 113)";
  var name_fontFamily = '等线';
  var subname_fontSize = 15;
  var name_fontSize = 18;
  var mapName = 'china';
  var data_map = [{
    name: "北京",
    value: -6.7
  }, {
    name: "天津",
    value: -9.5
  }, {
    name: "河北",
    value: -6.2
  }, {
    name: "山西",
    value: -4.6
  }, {
    name: "内蒙古",
    value: -5.8
  }, {
    name: "辽宁",
    value: -7.7
  }, {
    name: "吉林",
    value: -6.6
  }, {
    name: "黑龙江",
    value: -8.3
  }, {
    name: "上海",
    value: -6.7
  }, {
    name: "江苏",
    value: -5
  }, {
    name: "浙江",
    value: -5.6
  }, {
    name: "安徽",
    value: -6.5
  }, {
    name: "福建",
    value: -5.2
  }, {
    name: "江西",
    value: -3.8
  }, {
    name: "山东",
    value: -5.8
  }, {
    name: "河南",
    value: -6.7
  }, {
    name: "湖北",
    value: -39.2
  }, {
    name: "湖南",
    value: -1.9
  }, {
    name: "重庆",
    value: -6.5
  }, {
    name: "四川",
    value: -3
  }, {
    name: "贵州",
    value: -1.9
  }, {
    name: "云南",
    value: -4.3
  }, {
    name: "西藏",
    value: 0
  }, {
    name: "陕西",
    value: -5.6
  }, {
    name: "甘肃",
    value: -3.4
  }, {
    name: "青海",
    value: -2.1
  }, {
    name: "宁夏",
    value: -2.8
  }, {
    name: "新疆",
    value: -0.2
  }, {
    name: "广东",
    value: -6.7
  }, {
    name: "广西",
    value: -3.3
  }, {
    name: "海南",
    value: -4.5
  }];
  var geoCoordMap = {};
  var toolTipData = [{
    name: "北京",
    value: [{
      name: "GDP",
      value: 7462.2
    }, {
      name: "增速",
      value: "-6.7%"
    }]
  }, {
    name: "天津",
    value: [{
      name: "GDP",
      value: 2874.35
    }, {
      name: "增速",
      value: "-9.5%"
    }]
  }, {
    name: "河北",
    value: [{
      name: "GDP",
      value: 7410.1
    }, {
      name: "增速",
      value: "-6.2%"
    }]
  }, {
    name: "山西",
    value: [{
      name: "GDP",
      value: 3634.73
    }, {
      name: "增速",
      value: "-4.6%"
    }]
  }, {
    name: "内蒙古",
    value: [{
      name: "GDP",
      value: 3550.9
    }, {
      name: "增速",
      value: "-5.8%"
    }]
  }, {
    name: "辽宁",
    value: [{
      name: "GDP",
      value: 5082.1
    }, {
      name: "增速",
      value: "-7.7%"
    }]
  }, {
    name: "吉林",
    value: [{
      name: "GDP",
      value: 2441.84
    }, {
      name: "增速",
      value: "-6.6%"
    }]
  }, {
    name: "黑龙江",
    value: [{
      name: "GDP",
      value: 2409
    }, {
      name: "增速",
      value: "-8.3%"
    }]
  }, {
    name: "上海",
    value: [{
      name: "GDP",
      value: 7856.62
    }, {
      name: "增速",
      value: "-6.7%"
    }]
  }, {
    name: "江苏",
    value: [{
      name: "GDP",
      value: 21002.8
    }, {
      name: "增速",
      value: "-5%"
    }]
  }, {
    name: "浙江",
    value: [{
      name: "GDP",
      value: 13114
    }, {
      name: "增速",
      value: "-5.6%"
    }]
  }, {
    name: "安徽",
    value: [{
      name: "GDP",
      value: 7821.3
    }, {
      name: "增速",
      value: "-6.5%"
    }]
  }, {
    name: "福建",
    value: [{
      name: "GDP",
      value: 8999.09
    }, {
      name: "增速",
      value: "-5.2%"
    }]
  }, {
    name: "江西",
    value: [{
      name: "GDP",
      value: 5343.4
    }, {
      name: "增速",
      value: "-3.8%"
    }]
  }, {
    name: "山东",
    value: [{
      name: "GDP",
      value: 14919.3
    }, {
      name: "增速",
      value: "-5.8%"
    }]
  }, {
    name: "河南",
    value: [{
      name: "GDP",
      value: 11510.15
    }, {
      name: "增速",
      value: "-6.7%"
    }]
  }, {
    name: "湖北",
    value: [{
      name: "GDP",
      value: 6379.35
    }, {
      name: "增速",
      value: "-39.2%"
    }]
  }, {
    name: "湖南",
    value: [{
      name: "GDP",
      value: 8824.82
    }, {
      name: "增速",
      value: "-1.9%"
    }]
  }, {
    name: "重庆",
    value: [{
      name: "GDP",
      value: 4987.66
    }, {
      name: "增速",
      value: "-6.5%"
    }]
  }, {
    name: "四川",
    value: [{
      name: "GDP",
      value: 10172.85
    }, {
      name: "增速",
      value: "-3%"
    }]
  }, {
    name: "贵州",
    value: [{
      name: "GDP",
      value: 3704.04
    }, {
      name: "增速",
      value: "-1.9%"
    }]
  }, {
    name: "云南",
    value: [{
      name: "GDP",
      value: 5107.77
    }, {
      name: "增速",
      value: "-4.3%"
    }]
  }, {
    name: "西藏",
    value: [{
      name: "GDP",
      value: "-"
    }, {
      name: "增速",
      value: "-"
    }]
  }, {
    name: "陕西",
    value: [{
      name: "GDP",
      value: 5439.66
    }, {
      name: "增速",
      value: "-5.6%"
    }]
  }, {
    name: "甘肃",
    value: [{
      name: "GDP",
      value: 1908.3
    }, {
      name: "增速",
      value: "-3.4%"
    }]
  }, {
    name: "青海",
    value: [{
      name: "GDP",
      value: 652.68
    }, {
      name: "增速",
      value: "-2.1%"
    }]
  }, {
    name: "宁夏",
    value: [{
      name: "GDP",
      value: 808.13
    }, {
      name: "增速",
      value: "-2.8%"
    }]
  }, {
    name: "新疆",
    value: [{
      name: "GDP",
      value: 3550.9
    }, {
      name: "增速",
      value: "-0.2%"
    }]
  }, {
    name: "广东",
    value: [{
      name: "GDP",
      value: 25518.67
    }, {
      name: "增速",
      value: "-6.7%"
    }]
  }, {
    name: "广西",
    value: [{
      name: "GDP",
      value: 4670.85
    }, {
      name: "增速",
      value: "-3.3%"
    }]
  }, {
    name: "海南",
    value: [{
      name: "GDP",
      value: 1115.28
    }, {
      name: "增速",
      value: "-4.5%"
    }]
  }];
  /*获取地图数据*/

  panel1_1_myChart.showLoading();
  var mapFeatures = echarts.getMap(mapName).geoJson.features;
  panel1_1_myChart.hideLoading();
  mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name; // 地区经纬度

    geoCoordMap[name] = v.properties.cp;
  }); // console.log("============geoCoordMap===================")
  // console.log(geoCoordMap)
  // console.log("================data======================")

  console.log(data_map);
  console.log(toolTipData);
  var max = 480,
      min = 9; // todo 

  var maxSize4Pin = 100,
      minSize4Pin = 20;

  var convertData = function convertData(data_map) {
    var res = [];

    for (var i = 0; i < data_map.length; i++) {
      var geoCoord = geoCoordMap[data_map[i].name];

      if (geoCoord) {
        res.push({
          name: data_map[i].name,
          value: geoCoord.concat(data_map[i].value)
        });
      }
    }

    return res;
  };

  var option = {
    title: {
      text: name_title,
      subtext: subname,
      x: 'center',
      textStyle: {
        color: nameColor,
        fontFamily: name_fontFamily,
        fontSize: name_fontSize
      },
      subtextStyle: {
        fontSize: subname_fontSize,
        fontFamily: name_fontFamily
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function formatter(params) {
        if (typeof params.value[2] == "undefined") {
          var toolTiphtml = '';

          for (var i = 0; i < toolTipData.length; i++) {
            if (params.name == toolTipData[i].name) {
              toolTiphtml += toolTipData[i].name + ':<br>';

              for (var j = 0; j < toolTipData[i].value.length; j++) {
                toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>";
              }
            }
          }

          console.log(toolTiphtml); // console.log(convertData(data))

          return toolTiphtml;
        } else {
          var toolTiphtml = '';

          for (var i = 0; i < toolTipData.length; i++) {
            if (params.name == toolTipData[i].name) {
              toolTiphtml += toolTipData[i].name + ':<br>';

              for (var j = 0; j < toolTipData[i].value.length; j++) {
                toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>";
              }
            }
          }

          console.log(toolTiphtml); // console.log(convertData(data))

          return toolTiphtml;
        }
      }
    },
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
      show: true,
      min: -10,
      max: 0,
      left: 'left',
      top: 'bottom',
      text: ['GDP降低速率', ''],
      // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
        // color: ['#3B5077', '#031525'] // 蓝黑
        // color: ['#ffc0cb', '#800080'] // 红紫
        //color: ['#3C3B3F', '#605C3C'] // 黑绿
        // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
        // color: ['#23074d', '#cc5333'] // 紫红
        color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#1488CC', '#2B32B2'] // 浅蓝
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿

      }
    },

    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
      show: true,
      map: mapName,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#031525',
          borderColor: '#3B5077'
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: [{
      name: '散点',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data_map),
      symbolSize: function symbolSize(val) {
        return val[2] / 10;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#05C3F9'
        }
      }
    }, {
      type: 'map',
      map: mapName,
      geoIndex: 0,
      aspectScale: 0.75,
      //长宽比
      showLegendSymbol: false,
      // 存在legend时显示
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#fff'
          }
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#031525',
          borderColor: '#3B5077'
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      animation: false,
      data: data_map
    }, {
      name: '点',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbol: 'pin',
      //气泡
      symbolSize: function symbolSize(val) {
        var a = (minSize4Pin - maxSize4Pin) / (min - max);
        var b = minSize4Pin - a * min;
        b = maxSize4Pin - a * max;
        return a * val[2] + b + 20;
      },
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 9
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#A52A2A' //标志颜色

        }
      },
      zlevel: 6,
      data: data_map
    }, {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(data_map.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 5)),
      symbolSize: function symbolSize(val) {
        return val[2] / 10;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: 'yellow',
          shadowBlur: 10,
          shadowColor: 'yellow'
        }
      },
      zlevel: 1
    }]
  };
  panel1_1_myChart.setOption(option);
}