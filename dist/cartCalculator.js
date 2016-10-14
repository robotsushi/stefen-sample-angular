'use strict';

var _ = require('underscore');

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

exports.updateTotal = updateTotal;