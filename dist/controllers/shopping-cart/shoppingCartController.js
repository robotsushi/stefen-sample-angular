'use strict';

(function () {
    'use strict';

    angular.module('shoppingCart').controller('ShoppingCartController', ShoppingCartController);

    ShoppingCartController.$inject = [];

    console.log('activate');

    function ShoppingCartController() {
        var vm = this;
        vm.cartItems = [];

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

        vm.addItemToCart = function (product) {

            var existingItem = _.find(vm.cartItems, function (item) {
                return item.$$hashKey === product.$$hashKey;
            });

            if (existingItem !== null && existingItem !== undefined) {
                existingItem.quantity = product.quantity;
            } else {
                vm.cartItems.push(product);
            }

            updateTotal();
        };

        var updateTotal = function updateTotal() {

            var result = 0;

            _.each(vm.cartItems, function (item) {
                if (item === null && item === undefined && item.price <= 0) {
                    return null;
                }

                result += item.price * item.quantity;
            });

            vm.total = result;
        };

        function activate() {};
    }
})();