'use strict';

(function () {

    angular.module('shoppingCart').filter('startFrom', function () {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        };
    });
})();