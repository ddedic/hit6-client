angular.module('App.shops')
    .factory('shopsFactory', ['$http', 'settings', function($http, settings) {

        var urlBase = settings.apiBase + 'shops';
        var dataFactory = {};

        dataFactory.getShops = function () {
            return $http.get(urlBase, {cache: false});
        };



        dataFactory.getShop = function (id) {
            return $http.get(urlBase + '/' + id + '?include=city', {cache: true});
        };



        return dataFactory;
    }]);