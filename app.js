anychart.onDocumentReady(function () {

    // create a polar chart
    const chart = anychart.polar();
   
    // data for 2021
var data1 = [
    { x: 'Excel', value: 49.8 },
    { x: 'Tableau', value: 39.4 },
    { x: 'R', value: 25.9 },
    { x: 'Python', value: 24.5 },
    { x: 'Pen & Paper', value: 24.1 },
    { x: 'Power BI', value: 21.2 },
    { x: 'ggplot2', value: 20.1 },
    { x: 'Illustrator', value: 19.7 },
    { x: 'D3.js', value: 19.1 },
    { x: 'Plotly', value: 10.3 },
    { x: 'QGIS', value: 8.9 },
    { x: 'Google Data', value: 9.28 },
    { x: 'Datawrapper', value: 7.9 },
    { x: 'Mapbox', value: 7.7 },
    { x: 'Observable', value: 7.4 }
];
 
// data for 2020
var data2 = [
    { x: 'Excel', value: 44.7 },
    { x: 'Tableau', value: 36.1 },
    { x: 'R', value: 25 },
    { x: 'Python', value: 24.1 },
    { x: 'Pen & Paper', value: 27.1 },
    { x: 'Power BI', value: 18.7 },
    { x: 'ggplot2', value: 19.8 },
    { x: 'Illustrator', value: 20.3 },
    { x: 'D3.js', value: 21.2 },
    { x: 'Plotly', value: 11.8 },
    { x: 'QGIS', value: 9.22 },
    { x: 'Google Data', value: 0 },
    { x: 'Datawrapper', value: 0 },
    { x: 'Mapbox', value: 9.28 },
    { x: 'Observable', value: 0 }
]

    // set the chart design theme
    anychart.theme('darkGlamour'); 

    // create two series and connect the data respectively
    var columnSeries2 = chart.column(data2);
    var columnSeries1 = chart.column(data1);
    
    // set the series names
    // series #1
    columnSeries1.name('2021');
    // series #2
    columnSeries2.name('2020');

    // set the x-scale
    chart.xScale('ordinal');
 
    // disable the y-axis
    chart.yAxis(false);

    // set the chart title
    chart.title('2021 Top 15 Technologies for Data Visualization (DVS Survey 2021)');

    // set the chart container id
    chart.container('container2');

    // initiate the chart display
    chart.draw();

    // set the width of the series points
    // series #1
    columnSeries1.pointWidth(10);
    // series #2
    columnSeries2.pointWidth(15);

    // customize the series color
    // series #1
    columnSeries1.color('#ff9933');
    // series #2
    columnSeries2.color('#2db1a4');
    
    // set the tooltip
    chart.tooltip().format("{%value}%");

    // // configure the chart labels
    var labels = chart.xAxis().labels();
    labels.fontSize(18)
    .fontColor('#dcb22a');

    // set the tooltip title
    chart.tooltip().title().fontColor('#dcb22a');
    
    // set the tooltip content
    chart.tooltip().format("{%seriesName}: {%value}%").fontSize(14).fontWeight(600);
    
    // set the tooltip font color
    // series #1
    columnSeries1.tooltip().fontColor('#ff9933')
    // series #2
    columnSeries2.tooltip().fontColor('#2db1a4');

    // configure the chart title
    chart
    .title()
    .enabled(true)
    .text(`2021 Top 15 Technologies for Data Visualization (DVS Survey 2020 & 2021)`)
    .fontSize(25)
    .fontColor("#d5dcdc")
    .padding({ bottom: 20 });


    // setup chart legend settings
    var legend = chart.legend();
    legend.enabled(true);
    legend.positionMode('inside');
    legend.itemsLayout('vertical');
    legend.position('top');
    legend.align('left');
    legend.itemsSpacing(10);

    columnSeries1.labels(true);
    columnSeries1.labels().fontSize(13);
    columnSeries1.labels().fontWeight(600);
    columnSeries1.labels().position("center-top");
    columnSeries1.labels().fontColor("#ff9933");
    columnSeries1.labels().format("{%value}%")
    
    columnSeries2.labels(true);
    columnSeries2.labels().fontSize(12);
    columnSeries2.labels().fontWeight(600);
    columnSeries2.labels().position("center");
    columnSeries2.labels().fontColor("white");
    columnSeries2.labels().padding(5)
    columnSeries2.labels().format("{%value}%")
  });

  //2ND CHART 2020 - 2019

