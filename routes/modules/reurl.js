const express = require('express')
const router = express.Router()
const Reurl = require('../../models/reurl')
const generateReurl = require('../../function')
// const copy = require('copy-to-clipboard')

router.post('/', (req, res) => {
  let url = req.body.url
  let reurl = ''
  let urlNew = ''

  // 如果傳進來的url沒有在資料庫裡，才建立新資料，否則回傳原有資料
  Reurl.findOne({ 'url': url })
    .then(findUrl => {
      if (findUrl === null) {
        urlNew = true
        reurl = generateReurl()

        Reurl.create({ url, reurl })
        res.render('show', { url, reurl, urlNew })
      }

      if (findUrl !== null) {
        urlNew = false
        url = findUrl.url
        reurl = findUrl.reurl

        res.render('show', { url, reurl, urlNew })
      }

      // console.log(reurl)
      
      
    })
    .catch(error => console.log(error))

})

module.exports = router