var express = require('express')
var router = express.Router()
var jsonWrite = require('../jsonWrite')
var chanpin = require('../sql/chanpin')

router.post('/addChanpin', (req, res) => {
  var chanpinName = req.body.chanpinName
  var chanpinDes = req.body.chanpinDes
  console.log(`insert chanpin name des`)
  chanpin.addChanpin(chanpinName, chanpinDes, (result) => {
    console.log(`添加产品:${chanpinName} 成功`)
    jsonWrite(res, result)
  })
})
router.get('/getChanpin', (req, res) => {
  chanpin.getChanpin((result) => {
    console.log('getChanpin')
    jsonWrite(res, result)
  })
})
module.exports = router
