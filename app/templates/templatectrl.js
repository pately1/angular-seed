/**
 * Created by Yash on 12/5/2016.
 */
(function () {
    'use strict';

    angular.module('templateStore.templates')
        .controller('TemplateCtrl', ['$scope','templateService', function ($scope, templateService) {
            templateService.getData().then(function (data) {
                console.log(data);
                $scope.templates = data;
            }, function (err) {
                console.log(err);
            });
        }]);
})();