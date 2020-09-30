 (function(){
    raderchart1();
 })();
 
 function raderchart1() {
    //////////////////////////////////////////////////////////////
    //////////////////////// Set-Up //////////////////////////////
    //////////////////////////////////////////////////////////////
    var margin = { top: 50, right: 80, bottom: 50, left: 80 },
        width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right ,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom) ;

    //////////////////////////////////////////////////////////////
    ////////////////////////// Data //////////////////////////////
    //////////////////////////////////////////////////////////////

    var data = [
        {
            name: '一月',
            axes: [
                { axis: '第一产业', value: 0 },
                { axis: '第二产业', value: 0 },
                { axis: '第三产业', value: 0 }
            ],
            color: '#44cef6'
        },
        {
            name: '二月',
            axes: [
                { axis: '第一产业', value: 18 },
                { axis: '第二产业', value: 9 },
                { axis: '第三产业', value: 12 }
            ],
            color: '#fff200'
        },
        {
            name: '三月',
            axes: [
                { axis: '第一产业', value: 29 },
                { axis: '第二产业', value: 20 },
                { axis: '第三产业', value: 24 }
            ],
            color: '#ffbf00'
        },
        {
            name: '四月',
            axes: [
                { axis: '第一产业', value: 32 },
                { axis: '第二产业', value: 24 },
                { axis: '第三产业', value: 29 }
            ],
            color: '#ff461f'
        },
        {
            name: '五月',
            axes: [
                { axis: '第一产业', value: 28 },
                { axis: '第二产业', value: 11 },
                { axis: '第三产业', value: 19 }
            ],
            color: '#9ed900'
        }
    ];

    console.log(data[0].color);

    //////////////////////////////////////////////////////////////
    ///// Second example /////////////////////////////////////////
    ///// Chart legend, custom color, custom unit, etc. //////////
    //////////////////////////////////////////////////////////////
    var radarChartOptions2 = {
        w: 400,
        h: 500,
        margin: margin,
        maxValue: 30,
        levels: 5,
        roundStrokes: false,
        color: d3.scaleOrdinal().range(["#44cef6", "#fff200", "#ffbf00", "#ff461f", "#9ed900"]),
        format: '.0f',
        //疫情期间三次产业环比负增长图
        legend: { title: '', translateX: 160, translateY: 40 ,color:'#FFFFFF'},
        
        unit: '%'
    };
    // Draw the chart, get a reference the created svg element :
    d3_panel1_2 = RadarChart(".raderchart .chart", data, radarChartOptions2);
    //svg_radar2.remove();
}