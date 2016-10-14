'use strict';

(function () {
    'use strict';

    angular.module('shoppingCart').factory('shippingModal', function (btfModal) {
        return btfModal({
            controller: 'ShippingModalController',
            controllerAs: 'vm',
            templateUrl: 'shipping-modal.html'
        });
    });
})();