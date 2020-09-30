"use strict";

(function () {
  worldcloud();
})();

function worldcloud() {
  var width = 700,
      height = 400,
      sizeAdjustment = 100,
      minFontSize = 12,
      largestWordSize = 0,
      smallestWordSize = 100,
      terms = [],
      minSize = 1000,
      maxSize = -1;
  svg = d3.select("body").append("svg").attr('class', 'cirrusGraph').attr("width", width).attr("height", height);
  var vis = svg.append('g').attr('transform', "translate(".concat(width / 2, ",").concat(height / 2, ")"));
  var layout = d3.layoutCloud().size([width, height]).overflow(true).padding(1).rotate(function (d) {
    return ~~(Math.random() * 2) * 90;
  }).spiral('archimedean').font('"Palatino Linotype", "Book Antiqua", Palatino, serif').fontSize(function (d) {
    return d.fontSize;
  }).text(function (d) {
    return d.text;
  }).on('end', draw);
  var colorScale = d3.scaleOrdinal(d3.schemeCategory20c);

  function draw(words, bounds) {
    var scale = bounds ? Math.min(width / Math.abs(bounds[1].x - width / 2), width / Math.abs(bounds[0].x - width / 2), height / Math.abs(bounds[1].y - height / 2), height / Math.abs(bounds[0].y - height / 2)) / 2 : 1;
    var t = d3.transition().duration(1000);
    var nodes = vis.selectAll('text').data(words, function (d) {
      return d.text;
    });
    nodes.exit().transition(t).style('font-size', '1px').remove();
    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    var nodesEnter = nodes.enter().append('text').text(function (d) {
      return d.text;
    }).attr('text-anchor', 'middle').attr('data-freq', function (d) {
      return d.rawFreq;
    }).attr('transform', function (d) {
      return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
    }).style('font-family', '"Palatino Linotype", "Book Antiqua", Palatino, serif"').style('fill', function (d) {
      return colorScale(d.text);
    }).style('font-size', '1px');
    var nodesUpdate = nodes.merge(nodesEnter);
    nodesUpdate.transition(t).style('font-family', '"Palatino Linotype", "Book Antiqua", Palatino, serif"').style('fill', function (d) {
      return colorScale(d.text);
    }).attr('transform', function (d) {
      return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
    }).style('font-size', function (d) {
      return d.fontSize + 'px';
    });
    vis.transition(t).attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + scale + ')');
  }

  d3.json('css/terms2.json', function (err, data) {
    terms = data;
    sketchWordCloud();
  });

  function sketchWordCloud() {
    setWordSizeExtent();
    setRelativeSizes();
    setAdjustedSizes(); //console.log(terms);

    layout.words(terms).start();
  }

  function setWordSizeExtent() {
    var extents = d3.extent(terms, function (d) {
      return d.rawFreq;
    });
    minSize = extents[0];
    maxSize = extents[1];
    largestWordSize = maxSize;
    smallestWordSize = minSize;
  }

  function setRelativeSizes() {
    if (terms !== undefined) {
      for (var i = 0; i < terms.length; i++) {
        var word = terms[i];
        word.relativeSize = map(word.rawFreq, smallestWordSize, largestWordSize, 0.1, 1);
      }
    }
  }

  function map(value, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  }

  function setAdjustedSizes() {
    calculateSizeAdjustment();

    if (terms !== undefined) {
      for (var i = 0; i < terms.length; i++) {
        var term = terms[i];
        var adjustedSize = findNewRelativeSize(term);
        term.fontSize = adjustedSize > minFontSize ? adjustedSize : minFontSize;
      }
    }
  }

  function calculateSizeAdjustment() {
    if (terms !== undefined) {
      var stageArea = width * height;
      stageArea < 100000 ? minFontSize = 8 : minFontSize = 12;
      var pixelsPerWord = stageArea / terms.length;
      var totalWordsSize = 0;

      for (var i = 0; i < terms.length; i++) {
        var word = terms[i];
        var wordArea = calculateWordArea(word);
        totalWordsSize += wordArea;
      }

      sizeAdjustment = stageArea / totalWordsSize;
    }
  }

  function calculateWordArea(word) {
    var baseSize = Math.log(word.relativeSize * 10) * Math.LOG10E;
    var height = (baseSize + word.relativeSize) / 2;
    var width = 0;

    for (var i = 0; i < word.text.length; i++) {
      var letter = word.text.charAt(i);
      if (letter == 'f' || letter == 'i' || letter == 'j' || letter == 'l' || letter == 'r' || letter == 't') width += baseSize / 3;else if (letter == 'm' || letter == 'w') width += baseSize / (4 / 3);else width += baseSize / 1.9;
    }

    var wordArea = height * width;
    return wordArea;
  }

  function findNewRelativeSize(word) {
    var areaMultiplier = sizeAdjustment;
    var area = calculateWordArea(word) * areaMultiplier;
    var newRelativeSize = (Math.sqrt(6) * Math.sqrt(6 * Math.pow(word.text.length, 2) + area * word.text.length) - 6 * word.text.length) / (2 * word.text.length);
    return newRelativeSize;
  }

  setTimeout(function () {
    var newTerms = [{
      "text": "revenues",
      "rawFreq": 117
    }, {
      "text": "statement",
      "rawFreq": 115
    }, {
      "text": "ra",
      "rawFreq": 113
    }, {
      "text": "01",
      "rawFreq": 109
    }, {
      "text": "annual",
      "rawFreq": 108
    }];
    newTerms.forEach(function (item) {
      terms.push(item);
    });
    sketchWordCloud();
  }, 5000);
}