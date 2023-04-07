const express = require('express')
const router = express.Router()
const Reurl = require('../../models/reurl')
const generateLetters = require('../../function')
const port = 3000


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  // 如果傳進來的url沒有在資料庫裡，才建立新資料，否則回傳原有資料
  let url = req.body.url
  let header = req.headers.origin
  let letters = ''
  let urlNew = ''

  if (!url) return res.redirect('/')

  Reurl.findOne({ 'url': url })
    .then(data => {
      if (data === null) {
        urlNew = true
        letters = generateLetters()
        Reurl.create({ url, letters })
        res.render('show', { url, letters, header, urlNew })
      }

      if (data !== null) {
        urlNew = false
        url = data.url
        letters = data.letters
        res.render('show', { url, letters, header, urlNew })
      }
    })
    .catch(error => console.log(error))
  })

router.get('/:letters', (req, res) => {
  const { letters } = req.params
  Reurl.findOne({ letters })
    .then(data => {
      if (data) {
        return res.redirect(data.url)
      } else {
        return res.render('error')
      }
    })
    .catch(error => {console.log(error)})
})

module.exports = router