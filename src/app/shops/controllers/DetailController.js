(function(app) {

    app.controller('DetailController', ['$stateParams', '$scope', 'shopDetails', function($stateParams, $scope, shopDetails) {

        var init = function() {

            console.log('Shops / Details { $stateParams.shopId = ' + $stateParams.shopId + '} Controller loaded ...');
            console.log(shopDetails);

            $scope.shopDetails = shopDetails.data;
        };









        init();
    }]);

}(angular.module("App.shops.controllers.details", [
    'ui.router'
])));