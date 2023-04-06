const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reurlSchema = new Schema ({
  url: {
    type: String
  },
  reurl: {
    type: String
  }
})

module.exports = mongoose.model('Reurl', reurlSchema)