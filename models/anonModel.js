const mongoose = require('mongoose');

const anonSchema = new mongoose.Schema({
  subject : {
      required: true,
      type: String
  },
  desc : {
      required: true,
      type: String
  }
})

module.exports = mongoose.model('Anonymous', anonSchema)

