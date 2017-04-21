'use strict';
const Routes = require('./server/routes/routes');
const hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Good = require('good');

// Logger Options
const LoggerOptions = {
  reporters: {
    console: [{
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{ log: '*', response: '*', request: '*', error: '*' }]
            },

            {
              module: 'good-console'
            },
            'stdout'
      ]
  }
};

// create server
const server = new hapi.Server();

// specify host and port
server.connection({
  host: 'localhost',
  port: 8080,
});

  // register required packages and add options if applicable
server.register([
  Inert,
  Vision,
  {
    register: Good,
    options: LoggerOptions
  }
], (err) => {                      // callback function

    // if an error occured when registering packages, print it out!
    if (err) {
      return console.error(err);
    }

    // import our routes
    server.route(Routes);

    // otherwise start the server
    server.start((err) => {
      if (err) {
        console.log(err);
      } else {
        console.info(`Server running at: http://localhost:8080`);
      }
    });
  });
