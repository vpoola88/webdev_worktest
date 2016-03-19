'use strict';

/**
 * @ngdoc function
 * @name sliceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sliceApp
 */
angular.module('sliceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
