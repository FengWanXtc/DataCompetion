"use strict";

function themerive2() {
  svg = d3.select('.parallel .chart');
  var width = +svg.attr('width');
  var height = +svg.attr('height');
  var margin = {
    top: 100,
    right: 120,
    bottom: 100,
    left: 120
  };
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;

  var xValue = function xValue(datum) {
    return dates.indexOf(datum['日期']);
  };

  var yValue = function yValue(datum) {
    return datum['市值'];
  };

  var low_max = 4000;
  var up_max = 1000;
  var limit_up_max = -1;
  var xScale, yScale, nyScale;
  var maxX, maxY;
  var dates;
  var aduration = 300;
  var totalduration = 2000;
  var metapop;
  var rawdata;
  var xAxisLabel = ' ';
  var yAxisLabel = '市值';
  var industry_color = {
    "A农林牧渔": "#DD6B66",
    "B采矿业": "#759AA0",
    "C制造业": "#E69D87",
    "D能源供应": "#8DC1A9",
    "E建筑业": "#EA7E53",
    "F批发零售": "#EEDD78",
    "G交通邮储": "#73A373",
    "H住宿餐饮": "#73B9BC",
    "I信息技术": "#7289AB",
    "J金融业": "#91CA8C",
    "K房地产业": "#F49F42",
    "L租赁商务": "#AA312C",
    "M科研技术": "#39656D",
    "N公共设施": "#B35E45",
    "O居民服务": "#4B8E6F",
    "P教育": "#B6481C",
    "Q卫生社工": "#BBA838",
    "R文体娱乐": "#386F38",
    "S综合": "#388589"
  };

  var renderinit = function renderinit(data, seq) {
    // Linear Scale: Data Space -> Screen Space; 
    xScale = d3.scaleLinear().domain([0, dates.length - 1]).range([0, innerWidth]); // Introducing y-Scale; 

    yScale = d3.scaleLinear().domain([up_max, 0, -low_max]) // "extent" is equivalent to [d3.min(data, xValue), d3.max(data, xValue)]; 
    .range([innerHeight, innerHeight / 2, 0]).nice();
    nyScale = d3.scaleLinear().domain([-up_max, 0, low_max]).range([innerHeight, innerHeight / 2, 0]).nice(); // generate maxX and maxY; 

    maxX = xScale(d3.max(data, xValue));
    maxY = yScale(d3.max(data, yValue)); // The reason of using group is that nothing is rendered outside svg, so margin of svg is always blank while margin of group is rendered inside svg; 

    var g = svg.append('g').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")).attr('id', 'maingroup');
    svg.append('g').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")).attr('id', 'manugroup'); // Adding axes; 

    var formatter = d3.format("0");
    var yAxis = d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat(function (d) {
      if (d === 0) return 0; // No label for '0'
      else if (d < 0) d = -d; // No nagative labels

      return formatter(d);
    }) //.tickFormat(d3.format('.2s'))
    .tickPadding(10); // .tickPadding is used to prevend intersection of ticks; 

    var xAxis = d3.axisBottom(xScale) //.tickFormat(d3.format('.2s'))
    .tickSize(-innerHeight).tickPadding(10).ticks(24);
    var yAxisGroup = g.append('g').call(yAxis).attr('id', 'yaxis');
    d3.selectAll('#yaxis .tick text').attr('transform', "translate(".concat(0, ", ", -3, ")"));
    yAxisGroup.append('text').attr('transform', "rotate(-90)").attr('x', -innerHeight / 2).attr('y', -80).attr('fill', 'white').text(yAxisLabel).attr('text-anchor', 'middle'); // Make label at the middle of axis. 

    yAxisGroup.selectAll('.domain').remove(); // we can select multiple tags using comma to seperate them and we can use space to signify nesting; 

    var xAxisGroup = g.append('g').call(xAxis).attr('transform', "translate(".concat(0, ", ", innerHeight, ")")).attr('id', 'xaxis');
    d3.selectAll('#xaxis .tick text').attr('transform', "translate(".concat(0, ", ", 5, ")"));
    xAxisGroup.append('text').attr('y', 60).attr('x', innerWidth / 2).attr('fill', 'white').text(xAxisLabel);
    xAxisGroup.selectAll('.domain').remove();
    var industry_name = ["A农林牧渔", "B采矿业", "C制造业", "D能源供应", "E建筑业", "F批发零售", "G交通邮储", "H住宿餐饮", "I信息技术", "J金融业", "K房地产业", "L租赁商务", "M科研技术", "N公共设施", "O居民服务", "P教育", "Q卫生社工", "R文体娱乐", "S综合"]; // draw legend

    var legend = svg.selectAll(".legend").data(industry_name).enter().append("g").attr("class", "legend").attr("transform", function (d, i) {
      return "translate(" + (innerWidth + 130) + "," + (i * 20 + 140) + ")";
    }); // draw legend colored rectangles

    legend.append("rect").data(industry_name).attr("x", 0).attr("y", 0).attr("width", 30).attr("height", 15).style("fill", function (d, i) {
      return industry_color[d];
    }); // draw legend text

    legend.append("text").data(industry_name).attr("class", "legend_text").attr("x", 40).attr("y", 9).attr("dy", ".2em").attr("fill", '#333333').style("text-anchor", "start").text(function (d) {
      return d;
    });
  };

  var render = function render(data, keys, area) {
    var g;

    if (keys.includes('C制造业')) {
      g = d3.select('#maingroup');
    } else {
      g = d3.select('#manugroup');
    }

    var layers = d3.stack().keys(keys).offset(d3.stackOffsetNone) //.order(d3.stackOrderDescending)
    .order(d3.stackOrderNone)(data);
    var clipedrect = g.append("clipPath") // Warning: Never append new rect after groups or it shall conflict with barcharts; 
    .attr("id", "rectClip").append("rect").attr('class', 'rect-clip').attr("width", 0).attr("height", innerHeight);
    g.selectAll("path").data(layers).join("path") // use join to avoid split according to "enter" and "update"; 
    .attr("opacity", 0.9) //.transition().duration(3000)
    .attr("d", function (d, i) {
      // console.log(d);
      return area(d);
    }).attr("clip-path", "url(#rectClip)") // fill attrbute requires designers to assign colors for each province; 
    .attr("fill", function (d, i) {
      // console.log(d["key"]);
      return industry_color[d["key"]];
    });
    clipedrect.transition().ease(d3.easeLinear).duration(totalduration).attr("width", innerWidth); //const path = g.selectAll("path")
    //.data(layers)
    //.join("path") // use join to avoid split according to "enter" and "update"; 
    //.attr("opacity",0.9)
    //.transition().duration(3000)
    //.attr("d", area)
    // fill attrbute requires designers to assign colors for each province; 
    //.attr("fill", function (d,i) { return industry_color[d["key"]]; });
  };

  var seqgen = function seqgen(data) {
    // re-arrange the data sequentially; 
    var prestack = [];
    dates.forEach(function (datum) {
      prestack.push({
        '日期': datum
      });
    });
    data.forEach(function (datum) {
      prestack[dates.indexOf(datum['日期'])][datum['行业']] = yValue(datum);
    });
    return prestack;
  };

  d3.csv('csv/industry.csv').then(function (data) {
    data.forEach(function (datum) {
      // pre-process the data; 
      datum['市值'] = +datum['市值'];
    }); // remove duplicated items; 

    alldates = Array.from(new Set(data.map(function (datum) {
      return datum['日期'];
    }))); // make sure dates are listed according to real time order; 

    alldates = alldates.sort(function (a, b) {
      // turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });
    dates = alldates; // generate sequential data; 

    var sequential = [];
    alldates.forEach(function (datum) {
      sequential.push([]);
    });
    data.forEach(function (datum) {
      sequential[alldates.indexOf(datum['日期'])].push(datum);
    }); // smooth new infec; 

    var t = 0;

    var originyValue = function originyValue(datum) {
      return datum['市值'];
    };

    for (; t < sequential.length; t++) {
      sequential[t].forEach(function (datum) {
        if (t == 0) {
          datum.newinfec_s = originyValue(datum);
        } else if (t == 1) {
          datum.newinfec_s = (originyValue(datum) + originyValue(sequential[t - 1].find(function (x) {
            return x['行业'] === datum['行业'];
          }))) / 2.0;
        } else {
          datum.newinfec_s = (originyValue(datum) + originyValue(sequential[t - 1].find(function (x) {
            return x['行业'] === datum['行业'];
          })) + originyValue(sequential[t - 2].find(function (x) {
            return x['行业'] === datum['行业'];
          }))) / 3.0;
        }
      });
    } // split data from Hu-Bei and not from Hu-Bei; 


    data_manu = data.filter(function (datum) {
      return datum['行业'] === 'C制造业';
    });
    data = data.filter(function (datum) {
      return datum['行业'] !== 'C制造业';
    }); // stack data; 

    var prestack = seqgen(data);
    var prestack_manu = seqgen(data_manu); // let keys = Array.from(new Set(data.map( datum => datum['行业'])));

    var sortedforkey = sequential[sequential.length - 1].sort(function (a, b) {
      return b['市值'] - a['市值'];
    });
    var keys = sortedforkey.map(function (d) {
      return d['行业'];
    });
    keys = keys.filter(function (d) {
      return d !== 'C制造业';
    });
    var keys_manu = Array.from(new Set(data_manu.map(function (datum) {
      return datum['行业'];
    }))); // generate low_max and up_max for Y-scale; 

    up_max = d3.max(sequential, function (seq) {
      // console.log(seq);
      result = 0;
      seq.forEach(function (s) {
        if (s['行业'] !== 'C制造业') {
          result += yValue(s);
        }
      });
      return result;
    });
    low_max = d3.max(sequential, function (seq) {
      if (limit_up_max !== -1) {
        return limit_up_max;
      }

      result = 0;
      seq.forEach(function (s) {
        if (s['行业'] === 'C制造业') {
          result += yValue(s);
        }
      });
      return result;
    }); // initialize the chart; 

    renderinit(data);
    var area = d3.area().curve(d3.curveCardinal.tension(0.3)) // default is d3.curveLinear, d3.curveBundle.beta(1.0)
    .x(function (d) {
      return xScale(xValue(d.data));
    }).y0(function (d) {
      return yScale(d[0]);
    }).y1(function (d) {
      return yScale(d[1]);
    });
    var area_manu = d3.area().curve(d3.curveCardinal.tension(0.3)).x(function (d) {
      return xScale(xValue(d.data));
    }).y0(function (d) {
      return nyScale(d[0]);
    }).y1(function (d) {
      return nyScale(d[1]);
    }); // set the animation interval; 

    render(prestack, keys, area);
    render(prestack_manu, keys_manu, area_manu);
  });
}