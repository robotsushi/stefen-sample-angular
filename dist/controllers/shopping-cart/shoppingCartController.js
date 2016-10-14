'use strict';

(function () {
    'use strict';

    angular.module('shoppingCart').controller('ShoppingCartController', ShoppingCartController);

    ShoppingCartController.$inject = ['shippingModal'];

    function ShoppingCartController(shippingModal) {
        var vm = this;
        vm.cartItems = [];
        vm.total = 0.00;
        vm.currentPage = 0;
        vm.pageSize = 6;
        vm.hasShippingMethod = false;

        vm.numberOfPages = function () {
            return Math.ceil(vm.products.length / vm.pageSize);
        };

        vm.showModal = shippingModal.activate;

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
            averageRating: 4,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "4K TV",
            price: 800.00,
            averageRating: 4,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "SnowMass Ski Package",
            price: 2000.00,
            averageRating: 5,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "Helicopter Ride",
            price: 30000.00,
            averageRating: 5,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "Lobster Dinner",
            price: 38.50,
            averageRating: 4,
            imageUrl: '/images/money-icon.png',
            quantity: 0
        }, {
            name: "5K TV",
            price: 80000.00,
            averageRating: 4,
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

        var activate = function activate() {

            radio('shippingMethodConfirmed').subscribe(addShippingItem);
        };

        var addShippingItem = function addShippingItem(shippingItem) {

            vm.hasShippingMethod = true;
            vm.addItemToCart(shippingItem);
        };

        activate();
    }
})();