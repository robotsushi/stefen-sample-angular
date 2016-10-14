'use strict';

(function () {
  angular.module('helloAngular').directive('hcChart', function () {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
        options: '='
      },
      link: function link(scope, element) {
        Highcharts.chart(element[0], scope.options);
      }
    };
  });
})();