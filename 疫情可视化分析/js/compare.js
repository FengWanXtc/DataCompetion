//var myChart = echarts.init(document.getElementById("main"));
function compare() {
	var option = {
		backgroundColor: 'rgba(105, 105, 105, 0.5)',
		tooltip: { //提示框组件
			trigger: 'axis',
			formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
			axisPointer: {
				type: 'shadow',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			textStyle: {
				color: '#FFFAFA',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 12,
			}
		},
		grid: {
			left: '5%',
			right: '5%',
			bottom: '5%',
			top: '5%',
			//	padding:'0 0 10 0',
			containLabel: true,
		},
		legend: {//图例组件，颜色和名字
			right: '10%',
			top: '10%',
			itemGap: 16,
			itemWidth: 18,
			itemHeight: 10,
			data: [{
				name: '2019年',
				//icon:'image://../wwwroot/js/url2.png', //路径
			},
			{
				name: '2020年',
			}],
			textStyle: {
				color: '#FFFAFA',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 25,
			}
		},
		xAxis: [
			{
				type: 'category',
				//	boundaryGap: true,//坐标轴两边留白
				data: ['农、林、牧、渔业', '采矿业', '制造业',
					'电力、热力、燃气及水生产和供应业', '建筑业', '批发和零售业',
					'交通运输、仓储和邮政业', '住宿和餐饮业', '信息传输、软件和信息技术服务业',
					'金融业', '房地产业', '租赁和商务服务业', '科学研究和技术服务业',
					'水利、环境和公共设施管理业', '居民服务、修理和其他服务业', '教育',
					"卫生和社会工作", "文化、体育和娱乐业", "综合"],
				axisLabel: { //坐标轴刻度标签的相关设置。
					interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
					//	margin:15,
					textStyle: {
						color: '#FFFAFA',

						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 20,
					},
					rotate: 30,
				},
				axisTick: {//坐标轴刻度相关设置。
					show: false,
				},
				axisLine: {//坐标轴轴线相关设置
					lineStyle: {
						color: '#fff',
						opacity: 0.2
					}
				},
				splitLine: { //坐标轴在 grid 区域中的分隔线。
					show: false,
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				splitNumber: 5,
				axisLabel: {
					textStyle: {
						color: '#FFFAFA',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 20,
					}
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#fff'],
						opacity: 0.10
					}
				}

			}
		],
		series: [
			{
				name: '2019年',
				type: 'bar',
				data: [4967.48199, 31243.68012, 215049.2457, 16846.22068,
					13609.35529, 13048.24251, 18754.98823, 579.2311409, 25305.17821,
					110845.1865, 19379.06138, 5719.183158, 3456.101487, 3000.911297,
					15.75670554, 932.4517406, 2223.610383, 5312.288912, 1300.415154],
				barWidth: 10,
				barGap: 0,//柱间距离
				//    label: {//图形上的文本标签
				//  normal: {
				//   show: true,
				//   position: 'top',
				//  textStyle: {
				//  color: '#a8aab0',
				//    fontStyle: 'normal',
				//   fontFamily: '微软雅黑',
				//    fontSize: 12,   
				//   },
				//   },
				//  },
				itemStyle: {
					normal: {
						show: true,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#B073FD'
						}, {
							offset: 1,
							color: '#336FD9'
						}]),
						barBorderRadius: 50,
						borderWidth: 0,
					}
				},
			},
			{
				name: '2020年',
				type: 'bar',
				data: [6487.372974, 26643.54601, 292305.9483, 17287.53216,
					11623.91615, 14152.03797, 21910.93997,
					558.1039506,
					40538.38436, 123050.1668, 19665.57764, 5840.996674,
					4931.098416, 3318.287419, 12.28750064, 1477.537182,
					3444.643772, 5934.391556, 1333.649158],
				barWidth: 10,
				barGap: 0,//柱间距离
				//    label: {//图形上的文本标签
				//   normal: {
				//    show: true,
				//    position: 'top',
				//  textStyle: {
				//         color: '#a8aab0',
				//         fontStyle: 'normal',
				//         fontFamily: '微软雅黑',
				//         fontSize: 12,   
				//      },
				//    },
				//},
				itemStyle: {
					normal: {
						show: true,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#69CBF2'
						}, {
							offset: 1,
							color: '#69CBF2'
						}]),
						barBorderRadius: 50,
						borderWidth: 0,
					}
				},
			}
		]
	};
	myChart.setOption(option);
}