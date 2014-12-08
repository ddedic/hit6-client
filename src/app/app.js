(function(app) {

    app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {


       //$locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');


        $httpProvider.interceptors.push(['$rootScope', '$q', '$window', '$location', function ($rootScope, $q, $window, $location) {
            return {
                request: function(config) {
                    if ($window.localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
                    }
                    return config;
                },
                responseError: function(response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                        //alert('Unauthorized!');
                        console.log('Unauthorized!');
                    }

                    return $q.reject(response);
                }
            };
        }]);

    }]);


    app.run(function () {
       // console.log('global app start...');
    });




    app.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $rootScope.isFullscreenApp = false;


        $scope.$on('$stateChangeSuccess', function(event, toState){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | ng-starter' ;
            }
        });

    }]);


    app.constant('settings', {
        'html5Mode': false,
        'whoAmI': 'I\'m ng-starter app...',

        'apiBase': 'http://api.hit6.dev/'
        //'apiBase': 'http://api.hit6.ddedic.com/'
    });



}(angular.module("App", [
    'ngLoadingSpinner',
    'App.home',
    'App.shops',
    'App.monitor',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router'
])));
