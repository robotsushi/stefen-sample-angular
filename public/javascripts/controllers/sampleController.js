(function () {
  'use strict';

  angular.module('helloAngular')
    .controller('SampleController', SampleController);

  SampleController.$inject = ['$scope'];

  function SampleController($scope) {
    let vm = this;
    activate();


    function activate() {
      console.log('activated !');
      vm.greeting = 'Welcome to my sample Angular application.';
    };

  }
})();