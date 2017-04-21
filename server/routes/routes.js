'use strict';

const Path = require('path');


const routes = [

  // Front end facing routes for serving the client files
  {
    method: 'GET',
    path: '/client/{param*}',
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: Path.join(__dirname,'../../client'),
      }
    },
  },
  {
    method: 'GET',
    path: '/assets/{param*}',
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: Path.join(__dirname,'../../assets'),
      }
    },
  },
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false
    },
    handler: {
      file: './client/client.html'
    }
  }  
];

module.exports = routes;
