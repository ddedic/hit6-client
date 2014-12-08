(function(app) {

    app.controller('ResultsController', ['$stateParams', '$scope', 'dummyResults', function($stateParams, $scope, dummyResults) {

        var init = function() {

            console.log('Monitor Results Controller loaded..');

            $scope.shops = dummyResults.data;

        };









        init();
    }]);

}(angular.module("App.monitor.controllers.results", [
    'ui.router'
])));