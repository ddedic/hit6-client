(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider
            .state('monitor', {
                url: '/monitor',

                abstract: true,

                views: {
                    "main": {
                        templateUrl: 'monitor/views/main.tpl.html'
                    }
                }
        })

        .state('monitor.demo', {
            url: '',
            views: {
                "content@monitor": {
                    controller: 'MainController',
                    templateUrl: 'monitor/views/demo.tpl.html'
                },
                "results@monitor": {
                    controller: 'ResultsController',
                    templateUrl: 'monitor/views/results.tpl.html'
                }
            },

                resolve: {
                    dummyResults: function(shopsFactory, $stateParams, $q) {

                        var deferred = $q.defer();

                        shopsFactory.getShops()
                            .success(function (data) {
                                deferred.resolve(data);
                            })
                            .error(function (error) {
                                console.log(error);
                            });

                        return deferred.promise;
                    }
                },


            data:{ pageTitle: 'Demo monitor' }
        });
    });



}(angular.module("App.monitor", [
    'ui.router',
    'App.monitor.controllers.main',
    'App.monitor.controllers.results'
])));