'use strict';

const Boom = require('boom');
const dataModel = require('../models/someDataModel');

// This has the request infomation, and the reply interface
// notice how I use arrow notation for functions
const findAllData = (request, reply) => {

  // using the someDataModel, we are going to find all documents in our database (by not specifying what we are looking for)
  dataModel.find({}, (err, allData) => {

    if (err)  {
      return (reply(Boom.badImplementation(err)));
    }

    reply(allData);
  });

};

module.exports = findAllData;
