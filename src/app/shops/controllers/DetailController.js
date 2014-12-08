(function(app) {

    app.controller('DetailController', ['$stateParams', '$scope', 'shopDetails', function($stateParams, $scope, shopDetails) {

        var init = function() {

            console.log('Shops / Details { $stateParams.shopId = ' + $stateParams.shopId + '} Controller loaded ...');
            console.log(shopDetails);

            $scope.shopDetails = shopDetails.data;



            if ( angular.isDefined( shopDetails.data.id ) ) {
                $scope.pageTitle = shopDetails.data.id + ' | ng-starter' ;
            }
        };









        init();
    }]);

}(angular.module("App.shops.controllers.details", [
    'ui.router'
])));