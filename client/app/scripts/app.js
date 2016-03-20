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
  .config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider){

    $httpProvider.defaults.useXDomain = true;

    $urlRouterProvider.otherwise('home');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).state('viewQa',{
        url:'/qa/:id',
        templateUrl: 'views/qa-view.html',
        controller: 'MainCtrl'
      });

      $locationProvider.html5Mode(true);
  })
  .factory('Qa', function($resource){
    return $resource('http://localhost:8081/api/qa/:id',
     {id: '@id'}, {
      'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query': {method:'GET', isArray: false},
      'update': {method: 'PUT'}
    });
  });
