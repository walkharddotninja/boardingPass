'use strict';
const Routes = require('./server/routes/routes');
const hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Good = require('good');
const Mongoose = require('mongoose');
const HapiSwagger = require('hapi-swagger');

// REPLACE THIS WITH YOUR MONGODBURI
const mongoDBURI = 'REPLACETHISSTRINGWITHYOURMONGODBURI';

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

// Swagger Options
const SwaggerOptions = {
    info: {
            title: 'Boarding Pass Assignment Docs',
            version: '0.0.1'
          }
  };

  // Mongoose
Mongoose.connect(mongoDBURI, (err) => {
    if (err) {
      throw err;
    }

    console.log('DB successfully connected');
  });

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
  },
  {
   register: HapiSwagger,
   options: SwaggerOptions
  },
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
