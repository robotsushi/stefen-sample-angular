(function () {
    'use strict';

    angular.module('shoppingCart')
        .controller('ShippingModalController', ShippingModalController);

    ShippingModalController.$inject = ['shippingModal'];

    function ShippingModalController(shippingModal) {
        let vm = this;
        activate();

        vm.expressShippingItem = {
            name: "2 Day Shipping",
            price: 50.00,
            averageRating: 4,
            imageUrl: null,
            quantity: 1
        };

        vm.overnightShippingItem = {
            name: "Overnight Shipping",
            price: 250.00,
            averageRating: 5,
            imageUrl: null,
            quantity: 1
        };

        vm.sendUpdateCartMessage = function(shippingItem){
            radio('shippingMethodConfirmed').broadcast(shippingItem);
            shippingModal.deactivate();
        };

        function activate() {
            vm.closeMe = shippingModal.deactivate;
        };

    }
})();