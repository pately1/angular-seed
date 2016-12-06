/**
 * Created by Yash on 12/5/2016.
 */
(function () {
    'use strict';

    angular.module('templateStore.templates')
        .service('templateService',['$http','$q', function ($http, $q) {
            this.getData = function () {
                return $http.get('templates/templates.json').then(
                    function (response) {
                        return response.data;
                    }, function (error) {
                        $q.reject("Something went wrong");
                    }
                );
            }
        }]);
})();