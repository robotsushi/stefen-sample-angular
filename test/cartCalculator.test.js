var cartCalculator = require('../public/javascripts/cartCalculator.js');
var assert = require('assert');

describe('CartCalculator ', function () {

    describe('.calculate() should', function () {

        it('calculate the total of 2 items', function () {

            var item1 = {
                name: "Cheap Car",
                price: 500.00,
                averageRating: 4,
                imageUrl: '/images/money-icon.png',
                quantity: 1
            };

            var item2 = {
                name: "4K TV",
                price: 1000.00,
                averageRating: 4,
                imageUrl: '/images/money-icon.png',
                quantity: 1
            };

            var items = [item1, item2];

            var result = cartCalculator.calculate(items);

            assert.equal(result, 1500.00);
        });

        
        it('calculate the total of 2 items with a quanity of 2', function () {

            var item1 = {
                name: "Cheap Car",
                price: 500.00,
                averageRating: 4,
                imageUrl: '/images/money-icon.png',
                quantity: 2
            };

            var item2 = {
                name: "4K TV",
                price: 1000.00,
                averageRating: 4,
                imageUrl: '/images/money-icon.png',
                quantity: 2
            };

            var items = [item1, item2];

            var result = cartCalculator.calculate(items);

            assert.equal(result, 3000.00);
        });

        
        it('return 0 when given 0 items', function () {

            var result = cartCalculator.calculate([]);

        });



    });

});