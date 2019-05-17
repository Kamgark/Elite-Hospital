var request = new XMLHttpRequest();
var arr;
request.open('GET', 'https://zcyafzpds7.execute-api.us-east-1.amazonaws.com/dev_0/', true);

request.onload = function () {
    arr = JSON.parse(this.response);
    console.log(arr)
}
request.send()
// Dashboard 1 Morris-chart
$(function () {
    "use strict";

// LINE CHART
        var line = new Morris.Line({
          element: 'morris-line-chart-1',
          resize: true,
          data: [
            {y: '02/2019', item1: 40},
            {y: '03/2019', item1: 30},
            {y: '04/2019', item1: 98},
            {y: '05/2019', item1: 56},
            {y: '06/2019', item1: 12},
            {y: '07/2019', item1: 80},
            {y: '08/2019', item1: 88},
            {y: '09/2019', item1: 40},
            {y: '10/2019', item1: 49},
            {y: '11/2019', item1: 5},
            {y: '12/2019', item1: 5},
            {y: '01/2020', item1: 100}
          ],
          xkey: 'y',
          ykeys: ['item1'],
          labels: ['monthly Income'],
          gridLineColor: '#eef0f2',
          lineColors: ['#009efb'],
          lineWidth: 1,
          hideHover: 'auto'
        });
        var line = new Morris.Line({
            element: 'morris-line-chart-2',
            resize: true,
            data: [
              {y: '02/2019', item1: 40},
              {y: '03/2019', item1: 30},
              {y: '04/2019', item1: 98},
              {y: '05/2019', item1: 56},
              {y: '06/2019', item1: 12},
              {y: '07/2019', item1: 80},
              {y: '08/2019', item1: 88},
              {y: '09/2019', item1: 40},
              {y: '10/2019', item1: 49},
              {y: '11/2019', item1: 5},
              {y: '12/2019', item1: 5},
              {y: '01/2020', item1: 100}
            ],
            xkey: 'y',
            ykeys: ['item1'],
            labels: ['monthly Income'],
            gridLineColor: '#eef0f2',
            lineColors: ['#009efb'],
            lineWidth: 1,
            hideHover: 'auto'
          });

        new Chartist.Line('.total-revenue4', {
            labels: ['02/2019', '03/2019', '04/2019', '05/2019', '06/2019', '07/2019', '08/2019', '09/2019','10/2019','11/2019','12/2019','01/2020']
            , series: [
            [20, 50, 28, 36, 12, 40, 58, 40,79,1,1,100]
            , [30, 64, 67, 8, 18, 30, 27, 51, 32, 2, 3, 45]
          ]
        }, {
            high: 15
            , low: 0
            , showArea: true
            , fullWidth: true
            , plugins: [
            Chartist.plugins.tooltip()
          ], // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
            axisY: {
                onlyInteger: true
                , offset: 20
                , labelInterpolationFnc: function (value) {
                    return (value / 1) + 'k';
                }
            }
        });


 });    