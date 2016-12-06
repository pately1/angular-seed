/**
 * Created by Yash on 12/5/2016.
 */
(function () {
    'use strict';

    angular.module('templateStore.templates')
        .controller('TemplateDetailCtrl', ['$scope','templateService','$routeParams','$filter', function ($scope, templateService, $routeParams, $filter) {
            var templateId = $routeParams.id;
            templateService.getData().then(
                function (data) {
                    $scope.templates = $filter('filter')(data, function (d) {
                        return d.id == templateId;
                    })[0];
                    $scope.mainImage = $scope.templates.images[0].name;
                }, function (err) {
                    console.log(err);
                }
            );

            $scope.setImage = function (image) {
                $scope.mainImage = image.name;
            }
        }]);
})();