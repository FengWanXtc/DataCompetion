//var myChart = echarts.init(document.getElementById("main"));
function rose() {
    var option = {
        backgroundColor: 'rgba(105, 105, 105, 0.5)',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}千万元"
        },
        legend: {
            x: 'center',
            y: '5%',
            data: ['农、林、牧、渔业', '采矿业', '制造业', '电力、热力、燃气及水生产和供应业', '建筑业', '批发和零售业', '交通运输、仓储和邮政业', '住宿和餐饮业', '信息传输、软件和信息技术服务业', '金融业', '交通运输、仓储和邮政业', '房地产业', "租赁和商务服务业", "科学研究和技术服务业", "水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业", "综合"],
            icon: 'circle',
            textStyle: {
                color: '#fff',
				 fontSize: 20,
            }
        },
        calculable: true,
        series: [{
            name: '',
            type: 'pie',
            //起始角度，支持范围[0, 360]
            startAngle: 0,
            //饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: [100, 300],
            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
            center: ['50%', '35%'],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
            // 'radius' 面积展现数据的百分比，半径展现数据的大小。
            //  'area' 所有扇区面积相同，仅通过半径展现数据大小
            roseType: 'area',
            //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}千万元'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length2: 1,
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 6689.952891,
                name: '农、林、牧、渔业',
                itemStyle: {
                    normal: {
                        color: '#f845f1'
                    }
                }
            },
            {
                value: 26152.97584,
                name: '采矿业',
                itemStyle: {
                    normal: {
                        color: '#ad46f3'
                    }
                }
            },
            {
                value: 287062.3942,
                name: '制造业',
                itemStyle: {
                    normal: {
                        color: '#5045f6'
                    }
                }
            },
            {
                value:17511.14329,
                name: '电力、热力、燃气及水生产和供应业',
                itemStyle: {
                    normal: {
                        color: '#4777f5'
                    }
                }
            },
            {
                value: 12048.9291,
                name: '建筑业',
                itemStyle: {
                    normal: {
                        color: '#44aff0'
                    }
                }
            },
            {
                value:14397.59829,
                name: '批发和零售业',
                itemStyle: {
                    normal: {
                        color: '#45dbf7'
                    }
                }
            },
            {
                value: 20868.4105,
                name: '交通运输、仓储和邮政业',
                itemStyle: {
                    normal: {
                        color: '#f6d54a'
                    }
                }
            },
            {
                value: 579.5071543,
                name: '住宿和餐饮业',
                itemStyle: {
                    normal: {
                        color: '#f69846'
                    }
                }
            },
            {
                value:37987.45694,
                name: '信息传输、软件和信息技术服务业',
                itemStyle: {
                    normal: {
                        color: '#ff4343'
                    }
                }
            },
            {
                value:122029.4762,
                name: '金融业',
                itemStyle: {
                    normal: {
                        color: '#87ceeb'
                    }
                }
            },
            {
                value: 19840.24892,
                name: '房地产业',
                itemStyle: {
                    normal: {
                        color: '#00FF7F'
                    }
                }
            },
            {
                value: 6026.26303,
                name: '租赁和商务服务业',
                itemStyle: {
                    normal: {
                        color: '#FFFF00'
                    }
                }
            },
            {
                value: 4945.024345,
                name: '科学研究和技术服务业',
                itemStyle: {
                    normal: {
                        color: '#8A2BE2'
                    }
                }
            },
            {
                value: 3326.229394,
                name: '水利、环境和公共设施管理业',
                itemStyle: {
                    normal: {
                        color: '#7FFFAA'
                    }
                }
            },
            {
                value: 12.76213073,
                name: '居民服务、修理和其他服务业',
                itemStyle: {
                    normal: {
                        color: '#FFB6C1'
                    }
                }
            },
            {
                value: 1673.101896,
                name: '教育',
                itemStyle: {
                    normal: {
                        color: '#FFD700'
                    }
                }
            },
            {
                value: 3449.894907,
                name: '卫生和社会工作',
                itemStyle: {
                    normal: {
                        color: '#FA8072'
                    }
                }
            },
            {
                value: 5686.617313,
                name: '文化、体育和娱乐业',
                itemStyle: {
                    normal: {
                        color: '#D3D3D3'
                    }
                }
            },
            {
                value: 1258.908526,
                name: '综合',
                itemStyle: {
                    normal: {
                        color: '#40E0D0'
                    }
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },

            {
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}