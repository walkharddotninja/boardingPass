(() => {
  'use strict';

  angular.module('appShell', ['studentListController'])
  .component('appShell', {
    templateUrl: './client/students/studentList/studentList.html',
    controller: 'studentListController'
  });
})();