anychart.onDocumentReady(function () {

    // create a polar chart
    const chart = anychart.polar();
   
    // data for 2020
var data1 = [
    { x: 'Excel', value: 44.7 },
    { x: 'Tableau', value: 36.1 },
    { x: 'Pen & Paper', value: 27.1 },
    { x: 'R', value: 25 },
    { x: 'Python', value: 24.1 },
    { x: 'D3.js', value: 21.2 },
    { x: 'ggplot2', value: 19.8 },
    { x: 'Illustrator', value: 20.3 },
    { x: 'Power BI', value: 18.7 },
    { x: 'Plotly', value: 11.8 },
    { x: 'Matplotlib', value: 10.58 },
    { x: 'Mapbox', value: 9.28 },
    { x: 'QGIS', value: 9.22 },
    { x: 'ArcGIS', value: 7.18 },
    { x: 'React', value: 7.4 }
];
 
// data for 2019
var data2 = [
    { x: 'Excel', value: 54.7 },
    { x: 'Tableau', value: 44.3 },
    { x: 'R', value: 37.7 },
    { x: 'Python', value: 34.2 },
    { x: 'D3.js', value: 33.6 },
    { x: 'ggplot2', value: 32.3 },
    { x: 'Pen & Paper', value: 30.1 },
    { x: 'Illustrator', value: 25.3 },
    { x: 'Power BI', value: 17.3 },
    { x: 'Plotly', value: 16.1 },
    { x: 'Mapbox', value: 15.1 },
    { x: 'QGIS', value: 12.9 },
    { x: 'Matplotlib', value: 11.1 },
    { x: 'ArcGIS', value: 10.2 },
    { x: 'React', value: 10.1 }
]

    // set the chart design theme
    anychart.theme('darkGlamour'); 

    // create two series and connect the data respectively
    var columnSeries2 = chart.column(data2);
    var columnSeries1 = chart.column(data1);
    
    // set the series names
    // series #1
    columnSeries1.name('2020');
    // series #2
    columnSeries2.name('2019');

    // set the x-scale
    chart.xScale('ordinal');
 
    // disable the y-axis
    chart.yAxis(false);

    // set the chart title
    chart.title('2020 Top 15 Technologies for Data Visualization (DVS Survey 2020)');

    // set the chart container id
    chart.container('container');

    // initiate the chart display
    chart.draw();

    // set the width of the series points
    // series #1
    columnSeries1.pointWidth(10);
    // series #2
    columnSeries2.pointWidth(15);

    // customize the series color
    // series #1
    columnSeries1.color('#2db1a4');
    // series #2
    columnSeries2.color('#9f5f9c');
    
    // set the tooltip
    chart.tooltip().format("{%value}%");

    // // configure the chart labels
    var labels = chart.xAxis().labels();
    labels.fontSize(14)
    .fontColor('#dcb22a');

    // set the tooltip title
    chart.tooltip().title().fontColor('#dcb22a');
    
    // set the tooltip content
    chart.tooltip().format("{%seriesName}: {%value}%").fontSize(14).fontWeight(600);
    
    // set the tooltip font color
    // series #1
    columnSeries1.tooltip().fontColor('#2db1a4')
    // series #2
    columnSeries2.tooltip().fontColor('#9f5f9c');

    // configure the chart title
    chart
    .title()
    .enabled(true)
    .text('2020 Top 15 Technologies for Data Visualization (DVS Survey 2019 & 2020)')
    .fontSize(25)
    .fontColor("#d5dcdc")
    .padding({ bottom: 20 });

    // setup chart legend settings
    var legend = chart.legend();
    legend.enabled(true);
    legend.positionMode('inside');
    legend.itemsLayout('vertical');
    legend.position('top');
    legend.align('left');
    legend.itemsSpacing(10);

    columnSeries1.labels(true);
    columnSeries1.labels().fontSize(13);
    columnSeries1.labels().fontWeight(600);
    columnSeries1.labels().position("center-top");
    columnSeries1.labels().fontColor("#2db1a4");
    columnSeries1.labels().format("{%value}%")
    
    columnSeries2.labels(true);
    columnSeries2.labels().fontSize(12);
    columnSeries2.labels().fontWeight(600);
    columnSeries2.labels().position("center-top");
    columnSeries2.labels().fontColor("#9f5f9c");
    columnSeries2.labels().padding(5)
    columnSeries2.labels().format("{%value}%")



  });

