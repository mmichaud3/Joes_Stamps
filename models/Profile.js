const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    dafault: Date.now,
  },
  fdcs: [
    {
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
        type: String,
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
    },
  ],
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
