const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const reurl = require('./modules/reurl')

router.use('/', home)
router.use('/reurl', reurl)

module.exports = router