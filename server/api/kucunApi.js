var express = require('express')
var router = express.Router()
var jsonWrite = require('../jsonWrite')
var kucun = require('../sql/kucun')

router.post('/ruku', (req, res) => {
  console.log(`update kucun num`)
  kucun.ruku(req.body.num, req.body.id, (result) => {
    console.log(`入库 成功`)
    jsonWrite(res, result)
  })
})
router.get('/getKucunList', (req, res) => {
  kucun.getKucunList((result) => {
    console.log('getKucun')
    jsonWrite(res, result)
  })
})

module.exports = router
