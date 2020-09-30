function wordcould() {
    option = {
        title: {
            //text: '',//标题
            x: 'center',
            textStyle: {
                fontSize: 23
            }
     
        },
        //backgroundColor: '#F7F7F7',
        tooltip: {
            show: true
        },
        series: [{
            name: '热点分析',//数据提示窗标题
            type: 'wordCloud',
            sizeRange: [0, 80],//画布范围，如果设置太大会出现少词（溢出屏幕）
            rotationRange: [-45, 90],//数据翻转范围
            //shape: 'circle',
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 6
            },
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [
                {
                    name: "新冠病毒",
                    value: 609
                  },
                  {
                    name: "路透社",
                    value: 441
                  },
                  {
                    name: "卫报",
                    value: 407
                  },
                  {
                    name: "英国",
                    value: 375
                  },
                  {
                    name: "美国有线电视新闻网",
                    value: 315
                  },
                  {
                    name: "体育",
                    value: 303
                  },
                  {
                    name: "美国",
                    value: 298
                  },
                  {
                    name: "中国",
                    value: 292
                  },
                  {
                    name: "足球",
                    value: 267
                  },
                  {
                    name: "特朗普",
                    value: 266
                  },
                  {
                    name: "娱乐圈",
                    value: 258
                  },
                  {
                    name: "英国广播公司",
                    value: 250
                  },
                  {
                    name: "封锁",
                    value: 243
                  },
                  {
                    name: "CNNPolitics",
                    value: 233
                  },
                  {
                    name: "旅行",
                    value: 232
                  },
                  {
                    name: "金融",
                    value: 219
                  },
                  {
                    name: "皇家",
                    value: 196
                  },
                  {
                    name: "恐慌",
                    value: 190
                  },
                  {
                    name: "商贸",
                    value: 182
                  },
                  {
                    name: "油",
                    value: 179
                  },
                  {
                    name: "健康",
                    value: 173
                  },
                  {
                    name: "联合会",
                    value: 169
                  },
                  {
                    name: "股票",
                    value: 169
                  },
                  {
                    name: "死亡",
                    value: 168
                  },
                  {
                    name: "油价",
                    value: 166
                  },
                  {
                    name: "运输",
                    value: 156
                  },
                  {
                    name: "斗争",
                    value: 156
                  },
                  {
                    name: "意大利",
                    value: 153
                  },
                  {
                    name: "澳大利亚",
                    value: 153
                  },
                  {
                    name: "工人",
                    value: 149
                  },
                  {
                    name: "经济",
                    value: 147
                  },
                  {
                    name: "旅游",
                    value: 146
                  },
                  {
                    name: "鲍里斯",
                    value: 145
                  },
                  {
                    name: "欧盟",
                    value: 144
                  },
                  {
                    name: "英国国民医疗服务体系",
                    value: 141
                  },
                  {
                    name: "症状",
                    value: 136
                  },
                  {
                    name: "约翰逊",
                    value: 136
                  },
                  {
                    name: "通告",
                    value: 133
                  },
                  {
                    name: "传播",
                    value: 125
                  },
                  {
                    name: "纽约",
                    value: 125
                  },
                  {
                    name: "收费",
                    value: 121
                  },
                  {
                    name: "政府",
                    value: 120
                  },
                  {
                    name: "世界卫生组织",
                    value: 119
                  },
                  {
                    name: "日本",
                    value: 119
                  },
                  {
                    name: "欧洲",
                    value: 118
                  }]//name和value建议用小写，大写有时会出现兼容问题
        }]
    };
    panel1_1_myChart.setOption(option);
}