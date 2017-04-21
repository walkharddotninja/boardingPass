(() => {
  'use strict';

  angular.module('routes', [
    'ui.router',
    'appShell',
    'studentList'
  ])
  .config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/login');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        template: '<app-shell></app-shell>',
        params: { login: false },
      })
      .state('app.studentList', {
        url: '/student-list',
        template: '<student-list></student-list>',
        params: { login: true },
      });

    });
})();
