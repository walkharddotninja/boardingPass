'use strict';

const Boom = require('boom');
const dataModel = require('../models/someDataModel');

// This has the request infomation, and the reply interface
// notice how I use arrow notation for functions
const createOne = (request, reply) => {

  // using the someDataModel, we are going to create a new document in our database
  dataModel.create(request.payload, (err, newlyCreatedData) => {

    if (err)  {
      return (reply(Boom.badImplementation(err)));
    }

    reply(newlyCreatedData);
  });

};

module.exports = createOne;
