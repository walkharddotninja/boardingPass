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

    this.exampleStudentList = () => {
      return [
        {
          last: 'Jenkins',
          first: 'Leroy',
          email: 'leroy.jenkins@ufl.edu',
          studentId: '1234-5678'
        },
        {
          last: 'Skywalker',
          first: 'Luke',
          email: 'luke.skywalker@ufl.edu',
          studentId: '2345-6789'
        },
        {
          last: 'Kirk',
          first: 'James',
          email: 'james.kirk@ufl.edu',
          studentId: '3456-7890'
        },
        {
          last: 'Hatake',
          first: 'Kakashi',
          email: 'senpai@ufl.edu',
          studentId: '4567-8901'
        },
        {
          last: 'James',
          first: 'Ashley',
          email: 'shopsmart@ufl.edu',
          studentId: '5678-9012'
        }
      ];
    };

  });
})();
