'use strict';

const mongoose = require('mongoose');

// define our schema 
let data = mongoose.Schema({
  title: String,
  quantity: Number,
});

module.exports = mongoose.model('SomeData', data);
