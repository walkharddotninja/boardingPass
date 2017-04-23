(() => {
  'use strict';

  angular.module('routes', [
    'ui.router',
    'appShell',
    'studentList'
  ])
  .config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('');
    $urlRouterProvider.when('', '/student-list');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        template: '<app-shell></app-shell>'
      })
      .state('app.studentList', {
        url: '/student-list',
        template: '<student-list></student-list>'
      });

    });
})();
