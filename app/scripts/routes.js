'use strict';

angular.module('resumeApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('default', {
        abstract: true,
        views: {
          "": {
            templateUrl: 'views/default.html'
          }
        }
      })
      .state('main', {
        parent: 'default',
        url: '/',
        views: {
          'main': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      });
  });
