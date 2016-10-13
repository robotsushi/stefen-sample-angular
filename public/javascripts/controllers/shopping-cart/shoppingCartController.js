(function () {
  'use strict';

  angular.module('shoppingCart')
    .controller('ShoppingCartController', ShoppingCartController);

  ShoppingCartController.$inject = [];

  console.log('activate');

  function ShoppingCartController() {
    let vm = this;

    activate();

    function activate() {
      
    };

  }
})();