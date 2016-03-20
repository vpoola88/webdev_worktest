'use strict';

/**
 * @ngdoc overview
 * @name sliceApp
 * @description
 * # sliceApp
 *
 * Main module of the application.
 */
angular
  .module('sliceApp', [
    'ngAnimate',
    'ngResource',
    'ui.router'
  ])
  .config(function($stateProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).state('viewQa',{
        // url:'/qa/:id',
        url: '/qa',
        templateUrl: 'views/qa-view.html',
        controller: 'MainCtrl'
      });
  });
