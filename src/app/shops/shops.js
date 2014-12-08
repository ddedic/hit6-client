(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider
            .state('shops', {
                url: '/shops',

                abstract: true,

                views: {
                    "main": {
                        templateUrl: 'shops/views/main.tpl.html'
                    }
                }
        })

        .state('shops.list', {
            url: '',
            views: {
                "content@shops": {
                    controller: 'ListController',
                    templateUrl: 'shops/views/list.tpl.html'
                }
            },
            data:{ pageTitle: 'Shops list' }
        })

        .state('shops.details', {
            url: '/{shopId:[0-9]}',
            views: {
                "content@shops": {
                    controller: 'DetailController',
                    templateUrl: 'shops/views/detail.tpl.html'
                }
            },


            resolve: {
                shopDetails: function(shopsFactory, $stateParams, $q) {

                    var deferred = $q.defer();

                        shopsFactory.getShop($stateParams.shopId)
                            .success(function (data) {
                                deferred.resolve(data);
                            })
                            .error(function (error) {
                                console.log(error);
                            });

                    return deferred.promise;
                }
            },


            data:{ pageTitle: 'Shops details' }
        })


        .state('shops.bets', {
            url: '/{shopId:[0-9]}/bets',
            views: {
                "content@shops": {
                    controller: 'DetailController',
                    templateUrl: 'shops/views/detail.tpl.html'
                }
            },


            resolve: {
                shopDetails: function(shopsFactory, $stateParams, $q) {

                    var deferred = $q.defer();

                    shopsFactory.getShop($stateParams.shopId)
                        .success(function (data) {
                            deferred.resolve(data);
                        })
                        .error(function (error) {
                            console.log(error);
                        });

                    return deferred.promise;
                }
            },


            data:{ pageTitle: 'Shop bets' }
        });


    });



}(angular.module("App.shops", [
    'ui.router',
    'App.shops.controllers.list',
    'App.shops.controllers.details'
])));