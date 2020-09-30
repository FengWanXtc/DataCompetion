//var myChart = echarts.init(document.getElementById("main"));
function cpiall() {
    var option = {
        backgroundColor: 'rgba(105, 105, 105, 0.5)',
        title: {
            text: '',
            textStyle: {
                fontFamily: "KaiTi",
                color: "#FFFFFF",
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
            color: ["#FFB6C1", "#4B0082", "	#FF0000", "#00FF7F", "#FFD700",
                "#BA55D3", "	#0000FF", "#000000"],
                data: [{
                    name: '食品烟酒类',
                    textStyle: {
                        color: "#FFB6C1",
                        fontSize: '15'
                    }
                }, { name: '衣着类',
                    textStyle: {
                        color: "#4B0082",
                        fontSize: '15'
                    }
                }, { name: '居住类',
                    textStyle: {
                        color: "#FF0000",
                        fontSize: '15'
                    }
                }, { name: "生活用品及服务类",
                    textStyle: {
                        color: "#00FF7F",
                        fontSize: '15'
                    }
                }, { name: "交通和通信类", 
                    textStyle: {
                        color: "#FFD700",
                        fontSize: '15'
                    }
                }, 
                    { name: "教育文化和娱乐类",  
                    textStyle: {
                        color: "#BA55D3",
                        fontSize: '15'
                    }
                }, { name: "医疗保健类",
                    textStyle: {
                        color: "#0000FF",
                        fontSize: '15'
                    }
                }, { name: "其他用品和服务类",
                    textStyle: {
                        color: "#000000",
                        fontSize: '15'
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
            height: '75%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月",
                "1月", "2月", "3月", "4月", "5月"],
            axisLine: {
                lineStyle: {
                    color: "#FFFFFF"
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
            axisLine: {
                show: false,
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
            name: '食品烟酒类',
            type: 'line',
            data: [61, 67, 73, 84, 114, 139,
                129, 152, 160, 136, 113, 85
            ],
            color: "#FFB6C1",
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#FFB6C1' // 0% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '	#FFB6C1',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#FFB6C1"
                }
            },
            smooth: true
        },
        {
            name: '衣着类',
            type: 'line',
            data: [18, 18, 16, 16, 12, 11, 8, 6,
                5, 7, 6, 6],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#4B0082' // 0% 处的颜色
                        }

                        ],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '		#4B0082',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#4B0082"
                }
            },
            smooth: true
        },
        {
            name: '居住类',
            type: 'line',
            data: [16, 15, 1, 7, 5, 4, 5, 5, 3, -1, -3, -5],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#FF0000' // 0% 处的颜色
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
                    color: '#FF0000',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#FF0000"
                }
            },
            smooth: true
        },
        {
            name: '生活用品及服务类',
            type: 'line',
            data: [8, 8, 7, 6, 6, 6, 4, 4, 2, 1, 3, 1],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#00FF7F' // 0% 处的颜色
                        }

                        ],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '#00FF7F',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#00FF7F"
                }
            },
            smooth: true
        },
        {
            name: '交通和通信类',
            type: 'line',
            data: [-19, -21, -23, -29, -35, -28, -7, 9, -16, -38, -49, -51],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#FFD700' // 0% 处的颜色
                        }

                        ],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '	#FFD700',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#FFD700"
                }
            },
            smooth: true
        }, {
            name: '教育文化和娱乐类',
            type: 'line',
            data: [24, 23, 21, 17, 19, 17, 18, 22, 10, 25, 20, 22],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#BA55D3' // 0% 处的颜色
                        }

                        ],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '	#BA55D3',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#BA55D3"
                }
            },
            smooth: true
        },
        {
            name: '医疗保健类',
            type: 'line',
            data: [25, 26, 23, 22, 21, 20, 21, 23, 22, 22, 22, 21],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#0000FF' // 0% 处的颜色
                        }

                        ],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '	#0000FF',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#0000FF"
                }
            },
            smooth: true
        },
        {
            name: '其他用品和服务类',
            type: 'line',
            color:'#FFFFFF',
            data: [27, 34, 47, 58, 55, 45, 44, 48, 44, 53, 48, 53],
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '	#000000' // 0% 处的颜色
                        }

                        ],
                        globalCoord: false // 缺省为 false
                    },

                }
            },
            itemStyle: {
                normal: {
                    color: '	#000000',
                    borderWidth: 8,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "	#000000"
                }
            },
            smooth: true
        }
        ]
    };
    myChart_Panel2_2.setOption(option);
}

