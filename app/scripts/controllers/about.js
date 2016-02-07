'use strict';

/**
 * @ngdoc function
 * @name jsontutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsontutorialApp
 */
angular.module('jsontutorialApp')
  .controller('AboutCtrl', ['$scope','$location', function ($scope, $location) {
        $scope.isActive = function (viewlocation) {
            return viewlocation === $location.path();
        };
    ];
  });
