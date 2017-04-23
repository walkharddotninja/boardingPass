(() => {
  'use strict';

  angular.module('studentList', ['studentListController'])
  .component('studentList', {
    templateUrl: './client/students/studentList/studentList.html',
    controller: 'studentListController'
  });
})();
