const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  subject : {
      required: true,
      type: String
  },
  desc : {
      required: true,
      type: String
  }
})


module.exports = mongoose.model('Query', querySchema)
