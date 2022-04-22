const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  logis : {
      required: true,
      type: Number
  },
  it : {
      required: true,
      type: Number
  },
  sales : {
      required: true,
      type: Number
  }
})


module.exports = mongoose.model('Count', countSchema)
