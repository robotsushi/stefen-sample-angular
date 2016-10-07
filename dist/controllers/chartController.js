'use strict';

(function () {
  "use strict";

  angular.module('helloAngular').controller('ChartController', ChartController);

  ChartController.$inject = ["$scope"];

  function ChartController($scope) {
    var vm = this;
    activate();

    // Sample options for first chart
    vm.chartOptions = {
      title: {
        text: 'Temperature data'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };

    function activate() {

      var myChart = Highcharts.chart('chart-container', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
        }]
      });
    }
  }
})();