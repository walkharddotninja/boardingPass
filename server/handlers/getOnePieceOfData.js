'use strict';

const Boom = require('boom');
const dataModel = require('../models/someDataModel');

// This has the request infomation, and the reply interface
// notice how I use arrow notation for functions
const findAllData = (request, reply) => {

  // using the someDataModel, we are going to find one document in our database by saying we are looking for an item with this id
  dataModel.findOne({_id: request.params.oneItemMongoDBID}, (err, singleDocument) => {

    if (err)  {
      return (reply(Boom.badImplementation(err)));
    }

    reply(singleDocument);
  });

};

module.exports = findAllData;
