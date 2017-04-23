(() => {
  'use strict';

  angular.module('dbService', [])
  .service('dbService', function($http) {
    const url = 'http://localhost:8080';

    this.someBackendRequest = (dataInJsonFormat) => {
      return $http({
        method: 'METHOD_TYPE_IS_ONE_OF_THE_FOLLOWING [GET, POST, PUT, PATCH, DELETE]',
        url: url + '/routeToResource',
        data: dataInJsonFormat
      })
      .then((response) => {
        //do this on successful response
      }, (response) => {
        //do this on failed response
      });
    };

  });
})();
