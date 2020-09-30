//var myChart = echarts.init(document.getElementById("main"));

function cpi() {
    var option = {
        backgroundColor: 'rgba(105, 105, 105, 0.5)',
        title: {
            text: '',
            textStyle: {
                fontFamily: "KaiTi",
                color: "white",
                fontSize: 30,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
            x: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            color: ["#ACD6FF", "	#FF5809", "	#79FF79"],
            data: [{
                name: '17-18年',
                textStyle: {
                    color: "#ACD6FF",
                    fontSize: '20'
                }
            },
            {
                name: '18-19年',
                textStyle: {
                    color: "#FF5809",
                    fontSize: '20'
                }
            }, {
                name: '19-20年',
                textStyle: {
                    color: "#79FF79",
                    fontSize: '20'
                }
            }
            ],
            left: 'center',
            bottom: 'bottom'
        },
        grid: {
            top: 'middle',
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '80%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月",
                "1月", "2月", "3月", "4月", "5月"],
            axisLine: {
                lineStyle: {
                    color: "#FFFFFF",
                    fontSize: '15'
                }
            }
        },
        yAxis: {
            type: 'value',

            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: '15'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#FFFFFF"
                },
            },
            nameTextStyle: {
                color: "#FFFFFF"
            },
            splitArea: {
                show: false
            }
        },
        series: [{
            name: '17-18年',
            type: 'line',
            data: [150, 140, 180, 160, 190, 170,
                180, 150, 290, 210, 180, 180


            ],
            color: "	#ACD6FF",
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#ACD6FF' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '	#66B3FF' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '	#0080FF' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(103,179,250, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '	#ACD6FF',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#ACD6FF"
                }
            },
            smooth: true
        },
        {
            name: '18-19年',
            type: 'line',
            data: [190, 210, 230, 250, 250, 250, 220,
                190, 170, 230, 250, 270],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#FF5809' // 0% 处的颜色
                        },
                        {
                            offset: 0.4,
                            color: '	#FF5809' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '	#D94600' // 100% 处的颜色
                        }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(250,219,80, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '	#FF5809',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#FF5809"
                }
            },
            smooth: true
        },
        {
            name: '19-20年',
            type: 'line',
            data: [270, 280, 280, 300, 380, 450, 450,
                540, 520, 430, 330, 240

            ],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#BBFFBB' // 0% 处的颜色
                        },
                        {
                            offset: 0.6,
                            color: '	#79FF79' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '	#00EC00' // 100% 处的颜色
                        }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    // shadowColor: 'rgba(249,165,137, 0.5)',
                    // shadowBlur: 10,
                    // shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '	#79FF79',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#79FF79"
                }
            },
            smooth: true
        }
        ]
    };
    myChart_Panel2_2.setOption(option);
}


