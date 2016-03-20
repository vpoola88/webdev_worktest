'use strict';

/**
 * @ngdoc function
 * @name sliceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sliceApp
 */
angular.module('sliceApp')
  .controller('MainCtrl', function ($scope, $state, $stateParams, Qa) {
    $scope.qas=Qa.query();
    $scope.qas.$promise.then(function(data){
      $scope.qas = data.results;
    });




    $scope.qa=Qa.get({id: $stateParams.id});
    $scope.qa.$promise.then(function(data){
      $scope.qa = data;
      $scope.result = data.results;
    });


  });
