(function(app) {

    app.controller('MainController', ['$stateParams', '$scope', '$rootScope',   function($stateParams, $scope, $rootScope) {

        $rootScope.isFullscreenApp = true;


        var init = function() {

            console.log('Monitor Main Controller loaded..');


        };



        $scope.$on("$destroy", function() {
            $rootScope.isFullscreenApp = false;
        });





        init();
    }]);

}(angular.module("App.monitor.controllers.main", [
    'ui.router'
])));