(() => {
  'use strict';

  angular.module('studentListController', ['dbService'])
  .controller('studentListController', function(dbService) {
    this.panelHeader = 'Students';

    // implement logic

    // sample logic
    this.studentList = dbService.exampleStudentList();
  });
})();
