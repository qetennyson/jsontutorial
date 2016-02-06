'use strict';

/**
 * @ngdoc function
 * @name jsontutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsontutorialApp
 */
angular.module('jsontutorialApp')
  .controller('MainCtrl', [ '$http', '$scope', function($http, $scope){
      var items = this;
      items.tutorials = [];
      
      $http.get('tutorials.json').then(function(resp){
          $scope.myData = resp.data.tutorials;
    });   
}]);
