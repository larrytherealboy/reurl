const mongoose = require('mongoose')
const Reurl = require('../reurl')
const db = require('../../config/mongoose')

db.once('open', () => {
  Reurl.create({
    url: "https://www.google.com.tw/?hl=zh_TW",
    reurl: "https://reurl.herokuapp.com/aaaaa"
  })
    .then(() => {
      console.log('Seeder done!')
      db.close()
    })
    .catch(error => console.log(error))
})

