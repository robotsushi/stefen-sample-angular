'use strict';

(function () {

    angular.module('shoppingCart').directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' + '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' + '\u2605' + '</li>' + '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                onRatingSelected: '&'
            },
            link: function link(scope, elem, attrs) {

                var updateStars = function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };

                scope.toggle = function (index) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating: index + 1
                    });
                };

                scope.$watch('ratingValue', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        };
    });
})();