'use strict';

(function () {
    'use strict';

    angular.module('shoppingCart').controller('StarController', StarController);

    StarController.$inject = ['$scope'];

    function StarController($scope) {
        var vm = this;
        activate();

        function activate() {

            $scope.rating = 0;
            $scope.ratings = [{
                current: 5,
                max: 5
            }];

            $scope.getSelectedRating = function (rating) {
                console.log(rating);
            };
        };
    }
})();