const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reurlSchema = new Schema ({
  url: {
    type: String
  },
  letters: {
    type: String
  }
})

module.exports = mongoose.model('Reurl', reurlSchema)