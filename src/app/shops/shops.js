(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider.state('shops', {
            url: '/shops',
            views: {
                "main": {
                    controller: 'ShopsController',
                    templateUrl: 'shops/views/index.tpl.html'
                }
            },
            data:{ pageTitle: 'Shops' }
        });
    });

    app.controller('ShopsController', function ($resource, $scope) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.

            console.log('Shops');
        };

        $scope.shops = [];

        init();
    });

}(angular.module("App.shops", [
    'ui.router',
    'ngResource'
])));