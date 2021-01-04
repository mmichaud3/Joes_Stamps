const mongoose = require('mongoose');

const FirstDayCoverSchema = new mongoose.Schema({
  scottNum: {
    type: String,
  },
  collinsNum: {
    type: String,
  },
  title: {
    type: String,
  },
  issueDate: {
    type: Date,
  },
  year: {
    type: Date,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: String,
  },
  value: {
    type: String,
  },
  partOfSet: {
    bool: false,
  },
  quantity: {
    type: String,
  },
  group: {
    type: String,
  },
  chachetmaker: {
    type: String,
  },
  series: {
    type: String,
  },
  denomination: {
    type: String,
  },
  format: {
    type: String,
  },
  variety: {
    type: String,
  },
});

module.exports = FirstDayCover = mongoose.model(
  'firstDayCover',
  FirstDayCoverSchema
);
