'use strict';

const Path = require('path');
const Joi = require('joi');

// handler for creating new data
const createOneDataHandler = require('../handlers/createOne');

// handler for getting all data
const getAllData = require('../handlers/getAllData');

// handler for getting single pieces of data
const getOneData = require('../handlers/getOnePieceOfData');


const routes = [

  // Front end facing routes for serving the client files
  {
    method: 'GET',
    path: '/client/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname,'../../client'),
      }
    },
  },
  {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname,'../../assets'),
      }
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: {
      file: './client/client.html'
    }
  },

  // backend
  {
    method: 'GET',
    path: '/getAllData',
    config: {
      description: 'Grab all instances of data from the database',
      notes: 'Get all ',
      tags: ['api', 'test'],
      handler: getAllData,
    }
  },
  { // case where I want to pull up a single item
    method: 'GET',
    path: '/getOneData/{oneItemMongoDBID}',
    config: {
      description: 'Returns a single document by passing in the ID',
      notes: 'Returns a single document by passing in the ID',
      tags: ['api', 'test'],
      handler: getOneData,
      validate: {
        params: {
          oneItemMongoDBID: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/createOneData/',
    config: {
      description: 'Creates a single instance of data',
      notes: 'Creates a single instance of data',
      tags: ['api', 'test'],
      handler: createOneDataHandler,
      validate: {

        // validate the data before we pass it to the handler
        payload: {
          title: Joi.string().min(2).max(12).required(),
          quantity: Joi.number().min(0),
        }
      }
    }
  }
];

module.exports = routes;
