'use strict';

(function () {
  'use strict';

  angular.module('shoppingCart').controller('ShoppingCartController', ShoppingCartController);

  ShoppingCartController.$inject = [];

  console.log('activate');

  function ShoppingCartController() {
    var vm = this;

    activate();

    function activate() {};
  }
})();