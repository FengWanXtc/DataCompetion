var myChart = echarts.init(document.getElementById("main"));

myChart.on('click', function(params) {
    console.log(params.name);
    window.open(params.data.url);
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
});

var colorList = [[
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
    '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
    '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
    '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
    '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
    '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];

var   option = {
    // 图表标题
    title: {
        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '1-2月疫情热点新闻图谱',//主标题文本，'\n'指定换行
        x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                          // 'center' ¦ 'left' ¦ 'right'
                          // ¦ {number}（x坐标，单位px）
        y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                          // 'top' ¦ 'bottom' ¦ 'center'
                          // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',    // 标题边框颜色
        borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                // 接受数组分别设定上右下左边距，同css
        itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'        // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa'        // 副标题文字颜色
        }
    },
    backgroundColor: '#fff',
    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 500,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [  {
            "name": "家属口述｜一个“重症肺炎”患者的最后12天",
            "value": 98283,
            "symbolSize": 130.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[6],
                    "color": colorList[6]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42687023?keywords"
        },
            {
            "name": "天津一患者致973人被隔离：发热门诊流程管理不严，医院封控",
            "value": 98567,
            "symbolSize": 131,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[6],
                    "color": colorList[6]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42735496?keywords"
        }, {
            "name": "深夜，武汉市中心医院主任发文悼念医院小卖部老板林军",
            "value": 94732,
            "symbolSize": 131,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[7],
                    "color": colorList[7]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42770070?keywords"
        }, {
            "name": "钟南山院士最新论文：24天？关于新冠感染的潜伏期",
            "value": 108090,
            "symbolSize":132,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[8],
                    "color": colorList[8]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42750640?keywords"
        }, {
            "name": "不缺顶尖医院、有 SARS 前车之鉴，为何武汉仍然每一步都走晚了？",
            "value": 116312,
            "symbolSize":132,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[9],
                    "color": colorList[9]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42671800?keywords"
        }, {
            "name": "肺炎阴影下，去机场车站要注意什么？6 个要点，千万牢记",
            "value": 142400,
            "symbolSize": 132.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[10],
                    "color": colorList[10]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42657353?keywords"
        }, {
            "name": "为什么不该用双黄连预防新型冠状病毒？",
            "value": 150098,
            "symbolSize":134.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[11],
                    "color": colorList[11]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42703355?keywords"
        }, {
            "name": "新型肺炎 17 例死亡病例病情介绍",
            "value": 181068,
            "symbolSize": 135.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[12],
                    "color": colorList[12]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42662501?keywords"
        }, {
            "name": "一个血液内科医生对新冠状病毒肺炎的思索和建议----提请高级别医生审视",
            "value": 169233,
            "symbolSize": 136,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[13],
                    "color": colorList[13]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42752673?keywords"
        }, {
            "name": "华中科技大学附属同济医院器官移植科林正斌教授因新冠肺炎于今日去世",
            "value": 172863,
            "symbolSize":136,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[14],
                    "color": colorList[14]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42752244?keywords"
        }, {
            "name": "如果医护人员都无法保护自己，还能指望谁来保护大武汉？",
            "value": 204694,
            "symbolSize": 137,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[15],
                    "color": colorList[15]
                }
            },"url":"https://www.dxy.cn/bbs/newweb/pc/post/42657770?keywords"
        }, {
            "name": "最新！武汉同济、武汉协和同时发布新型冠状病毒肺炎快速诊疗指南！",
            "value": 489056,
            "symbolSize": 144.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[16],
                    "color": colorList[16]
                }
            },
            "url":"https://www.dxy.cn/bbs/newweb/pc/post/42657770?keywords"
        }, {
            "name": "悼念武汉李文亮医生",
            "value": 568330,
            "symbolSize": 146.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[17],
                    "color": colorList[17]
                }
            },
            "url":"https://www.dxy.cn/bbs/newweb/pc/post/42732348?keywords"
        }, {
            "name": "悲壮！武汉医护人员感染新冠病毒逾1000人！多名医生牺牲",
            "value": 713143,
            "symbolSize": 148,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[18],
                    "color": colorList[18]
                }
            },
            "url": "https://www.dxy.cn/bbs/newweb/pc/post/42650241?keywords"
        }, {
            "name": "丁香园上线「疫情地图」，帮你实时了解新型肺炎最新进展！",
            "value": 4279333,
            "symbolSize":163.5,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[19],
                    "color": colorList[19]
                }
            },
            "url": "https://www.dxy.cn/bbs/newweb/pc/post/42650241?keywords"
        }]
    }]
};
 
        // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);