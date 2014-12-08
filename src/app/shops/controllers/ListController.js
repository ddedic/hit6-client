(function(app) {

    app.controller('ListController', ['$scope', 'shopsFactory', function($scope, shopsFactory) {

        var init = function() {

            console.log('Shops / List Controller loaded ...');

            getShops();
        };


        function getShops() {
            shopsFactory.getShops()
                .success(function (data) {
                    $scope.shops = data.data;
                    //console.log(data);
                })
                .error(function (error) {
                    //alert(error);
                    console.log(error);
                });
        }






        init();
    }]);

}(angular.module("App.shops.controllers.list", [
    'ui.router'
])));