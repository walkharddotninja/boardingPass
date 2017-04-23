(() => {
  'use strict';

  angular.module('studentListController', ['dbService'])
  .controller('studentListController', function(dbService) {
    this.msg = 'STUDENT LIST Component'; // this is only to demonstrate how to exchange information between the view and the controller

    // implement logic
  });
})();
