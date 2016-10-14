'use strict';

let _ = require('underscore');

let calculate = function (cartItems) {

    var result = 0;

    _.each(cartItems, (item) => {
        if (item === null || item === undefined || item.price <= 0) {
            return null;
        }

        result += item.price * item.quantity;
    });

    console.log(result);

    return result;

};

exports.calculate = calculate;