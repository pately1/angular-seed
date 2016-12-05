/**
 * Created by Yash on 12/5/2016.
 */
(function () {
    'use strict';

    angular.module('templateStore.templates', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/templates', {
                    templateUrl: 'templates/templates.html',
                    controller: 'TemplateCtrl'
                })
                .when('/templates/:id', {
                    templateUrl:'templates/template-detail.html',
                    controller: 'TemplateDetailCtrl'
                });
        }]);
})();