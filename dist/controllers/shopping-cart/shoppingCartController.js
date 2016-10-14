'use strict';

(function () {
    'use strict';

    angular.module('shoppingCart').controller('ShoppingCartController', ShoppingCartController);

    ShoppingCartController.$inject = [];

    console.log('activate');

    function ShoppingCartController() {
        var vm = this;

        activate();

        vm.total = 0.00;

        vm.products = [{
            name: "Aspen Hotel Package",
            price: 2000.00,
            averageRating: 5,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "Ferrari Car Rental",
            price: 20000.00,
            averageRating: 3,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "Steak House Dinner",
            price: 300.00,
            averageRating: 5,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "4K TV",
            price: 800.00,
            averageRating: 5,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }];

        var cartItems = [];

        vm.addItemToCart = function (product) {
            cartItems.push(product);
        };

        function activate() {};
    }
})();