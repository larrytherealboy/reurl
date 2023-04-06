const express = require('express')
const router = express.Router()
// const Reurl = require('../../models/reurl')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router